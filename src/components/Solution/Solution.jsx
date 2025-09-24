// src/components/Solution/Solution.jsx
import React from "react";
import {
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

// Data-driven: gampang nambah / ubah solusi
const solutions = [
  {
    icon: <Rocket className="w-12 h-12 text-green-700" aria-hidden="true" />,
    title: "Website Jadi Mesin Omzet",
    desc: "Kami rancang website Anda agar lebih dari sekadar profil – tapi mampu menarik pengunjung dan mengubah mereka jadi pembeli.",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-700" aria-hidden="true" />,
    title: "Mudah Ditemukan di Google",
    desc: "Optimasi SEO dan Google Business Profile bikin bisnis Anda lebih mudah muncul di pencarian dan Google Maps.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-700" aria-hidden="true" />,
    title: "Review Positif Terkelola",
    desc: "Kami bantu kelola ulasan pelanggan agar reputasi online bisnis Anda lebih terpercaya dan menarik calon pembeli.",
  },
];

export default function Solution() {
  return (
    <section
      id="solutions"
      className="bg-white py-20 px-6 scroll-mt-20"
      aria-labelledby="solution-heading"
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
            id="solution-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900"
          >
            Solusi yang Tepat untuk Bisnis Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Kami hadir dengan strategi dan teknologi agar bisnis Anda tumbuh
            lebih cepat dan lebih mudah ditemukan.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.article
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // muncul berurutan
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-start text-lg sm:text-xl font-bold text-green-700 mb-3">
                {solution.title}
              </h3>
              <p className="text-start text-sm sm:text-base text-gray-700 leading-relaxed">
                {solution.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
