'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Your Name
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-600">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 