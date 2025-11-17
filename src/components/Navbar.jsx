"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = pathname === '/';

  return (
    <nav className="shadow-lg fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <Link href="/" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
              Home
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a href="#about" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                About
              </a>
            ) : (
              <Link href="/#about" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                About
              </Link>
            )}
          </li>
          <li>
            <Link href="/services" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
              Services
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a href="#blogs" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                Blogs
              </a>
            ) : (
              <Link href="/#blogs" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                Blogs
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#contact" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                Contact
              </a>
            ) : (
              <Link href="/#contact" className="nav-link font-semibold transition-colors hover:text-[#8B7355]">
                Contact
              </Link>
            )}
          </li>
        </ul>

        {/* Desktop Get Started Button */}
        <div className="hidden lg:flex items-center">
          {isHomePage ? (
            <a
              className="px-6 py-2 rounded-lg font-medium transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm bg-[#8B7355] text-white hover:bg-[#5C4A3A]"
              href="#contact"
            >
              Get Started
            </a>
          ) : (
            <Link
              className="px-6 py-2 rounded-lg font-medium transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm bg-[#8B7355] text-white hover:bg-[#5C4A3A]"
              href="/#contact"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden border-t shadow-lg transition-all duration-300 bg-[#F5F1E8] ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>

        <ul className="px-4 py-4 space-y-4">
          <li>
            <Link
              href="/"
              className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a
                href="#about"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            ) : (
              <Link
                href="/#about"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            )}
          </li>
          <li>
            <Link
              href="/services"
              className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a
                href="#testimonials"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            ) : (
              <Link
                href="/#testimonials"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a
                href="#contact"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            ) : (
              <Link
                href="/#contact"
                className="block nav-link font-semibold transition-colors py-2 hover:text-[#8B7355]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            )}
          </li>
          <li className="pt-2">
            {isHomePage ? (
              <a
                href="#contact"
                className="block px-6 py-3 rounded-lg font-medium text-center hover:-translate-y-0.5 transform transition-all duration-300 shadow-sm bg-[#8B7355] text-white hover:bg-[#5C4A3A]"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            ) : (
              <Link
                href="/#contact"
                className="block px-6 py-3 rounded-lg font-medium text-center hover:-translate-y-0.5 transform transition-all duration-300 shadow-sm bg-[#8B7355] text-white hover:bg-[#5C4A3A]"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}