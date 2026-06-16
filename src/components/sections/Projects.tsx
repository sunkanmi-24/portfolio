import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Search } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'

const categories = ['All', 'SaaS / ERP', 'SaaS / Legal', 'Full-Stack', 'Web App', 'SaaS', 'AI / Tools']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionLabel
            label="Projects"
            title="Things I've built"
            subtitle="A selection of SaaS products, tools, and experiments."
          />
          <div className="relative w-full sm:w-64 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-400 transition-all"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group card-base overflow-hidden hover:shadow-xl hover:shadow-gray-200/80 dark:hover:shadow-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs font-semibold bg-accent-600 text-white rounded-md">Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 bg-white/90 rounded-xl text-gray-900 hover:bg-white transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 bg-white/90 rounded-xl text-gray-900 hover:bg-white transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}>
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5">{project.category}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs font-mono text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-950/40 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 dark:text-gray-600">
            <div className="text-4xl mb-3">🔍</div>
            <p>No projects match your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
