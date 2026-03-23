"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Experiences" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close menu when backdrop is clicked
  const handleBackdropClick = () => {
    setMobileMenuOpen(false);
  };

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-700/80 bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-slate-900/30"
            : "border-slate-700 bg-gradient-to-b from-slate-900/95 to-slate-800/90 backdrop-blur-md"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label="Off The Couch - Home"
            >
              <div className="w-12 h-12 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl md:text-lg group-hover:shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                🛋️
              </div>
              <span className="font-bold text-lg md:text-xl text-white hidden sm:inline">
                Off The Couch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex gap-8 items-center"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
                    isActive(link.href)
                      ? "text-teal-400 border-teal-400"
                      : "text-slate-300 hover:text-teal-400 border-b-2 border-transparent hover:border-teal-400"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://offthecouch.io/waiver/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors pb-2 border-b-2 border-transparent hover:border-teal-400"
                aria-label="Sign Waiver (opens in new tab)"
              >
                Sign Waiver
              </a>
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm hidden sm:inline-block"
                aria-label="Book Now (opens in new tab)"
              >
                Book Now
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors flex-shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav
            id="mobile-menu"
            className={`md:hidden border-t border-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-teal-400 bg-slate-700/50 border-l-3 border-teal-400 pl-[13px]"
                      : "text-slate-300 hover:text-teal-400 hover:bg-slate-700/30 border-l-3 border-transparent"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://offthecouch.io/waiver/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-700/30 border-l-3 border-transparent transition-colors"
                aria-label="Sign Waiver (opens in new tab)"
              >
                Sign Waiver
              </a>
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-4 btn btn-primary justify-center w-[calc(100%-2rem)] mx-4 text-sm"
                aria-label="Book Now (opens in new tab)"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={handleBackdropClick}
          aria-hidden="true"
          role="presentation"
        />
      )}
    </>
  );
}
