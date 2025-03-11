// src/components/Navbar.tsx
"use client"; // Esto es necesario para componentes con interactividad

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Bienestar Holístico
            </Link>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Sobre mi
              </Link>
              <Link
                href="/nosotros"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Servicios que Ofresco
              </Link>
              <Link
                href="/contacto"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Reservas
              </Link>
            </div>
          </div>

          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
