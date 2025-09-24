// src/components/Problem/Problem.jsx
import React from "react";
import { Search, Globe, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// Data-driven: gampang nambah / ubah problem
const problems = [
  {
    icon: <Search className="w-12 h-12 text-red-500" aria-hidden="true" />,
    title: "Website hanya jadi profil, bukan mesin omzet",
    desc: "Sebagian besar website bisnis hanya berfungsi sebagai profil, bukan alat untuk menarik dan mengubah pengunjung jadi pembeli.",
  },
  {
    icon: <Globe className="w-12 h-12 text-red-500" aria-hidden="true" />,
    title: "Tidak muncul di Google & Maps ketika orang mencari",
    desc: "Meski punya usaha, tanpa optimasi Google Business Profile, bisnis Anda tenggelam dan kalah dengan pesaing yang lebih mudah ditemukan.",
  },
  {
    icon: <AlertTriangle className="w-12 h-12 text-red-500" aria-hidden="true" />,
    title: "Review pelanggan tidak terkelola, bikin calon pembeli ragu",
    desc: "Ulasan buruk dibiarkan, ulasan bagus jarang muncul. Akibatnya calon pelanggan ragu untuk memilih bisnis Anda.",
  },
];

export default function Problem() {
  return (
    <section
      id="problems"
      className="bg-gray-50 py-20 px-6 scroll-mt-20"
      aria-labelledby="problem-heading"
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
            id="problem-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900"
          >
            Kenapa Banyak Bisnis Sulit Ditemukan Online?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Banyak pemilik bisnis merasa online, tapi pelanggan tetap sulit
            menemukan bisnis mereka.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.article
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // biar muncul berurutan
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-start text-lg sm:text-xl font-bold text-red-600 mb-3">
                {problem.title}
              </h3>
              <p className="text-start text-sm sm:text-base text-gray-700 leading-relaxed">
                {problem.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
