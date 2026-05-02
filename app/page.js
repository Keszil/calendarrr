'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

export const dynamic = 'force-dynamic'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDark])

  const pricingPlans = useMemo(() => [
    {
      name: "Ingyenes",
      price: 0,
      desc: "Kezdéshez",
      features: ["1 foglalási link", "Alap funkciók"],
      highlight: false,
    },
    {
      name: "Pro",
      price: isAnnual ? 9900 : 12900,
      desc: "Legnépszerűbb",
      features: ["Korlátlan link", "Emlékeztetők", "Naptár sync"],
      highlight: true,
    },
    {
      name: "Business",
      price: isAnnual ? 19900 : 24900,
      desc: "Csapatoknak",
      features: ["Több felhasználó", "API", "Branding"],
      highlight: false,
    }
  ], [isAnnual])

  const testimonials = [
    { name: "Anna", text: "Rengeteg időt spóroltam vele.", avatar: "👩" },
    { name: "Márk", text: "Letisztult és gyors.", avatar: "🧑" },
    { name: "Eszter", text: "Sokkal profibb lett a munkám.", avatar: "👩‍💼" },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b1120] text-zinc-900 dark:text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ x:[0,100,0], y:[0,50,0] }}
          transition={{ duration:30, repeat:Infinity }}
          className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]"
        />
        <motion.div
          animate={{ x:[0,-100,0], y:[0,-50,0] }}
          transition={{ duration:35, repeat:Infinity }}
          className="absolute w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
        />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-200/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">I</div>
            <span className="font-semibold text-lg">Időpont.app</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? '☀️' : '🌙'}
            </button>

            <button className="hover:text-blue-500 transition">
              Bejelentkezés
            </button>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-blue-500/20">
              Kezdés
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-20 text-center px-6">
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-6xl font-semibold max-w-4xl mx-auto leading-tight"
        >
          Időpontfoglalás,<br />egyszerűen.
        </motion.h1>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Egy egyszerű felület, ahol az ügyfeleid maguk választanak időpontot —
          nincs több egyeztetés.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:scale-[1.02] active:scale-[0.98] transition shadow-lg">
            Ingyenes fiók
          </button>

          <button className="px-8 py-4 border rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
            Előnézet
          </button>
        </div>
      </section>

      {/* GIF DEMO */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold mb-4">
            Így működik
          </h2>

          <p className="text-zinc-500 mb-10">
            Az ügyfeleidnek csak ennyit kell látniuk
          </p>

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xl"
          >
            <img src="/booking-demo.gif" alt="demo" />
          </motion.div>

          <p className="mt-6 text-sm text-zinc-400">
            Nincs regisztráció • 15 másodperc
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <h2 className="text-3xl text-center mb-16">Ennyi az egész</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {['Beállítod mikor érsz rá','Megosztod a linked','Az ügyfél foglal'].map((t,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-5}}
              className="p-8 border rounded-2xl dark:border-zinc-800 hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-3">0{i+1}</div>
              <p>{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <h2 className="text-3xl text-center mb-16">Vélemények</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {testimonials.map((t,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-4}}
              className="p-6 bg-white dark:bg-zinc-800 rounded-2xl"
            >
              <div className="text-3xl mb-3">{t.avatar}</div>
              <p className="text-sm text-zinc-500 mb-3">"{t.text}"</p>
              <p className="font-medium">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-4">Árazás</h2>
        </div>

        <div className="flex justify-center mb-10">
          <button onClick={()=>setIsAnnual(!isAnnual)} className="px-6 py-2 border rounded-xl">
            {isAnnual ? 'Éves' : 'Havi'}
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {pricingPlans.map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-5}}
              className={`p-8 rounded-2xl border ${
                p.highlight ? 'border-blue-600 shadow-xl' : 'border-zinc-200 dark:border-zinc-700'
              }`}
            >
              <h3 className="text-xl mb-2">{p.name}</h3>
              <p className="text-zinc-500 mb-4">{p.desc}</p>

              <div className="text-4xl font-bold mb-6">{p.price} Ft</div>

              <ul className="mb-6 space-y-2 text-sm">
                {p.features.map((f,idx)=><li key={idx}>✓ {f}</li>)}
              </ul>

              <button className="w-full py-3 bg-blue-600 text-white rounded-xl">
                Választás
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl mb-6">Kezdd el most</h2>

        <button className="px-10 py-4 bg-blue-600 text-white rounded-xl hover:scale-[1.02] transition">
          Regisztráció
        </button>
      </section>

    </main>
  )
}
