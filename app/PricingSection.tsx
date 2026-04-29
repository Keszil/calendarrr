'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

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
  ], [isAnnual])

  return (
    <section id="pricing" className="relative z-20 max-w-6xl mx-auto pt-28 pb-32 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight">Válaszd ki a számodra tökéletes csomagot</h2>
        <p className="text-xl text-gray-400 mt-4">14 nap ingyen. Bármikor lemondható.</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-1 flex">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-7 py-3 rounded-xl transition ${!isAnnual ? 'bg-white text-black font-semibold' : 'hover:bg-white/10'}`}
          >
            Havi számlázás
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-7 py-3 rounded-xl flex items-center gap-2 transition ${isAnnual ? 'bg-white text-black font-semibold' : 'hover:bg-white/10'}`}
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
            className={`relative rounded-3xl p-8 flex flex-col border transition-all ${
              plan.popular
                ? 'border-purple-500 bg-gradient-to-b from-purple-950/60 to-transparent scale-[1.04] shadow-2xl shadow-purple-500/25'
                : 'border-white/10 hover:border-white/30 bg-zinc-900/70'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-6 py-1.5 rounded-full">
                LEGNÉPSZERŰBB
              </div>
            )}

            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-gray-400 mt-1 text-sm">{plan.description}</p>

            <div className="my-8">
              <span className="text-5xl font-bold">{plan.price.toLocaleString('hu-HU')}</span>
              <span className="text-gray-400"> Ft</span>
              <p className="text-sm text-gray-500">{plan.period}</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert(`${plan.name} csomag kiválasztva (demo)`)}
              className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:brightness-110 text-black'
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
