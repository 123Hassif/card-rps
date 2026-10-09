import React from 'react';
import { CardType } from '../game/types';

interface CharacterProps {
  size?: number;
  className?: string;
}

const RIVET_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

// Reusable 1930s Porthole / Hublot frame with brass rim, rivets, and halftone dots
const PortholeFrame: React.FC = () => {
  return (
    <g className="porthole-frame-group">
      <defs>
        {/* Halftone comic dot pattern */}
        <pattern id="halftone-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.4" fill="#222" opacity="0.45" />
        </pattern>
      </defs>

      {/* Frame drop shadow */}
      <circle cx="120" cy="125" r="76" fill="#121212" opacity="0.35" />

      {/* Outer Metallic Rim with Bevel */}
      <circle cx="120" cy="120" r="76" fill="#cbb382" stroke="#121212" strokeWidth="5.5" />
      <circle cx="120" cy="120" r="70" fill="none" stroke="#9c8453" strokeWidth="2.5" />
      
      {/* Inner Rim */}
      <circle cx="120" cy="120" r="62" fill="#ede6d4" stroke="#121212" strokeWidth="4.5" />

      {/* Halftone Comic Dots Pattern Background */}
      <circle cx="120" cy="120" r="60" fill="url(#halftone-pattern)" />

      {/* 8 Rivets / Screws around the brass rim */}
      {RIVET_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const rx = 120 + 68.5 * Math.cos(rad);
        const ry = 120 + 68.5 * Math.sin(rad);
        return (
          <g key={angle} transform={`translate(${rx}, ${ry})`}>
            <circle cx="0" cy="0" r="3.6" fill="#eae1cb" stroke="#121212" strokeWidth="1.8" />
            <circle cx="-0.8" cy="-0.8" r="1.2" fill="#fff" />
          </g>
        );
      })}
    </g>
  );
};

