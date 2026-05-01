import Link from 'next/link'

interface AppStoreBadgeProps {
  store: 'apple' | 'google'
  href?: string
  variant?: 'dark' | 'light'
}

const AppleIcon = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden="true">
    <path d="M14.045 11.63c.012 1.983 1.742 2.64 1.758 2.648-.015.047-.275.939-.906 1.861-.544.797-1.11 1.59-2.002 1.604-.875.016-1.157-.52-2.159-.52-1.001 0-1.316.503-2.146.536-.859.032-1.51-.854-2.059-1.648C5.317 13.988 4.47 11.24 5.63 9.354c.573-.99 1.598-1.618 2.71-1.633 1.78-.03 2.467 1.188 2.684 1.188.216 0 1.23-.512 2.39-.437.407.017 1.549.164 2.283 1.24-.059.036-1.363.795-1.348 2.67M11.65 5.76c.456-.551.764-1.32.68-2.085-.657.027-1.451.437-1.921.988-.423.49-.793 1.27-.694 2.022.732.056 1.477-.37 1.936-.925" />
  </svg>
)

const GoogleIcon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
    <path d="M.956.68C.631.99.44 1.48.44 2.11v15.78c0 .63.19 1.12.516 1.43l.075.069L10.16 10.24v-.21L1.031.61.956.68z" fill="#EA4335" />
    <path d="M13.22 13.31l-3.06-3.06v-.21l3.06-3.06.069.04 3.623 2.06c1.035.588 1.035 1.55 0 2.14l-3.623 2.057-.069.04z" fill="#FBBC04" />
    <path d="M13.289 13.27L10.16 10.14.956 19.32c.342.362.906.406 1.542.046l10.791-6.097" fill="#34A853" />
    <path d="M13.289 7.01L2.498.914C1.862.554 1.298.597.956.96l9.204 9.18 3.129-3.129z" fill="#4285F4" />
  </svg>
)

export default function AppStoreBadge({
  store,
  href = '#',
  variant = 'dark',
}: AppStoreBadgeProps) {
  const bg =
    variant === 'light'
      ? 'bg-bg/15 border-bg/25 hover:bg-bg/25'
      : 'bg-cream/10 border-cream/20 hover:bg-cream/20'
  const text = variant === 'light' ? 'text-bg' : 'text-cream'
  const muted = variant === 'light' ? 'text-bg/60' : 'text-cream/60'

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 ${bg} border rounded-2xl px-5 py-3 transition-colors duration-200`}
    >
      <span className={text}>
        {store === 'apple' ? <AppleIcon /> : <GoogleIcon />}
      </span>
      <div className="text-left">
        <div className={`${muted} text-xs leading-none mb-0.5`}>
          {store === 'apple' ? 'Download on the' : 'Get it on'}
        </div>
        <div className={`${text} font-semibold text-sm leading-none`}>
          {store === 'apple' ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </Link>
  )
}
