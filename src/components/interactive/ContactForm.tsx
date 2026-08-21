"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
  date?: string;
  website?: string; // honeypot
}

const SERVICE_OPTIONS = [
  "Broadcast production",
  "Video production",
  "Live streaming",
  "Post-production",
  "Content creation",
  "Technical & stage",
  "Studio hire",
  "Other inquiry",
];

const BUDGET_OPTIONS = [
  "Under GHS 5,000",
  "GHS 5,000 – GHS 15,000",
  "GHS 15,000 – GHS 35,000",
  "GHS 35,000+",
  "To be discussed",
];

type GTagFunc = (...args: unknown[]) => void;

// Single function seam for future backend server action swap
async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; waUrl?: string }> {
  // Format clean WhatsApp message from form entries
  const detailLines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Service: ${data.service}`,
    data.budget ? `Budget: ${data.budget}` : null,
    data.date ? `Target Date: ${data.date}` : null,
    `Message: ${data.message}`,
  ].filter(Boolean).join("\n");

  const waUrl = waLink("general", detailLines);
  return { success: true, waUrl };
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    service: SERVICE_OPTIONS[0] || "Broadcast production",
    message: "",
    budget: "",
    date: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  const handleFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (typeof window !== "undefined" && (window as unknown as { gtag?: GTagFunc }).gtag) {
        (window as unknown as { gtag: GTagFunc }).gtag!("event", "form_start", {
          event_category: "contact",
          event_label: "Contact Form",
        });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (formData.website && formData.website.trim() !== "") {
      // Silent discard for bots
      setStatus("success");
      return;
    }

    // 2. Timing check (minimum 2.5s before submit)
    const elapsed = (Date.now() - (startTime.current || Date.now())) / 1000;
    if (elapsed < 2.5) {
      setStatus("error");
      setErrorMessage("Please take a moment to review your message before submitting.");
      return;
    }

    // 3. Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name, phone number, and brief message details.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await submitContactForm(formData);
      if (res.success && res.waUrl) {
        setStatus("success");
        if (typeof window !== "undefined" && (window as unknown as { gtag?: GTagFunc }).gtag) {
          (window as unknown as { gtag: GTagFunc }).gtag!("event", "form_submit", {
            event_category: "contact",
            event_label: formData.service,
          });
        }
        // Open WhatsApp with prefilled message
        window.open(res.waUrl, "_blank", "noopener,noreferrer");
      } else {
        throw new Error("Failed to format message");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while preparing your message. Your entered details have been preserved below - you can retry or message us directly on WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-[var(--card)] border border-[var(--rule)] space-y-4">
        <h3 className="text-xl font-bold text-[var(--ink)]">Thank you, {formData.name}.</h3>
        <p className="text-sm text-[var(--ink-2)] leading-relaxed">
          Your message details have been formatted for WhatsApp. If WhatsApp did not open automatically, click the button below to send your note.
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
          Expected Reply: Same day during business hours (Mon–Sat, 8am–6pm).
        </p>
        <div className="pt-4">
          <Button variant="red" href={waLink("general", formData.message)}>
            Open WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Honeypot field - hidden from real users */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {status === "error" && errorMessage && (
        <div className="p-4 bg-[var(--red)]/10 border border-[var(--red)] text-xs font-bold text-[var(--red)] leading-relaxed">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
          Your Name <span className="text-[var(--red)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="e.g. Ama Mensah"
          className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none placeholder:text-[var(--ink-3)]/60"
        />
      </div>

      {/* Phone & Email Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
            Phone / WhatsApp Number <span className="text-[var(--red)]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="+233 50 000 0000"
            className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none placeholder:text-[var(--ink-3)]/60"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
            Email Address (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="ama@company.com"
            className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none placeholder:text-[var(--ink-3)]/60"
          />
        </div>
      </div>

      {/* Service & Budget Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1">
          <label htmlFor="service" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onFocus={handleFocus}
            className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[var(--card)] text-[var(--ink)]">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="budget" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
            Estimated Budget (Optional)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            onFocus={handleFocus}
            className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none cursor-pointer"
          >
            <option value="" className="bg-[var(--card)] text-[var(--ink-3)]">Select budget band</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[var(--card)] text-[var(--ink)]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="block text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
          Project Brief / Message <span className="text-[var(--red)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Tell us what you're planning - dates, location, deliverables..."
          className="w-full bg-transparent border-b border-[var(--ink-3)] focus:border-[var(--ink)] py-3 text-base text-[var(--ink)] outline-none transition-colors rounded-none resize-y placeholder:text-[var(--ink-3)]/60"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex items-center justify-between">
        <Button
          type="submit"
          variant="red"
          disabled={status === "submitting"}
          className="cursor-pointer"
        >
          {status === "submitting" ? "Preparing message..." : "Send Message"}
        </Button>
        <span className="text-xs text-[var(--ink-3)]">
          * Usually replied same day
        </span>
      </div>
    </form>
  );
}
