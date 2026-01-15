export default function Cta() {
    return (
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Have a project
                <br />
                in mind?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's discuss how we can bring your ideas to life
              </p>
            </div>
  
            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="/contact"
                className="inline-block px-12 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
            </div>
  
           
          </div>
        </div>
      </section>
    )
  }