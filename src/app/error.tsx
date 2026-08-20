"use client";

import React, { useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Lede } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Buttons } from "@/components/ui/Buttons";
import { waLink } from "@/lib/whatsapp";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[var(--paper)] flex items-center justify-center">
      <Section variant="default">
        <Container>
          <Eyebrow>System Error</Eyebrow>
          <Display as="h1">
            Something went <em>unexpectedly wrong.</em>
          </Display>
          <Lede className="mt-6">
            An error occurred while loading this page. You can try refreshing the view or message our team directly if the problem persists.
          </Lede>
          <Buttons className="mt-8">
            <Button variant="red" onClick={() => reset()}>
              Try again
            </Button>
            <Button variant="line" href={waLink("general")}>
              Report on WhatsApp
            </Button>
          </Buttons>
        </Container>
      </Section>
    </main>
  );
}
