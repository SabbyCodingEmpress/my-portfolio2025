const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio1.jpg',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaboration tool with WebSocket',
    technologies: ['React', 'Express', 'Socket.io'],
    image: '/images/portfolio2.jpg',
    link: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization platform with interactive charts',
    technologies: ['React', 'D3.js', 'MongoDB'],
    image: '/images/portfolio3.jpg',
    link: '#'
  },
  {
    title: 'Social Media API',
    description: 'RESTful API with authentication and file uploads',
    technologies: ['Node.js', 'Express', 'JWT'],
    image: '/images/portfolio4.jpg',
    link: '#'
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            My Work
          </h2>
          <div className="w-20 h-1 bg-white mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl">
            A selection of projects showcasing my expertise in full-stack development, 
            from interactive frontends to scalable backend systems.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-[#0d1320] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  View Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}