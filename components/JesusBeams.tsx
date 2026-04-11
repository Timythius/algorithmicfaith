'use client'

/**
 * JesusBeams — volumetric light rays streaming from the rose window.
 *
 * Eleven coloured beams fan out from a single point at top-centre (where the
 * rose sits on the homepage) and stretch to the bottom of the viewport. Each
 * beam is a tall, narrow gradient strip blurred into a soft volume of light,
 * tinted with the Sainte-Chapelle jewel palette. A slow, staggered sway
 * animation gives the light the gentle drift of real crepuscular rays
 * shifting as clouds pass over a clerestory window.
 *
 * The whole layer is `position: fixed` behind content so the beams stay
 * visible as the user scrolls — like walking through a nave where the light
 * never quite leaves the stone.
 *
 * Hidden in lite mode and when prefers-reduced-motion is active.
 */

const BEAMS = [
  { color: 'rgba(91,141,230,0.55)',  rotate: -38, width: 90,  delay: 0,    x: -5  },
  { color: 'rgba(245,209,104,0.6)',  rotate: -26, width: 110, delay: -4,   x: -2  },
  { color: 'rgba(214,59,84,0.45)',   rotate: -15, width: 80,  delay: -8,   x: 0   },
  { color: 'rgba(63,160,90,0.5)',    rotate: -6,  width: 100, delay: -12,  x: 1   },
  { color: 'rgba(245,209,104,0.7)',  rotate: 0,   width: 140, delay: -2,   x: 0   },
  { color: 'rgba(232,138,168,0.45)', rotate: 7,   width: 85,  delay: -16,  x: -1  },
  { color: 'rgba(168,85,247,0.4)',   rotate: 16,  width: 75,  delay: -6,   x: 2   },
  { color: 'rgba(245,209,104,0.55)', rotate: 27,  width: 100, delay: -10,  x: 3   },
  { color: 'rgba(91,141,230,0.45)',  rotate: 39,  width: 85,  delay: -14,  x: 5   },
  { color: 'rgba(214,59,84,0.35)',   rotate: -48, width: 70,  delay: -18,  x: -7  },
  { color: 'rgba(63,160,90,0.35)',   rotate: 49,  width: 70,  delay: -20,  x: 7   },
]

export default function JesusBeams() {
  return (
    <div className="jesus-beams" aria-hidden="true">
      {BEAMS.map((b, i) => (
        <div
          key={i}
          className="jb-ray"
          style={{
            '--beam-color': b.color,
            '--beam-rotate': `${b.rotate}deg`,
            '--beam-width': `${b.width}px`,
            '--beam-delay': `${b.delay}s`,
            '--beam-x': `${b.x}%`,
          } as React.CSSProperties}
        />
      ))}
      {/* Central glow — warm gold wash directly beneath the rose */}
      <div className="jb-glow" />
    </div>
  )
}
