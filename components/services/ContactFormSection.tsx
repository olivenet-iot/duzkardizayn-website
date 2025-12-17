"use client";

import { useEffect, useRef, useState } from "react";

interface ContactFormSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactFormSection({
  title = "Bize Ulaşın",
  subtitle = "Ücretsiz keşif ve fiyat teklifi için formu doldurun veya hemen arayın.",
}: ContactFormSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-navy-dark mb-4 reveal">{title}</h2>
            <p className="text-gray-text reveal" style={{ transitionDelay: "0.1s" }}>
              {subtitle}
            </p>

            {/* Social media icons */}
            <div
              className="flex justify-center gap-4 mt-6 reveal"
              style={{ transitionDelay: "0.15s" }}
            >
              <a
                href="https://www.facebook.com/duzkardizayn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-white hover:bg-gold-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/duzkardizayn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-white hover:bg-gold-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 py-3 px-0 focus:border-gold-primary focus:outline-none transition-colors bg-transparent"
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 py-3 px-0 focus:border-gold-primary focus:outline-none transition-colors bg-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">
                    Telefon Numarası <span className="text-gold-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 py-3 px-0 focus:border-gold-primary focus:outline-none transition-colors bg-transparent"
                    placeholder="+90 5XX XXX XX XX"
                    required
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="h-full">
                <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className="w-full border-b-2 border-gray-300 py-3 px-0 focus:border-gold-primary focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-navy-dark text-white font-semibold px-12 py-4 rounded-md hover:bg-navy-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
