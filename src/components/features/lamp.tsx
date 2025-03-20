"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export function Lamp({children}) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-15 bg-gradient-to-br from-slate-100 to-slate-200 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
      >
Nuestros Servicios      </motion.h1>

      {/* Contenedor para las tarjetas con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </LampContainer>
  );
}
