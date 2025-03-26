"use client";

import React, { useEffect, useState } from "react";
import { AnimatedModalDemo } from "./features/hero";

const HeroSection = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Secuencia de animación con temporizadores
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 1800);

    // Función para manejar el scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Agregar event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza de temporizadores
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Primera Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagenes/fondo2.jpg')", // Nombre de la imagen de fondo
          backgroundSize: "100%", // Amplía la imagen para mayor panorama
          transform: `translateY(${scrollPosition * 0.3}px)`, // Movimiento más lento
          height: "100vh",
        }}
      ></div>

      {/* Segunda imagen de fondo (más rápida, más cercana) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagenes/peña.png')", // Reemplaza con tu segunda imagen
          backgroundPosition: "center 75%", // Muestra la parte superior de la imagen
          transform: `translateY(${scrollPosition * 0.6}px)`, // Movimiento más rápido
          height: "100vh",
          opacity: 0.9,
          zIndex: 5,
          marginRight: 80,
        }}
      ></div>

      {/* Tercera imagen de fondo (más rápida, más cercana) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagenes/bird2.png')", // Reemplaza con tu segunda imagen
          transform: `translateY(${scrollPosition * 0.6}px)`, // Movimiento más rápido
          height: "100vh",
          opacity: 0.9,
          zIndex: 5,
        }}
      ></div>
      {/* Cuarta imagen de fondo (más rápida, más cercana) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagenes/bird1.png')", // Reemplaza con tu segunda imagen
          transform: `translateY(${scrollPosition * 0.4}px)`, // Movimiento más rápido
          height: "100vh",
          opacity: 0.7,
          zIndex: 5,
          scale: 0.7,
          zoom: 1,
        }}
      ></div>

     {/*<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>*/}

      <div className="relative z-20 flex flex-col items-end pt-27 h-full px-6 md:px-12 lg:px-24">
        <div
          className="w-full md:w-3/4 lg:w-2/3 text-left"
          style={{ paddingRight: "2rem" }}
        >
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl  font-bold text-black mb-4 transition-opacity duration-1000 whitespace-nowrap ${
              showTitle ? "opacity-100" : "opacity-0"
            }`}
          >
            Bienestar Holistico con Ivett
          </h1>
          <br></br>
          <p
            className={`text-xl md:text-1xl text-green-950/90 mb-0 max-w-xl transition-all duration-1000 ${
              showSubtitle
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            }`}
          >
            Aquí encontrarás herramientas y prácticas para nutrir tu cuerpo,
            equilibrar tu mente, sanar heridas emocionales y fortalecer tu
            conexión espiritual.
          </p>
          <div className="-mt-27" style={{marginRight:120,}}>
            <AnimatedModalDemo></AnimatedModalDemo>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
