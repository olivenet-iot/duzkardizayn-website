"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const serviceLinks = [
  {
    href: "/hizmetler/izolasyon-ve-su-yalitimi",
    label: "İzolasyon ve Su Yalıtımı",
  },
  {
    href: "/hizmetler/ic-ve-dis-cephe-uygulamalari",
    label: "İç ve Dış Cephe Uygulamaları",
  },
  {
    href: "/hizmetler/genel-yenileme-ve-tadilat",
    label: "Genel Yenileme ve Tadilat",
  },
];

const navLinks = [
  { href: "/", sectionId: "anasayfa", label: "ANASAYFA", isDropdown: false },
  { href: "/#hizmetler", sectionId: "hizmetler", label: "HİZMETLER", isDropdown: true },
  { href: "/projeler", sectionId: "projeler", label: "PROJELER", isDropdown: false },
  { href: "/#hakkimizda", sectionId: "hakkimizda", label: "HAKKIMIZDA", isDropdown: false },
  { href: "/#iletisim", sectionId: "iletisim", label: "İLETİŞİM", isDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If on homepage, scroll to section
    if (isHomePage) {
      e.preventDefault();
      if (sectionId === "anasayfa") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // If not on homepage, let the default link behavior handle navigation

    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-navy-dark/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-white.png"
              alt="Düzkar Dizayn"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    className="nav-link flex items-center gap-1 group"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-navy-dark/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 overflow-hidden transition-all duration-200 ${
                      isServicesDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {/* Dropdown arrow */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-navy-dark/95 rotate-45 border-l border-t border-white/10" />

                    <div className="relative py-2">
                      {serviceLinks.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-white/80 hover:text-gold-primary hover:bg-white/5 transition-colors text-sm"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-gold-primary/50 rounded-full group-hover:bg-gold-primary transition-colors" />
                            {service.label}
                          </div>
                          {index < serviceLinks.length - 1 && (
                            <div className="absolute left-4 right-4 bottom-0 h-px bg-white/5" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#iletisim"
              onClick={(e) => handleNavClick(e, "iletisim")}
              className="btn-primary text-sm"
            >
              Ücretsiz Keşif
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="nav-link text-center py-2 w-full flex items-center justify-center gap-2"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Mobile Services Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white/5 rounded-lg mx-4 my-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-white/70 hover:text-gold-primary text-sm text-center border-b border-white/5 last:border-0"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="nav-link text-center py-2"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#iletisim"
              onClick={(e) => handleNavClick(e, "iletisim")}
              className="btn-primary text-sm text-center mx-auto"
            >
              Ücretsiz Keşif
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
