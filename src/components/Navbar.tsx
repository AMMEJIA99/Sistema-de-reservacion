// components/Navbar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cambiar estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          TuLogo
        </Link>

        {/* Menú para desktop */}
        <div className="hidden md:flex space-x-8 justify-center w-full">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-white hover:text-blue-300 transition-colors">
            Servicios
          </Link>
          <Link href="/acerca" className="text-white hover:text-blue-300 transition-colors">
            Acerca de
          </Link>
          <Link href="/contacto" className="text-white hover:text-blue-300 transition-colors">
            Contacto
          </Link>
        </div>

        {/* Menú móvil - botón */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil - desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              className="text-white hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/acerca" 
              className="text-white hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              href="/contacto" 
              className="text-white hover:text-blue-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;