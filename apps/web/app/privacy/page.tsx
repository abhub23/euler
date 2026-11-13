import type { Metadata } from "next";
import { Container } from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Privacy Policy - Euler",
  description: "How Euler collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email address, and payment details when you create an account or make a purchase.",
      "We also collect information automatically, including usage data, device information, IP addresses, and cookies, to help us improve our service and personalize your experience.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to provide and maintain the service, process transactions, send you updates and notifications, and respond to your requests.",
      "We may also use aggregated, anonymized data to analyze trends, improve our platform, and develop new features. We never sell your personal information.",
    ],
  },
  {
    title: "3. Data Storage and Security",
    body: [
      "Your data is stored on secure servers with encryption in transit and at rest. We implement industry-standard safeguards to protect your information from unauthorized access.",
      "While we work hard to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but will promptly notify you of any breaches we become aware of.",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: [
      "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating the platform, subject to confidentiality obligations.",
      "We may disclose information when required by law, or to protect our rights, safety, or property, or those of our users.",
    ],
  },
  {
    title: "5. Cookies and Tracking",
    body: [
      "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the service is used.",
      "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the platform.",
    ],
  },
  {
    title: "6. Your Rights and Choices",
    body: [
      "You have the right to access, correct, or delete your personal information at any time. You can do so from your account settings or by contacting us.",
      "You may also object to or restrict certain processing, and you have the right to data portability where applicable. We will honor valid requests within a reasonable timeframe.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain your personal information for as long as your account is active or as needed to provide you with our services and comply with legal obligations.",
      "When data is no longer required, we delete or anonymize it in secure fashion. You may request deletion of your account and associated data at any time.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our platform is not directed to children under 13, and we do not knowingly collect personal information from them.",
      "If we learn that we have collected data from a child under 13 without verifiable parental consent, we will promptly delete that information.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date.",
      "Your continued use of the platform after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or our data practices, please contact us via the contact page or by emailing privacy@euler.dev.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="absolute top-0 left-1/2 h-125 w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h1 className="mb-6 text-balance font-bold text-5xl tracking-tight md:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed">
                Last updated: August 11, 2026
              </p>
            </div>
          </Container>
        </section>

        <section className="relative pb-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="mb-4 font-semibold text-foreground text-xl tracking-tight md:text-2xl">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
