import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Sección de servicios */}
      <section
        className="relative py-16 bg-[#f5f1ea]"
        style={{
          backgroundImage: 'url("/imagenes/textura.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Ofrecemos soluciones de alta calidad adaptadas a tus necesidades
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Tarjeta de servicio 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Diseño Web
                </h3>
                <p className="text-gray-600">
                  Creamos diseños modernos y atractivos que capturan la esencia
                  de tu marca.
                </p>
              </div>
            </div>

            {/* Tarjeta de servicio 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Desarrollo Frontend
                </h3>
                <p className="text-gray-600">
                  Implementamos interfaces de usuario responsivas con las
                  últimas tecnologías.
                </p>
              </div>
            </div>

            {/* Tarjeta de servicio 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  APIs Backend
                </h3>
                <p className="text-gray-600">
                  Desarrollamos APIs robustas y escalables para potenciar tus
                  aplicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Acerca de Nosotros */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre Nosotros
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Conoce más sobre nuestro equipo y nuestra misión
            </p>
          </div>

          <div className="mt-12 text-gray-600">
            <p className="mb-4">
              Somos un equipo de desarrolladores apasionados por crear
              soluciones web innovadoras. Nos especializamos en el desarrollo
              frontend y backend utilizando las tecnologías más modernas.
            </p>
            <p>
              Nuestra misión es ayudar a nuestros clientes a alcanzar sus
              objetivos a través de soluciones digitales de alta calidad y
              fáciles de usar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
