import React from "react";
import WhatsAppIcon from "../../assets/whatsapp.svg";

// 🔹 Reusable WhatsApp Button
export default function WhatsAppButton({ text = "Konsultasi Gratis via WhatsApp", className = "" }) {
  // template message
  const message = `📩 Halo Arha Digital, saya tertarik dengan layanan Anda.
Berikut info singkat bisnis saya:

Nama Bisnis: …
Bidang Usaha/Produk Utama: …
Yang Ingin Saya Konsultasikan (misalnya: website, Google Business Profile, atau keduanya): …

🙏 Terima kasih, mohon bantuannya ya.`

  // encode untuk URL
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/6285974785490?text=${encodedMessage}`} // nomor WA + template message
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 ease-in-out font-medium ${className}`}
      aria-label={text}
    >
      <img
        src={WhatsAppIcon}
        alt=""
        aria-hidden="true"
        className="h-6 w-6"
        loading="lazy"
      />
      <span>{text}</span>
    </a>
  );
}
