/**
 * RoseDivider — section break with a small static rose mark and
 * a jewel-tone gradient line on either side.
 */

import StainedGlassLogo from './StainedGlassLogo'

export default function RoseDivider({ size = 36 }: { size?: number }) {
  return (
    <div className="rose-divider flex items-center justify-center gap-4 my-12 sm:my-16">
      <span className="flex-1 h-[2px] max-w-[160px] sm:max-w-[260px] bg-gradient-to-r from-transparent via-ruby-500/70 via-amethyst-500/70 to-gold-500/80" />
      <span className="opacity-90">
        <StainedGlassLogo size={size} />
      </span>
      <span className="flex-1 h-[2px] max-w-[160px] sm:max-w-[260px] bg-gradient-to-l from-transparent via-emerald-500/70 via-sapphire-500/70 to-gold-500/80" />
    </div>
  )
}
