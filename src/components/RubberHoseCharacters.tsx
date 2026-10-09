import React from 'react';
import { CardType } from '../game/types';

interface CharacterProps {
  size?: number;
  isHovered?: boolean;
  className?: string;
}

export const RockCharacter: React.FC<CharacterProps> = ({ size = 180, className = '' }) => {
  return (
    <svg 
      className={`rubber-hose-character rock-char ${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Irregular pen outline circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="92" 
        className="ink-circle-bg" 
        fill="#f5f2e8" 
        stroke="#121212" 
        strokeWidth="7" 
        strokeDasharray="400"
      />
      <circle 
        cx="100" 
        cy="100" 
        r="88" 
        fill="none" 
        stroke="#121212" 
        strokeWidth="2" 
        strokeDasharray="8 5"
        opacity="0.6"
      />

      <g className="rock-body-group">
        {/* Stone shadow */}
        <ellipse cx="100" cy="165" rx="52" ry="12" fill="#121212" opacity="0.2" />

        {/* Craggy stone body */}
        <path 
          d="M62 135 C52 115 54 80 72 58 C90 38 122 36 142 52 C158 66 162 100 152 130 C146 148 128 158 100 158 C78 158 68 148 62 135 Z"
          fill="#d4cebe" 
          stroke="#121212" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />

        {/* Crag surface detail & hatching lines */}
        <path d="M78 68 L88 78 L85 88" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
        <path d="M135 60 L128 72 L132 80" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
        <path d="M68 120 L76 116" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M142 118 L134 114" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />

        {/* Shading stipples / dots */}
        <circle cx="74" cy="98" r="2" fill="#121212" />
        <circle cx="79" cy="104" r="2.5" fill="#121212" />
        <circle cx="132" cy="96" r="2" fill="#121212" />
        <circle cx="138" cy="102" r="2.5" fill="#121212" />

        {/* Cartoon Face */}
        <g className="rock-face">
          {/* Eyebrows */}
          <path d="M74 72 Q86 64 96 74" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M112 74 Q122 64 134 72" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />

          {/* Left Pie-cut Eye */}
          <g className="eye left-eye">
            <ellipse cx="86" cy="85" rx="10" ry="13" fill="#121212" />
            {/* Pie cut triangle highlight */}
            <polygon points="86,85 76,82 82,75" fill="#f5f2e8" />
          </g>

          {/* Right Pie-cut Eye */}
          <g className="eye right-eye">
            <ellipse cx="122" cy="85" rx="10" ry="13" fill="#121212" />
            <polygon points="122,85 112,82 118,75" fill="#f5f2e8" />
          </g>

          {/* Cheerful wide grinning mouth */}
          <path 
            d="M80 108 Q104 132 128 108 Q104 118 80 108 Z" 
            fill="#121212" 
            stroke="#121212" 
            strokeWidth="3.5" 
            strokeLinejoin="round"
          />
          {/* Cartoon teeth */}
          <path d="M92 111 L92 117 M104 113 L104 119 M116 111 L116 117" stroke="#f5f2e8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Smile dimples */}
          <path d="M76 106 Q78 112 82 111" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 106 Q130 112 126 111" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Crossed Rubber Hose Arms */}
        <g className="crossed-rubber-arms">
          {/* Left hose arm looping to center */}
          <path 
            d="M58 118 Q40 134 65 146 Q85 152 105 144" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Right hose arm looping across */}
          <path 
            d="M150 118 Q168 134 142 146 Q122 152 100 144" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Left White Cartoon Glove (resting on right arm) */}
          <g className="glove left-glove" transform="translate(112, 132) rotate(15)">
            <ellipse cx="14" cy="12" rx="15" ry="11" fill="#f5f2e8" stroke="#121212" strokeWidth="3.5" />
            {/* Glove cuff */}
            <path d="M-2 5 Q0 18 4 18" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />
            {/* Glove thumb & fingers */}
            <ellipse cx="20" cy="5" rx="5" ry="4" fill="#f5f2e8" stroke="#121212" strokeWidth="3" />
            <path d="M12 7 L12 15 M16 8 L16 16 M20 9 L20 15" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Right White Cartoon Glove (resting on left arm) */}
          <g className="glove right-glove" transform="translate(68, 132) rotate(-15)">
            <ellipse cx="14" cy="12" rx="15" ry="11" fill="#f5f2e8" stroke="#121212" strokeWidth="3.5" />
            <path d="M28 5 Q26 18 22 18" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="7" cy="5" rx="5" ry="4" fill="#f5f2e8" stroke="#121212" strokeWidth="3" />
            <path d="M12 7 L12 15 M16 8 L16 16 M8 9 L8 15" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
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
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Irregular pen outline circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="92" 
        className="ink-circle-bg" 
        fill="#f5f2e8" 
        stroke="#121212" 
        strokeWidth="7" 
        strokeDasharray="400"
      />
      <circle 
        cx="100" 
        cy="100" 
        r="88" 
        fill="none" 
        stroke="#121212" 
        strokeWidth="2" 
        strokeDasharray="8 5"
        opacity="0.6"
      />

      <g className="paper-body-group">
        {/* Shadow */}
        <ellipse cx="100" cy="165" rx="48" ry="10" fill="#121212" opacity="0.2" />

        {/* Rolled Parchment Scroll Body */}
        {/* Back scroll curl top */}
        <ellipse cx="100" cy="46" rx="40" ry="10" fill="#ded7c4" stroke="#121212" strokeWidth="5" />
        <ellipse cx="100" cy="46" rx="32" ry="6" fill="#121212" />

        {/* Main scroll sheet body */}
        <path 
          d="M60 46 C58 90 56 125 58 145 C75 152 125 152 142 145 C144 125 142 90 140 46 Z"
          fill="#fbf9f2" 
          stroke="#121212" 
          strokeWidth="5.5" 
          strokeLinejoin="round"
        />

        {/* Bottom scroll curl roll */}
        <path 
          d="M56 142 C56 156 70 162 100 162 C130 162 144 156 144 142 C144 135 130 132 100 132 C70 132 56 135 56 142 Z"
          fill="#ded7c4" 
          stroke="#121212" 
          strokeWidth="4.5"
        />
        <ellipse cx="144" cy="142" rx="6" ry="10" fill="#121212" stroke="#121212" strokeWidth="2" />

        {/* Parchment age wrinkles & lines */}
        <path d="M68 62 L78 62" stroke="#121212" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M124 62 L132 62" stroke="#121212" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M66 126 L80 126" stroke="#121212" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M120 126 L134 126" stroke="#121212" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Cheerful Cartoon Face on Scroll */}
        <g className="paper-face">
          {/* Eyebrows */}
          <path d="M76 68 Q84 60 94 68" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />
          <path d="M106 68 Q116 60 124 68" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" />

          {/* Left Pie-cut Eye */}
          <g className="eye left-eye">
            <ellipse cx="85" cy="79" rx="9" ry="12" fill="#121212" />
            <polygon points="85,79 77,77 82,71" fill="#fbf9f2" />
          </g>

          {/* Right Pie-cut Eye */}
          <g className="eye right-eye">
            <ellipse cx="115" cy="79" rx="9" ry="12" fill="#121212" />
            <polygon points="115,79 107,77 112,71" fill="#fbf9f2" />
          </g>

          {/* Rosy Hatching Cheeks */}
          <path d="M70 88 L74 92 M73 87 L77 91 M76 86 L80 90" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M124 88 L128 92 M127 87 L131 91 M130 86 L134 90" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />

          {/* Big Happy Smile with Tongue */}
          <path 
            d="M82 96 Q100 118 118 96 Q100 102 82 96 Z" 
            fill="#121212" 
            stroke="#121212" 
            strokeWidth="3.5" 
          />
          {/* Tongue */}
          <path d="M94 104 Q100 98 106 104 Q100 112 94 104 Z" fill="#f5f2e8" />
          {/* Smile line tips */}
          <path d="M78 94 Q80 98 84 96" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          <path d="M122 94 Q120 98 116 96" fill="none" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Rubber Hose Arms */}
        {/* Left arm: Akimbo on hip */}
        <g className="left-arm-akimbo">
          <path 
            d="M58 95 C36 102 36 128 54 130" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="9" 
            strokeLinecap="round" 
          />
          {/* Left Glove on Hip */}
          <g transform="translate(48, 122) rotate(-20)">
            <ellipse cx="8" cy="8" rx="10" ry="8" fill="#fbf9f2" stroke="#121212" strokeWidth="3" />
            <path d="M4 6 L4 11 M8 5 L8 11 M12 6 L12 10" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </g>

        {/* Right arm: Raised high and waving enthusiastically! */}
        <g className="right-arm-waving">
          <path 
            d="M140 96 C165 92 172 65 162 46" 
            fill="none" 
            stroke="#121212" 
            strokeWidth="9" 
            strokeLinecap="round" 
            className="waving-hose"
          />
          {/* Big White Cartoon Glove Waving */}
          <g className="waving-glove" transform="translate(156, 32)">
            {/* Glove Cuff */}
            <ellipse cx="6" cy="18" rx="8" ry="4" fill="#fbf9f2" stroke="#121212" strokeWidth="3" />
            {/* Palm & 4 Fingers */}
            <ellipse cx="8" cy="8" rx="12" ry="10" fill="#fbf9f2" stroke="#121212" strokeWidth="3" />
            {/* Thumb */}
            <path d="M0 6 C-4 2 -3 -3 2 -2" fill="#fbf9f2" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
            {/* Fingers pointing up */}
            <path d="M3 -1 C3 -7 7 -8 8 -2" fill="#fbf9f2" stroke="#121212" strokeWidth="2.5" />
            <path d="M8 -2 C9 -8 13 -8 14 -1" fill="#fbf9f2" stroke="#121212" strokeWidth="2.5" />
            <path d="M14 -1 C15 -6 19 -5 18 3" fill="#fbf9f2" stroke="#121212" strokeWidth="2.5" />
            {/* 3 stitched darts on back of glove */}
            <path d="M5 6 L5 12 M8 6 L8 13 M11 7 L11 12" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" />
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
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Irregular pen outline circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="92" 
        className="ink-circle-bg" 
        fill="#f5f2e8" 
        stroke="#121212" 
        strokeWidth="7" 
        strokeDasharray="400"
      />
      <circle 
        cx="100" 
        cy="100" 
        r="88" 
        fill="none" 
        stroke="#121212" 
        strokeWidth="2" 
        strokeDasharray="8 5"
        opacity="0.6"
      />

      <g className="scissors-body-group">
        {/* Shadow */}
        <ellipse cx="100" cy="165" rx="46" ry="10" fill="#121212" opacity="0.2" />

        {/* Vintage shears handle loops at bottom */}
        {/* Left Finger Ring */}
        <ellipse cx="76" cy="148" rx="20" ry="16" fill="#ded7c4" stroke="#121212" strokeWidth="6" />
        <ellipse cx="76" cy="148" rx="10" ry="8" fill="#f5f2e8" stroke="#121212" strokeWidth="4" />

        {/* Right Finger Ring */}
        <ellipse cx="124" cy="148" rx="20" ry="16" fill="#ded7c4" stroke="#121212" strokeWidth="6" />
        <ellipse cx="124" cy="148" rx="10" ry="8" fill="#f5f2e8" stroke="#121212" strokeWidth="4" />

        {/* Handle shanks leading to pivot */}
        <path d="M78 132 C82 118 90 106 96 102" stroke="#121212" strokeWidth="9" strokeLinecap="round" />
        <path d="M122 132 C118 118 110 106 104 102" stroke="#121212" strokeWidth="9" strokeLinecap="round" />

        {/* Scissor Blades Group (Animated chomping / snip) */}
        <g className="scissor-blades">
          {/* Left Blade (angles up-right) */}
          <path 
            className="blade left-blade"
            d="M94 102 L145 42 C148 40 152 44 148 48 L106 102 Z"
            fill="#ded7c4" 
            stroke="#121212" 
            strokeWidth="5" 
            strokeLinejoin="round"
          />

          {/* Right Blade (angles up-left) */}
          <path 
            className="blade right-blade"
            d="M106 102 L55 42 C52 40 48 44 52 48 L94 102 Z"
            fill="#ece6d8" 
            stroke="#121212" 
            strokeWidth="5" 
            strokeLinejoin="round"
          />

          {/* Comical Sharp Teeth between the open jaws */}
          <g className="scissor-teeth">
            {/* Teeth on left blade inner edge */}
            <polygon points="102,96 108,92 106,100" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="112,86 118,82 116,90" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="122,76 128,72 126,80" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="132,66 138,62 136,70" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />

            {/* Teeth on right blade inner edge */}
            <polygon points="98,96 92,92 94,100" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="88,86 82,82 84,90" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="78,76 72,72 74,80" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
            <polygon points="68,66 62,62 64,70" fill="#fbf9f2" stroke="#121212" strokeWidth="2" />
          </g>

          {/* Center Pivot Rivet */}
          <circle cx="100" cy="102" r="10" fill="#121212" stroke="#ded7c4" strokeWidth="2" />
          <circle cx="100" cy="102" r="5" fill="#fbf9f2" />
        </g>

        {/* Expressive Cartoon Eyes Mounted Above Pivot */}
        <g className="scissors-eyes" transform="translate(0, -6)">
          {/* Eyebrows */}
          <path d="M78 76 Q88 68 96 74" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M104 74 Q112 68 122 76" fill="none" stroke="#121212" strokeWidth="4.5" strokeLinecap="round" />

          {/* Left Eye */}
          <g className="eye left-eye">
            <ellipse cx="86" cy="86" rx="9" ry="12" fill="#121212" />
            <polygon points="86,86 78,84 83,78" fill="#fbf9f2" />
          </g>

          {/* Right Eye */}
          <g className="eye right-eye">
            <ellipse cx="114" cy="86" rx="9" ry="12" fill="#121212" />
            <polygon points="114,86 106,84 111,78" fill="#fbf9f2" />
          </g>
        </g>

        {/* Small rubber hose feet sticking through the handle loops */}
        <g className="scissors-feet">
          {/* Left cartoon shoe */}
          <ellipse cx="76" cy="166" rx="14" ry="7" fill="#121212" />
          {/* Right cartoon shoe */}
          <ellipse cx="124" cy="166" rx="14" ry="7" fill="#121212" />
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
