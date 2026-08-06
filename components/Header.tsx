"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { counterpartUrl, localeFromPathname, type Locale } from "@/lib/i18n";

type NavLink = {
  href: string;
  sectionId: string;
  label: string;
  isDropdown: boolean;
};

const nav: Record<
  Locale,
  {
    home: string;
    services: { href: string; label: string }[];
    links: NavLink[];
    cta: { href: string; sectionId: string; label: string };
    menuLabel: string;
  }
> = {
  tr: {
    home: "/",
    services: [
      { href: "/hizmetler/izolasyon-ve-su-yalitimi", label: "İzolasyon ve Su Yalıtımı" },
      { href: "/hizmetler/mantolama", label: "Mantolama ve Isı Yalıtımı" },
      { href: "/hizmetler/ic-ve-dis-cephe-uygulamalari", label: "İç ve Dış Cephe Uygulamaları" },
      { href: "/hizmetler/genel-yenileme-ve-tadilat", label: "Genel Yenileme ve Tadilat" },
    ],
    links: [
      { href: "/", sectionId: "anasayfa", label: "ANASAYFA", isDropdown: false },
      { href: "/#hizmetler", sectionId: "hizmetler", label: "HİZMETLER", isDropdown: true },
      { href: "/projeler", sectionId: "projeler", label: "PROJELER", isDropdown: false },
      { href: "/blog", sectionId: "blog", label: "BLOG", isDropdown: false },
      { href: "/hakkimizda", sectionId: "hakkimizda", label: "HAKKIMIZDA", isDropdown: false },
      { href: "/#iletisim", sectionId: "iletisim", label: "İLETİŞİM", isDropdown: false },
    ],
    cta: { href: "/#iletisim", sectionId: "iletisim", label: "Ücretsiz Keşif" },
    menuLabel: "Menüyü aç/kapat",
  },
  en: {
    home: "/en",
    services: [
      { href: "/en/services/waterproofing", label: "Waterproofing & Damp Proofing" },
      { href: "/en/services/facades-and-rendering", label: "Facades, Rendering & Insulation" },
      { href: "/en/services/renovation", label: "Renovation & Refurbishment" },
    ],
    links: [
      { href: "/en", sectionId: "home", label: "HOME", isDropdown: false },
      { href: "/en#services", sectionId: "services", label: "SERVICES", isDropdown: true },
      { href: "/en/projects", sectionId: "projects", label: "PROJECTS", isDropdown: false },
      { href: "/en/blog", sectionId: "blog", label: "BLOG", isDropdown: false },
      { href: "/en/about", sectionId: "about", label: "ABOUT", isDropdown: false },
      { href: "/en#contact", sectionId: "contact", label: "CONTACT", isDropdown: false },
    ],
    cta: { href: "/en#contact", sectionId: "contact", label: "Free Survey" },
    menuLabel: "Toggle menu",
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = nav[locale];
  const isHomePage = pathname === t.home;

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    // Sayfa linkleri için (blog, projeler gibi) direkt navigate et
    const isPageLink = !link.href.includes("#") && link.href !== t.home;

    if (isPageLink) {
      // Sayfa linklerinde preventDefault yapma, normal navigate olsun
      setIsMobileMenuOpen(false);
      return;
    }

    // Ana sayfa section linkleri için scroll davranışı
    if (isHomePage) {
      e.preventDefault();
      if (link.sectionId === "anasayfa" || link.sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // If not on homepage, let the default link behavior handle navigation

    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  // Dil değiştirici. İki root layout arasında geçiş olduğu için Link değil <a>
  // kullanılıyor — tam sayfa yüklemesi gerekiyor, aksi halde yanlış <html lang> kalır.
  const languageSwitcher = (className: string) => (
    <a
      href={counterpartUrl(pathname, locale === "tr" ? "en" : "tr")}
      hrefLang={locale === "tr" ? "en" : "tr"}
      className={className}
      aria-label={locale === "tr" ? "Switch to English" : "Türkçe sayfaya geç"}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3.6 9h16.8 M3.6 15h16.8 M12 3a15 15 0 010 18 M12 3a15 15 0 000 18"
        />
      </svg>
      {locale === "tr" ? "EN" : "TR"}
    </a>
  );

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
          <Link href={t.home} className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="Düzkar Dizayn"
              width={180}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {t.links.map((link) =>
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
                      {t.services.map((service, index) => (
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
                          {index < t.services.length - 1 && (
                            <div className="absolute left-4 right-4 bottom-0 h-px bg-white/5" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              )
            )}
            {languageSwitcher(
              "flex items-center gap-1.5 text-white/70 hover:text-gold-primary transition-colors text-sm font-semibold tracking-wide"
            )}
            <Link
              href={t.cta.href}
              onClick={(e) =>
                handleNavClick(e, { ...t.cta, isDropdown: false })
              }
              className="btn-primary text-sm"
            >
              {t.cta.label}
            </Link>
          </nav>

          {/* Mobile: dil değiştirici + menü butonu */}
          <div className="lg:hidden flex items-center gap-2">
            {languageSwitcher(
              "flex items-center gap-1 text-white/70 hover:text-gold-primary transition-colors text-sm font-semibold px-2 py-1"
            )}
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t.menuLabel}
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {t.links.map((link) =>
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
                      {t.services.map((service) => (
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="nav-link text-center py-2"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href={t.cta.href}
              onClick={(e) => handleNavClick(e, { ...t.cta, isDropdown: false })}
              className="btn-primary text-sm text-center mx-auto"
            >
              {t.cta.label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
