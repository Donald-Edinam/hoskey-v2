type GTagFunc = (...args: unknown[]) => void;

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent(eventName: string, params?: AnalyticsEventParams): void {
  if (typeof window === "undefined") return;

  const w = window as unknown as { gtag?: GTagFunc; plausible?: GTagFunc };

  // Google Analytics / GTag
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, {
      event_category: params?.category || "general",
      event_label: params?.label,
      value: params?.value,
      ...params,
    });
  }

  // Plausible Analytics
  if (typeof w.plausible === "function") {
    w.plausible(eventName, { props: params });
  }
}

export function trackWhatsAppClick(sourcePage: string): void {
  trackEvent("whatsapp_click", {
    category: "conversion",
    label: sourcePage,
  });
}

export function trackCarouselSlideReach(slideIndex: number): void {
  trackEvent("carousel_slide_reach", {
    category: "engagement",
    label: `Slide 0${slideIndex + 1}`,
    value: slideIndex + 1,
  });
}

export function trackCardClick(position: number, title: string): void {
  trackEvent("card_click", {
    category: "navigation",
    label: title,
    value: position,
  });
}
