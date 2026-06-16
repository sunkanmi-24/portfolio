import { Download, MapPin, Mail } from 'lucide-react'
import { personalInfo, experiences } from '../../data/portfolio'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionLabel } from '../ui/SectionLabel'

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <AnimatedSection>
            <SectionLabel label="About Me" title="Developer. Designer. Problem solver." />

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-accent-50 to-violet-50 dark:from-accent-950/30 dark:to-violet-950/30 border border-accent-100 dark:border-accent-900">
              <p className="text-sm font-medium text-accent-700 dark:text-accent-300 mb-1">Mission</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To build software that genuinely works for African businesses — fast, affordable, and designed with local context in mind.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={personalInfo.cvUrl}
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Timeline */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8">Experience</h3>
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <div key={i} className="flex gap-5 group">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-500 ring-4 ring-accent-100 dark:ring-accent-900 flex-shrink-0 mt-1.5" />
                    {i < experiences.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 my-2" />
                    )}
                  </div>

                  <div className="pb-8 last:pb-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-950/50 px-2 py-0.5 rounded">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
