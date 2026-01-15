'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="order-1 lg:order-1 relative w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent z-10" />
              <img 
                src="/images/hero.jpg" 
                alt="Hero Visual" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl -z-10 opacity-60" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-2 space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
                Available for work
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Fullstack
                <br />
                Software
                <br />
                <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Hola, I'm <span className="text-white font-semibold">Zah</span>! 
              Developer with a couple years of experience crafting web applications 
              with the MERN stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border border-gray-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:border-gray-500 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>

            {/* Stats/Tags */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-800">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-white">3+</p>
                <p className="text-xs sm:text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-white">20+</p>
                <p className="text-xs sm:text-sm text-gray-500">Projects Built</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-xs sm:text-sm text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}