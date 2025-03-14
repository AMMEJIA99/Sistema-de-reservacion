// components/ThreeDScene.jsx
"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Componente del modelo 3D
function Model({ url }) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene } = useGLTF(url);

  
  useEffect(() => {
    if (scene) {
      // Calcula la caja de delimitación (bounding box) del modelo
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      
      // Centra el modelo
      scene.position.x = -center.x;
      scene.position.y = -center.y;
      scene.position.z = -center.z;
      
      // Escala el modelo para asegurarte de que sea visible
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scale = 2 / maxDim;
        scene.scale.set(scale, scale, scale);
      }
      
      console.log("Modelo cargado correctamente:", {
        url,
        size: size,
        center: center
      });
      
      setModelLoaded(true);
    }
  }, [scene, url]);
  
  return <primitive object={scene} />;
}

// Componente para mostrar mientras carga
const LoadingFallback = () => (
  <>
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#cccccc" />
    </mesh>
    <directionalLight position={[1, 1, 1]} />
  </>
);

export default function ThreeDScene() {
  const [isClient, setIsClient] = useState(false);
  const [modelUrl, setModelUrl] = useState('/models/duck.glb');
  
  // Ensure rendering only happens client-side
  useEffect(() => {
    setIsClient(true);
    console.log("Intentando cargar modelo 3D:", modelUrl);
    
    // Pre-cargar para verificar si el archivo existe
    fetch(modelUrl)
      .then(response => {
        if (!response.ok) {
          console.error(`Archivo no encontrado: ${modelUrl}`);
          // Si el archivo principal no existe, intenta una alternativa conocida
          setModelUrl('/models/duck.glb');
        } else {
          console.log(`Archivo encontrado: ${modelUrl}`);
        }
      })
      .catch(error => {
        console.error("Error al verificar el archivo:", error);
      });
  }, [modelUrl]);
  
  if (!isClient) {
    return null; // No renderizar nada en SSR
  }
  
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: '#000' }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#060606']} />
        
        <Suspense fallback={<LoadingFallback />}>
          <Model url={modelUrl} />
          <Environment preset="sunset" />
        </Suspense>
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Añadir controles de órbita para poder navegar */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={10}
        />
        
        {/* Añade una cuadrícula para referencia (opcional - puedes quitar esto) */}
        <gridHelper args={[10, 10, `#666666`, `#444444`]} />
      </Canvas>
    </div>
  );
}