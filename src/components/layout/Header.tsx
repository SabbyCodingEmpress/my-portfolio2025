'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-right justify-between h-16">
          <div className="site-name text-4xl  font-bold tracking-tight text-white">
            Zah 
          </div>
          <ul className="hidden md:flex space-x-6 text-sm font-semibold text-white">
            <li>
              <Link href="#home" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-black transition">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-black transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-black transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
