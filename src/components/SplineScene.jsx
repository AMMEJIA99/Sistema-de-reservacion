// components/SplineScene.jsx
"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spline scene="https://prod.spline.design/y8z0ZsLzQvBJnULf/scene.splinecode" />
    </div>
  );
}