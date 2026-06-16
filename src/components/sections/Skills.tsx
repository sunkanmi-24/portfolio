import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools']

const techIcons: Record<string, string> = {
  'React / Next.js': '⚛️',
  'TypeScript': '🔷',
  'Tailwind CSS': '🎨',
  'Framer Motion': '✨',
  'Node.js / Express': '🟢',
  'PostgreSQL / Prisma': '🐘',
  'Supabase': '⚡',
  'UI/UX Design': '🖌️',
  'Figma': '🎭',
  'AI Integration': '🤖',
  'WordPress': '📝',
  'Cloudflare / DevOps': '☁️',
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{techIcons[name] || '💻'}</span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
        </div>
        <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-violet-500"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel
            label="Skills"
            title="What I work with"
            subtitle="Technologies and tools I use to build production-grade applications."
            centered
          />
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent-600 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-x-16 gap-y-6"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <SkillBar name={skill.name} level={skill.level} delay={i * 0.08} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech cloud */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Redux', 'Zustand', 'TanStack Query', 'Zod', 'Stripe', 'SendGrid', 'Docker', 'GitHub Actions', 'Vercel', 'Firebase', 'Redis', 'GraphQL', 'Three.js', 'GSAP', 'Astro'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-accent-300 dark:hover:border-accent-700 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
