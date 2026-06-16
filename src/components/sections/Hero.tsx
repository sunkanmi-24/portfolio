import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/8 dark:bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/8 dark:bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/4 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-950/50 border border-accent-200 dark:border-accent-800">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-700 dark:text-accent-300">Available for work</span>
              </div>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
              Building products
              <br />
              <span className="text-gradient">that matter.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              I'm <span className="font-semibold text-gray-800 dark:text-gray-200">{personalInfo.name}</span> — a full-stack developer and UI designer crafting premium SaaS products for African businesses. React, TypeScript, Supabase.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline inline-flex items-center gap-2"
              >
                Contact Me
              </button>
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <span className="text-sm text-gray-400 dark:text-gray-600">Find me on</span>
              <div className="flex items-center gap-3">
                {[
                  { href: personalInfo.social.github, icon: Github, label: 'GitHub' },
                  { href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: personalInfo.social.twitter, icon: Twitter, label: 'Twitter' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="mt-12 flex gap-10">
              {[
                { value: '5+', label: 'Years building' },
                { value: '30+', label: 'Projects shipped' },
                { value: '15+', label: 'Happy clients' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Avatar / Visual */}
          <motion.div
            variants={item}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent-200 dark:border-accent-800"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-violet-200 dark:border-violet-900"
              />

              {/* Avatar */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-400 to-violet-600 flex items-center justify-center shadow-2xl shadow-accent-500/30">
                <span className="text-7xl font-bold text-white select-none">Q</span>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">Full-Stack</div>
                    <div className="text-xs text-gray-400">React + Node</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇳🇬</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">Lagos, Nigeria</div>
                    <div className="text-xs text-gray-400">WAT (GMT+1)</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -right-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">AI-Powered</div>
                    <div className="text-xs text-gray-400">Claude API</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
