'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">
          Zah G
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-950 font-bold hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-950 font-bold hover:text-purple-600 transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-gray-950 font-bold hover:text-purple-600 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-950 font-bold hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 