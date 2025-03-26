"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundGradient } from "../ui/background-gradient";

export function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500904156668-758cff89dcff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1628642477705-7d953193c5aa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-[#e1c883] dark:bg-teal-700 text-black flex justify-center group/modal-btn rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Nuestro Enfoque
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🧘​
          </div>
        </ModalTrigger>
        <ModalBody className="mt-6">
          <BackgroundGradient className="bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-900/20 dark:to-purple-900/20 ">
            <ModalContent className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-teal-100 dark:border-teal-800 max-h-[80vh]  mt-2">
              <div className="p-0 -mt-8">
                <h4 className="text-lg md:text-2xl text-teal-700 dark:text-teal-300 font-bold text-center mb-4">
                  Promoviendo una salud sostenible y una vida{" "}
                  <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Plena
                  </span>{" "}
                  ☀️​
                </h4>
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-gray-800 border border-teal-100 dark:border-teal-800 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="imágenes de bienestar"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-10 flex flex-wrap gap-x-4 gap-y-3 items-start justify-start max-w-sm mx-auto">
                  <div className="flex items-center justify-center p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300">
                    <Heart className="mr-2 text-rose-500 dark:text-rose-400 h-5 w-5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      prácticas que fortalecen y equilibran el cuerpo.
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300">
                    <Handshake className="mr-2 text-purple-500 dark:text-purple-400 h-5 w-5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      herramientas para gestionar pensamientos y estrés
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300">
                    <Rotate className="mr-2 text-teal-500 dark:text-teal-400 h-5 w-5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      reconocer, aceptar y transformar nuestras emociones.
                    </span>
                  </div>
                </div>
              </div>
            </ModalContent>
          </BackgroundGradient>
        </ModalBody>
      </Modal>
    </div>
  );
}

const Heart = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
};

const Handshake = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
};

const Rotate = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
    </svg>
  );
};
