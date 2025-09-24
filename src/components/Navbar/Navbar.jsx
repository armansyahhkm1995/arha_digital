// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/arha_digital.svg";
import WhatsAppButton from "../component/WhatsappComponent";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "harga", label: "Harga" },
    { to: "portfolio", label: "Portfolio" },
    { to: "testimoni", label: "Testimoni" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* ✅ Logo scroll ke Hero */}
        <ScrollLink
          to="beranda"    // id di Hero.jsx
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Scroll ke bagian beranda"
        >
          <img
            src={Logo}
            alt="Logo Arha Digital"
            className="h-8 w-auto"
            loading="lazy"
          />
          <span className="text-xl font-bold text-gray-900">Arha Digital</span>
        </ScrollLink>

        {/* ✅ Navigation Links (desktop) */}
        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}      // 🔑 tetap ada di sini
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer text-black hover:text-blue-600 transition"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA WhatsApp + Hamburger */}
        <div className="flex items-center gap-4">
          <WhatsAppButton text="Konsultasi Gratis" className="hidden sm:inline-flex" />
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col items-start p-4 space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}   // 🔑 tetap juga di sini
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-black hover:text-blue-600 transition"
              >
                {link.label}
              </ScrollLink>
            ))}
            <WhatsAppButton text="Konsultasi Gratis" className="w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}