import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    // Map subject to readable text
    const subjectMap: Record<string, string> = {
      izolasyon: "İzolasyon ve Su Yalıtımı",
      cephe: "İç/Dış Cephe Uygulamaları",
      tadilat: "Genel Yenileme ve Tadilat",
      diger: "Diğer",
    };

    const subjectText = subject ? subjectMap[subject] || subject : "Belirtilmedi";

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1f2e; border-bottom: 2px solid #D4A017; padding-bottom: 10px;">
          Yeni İletişim Formu Mesajı
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">İsim:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="tel:${phone}">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Konu:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${subjectText}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <h3 style="color: #1a1f2e;">Mesaj:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
        <p style="color: #888; font-size: 12px;">
          Bu mesaj duzkardizayn.com iletişim formundan gönderilmiştir.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Düzkar Dizayn Web" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `İletişim Formu: ${name} - ${subjectText}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
