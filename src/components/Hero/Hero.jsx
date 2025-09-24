// src/components/Hero/Hero.jsx
import HeroImage from "../../assets/Hero_section.png";
import WhatsAppButton from "../component/WhatsappComponent";


export default function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-heading"
      className="relative min-h-screen w-full scroll-mt-20 flex flex-col justify-between bg-gradient-to-b from-blue-50 via-white to-orange-50"
    >
      {/* ---------- MAIN CONTAINER ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        
        {/* LEFT: Text / CTA */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1
            id="hero-heading"
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-extrabold
              leading-tight
              text-blue-900
            "
          >
            Omzet Naik &nbsp;
            <span className="block">Bisnis Mudah Ditemukan di Google</span>
          </h1>

          <p
            className="
              mt-5
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-gray-800
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            80% pelanggan cari bisnis lewat Google. Bisnis Anda harus mudah
            ditemukan—bukan sekadar tampilan—agar omzet terus meningkat.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <WhatsAppButton />
          </div>
        </div>

        {/* RIGHT: image (desktop) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img
            src={HeroImage}
            alt="Contoh bisnis lokal mudah ditemukan di Google"
            className="hidden lg:block w-full max-w-[728px] h-auto rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* BELOW TEXT: image (mobile & tablet) */}
        <div className="w-full mt-8 lg:hidden">
          <img
            src={HeroImage}
            alt="Contoh bisnis lokal mudah ditemukan di Google"
            className="w-full h-auto rounded-2xl object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* ---------- Scroll indicator ---------- */}
      <div className="relative z-20 flex flex-col items-center mb-10 sm:mb-16">
        <p className="text-sm text-gray-700 text-center mb-3">Scroll ke bawah</p>
        <div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center"
          aria-hidden="true"
        >
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-1 motion-safe:animate-bounce" />
        </div>
      </div>
    </section>
  );
}
