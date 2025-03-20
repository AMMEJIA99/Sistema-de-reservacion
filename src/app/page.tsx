import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { Lamp } from "@/components/features/lamp";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Sección de servicios con fondo ajustado para el componente Lamp */}
      <section className="bg-[#020203] py-0">
        <Lamp>
          {/* Tarjeta de servicio 1 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/20">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Prácticas Corporales
              </h3>
              <p className="text-slate-300">
                ● Yoga para todos los niveles <br></br>● Yoga Prenatal <br></br>
                ● Pranayama (técnicas de respiración)
              </p>
            </div>
          </div>

          {/* Tarjeta de servicio 2 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/20">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Acompañamiento Personal
              </h3>
              <p className="text-slate-300">
                ● Coaching de bienestar integral <br></br>● Acompañamiento en
                crisis vitales <br></br>● Programa de Reducción de Estrés
              </p>
            </div>
          </div>

          {/* Tarjeta de servicio 3 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/20">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Prácticas Devocionales
              </h3>
              <p className="text-slate-300">
                ● Chanting y recitación de mantras <br></br>● Meditación guiada{" "}
                <br></br>● Retiros espirituales
              </p>
            </div>
          </div>

          {/* Tarjeta de servicio 4 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/20">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Conocimiento y Filosofía
              </h3>
              <p className="text-slate-300">
                ● Talleres de filosofía yóguica <br></br> ● Introducción al Ayurveda <br></br>
                ●Psicología Positiva y Holística
              </p>
            </div>
          </div>
        </Lamp>
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
