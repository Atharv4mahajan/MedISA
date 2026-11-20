import React from "react";
import "./DiagramSvgAnimations.css";

export const FdFedAnimatedStage = () => {
  return (
    <div className="pure-animated-canvas-container">
      <svg
        viewBox="0 0 1000 500"
        className="pure-animated-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Layer gradients */}
          <linearGradient id="layerBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="layerLightBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="layerGray" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="layerGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Classification head colors */}
          <linearGradient id="headYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="headOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="headRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* Upward Arrow Marker */}
          <marker id="arr-fed-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1d4ed8" />
          </marker>
          {/* Right Arrow Marker */}
          <marker id="arr-fed-right" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb" />
          </marker>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: INITIAL GENERAL LAYERS (LEFT) — y: 50/140/230       */}
        {/* ------------------------------------------------------------- */}

        {/* Client 1 */}
        <g transform="translate(140, 50)">
          <text x="-35" y="32" fontSize="13" fontWeight="700" fill="#0f172a" textAnchor="end">Client 1</text>
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headYellow)" stroke="#b45309" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C1</text>
        </g>

        {/* Client 2 */}
        <g transform="translate(140, 140)">
          <text x="-35" y="32" fontSize="13" fontWeight="700" fill="#0f172a" textAnchor="end">Client 2</text>
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headOrange)" stroke="#c2410c" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C2</text>
        </g>

        {/* Client 3 */}
        <g transform="translate(140, 230)">
          <text x="-35" y="32" fontSize="13" fontWeight="700" fill="#0f172a" textAnchor="end">Client 3</text>
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerBlue)" stroke="#1e40af" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headRed)" stroke="#991b1b" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C3</text>
        </g>

        {/* Under-bracket for Initial General Layers */}
        <path d="M 135 300 L 135 312 L 180 312 L 180 322 L 180 312 L 225 312 L 225 300" fill="none" stroke="#334155" strokeWidth="1.5" />
        <text x="180" y="342" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">Initial General Layers</text>

        {/* Large Transmission Arrow 1 */}
        <path d="M 245 168 L 290 168 L 290 158 L 315 168 L 290 178 L 290 168 Z" fill="#2563eb" stroke="#1d4ed8" />
        <path d="M 235 168 L 285 168" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" className="anim-flow-line" />

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: AGGREGATED LAYERS ROUND 1 (CENTER-LEFT) — y: 140   */}
        {/* ------------------------------------------------------------- */}
        <g transform="translate(330, 140)">
          <text x="32" y="-20" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">Aggregated Layers</text>
          <text x="32" y="-6" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">Round 1</text>
          <rect x="0" y="10" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="9" y="42" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L1</text>
          <rect x="23" y="10" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="32" y="42" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L2</text>
          <rect x="46" y="10" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="55" y="42" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L3</text>
        </g>

        {/* Large Transmission Arrow 2 */}
        <path d="M 405 168 L 450 168 L 450 158 L 475 168 L 450 178 L 450 168 Z" fill="#2563eb" stroke="#1d4ed8" />
        <path d="M 395 168 L 445 168" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" className="anim-flow-line" />

        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: INTERMEDIATE SPECIALIZATION (ROUND 1 OUTPUT)       */}
        {/* ------------------------------------------------------------- */}

        {/* Client 1 (Round 1) */}
        <g transform="translate(490, 50)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headYellow)" stroke="#b45309" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C1</text>
        </g>

        {/* Client 2 (Round 1) */}
        <g transform="translate(490, 140)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headOrange)" stroke="#c2410c" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C2</text>
        </g>

        {/* Client 3 (Round 1) */}
        <g transform="translate(490, 230)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerLightBlue)" stroke="#3b82f6" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headRed)" stroke="#991b1b" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C3</text>
        </g>

        {/* Large Transmission Arrow 3 */}
        <path d="M 590 168 L 635 168 L 635 158 L 660 168 L 635 178 L 635 168 Z" fill="#2563eb" stroke="#1d4ed8" />
        <path d="M 580 168 L 630 168" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" className="anim-flow-line" />

        {/* ------------------------------------------------------------- */}
        {/* SECTION 4: AGGREGATED LAYERS ROUND 2 (CENTER-RIGHT)           */}
        {/* ------------------------------------------------------------- */}
        <g transform="translate(675, 140)">
          <text x="32" y="-20" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">Aggregated Layers</text>
          <text x="32" y="-6" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">Round 2</text>
          <rect x="0" y="10" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="9" y="42" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L1</text>
          <rect x="23" y="10" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="32" y="42" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L2</text>
          <rect x="46" y="10" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="55" y="42" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L3</text>
        </g>

        {/* Large Transmission Arrow 4 */}
        <path d="M 750 168 L 795 168 L 795 158 L 820 168 L 795 178 L 795 168 Z" fill="#2563eb" stroke="#1d4ed8" />
        <path d="M 740 168 L 790 168" stroke="#10b981" strokeWidth="3" strokeDasharray="6,4" className="anim-flow-line-fast" />

        {/* ------------------------------------------------------------- */}
        {/* SECTION 5: FINAL PRESERVED SPECIALIZED LAYERS (RIGHT)         */}
        {/* ------------------------------------------------------------- */}

        {/* Client 1 Final */}
        <g transform="translate(835, 50)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headYellow)" stroke="#b45309" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C1</text>
        </g>

        {/* Client 2 Final */}
        <g transform="translate(835, 140)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headOrange)" stroke="#c2410c" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C2</text>
        </g>

        {/* Client 3 Final */}
        <g transform="translate(835, 230)">
          <rect x="0" y="0" width="18" height="55" rx="3" fill="url(#layerGray)" stroke="#64748b" />
          <text x="9" y="32" fontSize="9" fontWeight="700" fill="#334155" textAnchor="middle">L1</text>
          <rect x="23" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="32" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L2</text>
          <rect x="46" y="0" width="18" height="55" rx="3" fill="url(#layerGreen)" stroke="#15803d" />
          <text x="55" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">L3</text>
          <rect x="69" y="0" width="18" height="55" rx="3" fill="url(#headRed)" stroke="#991b1b" />
          <text x="78" y="32" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">C3</text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* PRESERVED SPECIALIZED LAYERS BRACKET — extra clearance below   */}
        {/* All client blocks end at y=285. Bracket runs at y=370.         */}
        {/* Upward arrows travel from y=370 up to y=295 (fully visible).  */}
        {/* ------------------------------------------------------------- */}

        {/* Upward arrow into Round-1 specialized L3 (x=545) */}
        <line x1="545" y1="370" x2="545" y2="295" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-fed-up)" />

        {/* Main horizontal bracket line */}
        <line x1="545" y1="370" x2="922" y2="370" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6,4" className="anim-flow-line" />

        {/* Bracket centre notch pointing down toward label */}
        <line x1="733" y1="370" x2="733" y2="385" stroke="#2563eb" strokeWidth="2" />

        {/* Left vertical arrow into specialized L2 (x=867) */}
        <line x1="867" y1="370" x2="867" y2="295" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-fed-up)" />

        {/* Right vertical arrow into specialized L3 (x=890) */}
        <line x1="922" y1="370" x2="922" y2="295" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-fed-up)" />

        {/* Text Callout */}
        <text x="733" y="405" fontSize="13" fontWeight="700" fill="#1e40af" textAnchor="middle">Preserved</text>
        <text x="733" y="423" fontSize="13" fontWeight="700" fill="#1e40af" textAnchor="middle">Specialized Layers</text>

        {/* Live Traveling Signal Pulse */}
        <circle cx="0" cy="0" r="5" fill="#38bdf8" className="anim-fed-pulse" />
      </svg>
    </div>
  );
};
