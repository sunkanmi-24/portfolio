import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'

const avatarColors = [
  'from-blue-400 to-accent-600',
  'from-violet-400 to-purple-600',
  'from-emerald-400 to-teal-600',
  'from-amber-400 to-orange-500',
  'from-rose-400 to-pink-600',
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel
            label="Testimonials"
            title="What clients say"
            subtitle="Real feedback from people I've worked with."
            centered
          />
        </AnimatedSection>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 80 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="card-base p-8 sm:p-10 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 relative">
                    <span className="absolute -top-4 -left-2 text-5xl text-accent-200 dark:text-accent-900 font-serif leading-none select-none">"</span>
                    {t.text}
                    <span className="text-5xl text-accent-200 dark:text-accent-900 font-serif leading-none ml-1 select-none">"</span>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-accent-600'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Client logos row */}
        <AnimatedSection delay={0.2} className="mt-14">
          <p className="text-center text-sm text-gray-400 dark:text-gray-600 mb-6 uppercase tracking-widest font-medium">
            Worked with
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-50 dark:opacity-30">
            {['TechLegal Africa', 'PhoneMart NG', 'FinNext Lagos', 'StartupNG', 'Adesanya & Co.'].map((name) => (
              <span key={name} className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                {name}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
