import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <p className="text-xs tracking-widest text-center text-gray-400 mb-8">THERAPEUTIC FORMULATION</p>
        <h1 className="text-7xl font-cormorant font-bold text-white mb-2 leading-tight">
          Pumpkin-Based
        </h1>
        <h2 className="text-6xl font-cormorant italic text-yellow-600 mb-6 leading-tight">
          Therapeutic Soup
        </h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          A naturopathic approach to metabolic balance and digestive efficiency
        </p>
      </div>
    </div>
  )
}

export default Hero
