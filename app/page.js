'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  const times = ['09:00','10:00','11:00','13:00','14:00','15:00']

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDark])

  const pricing = useMemo(() => [
    {
      name: "Free",
      price: 0,
      desc: "Kipróbáláshoz",
      features: ["1 link", "Limitált időpontok"],
      highlight: false
    },
    {
      name: "Pro",
      price: isAnnual ? 5900 : 7900,
      desc: "Egyéni szakembereknek",
      features: ["Korlátlan link", "Email emlékeztető", "Naptár sync"],
      highlight: true
    },
    {
      name: "Business",
      price: isAnnual ? 14900 : 18900,
      desc: "Csapatoknak",
      features: ["Több user", "API", "Custom branding"],
      highlight: false
    }
  ], [isAnnual])

  const handleBooking = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Demo foglalás kész')
    }, 1500)
  }

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#0b1120] text-zinc-900 dark:text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <motion.div animate={{ x:[0,100,0], y:[0,50,0] }} transition={{ duration:30, repeat:Infinity }} className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <motion.div animate={{ x:[0,-120,0], y:[0,-80,0] }} transition={{ duration:35, repeat:Infinity }} className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-200/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">I</div>
            <span className="font-semibold">Időpont.app</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setIsDark(!isDark)}>{isDark ? '☀️':'🌙'}</button>
            <button className="hover:text-blue-500">Login</button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl">Kezdés</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center px-6">
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-6xl font-semibold max-w-4xl mx-auto">
          Egyszerű időpontfoglalás.<br/>Semmi felesleges lépés.
        </motion.h1>

        <p className="text-xl text-zinc-500 mt-6 max-w-2xl mx-auto">
          Az ügyfeleid kiválasztják az időpontot. Te csak megjelensz.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg">
            Ingyenes fiók
          </button>
          <button className="px-8 py-4 border rounded-xl">
            Előnézet
          </button>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="rounded-3xl border dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_,i)=>(
                  <div key={i} className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-center text-sm">
                    {9+i}:00
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                  Következő: 14:00
                </div>
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                  24 foglalás ezen a héten
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEMO BOOKING */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-8">
            {[1,2,3].map(s=>(
              <div key={s} className={`h-2 flex-1 rounded ${step>=s?'bg-blue-600':'bg-zinc-300'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step===1 && (
              <motion.div key="1" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(14)].map((_,i)=>(
                    <button key={i} onClick={()=>setSelectedDate(i)} className="p-2 rounded bg-white dark:bg-zinc-800">
                      {i+1}
                    </button>
                  ))}
                </div>
                <button onClick={()=>setStep(2)} className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl">
                  Tovább
                </button>
              </motion.div>
            )}

            {step===2 && (
              <motion.div key="2" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="grid grid-cols-2 gap-3">
                  {times.map(t=>(
                    <button key={t} onClick={()=>setSelectedTime(t)} className="p-3 border rounded-xl">
                      {t}
                    </button>
                  ))}
                </div>
                <button onClick={()=>setStep(3)} className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl">
                  Tovább
                </button>
              </motion.div>
            )}

            {step===3 && (
              <motion.div key="3" initial={{opacity:0}} animate={{opacity:1}}>
                <input className="w-full p-4 border rounded-xl mb-4" placeholder="Email"/>
                <button onClick={handleBooking} className="w-full py-3 bg-blue-600 text-white rounded-xl">
                  {loading ? '...' : 'Foglalás'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {pricing.map((p,i)=>(
            <motion.div key={i} whileHover={{y:-5}} className={`p-8 rounded-2xl border ${p.highlight ? 'border-blue-600':'border-zinc-200 dark:border-zinc-700'}`}>
              <h3 className="text-xl mb-2">{p.name}</h3>
              <p className="text-zinc-500 mb-6">{p.desc}</p>
              <div className="text-4xl font-bold mb-6">{p.price} Ft</div>
              <ul className="mb-6 space-y-2">
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
        <button className="px-10 py-4 bg-blue-600 text-white rounded-xl">
          Regisztráció
        </button>
      </section>

    </main>
  )
}
