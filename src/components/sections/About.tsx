'use client'

export default function About() {
  const skills = [
    "Fullstack Development",
    "React & Next.js",
    "JavaScript/TypeScript",
    "UI/UX Design",
    "Node.js",
    "Database Design"
  ]

  // const stats = [
  //   { number: "3+", label: "Years Experience" },
  //   { number: "50+", label: "Projects Completed" },
  //   { number: "100%", label: "Client Satisfaction" }
  // ]

  return (
    <section className="py-20 bg-black from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-gray-800 rounded-full text-sm font-bold">
                👋 Get to know me
              </div>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                I&rsquo;m a passionate developer who loves creating 
                <span className="text-white"> amazing experiences</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong foundation in modern web technologies, I specialize in building 
                responsive, user-friendly applications that solve real-world problems. I&rsquo;m 
                constantly learning and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-600">
                When I&rsquo;m not coding, you&rsquo;ll find me exploring new technologies, contributing 
                to open-source projects, or enjoying a good cup of coffee while brainstorming 
                my next creative project.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {/* {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))} */}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            </div>
            
            {/* Image container */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-image.jpg" 
                  alt="About Me" 
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together? Let&rsquo;s create something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black-600 text-white rounded-lg font-medium hover:bg-gray -700 transition-colors">
              Get In Touch
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}