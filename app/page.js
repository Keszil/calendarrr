'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const dynamic = 'force-dynamic'

export default function Home() {
  const [demoStep, setDemoStep] = useState(1)
  const [selectedMonth, setSelectedMonth] = useState(4) // Május
  const [isDark, setIsDark] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  const months = ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"]
  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']

  // Dark mode
  useEffect(() => {
    if (typeof document !== 'undefined') {
      isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  // Automatikus demo lépésváltás (GIF hatás)
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoStep(prev => (prev % 3) + 1)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

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
      features: ["Korlátlan foglalási linkek", "Valós idejű naptár", "Automatikus emlékeztetők", "Zoom integráció"],
      cta: "Starter csomag",
      popular: false,
    },
    {
      name: "Pro",
      price: isAnnual ? 9900 : 12900,
      period: isAnnual ? "/hó (éves)" : "/hó",
      description: "A legnépszerűbb választás",
      features: ["Minden a Starterben", "Egyéni branding", "Csoportfoglalás", "Haladó analitika", "Prioritásos támogatás"],
      cta: "Pro csomag indítása",
      popular: true,
    },
    {
      name: "Business",
      price: isAnnual ? 19900 : 24900,
      period: isAnnual ? "/hó (éves)" : "/hó",
      description: "Csapatoknak és stúdióknak",
      features: ["Minden a Proban", "Több felhasználó", "Csapat naptár", "API hozzáférés", "Fehér címke"],
      cta: "Business csomag",
      popular: false,
    }
  ], [isAnnual])

  const testimonials = [
    { name: "Kovács Anna", role: "Fodrász & Szalon tulajdonos", text: "Heti 6-8 órát spórolok az egyeztetéseken. Az ügyfelek imádják, hogy maguk tudnak időpontot foglalni.", rating: 5, avatar: "👩‍🦰" },
    { name: "Nagy Márk", role: "Életvezetési coach", text: "Sokkal professzionálisabb lett a szolgáltatásom. Kevesebb lemondás, több betelt időpont.", rating: 5, avatar: "🧔" },
    { name: "Szabó Eszter", role: "Jogi tanácsadó", text: "A korábbi végtelen email-váltás helyett most tényleg csak a munkára kell koncentrálnom.", rating: 5, avatar: "👩‍💼" },
    { name: "Tóth Péter", role: "Személyi edző", text: "Az ügyfeleim 90%-a magától foglal. Hihetetlenül leegyszerűsítette az életemet.", rating: 5, avatar: "💪" }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden">
      
      {/* Finom absztrakt háttér */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 50, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.08),transparent_60%)]"
        />
        <motion.div
          animate={{ backgroundPosition: ['100% 40%', '0% 70%', '100% 40%'] }}
          transition={{ duration: 60, repeat: Infinity, delay: 12 }}
          className="absolute inset-0 bg-[radial-gradient(at_75%_65%,rgba(16,185,129,0.06),transparent_60%)]"
        />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">I</div>
            <span className="text-2xl font-semibold tracking-tight">Időpont.app</span>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={() => setIsDark(!isDark)} className="text-2xl hover:text-emerald-600 transition-colors">
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
      <section className="pt-28 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Időpontok egyeztetése<br />egyszerűen.
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
            Küldj egy linket az ügyfeleidnek, és ők maguktól lefoglalják a legmegfelelőbb időpontot.
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
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white dark:bg-zinc-950 relative z-10">
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
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KISEBB DEMO - BALRA IGAZÍTVA */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-4">Így néz ki a te foglalási oldalad</h2>
          <p className="text-center text-zinc-500 mb-12">Pontosan így fog kinézni az ügyfeleid számára</p>

          <div className="max-w-lg mx-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8">
              {/* Hónap választó */}
              <div className="flex justify-center flex-wrap gap-2 mb-8">
                {months.map((month, idx) => (
                  <div
                    key={idx}
                    className={`px-5 py-1.5 text-xs rounded-full transition-all ${
                      selectedMonth === idx ? 'bg-emerald-600 text-white' : 'bg-zinc-100 dark:bg-zinc-700'
                    }`}
                  >
                    {month}
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2.5 flex-1 max-w-[80px] rounded-full transition-all ${
                      demoStep >= s ? 'bg-emerald-600' : 'bg-zinc-200 dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {demoStep === 1 && (
                  <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-center mb-6 text-zinc-500 font-medium">Válassz egy dátumot</p>
                    <div className="grid grid-cols-7 gap-2">
                      {[...Array(14)].map((_, i) => (
                        <div key={i} className="aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center text-sm">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {demoStep === 2 && (
                  <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-center mb-6 text-zinc-500 font-medium">Válassz időpontot</p>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map(t => (
                        <div key={t} className="py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-700 text-sm font-medium text-center">
                          {t}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {demoStep === 3 && (
                  <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-center mb-6 text-zinc-500 font-medium">Add meg az email címed</p>
                    <div className="h-12 bg-zinc-100 dark:bg-zinc-700 rounded-2xl mb-6 flex items-center justify-center text-sm text-zinc-400">
                      pelda@email.com
                    </div>
                    <div className="w-full py-4 bg-emerald-600 text-white font-medium rounded-2xl text-center">
                      Foglalom ezt az időpontot
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-zinc-950 relative z-10">
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
      <section id="pricing" className="py-24 bg-zinc-50 dark:bg-zinc-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Válaszd ki a számodra tökéletes csomagot</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">14 nap ingyen. Bármikor lemondható.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-1">
              <button onClick={() => setIsAnnual(false)} className={`px-8 py-3 rounded-full text-sm font-medium transition ${!isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}>Havi</button>
              <button onClick={() => setIsAnnual(true)} className={`px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition ${isAnnual ? 'bg-emerald-600 text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}>Éves <span className="text-emerald-400 text-xs">-20%</span></button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: plan.popular ? -6 : -3 }}
                className={`relative rounded-3xl p-8 flex flex-col border bg-white dark:bg-zinc-800 transition-all ${
                  plan.popular ? 'border-emerald-600 shadow-2xl scale-[1.02]' : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-6 py-2 rounded-full">LEGNÉPSZERŰBB</div>}
                <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">{plan.description}</p>
                <div className="mb-10">
                  <span className="text-5xl font-bold tracking-tighter">{plan.price.toLocaleString('hu-HU')}</span>
                  <span className="text-zinc-500"> Ft</span>
                  <p className="text-sm text-zinc-500 mt-1">{plan.period}</p>
                </div>
                <ul className="space-y-4 mb-12 flex-1 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-600">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => alert(`${plan.name} csomag kiválasztva (demo)`)}
                  className={`w-full py-4 rounded-2xl font-medium transition-all ${
                    plan.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800'
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
      <section className="py-24 bg-emerald-600 text-white relative z-10">
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
