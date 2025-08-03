const highlights = [
    {
        title: 'Modern E-commerce Store',
        image: '/images/portfolio/ecommerce.jpg',
        description: 'A modern e-commerce store with a clean design and easy navigation.',
        stack: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
        //liveURL: 'https://www.example.com/ecommerce',
        //codeURL: 'https://github.com/username/ecommerce'
    },
    {
        title: 'Portfolio Website',
        image: '/images/portfolio/portfolio.jpg',
        description: 'A portfolio website with a clean design and easy navigation.',
        stack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
        //liveURL: 'https://www.example.com/portfolio',
        //codeURL: 'https://github.com/username/portofolio'
    },
]

export default function PortfolioHIghlights() {
    return (
       <section className="py-20 bg-black">
        <div className="max-w-6x1 mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
                My Favorite Portfolio Projects
            </h2>
            <div className="space-y-2">
                {highlights.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow"
                        />

                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{project.description}</p>

                            <ul className="flex flex-wrap gap-2">
                             {project.stack.map((tech, i) => (
                                <li
                                   key={i}
                                   className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                                >
                                    {tech}
                                </li>
                             ))}
                            </ul>

                            <div className="flex gap-4 pt-2">
                                <a
                                   href="{project.liveURL"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-sm font-medium px-4 bg-black text-white rounded hover:bg-gray-800"
                                >
                                    Live Demo 
                                </a>

                                <a
                                  href=""
                                  target=""
                                  rel=""
                                  className=""
                                >
                                    View Code
                                </a>

                            </div>
                        </div>
                    </div>
                ))}   
            </div>            
        </div>        
       </section>
    )
}