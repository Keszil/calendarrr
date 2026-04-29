'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loading, setLoading] = useState(false)

  const times = ['09:00','10:00','11:00','13:00','14:00','15:00']

  const handleNext = () => step < 3 && setStep(step + 1)

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
        <motion.div animate={{ x:[0,100,0], y:[0,50,0] }} transition={{ duration:20, repeat:Infinity }} className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"/>
        <motion.div animate={{ x:[0,-100,0], y:[0,-50,0] }} transition={{ duration:25, repeat:Infinity }} className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-0 right-0"/>
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">BookingApp</h1>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition">
            Sign up
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 text-center max-w-4xl mx-auto mt-16 px-6">
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Hagyd abba az időpont egyeztetést.
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
          Egyetlen link — és az ügyfeleid maguktól lefoglalják a megfelelő időpontot.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 font-semibold overflow-hidden">
            <span className="relative z-10">Kezdés ingyen</span>
            <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500 to-blue-500"/>
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
            Megnézem hogyan működik
          </button>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="relative z-10 max-w-5xl mx-auto mt-24 grid md:grid-cols-2 gap-10 px-6">
        <div className="space-y-4 text-gray-400">
          <p>Manuális időpont egyeztetés</p>
          <p>Töredezett kommunikáció</p>
          <p>Időveszteség minden lépésnél</p>
        </div>

        <div className="space-y-4 text-white">
          <p className="text-purple-400">Egyetlen megosztható link</p>
          <p className="text-blue-400">Automatikusan kezelt foglalások</p>
          <p className="text-cyan-400">Valós idejű elérhetőség</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-6 px-6">
        {[
          'Állítsd be mikor érsz rá',
          'Küldd el a saját linked',
          'Az ügyfelek lefoglalják'
        ].map((t,i)=>(
          <motion.div key={i} whileHover={{ y:-5 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/10 transition">
            {t}
          </motion.div>
        ))}
      </section>

      {/* BOOKING DEMO */}
      <section className="relative z-10 max-w-4xl mx-auto mt-32 px-6">
        <h2 className="text-3xl mb-6 text-center">Így néz ki a foglalási oldalad</h2>

        <div className="flex justify-center gap-4 mb-6">
          {[1,2,3].map(s=>(
            <div key={s} className={`w-3 h-3 rounded-full ${step>=s?'bg-purple-500':'bg-gray-600'}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step===1 && (
            <motion.div key="1" initial={{opacity:0}} animate={{opacity:1}}>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(14)].map((_,i)=>(
                  <button key={i} onClick={()=>setSelectedDate(i)}
                    className="p-2 bg-white/5 rounded-xl hover:bg-white/10">
                    {i+1}
                  </button>
                ))}
              </div>
              <button onClick={handleNext} className="mt-4 px-6 py-2 bg-purple-500 rounded-xl">Tovább</button>
            </motion.div>
          )}

          {step===2 && (
            <motion.div key="2" initial={{opacity:0}} animate={{opacity:1}}>
              <div className="grid grid-cols-2 gap-3">
                {times.map(t=>(
                  <button key={t} onClick={()=>setSelectedTime(t)}
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10">
                    {t}
                  </button>
                ))}
              </div>
              <button onClick={handleNext} className="mt-4 px-6 py-2 bg-blue-500 rounded-xl">Tovább</button>
            </motion.div>
          )}

          {step===3 && (
            <motion.div key="3" initial={{opacity:0}} animate={{opacity:1}}>
              <input placeholder="Email" className="w-full p-3 bg-white/5 rounded-xl mb-4"/>
              <button onClick={handleBooking}
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                {loading ? 'Betöltés...' : 'Foglalás'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="relative z-10 text-center mt-24 mb-20">
        <h2 className="text-4xl mb-6 font-semibold">
          Kezdj el időpontokat fogadni ma.
        </h2>

        <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
          Regisztráció ingyen
        </button>
      </section>

    </main>
  )
}
