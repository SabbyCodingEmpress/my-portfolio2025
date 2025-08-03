const portfolioItems = [
    {
      title: 'Project One',
      image: '/images/portfolio1.jpg',
    },
    {
      title: 'Project Two',
      image: '/images/portfolio2.jpg',
    },
    {
      title: 'Project Three',
      image: '/images/portfolio3.jpg',
    },
    {
      title: 'Project Four',
      image: '/images/portfolio4.jpg',
    },
  ]
  
  export default function PortfolioGrid() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
  
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-sm font-medium text-gray-800">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  