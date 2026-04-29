'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dinamikus import a Pricing szekcióhoz (ez megoldja a prerender hibát)
const PricingSection = dynamic(() => import('./PricingSection'), { ssr: false })

export default function Home() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']

  // Dark/Light mode
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

  const testimonials = [
    {
      name: "Kovács Anna",
      role: "Fodrász & Szalon tulajdonos",
      text: "Azóta, hogy használom az Időpont.app-ot, heti 6-8 órát spórolok az egyeztetéseken. Az ügyfelek imádják, hogy maguk tudnak időpontot foglalni.",
      rating: 5,
      avatar: "👩‍🦰"
    },
    {
      name: "Nagy Márk",
      role: "Életvezetési coach",
      text: "Sokkal professzionálisabb lett a szolgáltatásom. Kevesebb lemondás, több betelt időpont. Tavaly óta már a Pro csomagot használom.",
      rating: 5,
      avatar: "🧔"
    },
    {
      name: "Szabó Eszter",
      role: "Jogi tanácsadó",
      text: "A korábbi email-vissza-vissza írkálás helyett most tényleg csak a munkára kell koncentrálnom. Nagyon intuitív és megbízható rendszer.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Tóth Péter",
      role: "Személyi edző",
      text: "Az ügyfeleim 90%-a magától foglal. Hihetetlen, mennyire leegyszerűsítette az életemet ez az eszköz.",
      rating: 5,
      avatar: "💪"
    }
  ]

  return (
    <main className="relative min-h-screen bg-zinc-950 dark:bg-zinc-950 text-white overflow-hidden transition-colors duration-300">

      {/* Háttér animáció */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(at_25%_25%,rgba(168,85,247,0.18),transparent_60%)]"
        />
        <motion.div
          animate={{ backgroundPosition: ['100% 30%', '0% 70%', '100% 30%'] }}
          transition={{ duration: 45, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(at_75%_65%,rgba(34,211,238,0.18),transparent_65%)]"
        />
        <motion.div
          animate={{ x: [0, 220, -100, 0], y: [0, -150, 180, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 32, repeat: Infinity }}
          className="absolute -top-40 -left-60 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -180, 150, 0], y: [0, 200, -120, 0], scale: [1.1, 0.85, 1.2, 1] }}
          transition={{ duration: 38, repeat: Infinity, delay: 8 }}
          className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[130px]"
        />
      </div>

      {/* NAVBAR */}
      <header className="relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tighter">Időpont.app</h1>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
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
          Te pedig több időt nyersz a valódi munkára.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 hover:brightness-110 transition shadow-xl shadow-purple-500/30"
          >
            Ingyen fiók létrehozása
          </button>
          <button className="px-8 py-4 text-lg font-medium rounded-2xl border border-white/20 hover:bg-white/5 transition">
            Hogyan működik? →
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">14 nap ingyen próba • Nincs kártyaadat szükséges • Bármikor lemondható</p>
      </section>

      {/* TRUST BAR */}
      <div className="relative z-20 border-y border-white/10 py-5 bg-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          ⭐⭐⭐⭐⭐ 4.97 • Használják fodrászok, coachok, terapeuták, ügyvédek, oktatók és edzők
        </div>
      </div>

      {/* PROBLEM → SOLUTION */}
      <section className="relative z-20 max-w-5xl mx-auto mt-24 px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold mb-8">Eleged van a végtelen email-váltásból?</h2>
          <div className="space-y-6 text-lg text-gray-400">
            <p>✕ Órák mennek el időpont egyeztetéssel</p>
            <p>✕ Sok időpont marad üresen</p>
            <p>✕ Az ügyfelek gyakran elfelejtik vagy lemondják</p>
          </div>
        </div>
        <div className="space-y-6 text-lg">
          <p className="text-emerald-400">✓ Egyetlen link → kész</p>
          <p className="text-emerald-400">✓ Ügyfelek látják a valós szabad időidet</p>
          <p className="text-emerald-400">✓ Automatikus visszaigazolás és emlékeztetők</p>
          <p className="text-emerald-400">✓ Kevesebb lemondás, több bevétel</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-20 max-w-6xl mx-auto mt-28 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Mindössze 3 lépés</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Állítsd be a szabad időidet", desc: "Egyszer kell csak megcsinálni" },
            { num: "02", title: "Oszd meg a saját linked", desc: "WhatsApp, email, Instagram, weboldal" },
            { num: "03", title: "Az ügyfelek maguktól foglalnak", desc: "Te csak a munkára koncentrálsz" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/70 border border-white/10 p-8 rounded-3xl hover:border-purple-500/40 transition-all"
            >
              <div className="text-6xl font-bold text-purple-500/30 mb-4">{item.num}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING DEMO */}
      <section className="relative z-20 max-w-4xl mx-auto mt-32 px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">Így néz ki a te foglalási oldalad</h2>
        
        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <div className="flex justify-center gap-4 mb-8">
            {[1,2,3].map(s => (
              <div key={s} className={`w-3.5 h-3.5 rounded-full transition-all ${step >= s ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-125' : 'bg-gray-700'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-center mb-6 text-gray-400">Válassz egy dátumot</p>
                <div className="grid grid-cols-7 gap-3">
                  {[...Array(14)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={`aspect-square rounded-2xl transition-all ${selectedDate === i ? 'bg-purple-600 scale-105' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="mt-8 w-full py-4 bg-white text-black font-semibold rounded-2xl">Tovább →</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-center mb-6 text-gray-400">Válassz időpontot</p>
                <div className="grid grid-cols-2 gap-4">
                  {times.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-5 rounded-2xl text-lg transition-all ${selectedTime === t ? 'bg-cyan-500 text-black font-semibold' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(3)} className="mt-8 w-full py-4 bg-white text-black font-semibold rounded-2xl">Tovább az adatokhoz →</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <input 
                  type="email" 
                  placeholder="Add meg az email címed" 
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl mb-6 focus:outline-none focus:border-purple-500" 
                />
                <button
                  onClick={handleBooking}
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold rounded-2xl text-lg hover:brightness-110 disabled:opacity-70"
                >
                  {loading ? 'Foglalás folyamatban...' : 'Foglalom ezt az időpontot'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-20 max-w-6xl mx-auto mt-32 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Mit mondanak a felhasználóink?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900/70 border border-white/10 p-8 rounded-3xl"
            >
              <div className="flex gap-4 mb-6">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">„{testimonial.text}”</p>
              <div className="mt-6 flex text-yellow-400">
                {'★'.repeat(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION - Dinamikusan betöltve */}
      <PricingSection />

      {/* FINAL CTA */}
      <section className="relative z-20 text-center py-24 border-t border-white/10 bg-black/40">
        <h2 className="text-5xl font-bold mb-6">Kezdj el időpontokat fogadni még ma</h2>
        <p className="text-xl text-gray-400 mb-10">Csatlakozz több mint 1800 elégedett szakemberhez</p>
        
        <button
          onClick={() => alert('Regisztráció indítása...')}
          className="px-14 py-6 text-xl font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:brightness-110 transition shadow-2xl"
        >
          Ingyen fiók létrehozása most →
        </button>
      </section>
    </main>
  )
}
