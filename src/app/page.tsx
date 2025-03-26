import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { Lamp } from "@/components/features/lamp";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Div de transición con degradado */}
      <div className="relative w-full h-28 -mt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-green-900/30 to-[#2C3E50] w-full h-full z-30"></div>
      </div>

      {/* Sección de servicios con fondo ajustado para el componente Lamp */}
      <section id="servicios" className="  py-0 relative z-70">
        <Lamp>
          {/* Tarjeta de servicio 1 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-br-4xl rounded-tl-4xl  shadow-md overflow-hidden border border-white/20">
            <div className="h-45 w-full overflow-hidden p-0">
              <img
                src="./imagenes/Prenatal.jpg"
                alt="Prácticas Corporales"
                className="w-full h-full object-cover rounded-tl-4xl rounded-br-3xl hover:scale-105 "
              />
            </div>
            {/* Div de transición con degradado */}
            <div className="relative w-full h-35 -mt-35">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-blue-800/30 to-[#0a1f1c] w-full h-full z-30"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 ">
                Prácticas Corporales
              </h3>
              <p className="text-slate-300 text-m">
                ● Yoga para todos los niveles <br></br>● Yoga Prenatal <br></br>
                ● Pranayama (técnicas de respiración)
              </p>
              <button
                className="bg-amber-300 text-white 
                   mt-3 ml-28 rounded-tl-4xl rounded-br-3xl w-28 h-8 
                   whitespace-nowrap text-xs 
                   transition-all duration-300 transform hover:scale-105 
                   shadow-md"
              >
                Mas informacion
              </button>
            </div>
          </div>

          {/* Tarjeta de servicio 2 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-br-4xl rounded-tl-4xl shadow-md overflow-hidden border border-white/20">
            <div className="h-45 w-full overflow-hidden p-0">
              <img
                src="./imagenes/card2.jpg"
                alt="Prácticas Corporales"
                className="w-full h-full object-cover rounded-tl-4xl rounded-br-3xl hover:scale-105 "
              />
            </div>
            <div className="relative w-full h-35 -mt-35">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-emerald-900/30 to-[#0a1f1c] w-full h-full z-30"></div>
            </div>
            <div className="p-6">
              {/* Div de transición con degradado */}
              <h3 className="text-xl font-semibold text-white mb-2">
                Asesoría personal
              </h3>
              <p className="text-slate-300 text-m">
                ● Coaching de bienestar <br></br>● Acompañamiento en crisis{" "}
                <br></br>● Programa para reducir estrés
              </p>
            </div>
          </div>

          {/* Tarjeta de servicio 3 */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-br-4xl rounded-tl-4xl shadow-md overflow-hidden border border-white/20">
            <div className="h-45 w-full overflow-hidden p-0">
              <img
                src="./imagenes/card3.jpg"
                alt="Prácticas Corporales"
                className="w-full h-full object-cover rounded-tl-4xl rounded-br-3xl hover:scale-105 "
              />
            </div>
            {/* Div de transición con degradado */}
            <div className="relative w-full h-35 -mt-35">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-emerald-900/30 to-[#0a1f1c] w-full h-full z-30"></div>
            </div>
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
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-br-4xl rounded-tl-4xl shadow-md overflow-hidden border border-white/20">
            <div className="h-45 w-full overflow-hidden p-0">
              <img
                src="./imagenes/card4.jpg"
                alt="Prácticas Corporales"
                className="w-full h-full object-cover rounded-tl-4xl rounded-br-3xl hover:scale-105 "
              />
            </div>
            {/* Div de transición con degradado */}
            <div className="relative w-full h-35 -mt-35">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-amber-700/30 to-[#0a1f1c] w-full h-full z-30"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Conocimiento filosófico
              </h3>
              <p className="text-slate-300">
                ● Talleres de filosofía yóguica <br></br> ● Introducción al
                Ayurveda <br></br>
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
