'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const dynamic = 'force-dynamic'

export default function Home() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']

  // Dark mode
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [isDark])

  const handleBooking = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Foglalás sikeres! 🎉\n\nEz csak egy demo.')
    }, 1500)
  }

  const pricingPlans = useMemo(() => [
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
      features: ["Korlátlan foglalási linkek", "Valós idejű naptár", "Automatikus emlékeztetők", "Zoom integráció", "Alap analitika"],
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
      description: "Csapatoknak és nagyobb stúdióknak",
      features: ["Minden a Proban", "Több felhasználó", "Csapat naptár", "API hozzáférés", "Fehér címke", "Dedikált támogatás"],
      cta: "Business csomag",
      popular: false,
    }
  ], [isAnnual])

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
      text: "Sokkal professzionálisabb lett a szolgáltatásom. Kevesebb lemondás, több betelt időpont.",
      rating: 5,
      avatar: "🧔"
    },
    {
      name: "Szabó Eszter",
      role: "Jogi tanácsadó",
      text: "A korábbi végtelen email-váltás helyett most tényleg csak a munkára kell koncentrálnom. Nagyon intuitív rendszer.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Tóth Péter",
      role: "Személyi edző",
      text: "Az ügyfeleim 90%-a magától foglal. Hihetetlenül leegyszerűsítette az életemet.",
      rating: 5,
      avatar: "💪"
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden relative">
      
      {/* Absztrakt háttér animáció - finom és elegáns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_50%)]"
        />
        <motion.div
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, delay: 5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.08),transparent_60%)]"
        />
        {/* Finom rács */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-500">
            Időpont.app
          </h1>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-4 py-2 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-lg"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="px-6 py-2.5 text-sm font-medium rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              Bejelentkezés
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition"
            >
              Ingyen kezdés
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-5 py-2 rounded-full text-sm mb-8">
            Már több mint 1800 magyar szakember használja
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Vége az időpont-egyeztetésnek
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
            Küldj egy linket az ügyfeleidnek, és ők maguktól lefoglalják a legjobb időpontot. 
            Te pedig több időt nyersz a valódi munkára.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl transition shadow-md"
            >
              Ingyen fiók létrehozása
            </button>
            <button className="px-8 py-4 text-lg font-medium border border-zinc-300 dark:border-zinc-700 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              Hogyan működik?
            </button>
          </div>

          <p className="mt-8 text-sm text-zinc-500">14 nap ingyen próba • Nincs kártya szükséges • Bármikor lemondható</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="relative z-10 border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-5">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-500 dark:text-zinc-400">
          ⭐⭐⭐⭐⭐ 4.97 • Fodrászok, coachok, terapeuták, ügyvédek, oktatók és edzők használják
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">Mindössze 3 lépés</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Állítsd be a szabad időidet", desc: "Egyszer kell csak megcsinálni" },
              { num: "02", title: "Oszd meg a saját linked", desc: "WhatsApp, email, Instagram vagy weboldal" },
              { num: "03", title: "Az ügyfelek maguktól foglalnak", desc: "Te csak a munkára koncentrálsz" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 rounded-3xl hover:shadow-md transition-shadow"
              >
                <div className="text-6xl font-bold text-emerald-100 dark:text-emerald-950 mb-6">{item.num}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING DEMO */}
      <section className="relative z-10 py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-10">Így néz ki a te foglalási oldalad</h2>
          
          <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-12 shadow-sm">
            <div className="flex justify-center gap-4 mb-10">
              {[1,2,3].map(s => (
                <div 
                  key={s} 
                  className={`w-3.5 h-3.5 rounded-full transition-all ${step >= s ? 'bg-emerald-600 scale-125' : 'bg-zinc-300 dark:bg-zinc-600'}`} 
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-center mb-6 text-zinc-500">Válassz egy dátumot</p>
                  <div className="grid grid-cols-7 gap-3">
                    {[...Array(14)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(i)}
                        className={`aspect-square rounded-2xl transition-all ${selectedDate === i 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(2)} 
                    className="mt-10 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition"
                  >
                    Tovább →
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-center mb-6 text-zinc-500">Válassz időpontot</p>
                  <div className="grid grid-cols-2 gap-4">
                    {times.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-5 rounded-2xl text-lg transition-all ${selectedTime === t 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(3)} 
                    className="mt-10 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition"
                  >
                    Tovább az adatokhoz →
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <input
                    type="email"
                    placeholder="Add meg az email címed"
                    className="w-full p-5 bg-zinc-100 dark:bg-zinc-700 border border-transparent focus:border-emerald-500 rounded-2xl mb-6 focus:outline-none"
                  />
                  <button
                    onClick={handleBooking}
                    disabled={loading}
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white font-semibold rounded-2xl text-lg transition"
                  >
                    {loading ? 'Foglalás folyamatban...' : 'Foglalom ezt az időpontot'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">Mit mondanak a felhasználóink?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl"
              >
                <div className="flex gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">„{testimonial.text}”</p>
                <div className="mt-6 text-emerald-500">{'★'.repeat(testimonial.rating)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="relative z-10 py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Válaszd ki a számodra tökéletes csomagot</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">14 nap ingyen. Bármikor lemondható.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-3 rounded-xl transition ${!isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
              >
                Havi számlázás
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-3 rounded-xl flex items-center gap-2 transition ${isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
              >
                Éves számlázás <span className="text-emerald-400 text-xs">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: plan.popular ? -12 : -8 }}
                className={`relative rounded-3xl p-8 flex flex-col border transition-all bg-white dark:bg-zinc-800 ${
                  plan.popular 
                    ? 'border-emerald-600 shadow-xl shadow-emerald-600/10 scale-[1.03]' 
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-6 py-1.5 rounded-full">
                    LEGNÉPSZERŰBB
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">{plan.description}</p>

                <div className="mb-10">
                  <span className="text-5xl font-bold">{plan.price.toLocaleString('hu-HU')}</span>
                  <span className="text-zinc-500"> Ft</span>
                  <p className="text-sm text-zinc-500">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => alert(`${plan.name} csomag kiválasztva (demo)`)}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Kezdj el időpontokat fogadni még ma</h2>
          <p className="text-xl mb-10 opacity-90">Csatlakozz több mint 1800 elégedett magyar szakemberhez</p>
          
          <button
            onClick={() => alert('Regisztráció indítása...')}
            className="px-14 py-6 text-xl font-semibold bg-white text-emerald-700 rounded-2xl hover:bg-emerald-50 transition shadow-xl"
          >
            Ingyen fiók létrehozása most →
          </button>
        </div>
      </section>
    </main>
  )
}
