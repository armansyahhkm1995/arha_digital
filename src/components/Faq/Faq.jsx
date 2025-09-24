import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Apakah harga sudah termasuk domain dan hosting?",
      a: "✅ Ya, harga sudah termasuk domain dan hosting gratis untuk tahun pertama. Perpanjangan tahun berikutnya hanya Rp200.000/tahun."
    },
    {
      q: "Apakah saya bisa update website sendiri?",
      a: "✅ Website kami buat sederhana sehingga tidak perlu diutak-atik sendiri. Jika ada perubahan kecil (misalnya nomor WhatsApp, jam buka), Anda bisa kirim ke kami untuk kami bantu update."
    },
    {
      q: "Kalau saya belum punya akun Google Business Profile, bagaimana?",
      a: "✅ Kami bisa buatkan dari nol dan serahkan semua aksesnya kepada Anda, jadi Anda tetap pegang kendali penuh."
    },
    {
      q: "Apakah saya bisa pakai website ini untuk jualan online (produk/layanan)?",
      a: "✅ Ya, terutama untuk paket Standard & Premium. Anda bisa tampilkan produk, katalog, promo, bahkan form booking jika diperlukan."
    },
    {
      q: "Berapa lama proses pembuatan website?",
      a: "✅ Rata-rata 5–10 hari kerja, tergantung paket dan seberapa cepat Anda memberikan data (foto, deskripsi usaha, dll)."
    },
    {
      q: "Apakah ada biaya tambahan selain paket yang saya pilih?",
      a: "✅ Tidak ada biaya tersembunyi. Satu-satunya biaya tambahan hanyalah perpanjangan domain & hosting setelah tahun pertama."
    },
    {
      q: "Kalau saya belum punya banyak foto atau konten, apakah bisa tetap jalan?",
      a: "✅ Bisa. Kami bisa mulai dengan konten sederhana (nama usaha, alamat, jam buka, kontak). Nanti konten tambahan bisa ditambahkan belakangan."
    },
    {
      q: "Apakah ada garansi kalau website tidak muncul di Google?",
      a: "✅ Kami optimalkan website & Google Business Profile agar mudah ditemukan, tapi hasil juga bergantung pada persaingan dan lokasi. Minimal, bisnis Anda pasti tampil di Google Maps dengan profil yang rapi."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white w-full max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-blue-600 text-2xl md:text-3xl font-bold text-center mb-12">
        FAQ & Jawaban
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" border-b border-gray-200 pb-6"
          >
            <button
              className="bg-white text-black w-full flex justify-between items-center text-left font-medium text-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.q}</span>
              <div className="text-black w-6 h-6 flex items-center justify-center">
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-black" />
                ) : (
                  <ChevronDown size={20} className="text-black" />
                )}
              </div>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-black leading-relaxed text-start">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
