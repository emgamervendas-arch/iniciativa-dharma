import heroBg from './assets/hero-bg.png'
import { motion } from 'framer-motion'
import { FaDiscord } from 'react-icons/fa'

import RecruitForm from './components/RecruitForm'

import './App.css'

export default function App() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* NAVBAR */}
        <header className="relative z-20 border-b border-cyan-500/10">

          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

            {/* LOGO */}
            <h1 className="text-2xl font-black tracking-[6px]">
              DHARMA
            </h1>

            {/* MENU */}
            <nav className="hidden md:flex gap-12 text-sm tracking-[4px] font-bold">

              <a
                href="#inicio"
                className="hover:text-cyan-400 transition"
              >
                INÍCIO
              </a>

              <a
                href="#sobre"
                className="hover:text-cyan-400 transition"
              >
                SOBRE
              </a>

              <a
                href="#recruitment"
                className="hover:text-cyan-400 transition"
              >
                RECRUTAMENTO
              </a>

              {/* DISCORD */}
              <a
                href="https://discord.gg/yJEWN8Hv"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <FaDiscord size={22} />
                DISCORD
              </a>

            </nav>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex-1 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6"
          >

            {/* BUTTON */}
            <motion.a
              href="#recruitment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-[500px]
              px-12 py-5 rounded-2xl
              bg-cyan-400 hover:bg-cyan-300
              text-black font-black tracking-[4px]
              text-lg transition-all
              shadow-[0_0_50px_rgba(34,211,238,0.7)]"
            >
              RECRUTAR-SE
            </motion.a>

          </motion.div>

        </div>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="relative py-32 px-6 bg-[#050816]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6 tracking-widest">
              SOBRE A GUILDA
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
              Guilda Hardcore PvP focada em dominação,
              guerras e progressão competitiva no AION 2.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10">
              <h3 className="text-3xl font-black mb-6 text-cyan-400">
                PvP HARDCORE
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Combates organizados, domínio territorial
                e guerras em larga escala.
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10">
              <h3 className="text-3xl font-black mb-6 text-cyan-400">
                PROGRESSÃO
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Evolução constante, foco em endgame
                e performance competitiva.
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10">
              <h3 className="text-3xl font-black mb-6 text-cyan-400">
                ELITE SA
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Uma comunidade séria focada em se tornar
                referência no servidor SA.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* RECRUTAMENTO */}
      <section
        id="recruitment"
        className="min-h-screen flex items-center justify-center px-6 py-24 bg-black"
      >

        <RecruitForm />

      </section>

    </main>
  )
}