// src/components/Footer/Footer.jsx
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Heart,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // ✅ smooth scroll

export default function Footer() {
  return (
    <footer className="bg-[#2C468C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand + Deskripsi */}
        <div>
          <div className="flex items-center mb-6">
            <ScrollLink
              to="beranda" // ✅ scroll ke Hero
              smooth={true}
              duration={500}
              offset={-80}
              className="flex items-center gap-3 cursor-pointer"
              aria-label="Scroll ke bagian beranda"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg text-white font-bold text-lg"
                style={{
                  background: "linear-gradient(180deg, #3B82F6, #F97316)",
                }}
                aria-hidden="true"
              >
                A
              </div>
              <span className="text-xl font-bold">Arha Digital</span>
            </ScrollLink>
          </div>
          <p className="text-start text-sm leading-relaxed max-w-xs">
            Arha Digital membantu bisnis meningkatkan omzet dan mudah ditemukan
            di Google melalui website profesional dan Google Business Profile.
          </p>
        </div>

        {/* ✅ Menu Utama */}
        <div>
          <h3 className="text-start text-lg font-semibold mb-4">Menu Utama</h3>
          <ul className="text-start space-y-2">
            <li>
              <ScrollLink
                to="harga"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:underline"
              >
                Harga
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:underline"
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimoni"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:underline"
              >
                Testimoni
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Layanan Kami */}
        <div>
          <h3 className="text-start text-lg font-semibold mb-4">Layanan Kami</h3>
          <ul className="text-start space-y-2">
            <li>Landing Page Conversion</li>
            <li>Google Business Profile</li>
            <li>SEO Lokal Basic</li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="text-start text-lg font-semibold mb-4">Hubungi Kami</h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <MapPin size={18} aria-hidden="true" />
                <span>Payakumbuh</span>
              </div>
              <p className="text-start ml-6">
                Jl. Ahmad Yani No. 123, Payakumbuh, Sumatera Barat
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <MapPin size={18} aria-hidden="true" />
                <span>Bandung</span>
              </div>
              <p className="text-start ml-6">
                Jl. Dipatiukur No. 456, Bandung, Jawa Barat
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} aria-hidden="true" />
              <a href="tel:+6285974785490" className="hover:underline">
                +62 085974785490
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:hello@arhadigital.com" className="hover:underline">
                hello@arhadigital.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} aria-hidden="true" />
              <a
                href="https://www.arhadigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.arhadigital.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-white/80">
          <span>© 2025 Arha Digital. Dibuat dengan</span>
          <Heart size={14} className="text-red-500" aria-hidden="true" />
          <span>untuk bisnis Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
