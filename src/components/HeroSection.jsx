"use client";

import React, { useEffect, useState } from "react";
import SplineScene from "./SplineScene";
import { AnimatedModalDemo } from "./features/hero";

const HeroSection = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Secuencia de animación con temporizadores
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 1800);

    // Limpieza de temporizadores
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0" style={{ height: "100%" }}>
        <SplineScene
          modelPath="/lotus.glb"
          scale={2}
          position={[0, -1, 0]}
          rotation={[0, 0, 0]}
          showStars={true}
          environmentPreset="sunset"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

      <div className="relative z-20 flex flex-col items-start justify-start pt-40 h-full px-6 md:px-12 lg:px-24">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl  font-bold text-white mb-4 transition-opacity duration-1000 ${
            showTitle ? "opacity-100" : "opacity-0"
          }`}
        >
          Bienvenido a Bienestar Holistico con Ivett
        </h1>
        <p
          className={`text-xl md:text-1xl text-white/90 mb-0 max-w-xl transition-all duration-1000 ${
            showSubtitle
              ? "opacity-100 transform-none"
              : "opacity-0 translate-y-4"
          }`}
        >
          Aquí encontrarás herramientas y prácticas adaptadas a la vida
          contemporánea para nutrir tu cuerpo, equilibrar tu mente, sanar
          emociones y fortalecer tu conexión espiritual.
        </p>
        <AnimatedModalDemo></AnimatedModalDemo>
      </div>
    </section>
  );
};

export default HeroSection;
