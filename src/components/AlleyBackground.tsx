import React from 'react';

export const AlleyBackground: React.FC = () => {
  return (
    <div className="vintage-alley-backdrop" aria-hidden="true">
      <svg 
        className="alley-svg" 
        viewBox="0 0 300 520" 
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky / Alley Backing Tint - Vintage 1930s Night Sky */}
        <rect width="300" height="520" fill="#23211d" />

        {/* Distant Moon / Spotlight glow */}
        <circle cx="210" cy="80" r="38" fill="#ded7c4" opacity="0.12" />
        <circle cx="210" cy="80" r="28" fill="#ded7c4" opacity="0.2" />

        {/* 1930s City Skyline & Rooftops Silhouette */}
        <path 
          d="M0 200 L35 200 L35 165 L70 165 L70 130 L135 130 L135 185 L180 185 L180 220 L230 220 L230 250 L300 250 L300 520 L0 520 Z" 
          fill="#1b1a18" 
          stroke="#121212"
          strokeWidth="3"
        />

        {/* Brick tenement rooftop windows */}
        <g fill="#454035" stroke="#121212" strokeWidth="1.5">
          <rect x="15" y="175" width="12" height="18" rx="2" />
          <rect x="45" y="140" width="14" height="20" rx="2" />
          <rect x="150" y="195" width="14" height="18" rx="2" />
        </g>

        {/* Chimney on roof */}
        <rect x="80" y="105" width="20" height="26" fill="#35312a" stroke="#121212" strokeWidth="3" />
        <path d="M76 105 L104 105 L102 110 L78 110 Z" fill="#4d473c" stroke="#121212" strokeWidth="2" />
        {/* Animated rubber-hose cartoon smoke puffs */}
        <g className="smoke-puffs" opacity="0.65">
          <circle cx="88" cy="94" r="9" fill="#756f62" stroke="#121212" strokeWidth="1.5" />
          <circle cx="102" cy="80" r="12" fill="#5c574c" stroke="#121212" strokeWidth="1.5" />
          <circle cx="94" cy="62" r="15" fill="#423e36" stroke="#121212" strokeWidth="1.5" />
        </g>

        {/* 1930s Water Tower (Château d'eau) on the roof - High Contrast */}
        <g className="water-tower" transform="translate(145, 60)">
          {/* Conical Roof with wood planks */}
          <polygon points="40,-4 10,26 70,26" fill="#4a4438" stroke="#121212" strokeWidth="4" />
          <line x1="40" y1="-4" x2="40" y2="26" stroke="#121212" strokeWidth="3" />
          <line x1="25" y1="11" x2="25" y2="26" stroke="#121212" strokeWidth="2" />
          <line x1="55" y1="11" x2="55" y2="26" stroke="#121212" strokeWidth="2" />
          {/* Lightning rod finial */}
          <line x1="40" y1="-4" x2="40" y2="-16" stroke="#121212" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="40" cy="-16" r="3" fill="#ded7c4" stroke="#121212" strokeWidth="1.5" />

          {/* Wooden Barrel Tank Body */}
          <rect x="15" y="26" width="50" height="46" rx="2" fill="#5e5647" stroke="#121212" strokeWidth="4" />
          {/* Iron hoops around water tower */}
          <line x1="15" y1="36" x2="65" y2="36" stroke="#121212" strokeWidth="4.5" />
          <line x1="15" y1="50" x2="65" y2="50" stroke="#121212" strokeWidth="4.5" />
          <line x1="15" y1="64" x2="65" y2="64" stroke="#121212" strokeWidth="4.5" />
          {/* Wood staves vertical lines */}
          <line x1="25" y1="26" x2="25" y2="72" stroke="#121212" strokeWidth="2" />
          <line x1="40" y1="26" x2="40" y2="72" stroke="#121212" strokeWidth="2" />
          <line x1="55" y1="26" x2="55" y2="72" stroke="#121212" strokeWidth="2" />

          {/* Crooked wooden stilts / legs & crossbracing */}
          <line x1="20" y1="72" x2="10" y2="108" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
          <line x1="60" y1="72" x2="70" y2="108" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
          <line x1="40" y1="72" x2="40" y2="108" stroke="#121212" strokeWidth="4" />
          {/* X crossbraces */}
          <line x1="18" y1="76" x2="62" y2="100" stroke="#121212" strokeWidth="3" />
          <line x1="62" y1="76" x2="18" y2="100" stroke="#121212" strokeWidth="3" />
        </g>

        {/* Foreground Brick Alley Wall */}
        <path d="M0 220 L195 220 L215 240 L215 520 L0 520 Z" fill="#3a352c" stroke="#121212" strokeWidth="5" />

        {/* Brick Hatching Details */}
        <g stroke="#1a1815" strokeWidth="2.5" opacity="0.9">
          <line x1="10" y1="250" x2="190" y2="250" />
          <line x1="10" y1="280" x2="200" y2="280" />
          <line x1="10" y1="310" x2="205" y2="310" />
          <line x1="10" y1="340" x2="205" y2="340" />
          <line x1="10" y1="370" x2="205" y2="370" />
          <line x1="10" y1="400" x2="205" y2="400" />
          <line x1="10" y1="430" x2="205" y2="430" />
          <line x1="10" y1="460" x2="205" y2="460" />

          {/* Vertical mortar cuts */}
          <line x1="45" y1="220" x2="45" y2="250" />
          <line x1="120" y1="220" x2="120" y2="250" />
          <line x1="80" y1="250" x2="80" y2="280" />
          <line x1="155" y1="250" x2="155" y2="280" />
          <line x1="45" y1="280" x2="45" y2="310" />
          <line x1="120" y1="280" x2="120" y2="310" />
          <line x1="80" y1="310" x2="80" y2="340" />
          <line x1="155" y1="310" x2="155" y2="340" />
          <line x1="40" y1="340" x2="40" y2="370" />
          <line x1="115" y1="340" x2="115" y2="370" />
        </g>

        {/* Hand-Drawn "WANTED" Posters on Brick Wall */}
        <g className="wanted-posters">
          {/* Poster 1: SLICK PETE */}
          <g transform="translate(18, 235) rotate(-3)">
            {/* Paper backing with pin */}
            <rect x="0" y="0" width="80" height="102" fill="#ebe4ce" stroke="#121212" strokeWidth="3.5" rx="3" />
            <circle cx="40" cy="7" r="3.5" fill="#121212" /> {/* Pushpin */}
            <text x="40" y="21" textAnchor="middle" fontFamily="'Chewy', cursive, sans-serif" fontSize="13" fill="#121212" fontWeight="bold">WANTED</text>
            <text x="40" y="30" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fontWeight="bold" fill="#121212">DEAD OR ALIVE</text>
            {/* Mugshot frame */}
            <rect x="13" y="33" width="54" height="44" fill="#faf6ea" stroke="#121212" strokeWidth="2.5" />
            {/* Cartoon Mugshot (Slick Pete with robber cap and mask) */}
            <ellipse cx="40" cy="53" rx="15" ry="13" fill="#222" />
            <ellipse cx="36" cy="52" rx="3.5" ry="4.5" fill="#faf6ea" />
            <ellipse cx="44" cy="52" rx="3.5" ry="4.5" fill="#faf6ea" />
            <circle cx="37" cy="52" r="1.8" fill="#121212" />
            <circle cx="45" cy="52" r="1.8" fill="#121212" />
            <path d="M35 60 Q40 63 45 60" stroke="#faf6ea" strokeWidth="2" fill="none" />
            <path d="M23 46 L57 44" stroke="#121212" strokeWidth="3.5" strokeLinecap="round" /> {/* Cap brim */}
            <path d="M28 44 Q40 34 52 44" fill="#121212" /> {/* Cap dome */}
            {/* Reward */}
            <text x="40" y="88" textAnchor="middle" fontFamily="'Chewy', cursive, sans-serif" fontSize="10" fill="#121212" fontWeight="bold">REWARD $500</text>
            <text x="40" y="97" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#121212">"SLICK PETE"</text>
          </g>

          {/* Poster 2: THE CHEATING BOT */}
          <g transform="translate(110, 248) rotate(4)">
            <rect x="0" y="0" width="76" height="96" fill="#ded5bd" stroke="#121212" strokeWidth="3.5" rx="3" />
            <circle cx="38" cy="6" r="3.5" fill="#121212" />
            <text x="38" y="20" textAnchor="middle" fontFamily="'Chewy', cursive, sans-serif" fontSize="12" fill="#121212" fontWeight="bold">WANTED</text>
            <rect x="13" y="26" width="50" height="40" fill="#f4eee0" stroke="#121212" strokeWidth="2.5" />
            {/* Cartoon Bot Face */}
            <rect x="24" y="34" width="28" height="22" rx="4" fill="#3a3a3a" stroke="#121212" strokeWidth="2.5" />
            <circle cx="31" cy="43" r="3.5" fill="#f4eee0" />
            <circle cx="45" cy="43" r="3.5" fill="#f4eee0" />
            <circle cx="31" cy="43" r="1.8" fill="#121212" />
            <circle cx="45" cy="43" r="1.8" fill="#121212" />
            <line x1="38" y1="34" x2="38" y2="28" stroke="#121212" strokeWidth="2.5" />
            <circle cx="38" cy="27" r="3" fill="#121212" />
            <text x="38" y="78" textAnchor="middle" fontFamily="'Chewy', cursive, sans-serif" fontSize="10" fill="#121212" fontWeight="bold">MAD BOT</text>
            <text x="38" y="89" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#121212">$1,000,000</text>
          </g>
        </g>

        {/* Vintage Street Lamp (Réverbère) casting high-contrast light */}
        <g className="street-lamp" transform="translate(190, 160)">
          {/* Post bracket */}
          <path d="M15 190 L15 65 Q15 35 42 35 L48 35" fill="none" stroke="#121212" strokeWidth="7" strokeLinecap="round" />
          <path d="M15 85 L38 55" stroke="#121212" strokeWidth="3.5" />
          {/* Lantern housing */}
          <polygon points="40,35 56,35 62,55 34,55" fill="#38342c" stroke="#121212" strokeWidth="3.5" />
          <polygon points="36,55 60,55 54,75 42,75" fill="#faf6ea" stroke="#121212" strokeWidth="3.5" />
          <circle cx="48" cy="65" r="5.5" fill="#fff" />
          {/* Light cone hatching - Warm translucent cartoon ray */}
          <polygon points="48,75 -20,240 140,240" fill="#faf6ea" opacity="0.12" />
        </g>

        {/* Stacked Wooden Barrels (Tonneaux) in Alley */}
        <g className="wooden-barrels" transform="translate(25, 375)">
          {/* Barrel 1 (Bottom Left) */}
          <g className="barrel barrel-left">
            <path 
              d="M10 50 C2 72 2 105 10 125 L70 125 C78 105 78 72 70 50 Z" 
              fill="#635441" 
              stroke="#121212" 
              strokeWidth="5.5" 
            />
            {/* Staves vertical wood grain */}
            <path d="M25 50 C19 72 19 105 25 125" stroke="#121212" strokeWidth="3" fill="none" />
            <path d="M40 50 C40 72 40 105 40 125" stroke="#121212" strokeWidth="3" fill="none" />
            <path d="M55 50 C61 72 61 105 55 125" stroke="#121212" strokeWidth="3" fill="none" />
            {/* Iron hoops */}
            <path d="M7 68 L73 68" stroke="#121212" strokeWidth="5.5" />
            <path d="M3 88 L77 88" stroke="#121212" strokeWidth="6" />
            <path d="M7 110 L73 110" stroke="#121212" strokeWidth="5.5" />
            {/* Wood knot */}
            <ellipse cx="48" cy="78" rx="3.5" ry="2.5" fill="#121212" />
          </g>

          {/* Barrel 2 (Bottom Right) */}
          <g className="barrel barrel-right" transform="translate(62, 10)">
            <path 
              d="M10 40 C2 62 2 95 10 115 L70 115 C78 95 78 62 70 40 Z" 
              fill="#524433" 
              stroke="#121212" 
              strokeWidth="5.5" 
            />
            <path d="M25 40 C19 62 19 95 25 115" stroke="#121212" strokeWidth="3" fill="none" />
            <path d="M40 40 C40 62 40 95 40 115" stroke="#121212" strokeWidth="3" fill="none" />
            <path d="M55 40 C61 62 61 95 55 115" stroke="#121212" strokeWidth="3" fill="none" />
            <path d="M7 58 L73 58" stroke="#121212" strokeWidth="5.5" />
            <path d="M3 78 L77 78" stroke="#121212" strokeWidth="6" />
            <path d="M7 100 L73 100" stroke="#121212" strokeWidth="5.5" />
            <ellipse cx="36" cy="68" rx="4" ry="2.5" fill="#121212" />
          </g>

          {/* Ground Cobblestone / Alley pavement shadow */}
          <ellipse cx="75" cy="130" rx="72" ry="10" fill="#121212" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
};
