// components/ThreeDSceneWithErrorHandling.jsx
"use client";

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function ErrorFallback() {
  return (
    <Html center>
      <div className="bg-black/80 text-white p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Error al cargar el modelo</h3>
        <p>No se pudo cargar el modelo 3D. Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    </Html>
  );
}

function LoadingIndicator() {
  return (
    <Html center>
      <div className="bg-black/80 text-white p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Cargando modelo...</h3>
        <div className="loader w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto animate-spin"></div>
      </div>
    </Html>
  );
}

export default function ThreeDSceneWithErrorHandling({ modelPath = '/models/duck.glb'}) {
  return (
    <div className="w-full h-full absolute inset-0">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={<LoadingIndicator />}>
            <Model url={modelPath} />
            <Environment preset="sunset" />
          </Suspense>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}