import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel
            label="Services"
            title="How I can help you"
            subtitle="From idea to deployment — I handle the full product lifecycle."
            centered
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-base p-6 h-full flex flex-col hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-50 dark:bg-accent-950/50 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {service.price}
                  </span>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    Get quote →
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="rounded-2xl bg-gradient-to-r from-accent-600 to-violet-600 p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to build something great?</h3>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Let's turn your idea into a product. I'm available for freelance projects, consulting, and long-term contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-accent-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Start a project
                </button>
                <a
                  href={`https://wa.me/2348000000000`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/15 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  WhatsApp me
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
