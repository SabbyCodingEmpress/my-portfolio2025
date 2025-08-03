const missions = [
    'Deliver high-quality, scalable web apps for clients.',
    'Stay up to date with the latest frontend technologies.',
    'Write clean, accessible, and maintainable code.',
    'Focus on performance and mobile-first development.',
  ]
  
  export default function MissionList() {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            My Mission
          </h2>
  
          <ol className="space-y-8">
            {missions.map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="text-2xl font-bold text-gray-400 min-w-[2.5rem]">
                  {String(index + 1).padStart(2, '0')}.
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }
  