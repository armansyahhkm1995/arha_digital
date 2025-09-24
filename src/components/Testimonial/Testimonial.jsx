// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    business: "Warung Nasi Padang Budi",
    location: "Payakumbuh",
    text: "Setelah menggunakan jasa Arha Digital, pesanan online saya meningkat 300%. Sekarang warung saya mudah ditemukan di Google!",
  },
  {
    name: "Sari Dewi",
    business: "Salon Kecantikan Sari",
    location: "Bandung",
    text: "Website yang dibuat Arha Digital sangat bagus dan profesional. Pelanggan baru terus berdatangan!",
  },
  {
    name: "Ahmad Rahman",
    business: "Bengkel Motor AR",
    location: "Bandung",
    text: "Google Business Profile saya sekarang selalu muncul di pencarian. Terima kasih Arha Digital!",
  },
  {
    name: "Rina Putri",
    business: "Toko Baju Rina",
    location: "Jakarta",
    text: "Kini pelanggan saya meningkat pesat karena mudah menemukan toko saya secara online.",
  },
  {
    name: "Hendra Wijaya",
    business: "Kedai Kopi Hendra",
    location: "Surabaya",
    text: "Website yang profesional membantu bisnis saya lebih dipercaya pelanggan baru.",
  },
];

function TestimonialCard({ item }) {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-md p-6 px-20 w-full">
      <Quote className="w-8 h-8 text-blue-900 mb-3" aria-hidden="true" />
      <p className="text-gray-700 text-base mb-4 text-start">"{item.text}"</p>
      <div className="mt-auto flex justify-between items-center">
        <div>
          <p className="text-gray-900 font-bold text-start">{item.name}</p>
          <p className="text-blue-900 text-sm font-semibold text-start">{item.business}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <span>📍</span>
          <span>{item.location}</span>
        </div>
      </div>
    </article>
  );
}

function ScrollingColumn({ items, direction = "up" }) {
  const containerRef = useRef(null);
  const y = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // Hitung tinggi konten (karena kita duplikat, bagi 2)
  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused || !contentHeight) return;
    const speed = 40; // semakin besar = semakin cepat
    const move = (delta / 1000) * speed * (direction === "up" ? -1 : 1);

    let nextY = y.get() + move;

    // Loop mulus tanpa lompat
    if (direction === "up") {
      if (nextY <= -contentHeight) {
        nextY = 0;
      }
    } else {
      if (nextY >= 0) {
        nextY = -contentHeight;
      }
    }

    y.set(nextY);
  });

  return (
    <div
      className="relative overflow-hidden h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Blur atas */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
      {/* Blur bawah */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <motion.div
        ref={containerRef}
        style={{ y }}
        drag="y" // support swipe di mobile
        dragConstraints={{ top: -contentHeight, bottom: 0 }}
        dragElastic={0.2}
        className="flex flex-col"
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} className="mb-8">
            <TestimonialCard item={t} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-white py-16"
      aria-labelledby="testimonial-heading"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 px-4">
        <h2
          id="testimonial-heading"
          className="text-3xl md:text-4xl font-bold text-[#2C468C]"
        >
          Apa Kata Klien Kami?
        </h2>
        <p className="text-gray-600 mt-3">
          Testimoni nyata dari bisnis yang telah merasakan manfaat layanan Arha
          Digital
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-12">
        {/* Kolom kiri jalan ke atas */}
        <ScrollingColumn items={testimonials} direction="up" className="px-50"/>
        {/* Kolom kanan jalan ke bawah */}
        <ScrollingColumn items={testimonials} direction="down" />
      </div>
    </section>
  );
}
