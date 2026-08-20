import React from "react";
import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center">
      <Container className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-[var(--ink-3)] border-t-[var(--navy)] rounded-full animate-spin" />
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[var(--ink-2)]">
          Loading Hoskey Production...
        </p>
      </Container>
    </div>
  );
}
