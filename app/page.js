'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

export const dynamic = 'force-dynamic'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const pricingPlans = useMemo(() => [
    {
      name: "Ingyenes",
      price: 0,
      description: "Első lépésekhez",
      features: ["1 foglalási oldal", "Alap funkciók"],
      cta: "Kezdés",
    },
    {
      name: "Pro",
      price: isAnnual ? 9900 : 12900,
      description: "A legtöbb felhasználónak",
      features: ["Korlátlan foglalás", "Automatikus emailek", "Integrációk"],
      cta: "Kipróbálom",
      popular: true
    }
  ], [isAnnual])

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden">

      {/* FINOM ABSZTRAKT HÁTTÉR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
          transition={{ duration: 50, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="font-semibold text-xl">Időpont.app</div>

          <div className="flex gap-6 items-center">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="hover:text-blue-500">Bejelentkezés</button>
            <button className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Regisztráció
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          Időpontfoglalás<br />egyszerűen
        </h1>

        <p className="text-xl text-zinc-500 max-w-xl mx-auto mb-10">
          Egy letisztult rendszer, ahol az ügyfeleid maguktól foglalnak.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:scale-105 transition">
            Kipróbálom
          </button>
          <button className="px-8 py-4 border rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Demo
          </button>
        </div>
      </section>

      {/* 👇 DEMO (KISEBB + GIF) */}
      <section className="pb-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-zinc-500 mb-6">Így működik a gyakorlatban</p>

          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
            {/* IDE TEDD A GIF-ET */}
            <img
              src="/demo.gif"
              alt="demo"
              className="w-full opacity-90"
            />
          </div>
        </div>
      </section>

      {/* FEATURE PREVIEW (UI MOCK) */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Így néz ki a saját oldalad
            </h2>
            <p className="text-zinc-500">
              Letisztult, gyors és mobilbarát felület — ügyfeleid imádni fogják.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6 shadow-xl">
            <div className="space-y-3">
              <div className="h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 bg-blue-500 rounded-xl" />
                <div className="h-12 bg-zinc-200 dark:bg-zinc-700 rounded-xl" />
                <div className="h-12 bg-zinc-200 dark:bg-zinc-700 rounded-xl" />
              </div>
              <div className="h-12 bg-blue-500 rounded-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS (LIGHTER STYLE) */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-500 mb-12">Felhasználóink mondták</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Rengeteg időt spóroltam vele.",
              "Az ügyfelek maguktól foglalnak.",
              "Letisztult és gyors.",
              "Pont erre volt szükségem."
            ].map((text, i) => (
              <div key={i} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Egyszerű árak
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${
              plan.popular ? 'border-blue-500 shadow-xl' : ''
            }`}>
              <h3 className="text-xl mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">
                {plan.price} Ft
              </div>
              <ul className="mb-6 text-zinc-500 space-y-2">
                {plan.features.map((f, j) => <li key={j}>✓ {f}</li>)}
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-600 text-white">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative z-10">
        <h2 className="text-4xl mb-6">
          Kezdd el most
        </h2>
        <button className="px-10 py-5 bg-blue-600 text-white rounded-full hover:scale-105 transition">
          Regisztráció
        </button>
      </section>

    </main>
  )
}
