import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Tag } from 'lucide-react'
import { blogPosts } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'

const categoryColors: Record<string, string> = {
  Engineering: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400',
  Tools: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400',
  Career: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400',
}

export function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <AnimatedSection className="flex items-end justify-between gap-6 mb-12">
          <SectionLabel
            label="Blog"
            title="Thoughts & Insights"
            subtitle="Writing on engineering, product, and building for Africa."
          />
          <a
            href="#"
            className="text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline flex-shrink-0"
          >
            All posts →
          </a>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.1}>
              <motion.a
                href={`/blog/${post.slug}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group card-base overflow-hidden flex flex-col hover:shadow-lg hover:shadow-gray-200/80 dark:hover:shadow-gray-900 transition-all duration-300 block"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-md ${categoryColors[post.category] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-700 group-hover:text-accent-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="card-base p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Get my latest posts in your inbox
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Engineering, product insights, and resources for African developers. No spam.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-56 px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-400 transition-all"
              />
              <button className="btn-primary text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
