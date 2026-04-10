const PETAL_COLORS = [
  '#e11d48', // ruby
  '#2563eb', // sapphire
  '#059669', // emerald
  '#a855f7', // amethyst
  '#fbbf24', // gold
  '#be123c', // ruby dark
  '#1d4ed8', // sapphire dark
  '#7e22ce', // amethyst dark
]

function generatePetals() {
  const petals: { d: string; fill: string }[] = []
  const numPetals = 8
  const rInner = 14
  const rOuter = 40
  const bulge = 9
  const cx = 50
  const cy = 50

  for (let i = 0; i < numPetals; i++) {
    const angle = (i * 2 * Math.PI) / numPetals - Math.PI / 2

    const cosA = Math.cos(angle)
    const sinA = Math.sin(angle)
    const perpX = -sinA
    const perpY = cosA

    const baseX = cx + rInner * cosA
    const baseY = cy + rInner * sinA
    const tipX = cx + rOuter * cosA
    const tipY = cy + rOuter * sinA

    const midR = (rInner + rOuter) / 2
    const midX = cx + midR * cosA
    const midY = cy + midR * sinA

    const ctrl1X = midX + bulge * perpX
    const ctrl1Y = midY + bulge * perpY
    const ctrl2X = midX - bulge * perpX
    const ctrl2Y = midY - bulge * perpY

    const d = `M ${baseX.toFixed(1)} ${baseY.toFixed(1)} Q ${ctrl1X.toFixed(1)} ${ctrl1Y.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${ctrl2X.toFixed(1)} ${ctrl2Y.toFixed(1)} ${baseX.toFixed(1)} ${baseY.toFixed(1)}`

    petals.push({ d, fill: PETAL_COLORS[i] })
  }

  return petals
}

const petals = generatePetals()

export default function StainedGlassLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Algorithmic Faith logo"
    >
      {/* Outer stone ring */}
      <circle cx="50" cy="50" r="47" fill="#1a1a1a" stroke="#434343" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" fill="#0a0a0f" stroke="#2a2a2a" strokeWidth="1" />

      {/* Jewel-colored petals */}
      {petals.map((petal, i) => (
        <path
          key={i}
          d={petal.d}
          fill={petal.fill}
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.85"
        />
      ))}

      {/* Small circles at petal tips */}
      {petals.map((_, i) => {
        const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2
        const tx = 50 + 42 * Math.cos(angle)
        const ty = 50 + 42 * Math.sin(angle)
        return (
          <circle
            key={`tip-${i}`}
            cx={tx.toFixed(1)}
            cy={ty.toFixed(1)}
            r="3"
            fill={PETAL_COLORS[i]}
            stroke="#1a1a1a"
            strokeWidth="1"
            opacity="0.7"
          />
        )
      })}

      {/* Center medallion */}
      <circle cx="50" cy="50" r="13" fill="#0a0a0f" stroke="#434343" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="10" fill="#fbbf24" opacity="0.9" stroke="#1a1a1a" strokeWidth="1" />

      {/* Cross in center */}
      <line x1="50" y1="43" x2="50" y2="57" stroke="#0a0a0f" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="43" y1="50" x2="57" y2="50" stroke="#0a0a0f" strokeWidth="2.5" strokeLinecap="round" />

      {/* Subtle outer highlight */}
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  )
}
