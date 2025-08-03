import { Github, Linkedin } from 'lucide-react'

export default function FinalNote() {
  return (
    <section className="py-20 bg-black text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Thank You</h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
          I appreciate you taking the time to explore my work. I&rsquo;m passionate about
          building meaningful, accessible, and scalable digital experiences.
          If you&rsquo;re interested in collaborating, hiring, or just saying hello —
          feel free to reach out.
        </p>

        <a
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition mb-8"
        >
          Let&rsquo;s Work Together
        </a>

        <div className="flex justify-center gap-6 mt-4 text-gray-600">
          <a
            href="https://github.com/SabbyCodingEmpress"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-black" />
          </a>
          <a
            href="www.linkedin.com/in/sabina-c-guerrero-vasquez-179746aa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-black" />
          </a>
        </div>
      </div>
    </section>
  )
}
