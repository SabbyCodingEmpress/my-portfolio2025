export default function AboutSection() {
  const skills = [
    'React', 'Node.js', 'MongoDB', 'Express', 
    'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        {/* Main Content - Centered */}
        <div className="space-y-8">
          <p className="text-2xl text-gray-800 leading-relaxed font-light">
            I'm a developer focused on creating clean, functional web applications. 
            My work centers around the MERN stack, building solutions that are both 
            practical and thoughtfully designed.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            I approach each project with attention to detail and a commitment to 
            writing maintainable code. Whether it's frontend interfaces or backend 
            systems, I aim to deliver work that meets real user needs.
          </p>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-3 gap-8 py-12 border-y border-gray-200">
            <div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">3+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>

          {/* Skills */}
          <div className="pt-6">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Technologies</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-600 pt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Currently available for projects
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-8">
            <button className="px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
            <button className="px-8 py-3 border-2 border-black text-black rounded-md font-medium hover:bg-black hover:text-white transition-all">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}