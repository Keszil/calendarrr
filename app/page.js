'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loading, setLoading] = useState(false)

  const times = ['09:00','10:00','11:00','13:00','14:00','15:00']

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBooking = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Foglalás kész!')
    }, 2000)
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div animate={{ x: [0,100,0], y:[0,50,0] }} transition={{ duration:20, repeat:Infinity }} className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ x: [0,-100,0], y:[0,-50,0] }} transition={{ duration:25, repeat:Infinity }} className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">BookingApp</h1>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition">
            Sign up
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 text-center max-w-4xl mx-auto mt-16 mb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Foglalj időpontot 2 kattintással
        </motion.h1>
        <p className="text-gray-400 mt-6 text-lg">
          Modern, gyors és automatizált időpontfoglalás.
        </p>
      </section>

      {/* STEP INDICATOR */}
      <div className="relative z-10 flex justify-center gap-4 mb-6">
        {[1,2,3].map(s => (
          <div key={s} className={`w-3 h-3 rounded-full ${step>=s ? 'bg-purple-500' : 'bg-gray-600'}`} />
        ))}
      </div>

      {/* STEP FLOW */}
      <section className="relative z-10 max-w-4xl mx-auto px-6">

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="step1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <h2 className="text-2xl mb-6">Dátum kiválasztása</h2>

              <div className="grid grid-cols-7 gap-3">
                {[...Array(30)].map((_, i) => (
                  <button
                    key={i}
                    onClick={()=>setSelectedDate(i+1)}
                    className={`p-3 rounded-xl transition ${
                      selectedDate===i+1
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}>
                    {i+1}
                  </button>
                ))}
              </div>

              <button onClick={handleNext} className="mt-6 px-6 py-3 bg-purple-600 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                Tovább
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="step2" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <h2 className="text-2xl mb-6">Időpont kiválasztása</h2>

              <div className="grid grid-cols-2 gap-4">
                {times.map(t => (
                  <button
                    key={t}
                    onClick={()=>setSelectedTime(t)}
                    className={`p-4 rounded-xl transition ${
                      selectedTime===t
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}>
                    {t}
                  </button>
                ))}
              </div>

              <button onClick={handleNext} className="mt-6 px-6 py-3 bg-blue-600 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                Tovább
              </button>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div key="step3" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <h2 className="text-2xl mb-6">Adatok</h2>

              <div className="space-y-4">
                <input placeholder="Név" className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-purple-500 outline-none" />
                <input placeholder="Email" className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-blue-500 outline-none" />

                <button
                  onClick={handleBooking}
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex justify-center items-center hover:scale-105 transition">

                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : 'Foglalás megerősítése'}

                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-6 px-6">
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
      <section className="relative z-10 text-center mt-24 mb-20">
        <h2 className="text-4xl mb-6">Készen állsz?</h2>
        <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-110 transition">
          Indulás most
        </button>
      </section>

    </main>
  )
}
