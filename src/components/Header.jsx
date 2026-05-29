import React, { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [pillStyle, setPillStyle] = useState({})
  const navItems = ['Work', 'Services', 'Pricing', 'Contact']
  const buttonRefs = useRef([])

  useEffect(() => {
    if (hoveredIndex !== null && buttonRefs.current[hoveredIndex]) {
      const button = buttonRefs.current[hoveredIndex]
      setPillStyle({
        left: `${button.offsetLeft}px`,
        width: `${button.offsetWidth}px`,
      })
    }
  }, [hoveredIndex])

  return (
    <header className="bg-white text-black">
      <div className="flex items-center justify-between px-12 py-6 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wide text-black">
            Dahiya <span className="text-yellow-600">Naturopathy</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center relative">
          {/* Animated grey pill background */}
          {hoveredIndex !== null && (
            <div
              className="absolute bg-gray-300 rounded-full h-10 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out"
              style={pillStyle}
            />
          )}

          {navItems.map((item, index) => (
            <button
              key={index}
              ref={(el) => (buttonRefs.current[index] = el)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 z-10"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Book a call button */}
        <button className="text-xs bg-white text-yellow-600 px-6 py-2 border border-yellow-600 font-semibold hover:bg-yellow-200 transition-colors duration-400">
          BOOK CONSULITATION
        </button>
      </div>
    </header>
  )
}

export default Header
