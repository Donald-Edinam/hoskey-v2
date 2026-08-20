import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Lede } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Buttons } from "@/components/ui/Buttons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { waLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <>
      <Header isDarkHero={false} />
      <main id="main" className="flex-1">
        <Section variant="default" className="min-h-[70vh] flex items-center">
          <Container>
            <Eyebrow>404 — Page Not Found</Eyebrow>
            <Display as="h1">
              This page <em>does not exist.</em>
            </Display>
            <Lede className="mt-6">
              The address you entered could not be found or the content has moved. You can return to our homepage, review our recent productions, or reach out to us directly on WhatsApp.
            </Lede>
            <Buttons className="mt-8">
              <Button variant="red" href="/">
                Return to home
              </Button>
              <Button variant="line" href="/#work">
                View our work
              </Button>
              <Button variant="line" href={waLink("general")}>
                Contact on WhatsApp
              </Button>
            </Buttons>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
