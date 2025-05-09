'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-950 mb-8 font-bold">
            Crafting digital experiences with code and creativity
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/profile-image.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-950">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate developer. a love for creating
                functional digital experiences. With expertise in modern web
                technologies, I bring ideas to life through clean code and creative solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold mb-2">Web Development</h3>
                  <p className="text-sm text-gray-600">React, Next.js, Node.js</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-bold mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">Figma, Adobe XD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text  ">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-950">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
