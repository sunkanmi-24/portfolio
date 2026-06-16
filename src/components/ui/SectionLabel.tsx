interface Props {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionLabel({ label, title, subtitle, centered = false }: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">
        <span className="w-4 h-px bg-accent-500 inline-block" />
        {label}
        <span className="w-4 h-px bg-accent-500 inline-block" />
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl" style={centered ? { margin: '1rem auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
