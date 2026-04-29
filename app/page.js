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
      isDark 
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
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
      description: "Csapatoknak és stúdióknak",
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
      text: "A korábbi végtelen email-váltás helyett most tényleg csak a munkára kell koncentrálnom. Nagyon intuitív és megbízható.",
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
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">I</div>
            <span className="text-2xl font-semibold tracking-tight">Időpont.app</span>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-2xl hover:text-emerald-600 transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="font-medium hover:text-emerald-600 transition-colors">Bejelentkezés</button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors"
            >
              Ingyen kezdés
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Időpontok egyeztetése<br />egyszerűen.
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
            Küldj egy linket az ügyfeleidnek, és ők maguktól lefoglalják a legmegfelelőbb időpontot. 
            Te pedig több időt nyersz a valódi munkára.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition"
            >
              Ingyen fiók létrehozása
            </button>
            <button className="px-8 py-4 text-lg font-medium border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
              Hogyan működik?
            </button>
          </div>

          <p className="mt-10 text-zinc-500">14 nap ingyen próba • Nincs kártya szükséges • Bármikor lemondható</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-5">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          ⭐⭐⭐⭐⭐ 4.97 • Már több mint 1800 magyar szakember használja
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">Mindössze 3 lépés</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Állítsd be a szabad időidet", desc: "Egyszer kell csak megcsinálni" },
              { num: "02", title: "Oszd meg a saját linked", desc: "WhatsApp, email, Instagram vagy weboldal" },
              { num: "03", title: "Az ügyfelek maguktól foglalnak", desc: "Te csak a munkára koncentrálsz" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-4xl font-semibold text-emerald-600 mb-8">
                  {item.num}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING DEMO */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-4">Így néz ki a te foglalási oldalad</h2>
          <p className="text-center text-zinc-500 mb-12">Pontosan így fog kinézni az ügyfeleid számára</p>

          <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-12">
              <div className="flex justify-center gap-3 mb-12">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2.5 flex-1 max-w-[100px] rounded-full transition-all ${
                      step >= s ? 'bg-emerald-600' : 'bg-zinc-200 dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-center mb-8 text-zinc-500 font-medium">Válassz egy dátumot</p>
                    <div className="grid grid-cols-7 gap-3">
                      {[...Array(14)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(i)}
                          className={`aspect-square rounded-2xl text-sm font-medium transition-all ${
                            selectedDate === i
                              ? 'bg-emerald-600 text-white'
                              : 'hover:bg-zinc-100 dark:hover:bg-zinc-700 bg-white dark:bg-zinc-800 border border-transparent'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="mt-12 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl transition"
                    >
                      Tovább →
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-center mb-8 text-zinc-500 font-medium">Válassz időpontot</p>
                    <div className="grid grid-cols-2 gap-4">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-4 rounded-2xl font-medium transition-all ${
                            selectedTime === t
                              ? 'bg-emerald-600 text-white'
                              : 'border border-zinc-200 dark:border-zinc-700 hover:border-emerald-600'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="mt-12 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl transition"
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
                      className="w-full px-6 py-5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl focus:outline-none focus:border-emerald-600 mb-8"
                    />
                    <button
                      onClick={handleBooking}
                      disabled={loading}
                      className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-400 text-white font-medium rounded-2xl transition text-lg"
                    >
                      {loading ? 'Foglalás folyamatban...' : 'Foglalom ezt az időpontot'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">Mit mondanak a felhasználóink?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-3xl">
                <div className="flex gap-4 mb-6">
                  <div className="text-4xl">{t.avatar}</div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">„{t.text}”</p>
                <div className="mt-6 text-emerald-500">{'★'.repeat(t.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Válaszd ki a számodra tökéletes csomagot</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">14 nap ingyen. Bármikor lemondható.</p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition ${!isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
              >
                Havi
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition ${isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
              >
                Éves <span className="text-emerald-400 text-xs">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 flex flex-col border bg-white dark:bg-zinc-800 transition-all ${
                  plan.popular 
                    ? 'border-emerald-600 shadow-2xl scale-105' 
                    : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-6 py-2 rounded-full">
                    LEGNÉPSZERŰBB
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">{plan.description}</p>

                <div className="mb-10">
                  <span className="text-5xl font-bold tracking-tighter">{plan.price.toLocaleString('hu-HU')}</span>
                  <span className="text-zinc-500"> Ft</span>
                  <p className="text-sm text-zinc-500 mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-12 flex-1 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => alert(`${plan.name} csomag kiválasztva (demo)`)}
                  className={`w-full py-4 rounded-2xl font-medium transition-all ${
                    plan.popular 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800'
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
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Kezdj el időpontokat fogadni még ma</h2>
          <p className="text-xl mb-10 opacity-90">Csatlakozz több mint 1800 elégedett szakemberhez</p>
          <button
            onClick={() => alert('Regisztráció indítása...')}
            className="px-14 py-6 text-xl font-semibold bg-white text-emerald-700 rounded-full hover:bg-emerald-50 transition shadow-lg"
          >
            Ingyen fiók létrehozása most →
          </button>
        </div>
      </section>
    </main>
  )
}
