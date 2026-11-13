import type { Metadata } from "next";
import { Container } from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Terms and Conditions - Euler",
  description:
    "The terms and conditions that govern your use of Euler's AI-powered development platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Euler platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access the platform.",
      "These Terms apply to all visitors, users, and others who access the service. We may update these Terms from time to time, and it is your responsibility to review them periodically.",
    ],
  },
  {
    title: "2. Use of the Service",
    body: [
      "Euler grants you a limited, non-exclusive, non-transferable license to use the platform for your internal business purposes in accordance with these Terms.",
      "You agree not to misuse, reverse engineer, or attempt to extract the source code of the service, nor use it to build a competitive product. You are responsible for all activity that occurs under your account.",
    ],
  },
  {
    title: "3. User Accounts",
    body: [
      "To access certain features, you must create an account. You are responsible for safeguarding your credentials and for any activity that occurs under your account.",
      "You must provide accurate and complete information when creating your account, and you agree to update it to keep it accurate. You may not create accounts for others without their consent.",
    ],
  },
  {
    title: "4. Acceptable Use",
    body: [
      "You agree not to use the platform to: violate any laws; infringe the rights of others; transmit malware or harmful code; attempt to gain unauthorized access to systems; or interfere with the operation of the service.",
      "We reserve the right to suspend or terminate accounts that engage in abusive or unlawful behavior, without prior notice where required by law.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "The Euler platform, including its software, design, logos, and documentation, is owned by Euler Inc. and protected by intellectual property laws. You retain ownership of the code and content you create using the platform.",
      "Nothing in these Terms grants you any rights to Euler's trademarks or branding. Your use of the service does not transfer any ownership rights to you.",
    ],
  },
  {
    title: "6. Payment and Subscriptions",
    body: [
      "Paid features are billed in advance on a recurring basis unless otherwise stated at checkout. All fees are non-refundable except where required by law.",
      "We may modify pricing or introduce new fees with reasonable notice. Continued use of the service after a pricing change constitutes acceptance of the new pricing.",
    ],
  },
  {
    title: "7. Termination",
    body: [
      "You may stop using the platform and delete your account at any time. We may suspend or terminate your access if you breach these Terms.",
      "Upon termination, your right to use the service ceases immediately. Provisions of these Terms that by their nature should survive termination will remain in effect.",
    ],
  },
  {
    title: "8. Disclaimers and Limitation of Liability",
    body: [
      'The service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.',
      "To the maximum extent permitted by law, Euler shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms are governed by the laws of the jurisdiction in which Euler Inc. is incorporated, without regard to its conflict of law provisions.",
      "Any disputes arising from these Terms will be resolved in the competent courts of that jurisdiction. You agree to submit to the personal jurisdiction of those courts.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "If you have questions about these Terms, please reach out to us via the contact page or by emailing support@euler.dev.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="absolute top-0 left-1/2 h-125 w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h1 className="mb-6 text-balance font-bold text-5xl tracking-tight md:text-6xl">
                Terms and Conditions
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
