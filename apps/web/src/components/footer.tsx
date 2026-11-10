import Link from "next/link";
import { GithubIcon, LinkedInIcon, MailIcon, XIcon } from "./logos";

export default function Footer() {
  const linkStyles =
    "text-sm text-[oklch(0.708_0_0)] hover:text-[#e8e6e3] transition-all duration-300 pb-1";

  return (
    <footer className="relative overflow-hidden rounded-tl-3xl rounded-tr-3xl border-white/5 border-t bg-[#14120b] pt-20 pb-10 selection:bg-white/30 md:pb-14">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 h-px w-full max-w-2xl -translate-x-1/2 bg-linear-to-r from-transparent via-[oklch(0.985_0_0)]/50 to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:flex lg:items-start lg:gap-0">
          {/* Brand Column & CTA */}
          <div className="flex flex-col items-start text-left md:col-span-12">
            <Link href="/" className="group mb-8 inline-flex items-center gap-3">
              <span className="font-bold text-2xl text-[#e8e6e3] tracking-tight">Stealth</span>
            </Link>

            {/* AI SaaS focused Mini CTA */}
            <div className="mb-10 w-full max-w-sm">
              <h3 className="mb-2 font-medium text-[#e8e6e3] opacity-90">
                Ready to automate your workflow?
              </h3>
              <p className="mb-4 text-[oklch(0.708_0_0)] text-sm">
                Join teams using our AI-driven intelligence
                <br />
                platform to ship code 10x faster.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="https://x.com/abdullah_twt23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.708_0_0)] transition-colors duration-300 hover:text-[#e8e6e3]"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-[oklch(0.708_0_0)] transition-colors duration-300 hover:text-[#e8e6e3]"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-[oklch(0.708_0_0)] transition-colors duration-300 hover:text-[#e8e6e3]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="text-[oklch(0.708_0_0)] transition-colors duration-300 hover:text-[#e8e6e3]"
                aria-label="Email Address"
              >
                <MailIcon className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 md:col-span-12 lg:ml-auto lg:grid-cols-2">
            <div className="lg:-ml-12">
              <h3 className="mb-6 font-semibold text-[#e8e6e3] text-sm uppercase tracking-wider text-opacity-90">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className={linkStyles}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className={linkStyles}>
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:ml-auto">
              <h3 className="mb-6 font-semibold text-[#e8e6e3] text-sm uppercase tracking-wider text-opacity-90">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className={linkStyles}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={linkStyles}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={linkStyles}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkStyles}>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-1 border-white/5 border-t pt-4 md:mt-16 md:flex-row md:gap-6">
          <p className="text-[oklch(0.708_0_0)]/80 text-sm">
            © {new Date().getFullYear()} Stealth Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* Giant fading wordmark */}
    </footer>
  );
}
