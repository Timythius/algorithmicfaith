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
  { color: 'rgba(91,141,230,0.8)',   rotate: -38, width: 110, delay: 0,    x: -5  },
  { color: 'rgba(245,209,104,0.85)', rotate: -26, width: 140, delay: -4,   x: -2  },
  { color: 'rgba(214,59,84,0.7)',    rotate: -15, width: 100, delay: -8,   x: 0   },
  { color: 'rgba(63,160,90,0.75)',   rotate: -6,  width: 120, delay: -12,  x: 1   },
  { color: 'rgba(245,209,104,0.95)', rotate: 0,   width: 180, delay: -2,   x: 0   },
  { color: 'rgba(232,138,168,0.7)',  rotate: 7,   width: 105, delay: -16,  x: -1  },
  { color: 'rgba(168,85,247,0.65)',  rotate: 16,  width: 95,  delay: -6,   x: 2   },
  { color: 'rgba(245,209,104,0.8)',  rotate: 27,  width: 120, delay: -10,  x: 3   },
  { color: 'rgba(91,141,230,0.7)',   rotate: 39,  width: 105, delay: -14,  x: 5   },
  { color: 'rgba(214,59,84,0.6)',    rotate: -48, width: 90,  delay: -18,  x: -7  },
  { color: 'rgba(63,160,90,0.6)',    rotate: 49,  width: 90,  delay: -20,  x: 7   },
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
