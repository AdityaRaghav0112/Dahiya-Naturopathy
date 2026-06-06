'use client'

import { useState, useRef } from 'react'

const toneStyles = {
  emerald: {
    card: 'bg-emerald-50/70',
    iconWrap: 'bg-emerald-100/60'
  },
  sky: {
    card: 'bg-sky-50/70',
    iconWrap: 'bg-sky-100/60'
  },
  amber: {
    card: 'bg-amber-50/70',
    iconWrap: 'bg-amber-100/60'
  }
}

function FeatureCard({
  title,
  description,
  icon,
  tone,
  className,
  backgroundImage
}) {
  const styles = toneStyles[tone]
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate rotation based on mouse position
    const rotateY = ((x - rect.width / 2) / rect.width) * 15
    const rotateX = ((rect.height / 2 - y) / rect.height) * 15

    setTransform({
      rotateX,
      rotateY,
      scale: 1.05
    })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 })
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      className={[
        'rounded-2xl border border-black/10 p-8',
        'flex flex-col justify-between',
        'transition-all duration-300 ease-out',
        'cursor-pointer',
        isHovering ? 'z-50 shadow-2xl' : 'z-10',
        styles.card,
        className
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transformStyle: 'preserve-3d',
        transform: `perspective(800px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out, z-index 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div
            className={[
              'w-12 h-12 rounded-xl border border-black/10',
              'flex items-center justify-center text-2xl',
              styles.iconWrap
            ].join(' ')}
          >
            {icon}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-neutral-600 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  )
}

export default function Consume() {
  const consumeItems = [
    {
      title: 'Method 1',
      description:
        'Apply topically to affected areas for direct absorption and immediate relief.',
      icon: '💆',
      tone: 'emerald',
      className: ''
    },
    {
      title: 'Method 2',
      description:
        'Mix with warm water or milk for enhanced bioavailability and better results.',
      icon: '🥛',
      tone: 'sky',
      className: ''
    },
    {
      title: 'Method 3',
      description:
        'Combine with complementary herbs and spices to amplify therapeutic effects.',
      icon: '🌿',
      tone: 'amber',
      className: ''
    }
  ]

  return (
    <section id="consume" className="bg-primary min-h-screen w-full flex flex-col items-center justify-center px-8 py-24">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-20 h-px bg-yellow-600"></div>
          <h2 className="text-5xl font-cormorant font-bold text-white whitespace-nowrap">
            How to <span className="text-secondary">Consume</span>
          </h2>
          <div className="w-20 h-px bg-yellow-600"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {consumeItems.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            tone={item.tone}
            className={item.className}
          />
        ))}
      </div>
    </section>
  )
}
