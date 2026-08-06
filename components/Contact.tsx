"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname, type Locale } from "@/lib/i18n";
import { trackEvent } from "@/lib/gtag";

const content: Record<Locale, {
  sectionId: string;
  heading: string;
  mapTitle: string;
  addressLine2: string;
  formTitle: string;
  formIntro: string;
  name: string; namePlaceholder: string;
  email: string; emailPlaceholder: string;
  phone: string; phonePlaceholder: string;
  subject: string; subjectPlaceholder: string;
  subjects: { value: string; label: string }[];
  message: string; messagePlaceholder: string;
  submit: string; submitting: string;
  success: string; error: string;
}> = {
  tr: {
    sectionId: "iletisim",
    heading: "İletişim",
    mapTitle: "Düzkar Dizayn Konum",
    addressLine2: "Alsancak/Girne, KKTC",
    formTitle: "Ücretsiz Keşif İsteyin",
    formIntro: "Projeniz hakkında bilgi almak için formu doldurun, en kısa sürede size ulaşalım.",
    name: "İsim Soyisim *", namePlaceholder: "Adınız Soyadınız",
    email: "Email *", emailPlaceholder: "ornek@email.com",
    phone: "Telefon *", phonePlaceholder: "+90 5XX XXX XX XX",
    subject: "Konu", subjectPlaceholder: "Seçiniz",
    subjects: [
      { value: "izolasyon", label: "İzolasyon ve Su Yalıtımı" },
      { value: "cephe", label: "İç/Dış Cephe Uygulamaları" },
      { value: "tadilat", label: "Genel Yenileme ve Tadilat" },
      { value: "diger", label: "Diğer" },
    ],
    message: "Mesajınız *", messagePlaceholder: "Projeniz hakkında detaylı bilgi verin...",
    submit: "Gönder", submitting: "Gönderiliyor...",
    success: "Mesajınız başarıyla gönderildi. En kısa sürede size ulaşacağız.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
  en: {
    sectionId: "contact",
    heading: "Contact Us",
    mapTitle: "Düzkar Dizayn location",
    addressLine2: "Alsancak, Kyrenia, North Cyprus",
    formTitle: "Request a Free Survey",
    formIntro: "Tell us about the property and the problem. We will come out, take a look and send you a written quotation — no charge, no obligation.",
    name: "Full name *", namePlaceholder: "Your full name",
    email: "Email *", emailPlaceholder: "you@example.com",
    phone: "Phone *", phonePlaceholder: "+44 7700 900000 or +90 5XX XXX XX XX",
    subject: "What do you need?", subjectPlaceholder: "Please choose",
    subjects: [
      { value: "waterproofing", label: "Waterproofing / leak / damp" },
      { value: "facades", label: "Rendering, painting or wall insulation" },
      { value: "renovation", label: "Renovation or refurbishment" },
      { value: "other", label: "Something else" },
    ],
    message: "Your message *", messagePlaceholder: "Where is the property, what is happening, and how long has it been going on?",
    submit: "Send enquiry", submitting: "Sending...",
    success: "Thank you — your enquiry has been sent. We will get back to you shortly.",
    error: "Something went wrong. Please try again, or call us on +90 533 831 14 32.",
  },
};

export default function Contact() {
  const pathname = usePathname();
  const t = content[localeFromPathname(pathname)];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        trackEvent("form_submit", { form: "contact" });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id={t.sectionId} ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-navy-dark mb-16 reveal">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="reveal">
            <div className="bg-gray-light rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d33.195114!3d35.343519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzM2LjciTiAzM8KwMTEnNDIuNCJF!5e0!3m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-navy-dark p-4 rounded-lg text-center">
                <svg className="w-8 h-8 text-gold-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white text-sm">Ankara Caddesi No:109</p>
                <p className="text-white/70 text-xs">{t.addressLine2}</p>
              </div>
              <div className="bg-navy-dark p-4 rounded-lg text-center">
                <svg className="w-8 h-8 text-gold-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@duzkardizayn.com" className="text-white text-sm hover:text-gold-primary transition-colors">
                  info@duzkardizayn.com
                </a>
              </div>
              <div className="bg-navy-dark p-4 rounded-lg text-center">
                <svg className="w-8 h-8 text-gold-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905338311432" className="text-white text-sm hover:text-gold-primary transition-colors">
                  +90 533 831 14 32
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-gray-light p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-navy-dark mb-6">
                {t.formTitle}
              </h3>
              <p className="text-gray-text mb-8">
                {t.formIntro}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-dark mb-2">
                      {t.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">{t.subjectPlaceholder}</option>
                      {t.subjects.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t.submitting}
                    </span>
                  ) : (
                    t.submit
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md text-center">
                    {t.success}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 text-red-800 px-4 py-3 rounded-md text-center">
                    {t.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
