import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  download?: boolean | string
}

const variantClasses: Record<string, string> = {
  primary: 'bg-accent text-bg font-semibold hover:brightness-110 active:scale-95',
  ghost: 'border border-cream/30 text-cream hover:bg-cream/10 active:scale-95',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  download,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 transition-all duration-200 font-medium select-none cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(download !== undefined ? { download } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
