"use client";

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars, useAnimations } from '@react-three/drei';

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, groupRef);

  // Activar la primera animación si existe
  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  // Rotación automática del modelo
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" wireframe />
    </mesh>
  );
}

export default function AdvancedThreeDScene({
  modelPath = "/lotus.glb",
  scale = 0.5,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  showStars = true,
  environmentPreset = "sunset"
}) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <Model
            url={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
          />
          <Environment preset={environmentPreset} />
          {showStars && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />}
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
}
