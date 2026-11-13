"use client";

import { cn } from "cn";
import { TextAlignStart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/glaze/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-4 py-2 transition-all duration-300 ease-in-out">
      <div
        className={cn(
          "pointer-events-auto relative mx-auto flex h-16 items-center justify-between transition-all duration-300 ease-in-out",
          isScrolled
            ? "max-w-4xl rounded-xl border border-white/10 bg-background/60 shadow-lg backdrop-blur-lg md:px-2"
            : "max-w-5xl rounded-md border border-transparent bg-background/60 backdrop-blur-md md:px-8"
        )}
      >
        <Link href="/" className="ml-6 flex items-center gap-2 font-bold text-foreground text-xl">
          <Image
            src="/app/logo-light.svg"
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
            className="dark:hidden"
          />
          <Image
            src="/app/logo-dark.svg"
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
            className="hidden dark:block"
          />
          Euler
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-[15px] text-foreground transition-colors hover:text-foreground/80"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="text-[15px] text-foreground transition-colors hover:text-foreground/80"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-[15px] text-foreground transition-colors hover:text-foreground/80"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-[15px] text-foreground transition-colors hover:text-foreground/80"
          >
            Policy
          </Link>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="mr-6 flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-8 md:flex">
            <span style={{ display: "contents", fontFamily: "inherit" }} className="glaze">
              <Button
                className="h-9! px-4! text-sm!"
                style={{ fontFamily: "inherit" }}
                render={<Link href="/signin" />}
                nativeButton={false}
              >
                Sign In
              </Button>
            </span>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="relative flex size-8 items-center justify-center rounded-md text-foreground transition-colors focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <TextAlignStart
              className={`absolute size-5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <X
              className={`absolute size-5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full right-4 left-4 z-50 mt-0 flex flex-col gap-4 overflow-hidden rounded-2xl border border-muted-foreground/20 bg-background px-6 py-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-item-in font-medium text-[16px] text-foreground transition-colors hover:text-foreground/80"
              style={{ animationDelay: "0ms" }}
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-item-in font-medium text-[16px] text-foreground transition-colors hover:text-foreground/80"
              style={{ animationDelay: "60ms" }}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-item-in font-medium text-[16px] text-foreground transition-colors hover:text-foreground/80"
              style={{ animationDelay: "120ms" }}
            >
              About
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-item-in font-medium text-[16px] text-foreground transition-colors hover:text-foreground/80"
              style={{ animationDelay: "180ms" }}
            >
              Policy
            </Link>
          </div>

          <div className="h-px w-full bg-white/10"></div>

          <span style={{ display: "contents", fontFamily: "inherit" }} className="glaze">
            <Button
              className="h-auto! w-full! py-2! text-base!"
              style={{ fontFamily: "inherit" }}
              render={
                <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)} />
              }
              nativeButton={false}
            >
              Sign In
            </Button>
          </span>
        </div>
      )}
    </nav>
  );
}