export const RockCharacter: React.FC<CharacterProps> = ({ size = 180, className = '' }) => {
  return (
    <svg 
      className={`rubber-hose-character rock-char ${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      {/* Porthole Frame Backing */}
      <PortholeFrame />

      {/* Character Group: Pierre with arms popping out */}
      <g className="rock-body-group">
        {/* Boulder Drop Shadow */}
        <ellipse cx="120" cy="166" rx="46" ry="10" fill="#121212" opacity="0.35" />

        {/* LEFT RUBBER HOSE ARM (popping out of frame with open white glove) */}
        <g className="left-arm-out">
          {/* Black Hose Arm */}
          <path 
            d="M84 126 C58 132 42 142 28 142" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="11" 
            strokeLinecap="round" 
          />
          {/* White Cartoon Glove with 4 fingers */}
          <g transform="translate(18, 142)">
            {/* Glove Cuff */}
            <ellipse cx="12" cy="0" rx="6" ry="10" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Palm */}
            <ellipse cx="2" cy="0" rx="12" ry="11" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Thumb */}
            <path d="M4 -8 C1 -15 -8 -12 -5 -4" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            {/* 4 Fingers extended */}
            <path d="M-8 -6 C-15 -6 -15 0 -8 2" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <path d="M-8 2 C-16 3 -16 9 -8 9" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <path d="M-6 8 C-13 10 -12 16 -5 13" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            {/* 3 Stitched Darts on Glove */}
            <path d="M2 -4 L8 -4 M2 0 L8 0 M2 4 L8 4" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* RIGHT RUBBER HOSE ARM (raised in triumphant fist popping out) */}
        <g className="right-arm-out">
          <path 
            d="M156 126 C176 122 188 112 198 100" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="11" 
            strokeLinecap="round" 
          />
          {/* White Clenched Fist Glove */}
          <g transform="translate(202, 94)">
            {/* Glove Cuff */}
            <ellipse cx="-4" cy="8" rx="6" ry="10" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Fist mass */}
            <ellipse cx="6" cy="0" rx="14" ry="12" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Curled thumb over knuckles */}
            <path d="M-2 4 Q6 10 14 2" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Knuckles definition */}
            <path d="M4 -8 L4 0 M10 -6 L10 2 M16 -2 L16 4" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
            {/* 3 Darts */}
            <path d="M0 -3 L-5 -3 M-1 1 L-6 1 M0 5 L-5 5" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Craggy Boulder Body */}
        <path 
          d="M80 142 C70 120 74 95 90 76 C105 60 134 60 150 74 C166 88 170 118 160 144 C150 162 135 168 120 168 C98 168 86 160 80 142 Z"
          fill="#8e897e" 
          stroke="#121212" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />

        {/* Rock texture, crag lines & stipples */}
        <path d="M88 100 L96 95 L98 104" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M142 86 L150 92 L146 100" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M84 135 L92 132" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M152 136 L144 134" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="92" cy="115" r="2" fill="#121212" />
        <circle cx="148" cy="118" r="2.2" fill="#121212" />

        {/* Expressive Face (Cuphead / 1930s style) */}
        <g className="rock-face">
          {/* Curved arched eyebrows */}
          <path d="M96 82 Q108 72 116 80" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M124 80 Q132 72 144 82" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />

          {/* Left Eye: White Cornea + Pie-Cut Black Pupil */}
          <g className="eye left-eye">
            <ellipse cx="107" cy="98" rx="10" ry="14" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            <ellipse cx="108" cy="98" rx="7.5" ry="11" fill="#121212" />
            {/* Pie Cut Triangle Notch */}
            <polygon points="108,98 100,95 104,89" fill="#faf7ee" />
          </g>

          {/* Right Eye: White Cornea + Pie-Cut Black Pupil */}
          <g className="eye right-eye">
            <ellipse cx="133" cy="98" rx="10" ry="14" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            <ellipse cx="134" cy="98" rx="7.5" ry="11" fill="#121212" />
            <polygon points="134,98 126,95 130,89" fill="#faf7ee" />
          </g>

          {/* Cute Round Button Nose */}
          <ellipse cx="120" cy="112" rx="4.5" ry="4" fill="#121212" />
          <ellipse cx="119" cy="111" rx="1.5" ry="1" fill="#faf7ee" />

          {/* Wide Toothy Smile (Double row of clean square teeth) */}
          <g className="rock-mouth">
            <path 
              d="M94 124 Q120 144 146 124 Q120 162 94 124 Z" 
              fill="#121212" 
              stroke="#121212" 
              strokeWidth="4" 
              strokeLinejoin="round" 
            />
            {/* White Teeth Interior Grid */}
            <path 
              d="M96 126 Q120 144 144 126 Q120 158 96 126 Z" 
              fill="#faf7ee" 
            />
            {/* Horizontal midline dividing teeth */}
            <path d="M96 136 Q120 152 144 136" stroke="#121212" strokeWidth="2.5" fill="none" />
            {/* Vertical tooth separators */}
            <line x1="106" y1="128" x2="105" y2="144" stroke="#121212" strokeWidth="2" />
            <line x1="115" y1="131" x2="114" y2="149" stroke="#121212" strokeWidth="2" />
            <line x1="125" y1="131" x2="126" y2="149" stroke="#121212" strokeWidth="2" />
            <line x1="134" y1="128" x2="135" y2="144" stroke="#121212" strokeWidth="2" />
            {/* Cheek Smile Creases */}
            <path d="M90 120 Q92 127 96 125" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
            <path d="M150 120 Q148 127 144 125" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const PaperCharacter: React.FC<CharacterProps> = ({ size = 180, className = '' }) => {
  return (
    <svg 
      className={`rubber-hose-character paper-char ${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      {/* Porthole Frame Backing */}
      <PortholeFrame />

      {/* Character Group: Parchemin / Scroll */}
      <g className="paper-body-group">
        {/* Shadow */}
        <ellipse cx="120" cy="166" rx="44" ry="10" fill="#121212" opacity="0.35" />

        {/* LEFT RUBBER HOSE ARM (raised high and waving enthusiastically!) */}
        <g className="left-arm-wave">
          <path 
            d="M84 105 C60 95 48 78 38 65" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="10" 
            strokeLinecap="round" 
          />
          {/* Waving Open White Cartoon Glove */}
          <g transform="translate(30, 52)">
            {/* Glove Cuff */}
            <ellipse cx="10" cy="14" rx="8" ry="5" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Palm */}
            <ellipse cx="6" cy="4" rx="12" ry="10" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            {/* Thumb */}
            <path d="M-2 4 C-8 0 -5 -7 1 -5" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            {/* 4 Fingers waving up */}
            <path d="M2 -5 C1 -13 6 -14 7 -6" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            <path d="M7 -6 C8 -14 13 -14 14 -5" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            <path d="M14 -5 C15 -13 20 -12 19 -3" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            <path d="M18 -2 C22 -6 25 -2 21 3" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            {/* 3 Stitched Darts */}
            <path d="M4 2 L4 8 M8 2 L8 9 M12 3 L12 8" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* RIGHT RUBBER HOSE ARM (pointing down/right with white glove) */}
        <g className="right-arm-down">
          <path 
            d="M156 115 C176 122 188 132 198 145" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="10" 
            strokeLinecap="round" 
          />
          {/* White Glove */}
          <g transform="translate(204, 150)">
            <ellipse cx="-6" cy="-4" rx="6" ry="9" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            <ellipse cx="4" cy="2" rx="12" ry="10" fill="#faf7ee" stroke="#121212" strokeWidth="3.5" />
            <path d="M-1 7 C3 14 11 11 9 4" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <path d="M12 -2 C18 -2 18 4 12 6" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            <path d="M11 4 C17 6 16 11 10 10" fill="#faf7ee" stroke="#121212" strokeWidth="2.5" />
            <path d="M3 -1 L3 5 M6 -1 L6 6 M9 0 L9 5" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Rolled Parchment Scroll Body */}
        {/* Main Sheet */}
        <path 
          d="M86 78 C84 105 84 135 86 160 C110 166 130 166 154 160 C156 135 156 105 154 78 Z"
          fill="#fbf9f2" 
          stroke="#121212" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />

        {/* Top Horizontal Scroll Roll */}
        <path 
          d="M80 72 C80 62 95 56 120 56 C145 56 160 62 160 72 C160 82 145 88 120 88 C95 88 80 82 80 72 Z"
          fill="#ebe3ce" 
          stroke="#121212" 
          strokeWidth="5.5"
        />
        {/* Top roll side cylinder curl */}
        <ellipse cx="160" cy="72" rx="7" ry="11" fill="#ded4bd" stroke="#121212" strokeWidth="3.5" />
        <ellipse cx="160" cy="72" rx="3.5" ry="6" fill="#121212" />

        {/* Bottom Horizontal Scroll Roll */}
        <path 
          d="M80 162 C80 152 95 146 120 146 C145 146 160 152 160 162 C160 172 145 178 120 178 C95 178 80 172 80 162 Z"
          fill="#ebe3ce" 
          stroke="#121212" 
          strokeWidth="5.5"
        />
        <ellipse cx="160" cy="162" rx="7" ry="11" fill="#ded4bd" stroke="#121212" strokeWidth="3.5" />
        <ellipse cx="160" cy="162" rx="3.5" ry="6" fill="#121212" />

        {/* Cheerful Winking Face on Scroll */}
        <g className="paper-face">
          {/* Eyebrows */}
          <path d="M96 90 Q106 82 116 88" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />
          <path d="M126 88 Q136 82 144 90" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />

          {/* Left Eye: Open Pie-Cut Cartoon Eye */}
          <g className="eye left-eye">
            <ellipse cx="106" cy="106" rx="9" ry="13" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <ellipse cx="107" cy="106" rx="7" ry="10" fill="#121212" />
            <polygon points="107,106 100,103 104,97" fill="#faf7ee" />
          </g>

          {/* Right Eye: PLAYFUL WINK! (Arc with radiating wink creases) */}
          <g className="eye right-eye-wink">
            <path d="M126 108 Q136 98 146 108" fill="none" stroke="#121212" strokeWidth="5.5" strokeLinecap="round" />
            {/* Wink Crease lines */}
            <line x1="148" y1="104" x2="153" y2="101" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
            <line x1="149" y1="109" x2="155" y2="109" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
            <line x1="147" y1="114" x2="153" y2="117" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Cute Curved Cartoon Nose */}
          <path d="M118 116 Q122 122 117 124" fill="none" stroke="#121212" strokeWidth="3.5" strokeLinecap="round" />

          {/* Open Smiling Grin with Tongue */}
          <g className="paper-mouth">
            <path 
              d="M102 126 Q120 148 138 126 Q120 134 102 126 Z" 
              fill="#121212" 
              stroke="#121212" 
              strokeWidth="4" 
              strokeLinejoin="round" 
            />
            {/* Upper Teeth Strip */}
            <path d="M106 128 Q120 135 134 128" stroke="#faf7ee" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Tongue */}
            <path d="M114 136 Q120 130 126 136 Q120 144 114 136 Z" fill="#ded4bd" stroke="#121212" strokeWidth="1.5" />
            {/* Smile tip creases */}
            <path d="M98 124 Q100 128 104 126" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
            <path d="M142 124 Q140 128 136 126" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ScissorsCharacter: React.FC<CharacterProps> = ({ size = 180, className = '' }) => {
  return (
    <svg 
      className={`rubber-hose-character scissors-char ${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      {/* Porthole Frame Backing */}
      <PortholeFrame />

      {/* Character Group: Ciseaux avec yeux sur les lames et bouche souriante entre les anneaux */}
      <g className="scissors-body-group">
        {/* Shadow */}
        <ellipse cx="120" cy="188" rx="44" ry="10" fill="#121212" opacity="0.35" />

        {/* Vintage Scissor Blades (Pointing UP in open V, bursting out of frame top) */}
        <g className="scissor-blades">
          {/* Left Blade (angles up-left) */}
          <path 
            className="blade left-blade"
            d="M120 122 L90 32 C86 28 92 24 96 28 L124 122 Z"
            fill="#ede6d6" 
            stroke="#121212" 
            strokeWidth="5.5" 
            strokeLinejoin="round"
          />
          {/* Blade edge bevel sheen */}
          <path d="M93 33 L121 120" stroke="#fff" strokeWidth="2.5" opacity="0.7" />

          {/* Right Blade (angles up-right) */}
          <path 
            className="blade right-blade"
            d="M120 122 L150 32 C154 28 148 24 144 28 L116 122 Z"
            fill="#ded7c4" 
            stroke="#121212" 
            strokeWidth="5.5" 
            strokeLinejoin="round"
          />
          <path d="M147 33 L119 120" stroke="#fff" strokeWidth="2.5" opacity="0.7" />

          {/* Central Pivot Screw Bolt */}
          <circle cx="120" cy="122" r="7" fill="#121212" stroke="#ebe4d0" strokeWidth="2" />
          <circle cx="120" cy="122" r="3.5" fill="#faf7ee" />
        </g>

        {/* Expressive Cartoon Eyes MOUNTED DIRECTLY ON THE BLADES (As in reference image) */}
        <g className="blade-eyes">
          {/* Left Eye on Left Blade */}
          <g className="eye left-eye">
            <ellipse cx="106" cy="80" rx="9" ry="13" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <ellipse cx="107" cy="80" rx="6.5" ry="10" fill="#121212" />
            {/* Pie-Cut highlight */}
            <polygon points="107,80 100,77 104,71" fill="#faf7ee" />
            {/* Eyebrow */}
            <path d="M98 64 Q106 58 114 65" fill="none" stroke="#121212" strokeWidth="3.5" strokeLinecap="round" />
          </g>

          {/* Right Eye on Right Blade */}
          <g className="eye right-eye">
            <ellipse cx="134" cy="80" rx="9" ry="13" fill="#faf7ee" stroke="#121212" strokeWidth="3" />
            <ellipse cx="133" cy="80" rx="6.5" ry="10" fill="#121212" />
            <polygon points="133,80 126,77 130,71" fill="#faf7ee" />
            {/* Eyebrow */}
            <path d="M126 65 Q134 58 142 64" fill="none" stroke="#121212" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </g>

        {/* Scissor Finger Handle Loops at bottom */}
        <g className="scissor-handles">
          {/* Left Handle Loop */}
          <ellipse cx="98" cy="154" rx="20" ry="18" fill="#cbb382" stroke="#121212" strokeWidth="5.5" />
          <ellipse cx="98" cy="154" rx="11" ry="10" fill="#ede6d4" stroke="#121212" strokeWidth="4" />

          {/* Right Handle Loop */}
          <ellipse cx="142" cy="154" rx="20" ry="18" fill="#cbb382" stroke="#121212" strokeWidth="5.5" />
          <ellipse cx="142" cy="154" rx="11" ry="10" fill="#ede6d4" stroke="#121212" strokeWidth="4" />

          {/* Shank connecting pivot to loops */}
          <path d="M116 126 C110 134 104 142 102 148" stroke="#121212" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M124 126 C130 134 136 142 138 148" stroke="#121212" strokeWidth="7" strokeLinecap="round" fill="none" />
        </g>

        {/* HUGE TOOTHY CARTOON SMILE BETWEEN THE HANDLES (Exactly as in reference image) */}
        <g className="scissors-toothy-smile" transform="translate(0, 8)">
          <path 
            d="M96 148 Q120 168 144 148 Q120 182 96 148 Z" 
            fill="#121212" 
            stroke="#121212" 
            strokeWidth="4" 
            strokeLinejoin="round" 
          />
          {/* White Teeth Interior Grid */}
          <path 
            d="M98 150 Q120 168 142 150 Q120 178 98 150 Z" 
            fill="#faf7ee" 
          />
          {/* Horizontal midline dividing teeth */}
          <path d="M98 158 Q120 172 142 158" stroke="#121212" strokeWidth="2.5" fill="none" />
          {/* Vertical tooth separators */}
          <line x1="107" y1="151" x2="106" y2="164" stroke="#121212" strokeWidth="2" />
          <line x1="115" y1="154" x2="114" y2="170" stroke="#121212" strokeWidth="2" />
          <line x1="125" y1="154" x2="126" y2="170" stroke="#121212" strokeWidth="2" />
          <line x1="133" y1="151" x2="134" y2="164" stroke="#121212" strokeWidth="2" />
          {/* Smile Creases */}
          <path d="M93 145 Q95 151 98 149" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          <path d="M147 145 Q145 151 142 149" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

export const RubberHoseCharacterIcon: React.FC<{ type: CardType; size?: number; className?: string }> = ({
  type,
  size = 180,
  className = '',
}) => {
  switch (type) {
    case 'ROCK':
      return <RockCharacter size={size} className={className} />;
    case 'PAPER':
      return <PaperCharacter size={size} className={className} />;
    case 'SCISSORS':
      return <ScissorsCharacter size={size} className={className} />;
    default:
      return null;
  }
};
