import Link from 'next/link';


export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold mb-2">Sabina Guerrero</p>
          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
  