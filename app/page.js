'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isAnnual, setIsAnnual] = useState(true)

  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handleBooking = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Foglalás sikeres! 🎉\n\nEz csak egy demo.')
    }, 1500)
  }

  // Pricing tervek
  const pricingPlans = [
    {
      name: "Ingyenes",
      price: 0,
      period: "",
      description: "Kipróbálásra tökéletes",
      features: ["1 foglalási link", "Korlátozott időpontok", "Alap email visszaigazolás"],
      cta: "Ingyen kezdés",
      popular: false,
    },
    {
      name: "Starter",
      price: isAnnual ? 4900 : 5900,
      period: isAnnual ? "/hó (éves)" : "/hó",
      description: "Egyéni szakembereknek",
      features: ["Korlátlan linkek", "Valós idejű naptár", "Automatikus emlékeztetők", "Zoom integráció", "Alap analitika"],
      cta: "Starter csomag",
      popular: false,
    },
    {
      name: "Pro",
      price: isAnnual ? 9900 : 12900,
      period: isAnnual ? "/hó (éves)" : "/hó",
      description: "A legnépszerűbb választás",
      features: ["Minden a Starterben", "Egyéni branding", "Csoportfoglalás", "Haladó analitika", "Prioritásos támogatás", "Nincs Időpont.app logó"],
      cta: "Pro csomag indítása",
      popular: true,
    },
    {
      name: "Business",
      price: isAnnual ? 19900 : 24900,
      period: isAnnual ? "/hó (éves)" : "/hó",
      description: "Csapatoknak és stúdióknak",
      features: ["Minden a Proban", "Több felhasználó", "Csapat naptár", "API hozzáférés", "Fehér címke", "Dedikált támogatás"],
      cta: "Business csomag",
      popular: false,
    }
  ]

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Egyszerű háttér - kevesebb memóriaigény */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950" />

      {/* NAVBAR */}
      <header className="relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tighter">Időpont.app</h1>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition"
          >
            {isDark ? '☀️ Világos' : '🌙 Sötét'}
          </button>
          <button className="px-6 py-2.5 rounded-2xl hover:bg-white/10 transition">Bejelentkezés</button>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-2.5 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition"
          >
            Ingyen kezdés
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-20 pt-20 pb-16 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 text-sm">
          <span className="text-emerald-400">●</span> Már több mint 1800 szakember használja Magyarországon
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          Hagyd abba az időpont-<span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">egyeztetést</span>.
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Küldj egy linket az ügyfeleidnek, és ők maguktól lefoglalják a legjobb időpontot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:brightness-110"
          >
            Ingyen fiók létrehozása
          </button>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="relative z-20 border-y border-white/10 py-5 bg-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          ⭐⭐⭐⭐⭐ 4.97 • Használják fodrászok, coachok, terapeuták, ügyvédek, oktatók és edzők
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="relative z-20 max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Mindössze 3 lépés</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Állítsd be a szabad időidet" },
            { num: "02", title: "Oszd meg a saját linked" },
            { num: "03", title: "Az ügyfelek maguktól foglalnak" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/70 border border-white/10 p-8 rounded-3xl">
              <div className="text-5xl font-bold text-purple-500 mb-4">{item.num}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING DEMO */}
      <section className="relative z-20 max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Így néz ki a foglalási oldalad</h2>
        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-7 gap-3">
                  {[...Array(14)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={`p-4 rounded-xl ${selectedDate === i ? 'bg-purple-600' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="mt-6 w-full py-3 bg-purple-600 rounded-xl">Tovább</button>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <input type="email" placeholder="Email címed" className="w-full p-4 bg-white/5 rounded-xl mb-4" />
                <button onClick={handleBooking} className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl">
                  {loading ? 'Foglalás...' : 'Foglalom'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* PRICING - egyszerűsített változat */}
      <section id="pricing" className="relative z-20 max-w-6xl mx-auto pt-20 pb-32 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Árazás</h2>

        <div className="flex justify-center mb-8">
          <div className="bg-zinc-900 rounded-2xl p-1 flex">
            <button onClick={() => setIsAnnual(false)} className={`px-6 py-2 rounded-xl ${!isAnnual ? 'bg-white text-black' : ''}`}>Havi</button>
            <button onClick={() => setIsAnnual(true)} className={`px-6 py-2 rounded-xl ${isAnnual ? 'bg-white text-black' : ''}`}>Éves</button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border ${plan.popular ? 'border-purple-500 scale-105' : 'border-white/10'}`}
            >
              {plan.popular && <div className="text-center text-purple-400 text-sm mb-4">LEGNÉPSZERŰBB</div>}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="my-6">
                <span className="text-5xl font-bold">{plan.price.toLocaleString('hu-HU')}</span>
                <span className="text-gray-400"> Ft</span>
              </div>
              <ul className="space-y-2 text-sm mb-8">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
