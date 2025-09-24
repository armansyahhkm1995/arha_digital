// src/components/Pricing/Pricing.jsx
import React from "react";
import { CheckCircle, Star, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppButton from "../component/WhatsappComponent.jsx";

const plans = [
  {
    name: "Basic",
    price: "Rp300.000",
    description: "Cocok untuk bisnis kecil yang baru ingin tampil online",
    features: [
      "1 halaman landing page sederhana (profil singkat + kontak)",
      "Setup Google Business Profile dasar (alamat, jam buka, foto)",
      "Cocok untuk bisnis pemula yang baru ingin online",
      "Tampilan ramah hp",
      "Hosting & domain gratis",
    ],
    buttonText: "Pilih paket basic",
    buttonColor: "bg-blue-900",
    popular: false,
  },
  {
    name: "Standard",
    price: "Rp750.000",
    description: "Pas untuk bisnis yang ingin lebih dipercaya pelanggan",
    features: [
      "Hingga 5 halaman (Beranda, Tentang, Produk/Jasa, Kontak, Promo)",
      "Integrasi WhatsApp & Google Maps",
      "Optimasi Google Business Profile (lebih mudah ditemukan di Google)",
      "Panduan singkat cara menjawab review pelanggan (termasuk review negatif)",
    ],
    buttonText: "Pilih paket standard",
    buttonColor: "bg-green-600",
    popular: true,
  },
  {
    name: "Premium",
    price: "Rp1.500.000",
    description:
      "Lengkap untuk bisnis yang mau serius scale dan jadi pilihan utama di kota Anda",
    features: [
      "Hingga 10 halaman (profil lengkap, katalog produk, form booking, promo dinamis)",
      "Optimasi SEO dasar untuk Google (lebih mudah muncul di pencarian)",
      "Google Business Profile lengkap + optimasi review pelanggan",
      "Panduan mendalam strategi review (positif & negatif)",
      "1 bulan support teknis setelah website online",
    ],
    buttonText: "Pilih paket premium",
    buttonColor: "bg-blue-900",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="harga"
      className="bg-gradient-to-b from-gray-50 to-blue-50 py-20 px-6 scroll-mt-20"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900"
          >
            Layanan Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Paket layanan lengkap yang dirancang khusus untuk kebutuhan bisnis
            Anda
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl shadow-md p-6 bg-white ${
                plan.popular
                  ? "border-2 border-green-500 shadow-lg scale-105"
                  : "border border-gray-200"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              aria-labelledby={`${plan.name}-title`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="flex justify-center mb-3" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}

              <div>
                <h3
                  id={`${plan.name}-title`}
                  className="text-xl font-bold text-blue-900 text-center"
                >
                  {plan.name} – {plan.price}
                </h3>
                <p className="mt-4 text-gray-700 text-center text-sm sm:text-base">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start justify-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <CheckCircle
                        className={`w-5 h-5 shrink-0 mt-1 ${
                          plan.popular ? "text-green-500" : "text-blue-600"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Button bawah fitur
                <div className="mt-6">
                  <WhatsAppButton text={`Tanya tentang paket ${plan.name}`} />
                </div> */}
              </div>

              {/* CTA Button */}
              <button
                className={`mt-6 flex items-center justify-center gap-2 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 ${plan.buttonColor} hover:opacity-90`}
                aria-label={plan.buttonText}
                onClick={() => alert(plan.buttonText)}
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                {plan.buttonText}
              </button>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Tidak yakin paket mana yang cocok?
          </h3>
          <p className="text-gray-700 mb-6">
            Konsultasi gratis dengan tim ahli kami untuk mendapatkan rekomendasi
            terbaik
          </p>

          {/* WhatsApp Button bawah teks konsultasi */}
          <div className="mb-6">
            <WhatsAppButton text="Konsultasi harga via WhatsApp" />
          </div>

          <button
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white text-lg font-bold py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
            aria-label="Pilih paket & konsultasi via form"
            onClick={() => alert("Pilih Paket & Konsultasi")}
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Pilih Paket & Konsultasi
          </button>
        </motion.div>
      </div>
    </section>
  );
}
