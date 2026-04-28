// DRIBBBLE-LEVEL UI UPGRADE (Next.js + Tailwind)

'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const times = ['09:00','10:00','11:00','13:00','14:00','15:00']

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white p-6">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mt-20 mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Foglalj időpontot 2 kattintással
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg">
          Modern, gyors és automatizált időpontfoglalás.
        </p>
      </section>

      {/* MAIN CARD */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* DATE PICKER */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-xl mb-6">Dátum kiválasztása</h2>

          <div className="grid grid-cols-7 gap-3">
            {[...Array(30)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(i+1)}
                className={`p-3 rounded-xl transition ${
                  selectedDate === i+1
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                {i+1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* TIME PICKER */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-xl mb-6">Időpont kiválasztása</h2>

          <div className="grid grid-cols-2 gap-4">
            {times.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`p-4 rounded-xl transition ${
                  selectedTime === t
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                {t}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

          <h2 className="text-2xl mb-6">Adatok</h2>

          <div className="space-y-4">
            <input placeholder="Név"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-purple-500 outline-none" />

            <input placeholder="Email"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-blue-500 outline-none" />

            <textarea placeholder="Megjegyzés"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10" />

            <button className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 font-semibold hover:scale-105 transition">
              Foglalás megerősítése
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-6">
        {[
          {title: '24/7 foglalás', desc: 'Bármikor elérhető rendszer'},
          {title: 'Automatikus emlékeztetők', desc: 'Email + SMS'},
          {title: 'Nagyobb bevétel', desc: 'Kevesebb lemondás'}
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur">
            <h3 className="text-lg mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-24 mb-20">
        <h2 className="text-4xl mb-6">Készen állsz?</h2>
        <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-110 transition">
          Indulás most
        </button>
      </section>

    </main>
  )
}

// RESULT:
// 🔥 Glassmorphism
// 🔥 Smooth animations
// 🔥 Neon gradients
// 🔥 Modern SaaS feel
// 🔥 Dribbble-level UI
