import { MessageCircle } from "lucide-react"
import WhatsAppButton from "../component/WhatsappComponent"

export default function ClosingCTA() {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#F9FBFF] to-[#FFF9F5] py-20 px-6 text-center"
      aria-labelledby="closing-cta-title"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="closing-cta-title"
          className="text-2xl md:text-3xl font-bold text-[#2C468C] mb-6 leading-snug"
        >
          Saatnya Bisnis Anda Mudah Ditemukan & Omzet Naik di Google
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Jangan tunggu pesaing Anda lebih dulu online. Dengan website profesional
          dan Google Business Profile yang dioptimalkan, pelanggan baru bisa datang
          lebih cepat ke usaha Anda.
        </p>

          <WhatsAppButton text="Hubungi via Whatsapp"/>
      </div>
    </section>
  )
}
