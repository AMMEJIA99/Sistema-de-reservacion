// components/SketchfabModel.jsx
"use client";

import React from 'react';

const SketchfabModel = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Lotus Flame Meditation"
        className="w-full h-full absolute top-0 left-0"
        src="https://sketchfab.com/models/8e3b58fd222c4419a41710d4e8dba448/embed?autospin=1&autostart=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_attribution=0"
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
  );
};

export default SketchfabModel;