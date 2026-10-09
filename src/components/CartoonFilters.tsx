import React from 'react';

export const CartoonFilters: React.FC = () => {
  return (
    <svg className="svg-filters" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        {/* Hand-drawn ink pen wobble filter */}
        <filter id="hand-drawn-ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Film grain noise filter */}
        <filter id="film-grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.18 0" />
        </filter>
      </defs>
    </svg>
  );
};
