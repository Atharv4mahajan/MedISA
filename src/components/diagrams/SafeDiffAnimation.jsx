import React from "react";
import "./DiagramSvgAnimations.css";

export const SafeDiffAnimatedStage = () => {
  return (
    <div className="pure-animated-canvas-container">
      <svg
        viewBox="0 0 1100 725"
        preserveAspectRatio="xMidYMid meet"
        className="pure-animated-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="softBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="softOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
          <linearGradient id="softGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dcfce7" />
            <stop offset="100%" stopColor="#bbf7d0" />
          </linearGradient>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Arrow Markers */}
          <marker id="arr-gray" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569" />
          </marker>
          <marker id="arr-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7" />
          </marker>
          <marker id="arr-purple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9333ea" />
          </marker>
          <marker id="arr-orange" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ea580c" />
          </marker>
          <marker id="arr-brown" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#78350f" />
          </marker>
        </defs>

        {/* ================================================================ */}
        {/* SECTION BORDERS & LABELS                                          */}
        {/* ================================================================ */}
        {/* Horizontal dividing line */}
        <line x1="15" y1="285" x2="1085" y2="285" stroke="#0284c7" strokeWidth="2.5" />
        {/* Vertical dividing line between (a) and (b) */}
        <line x1="670" y1="15" x2="670" y2="275" stroke="#0284c7" strokeWidth="2.5" />

        {/* Section Labels with generous symmetric clearance */}
        <text x="630" y="42" fontSize="16" fontWeight="800" fill="#0f172a" textAnchor="middle">(a)</text>
        <text x="710" y="42" fontSize="16" fontWeight="800" fill="#0f172a" textAnchor="middle">(b)</text>
        <text x="330" y="42" fontSize="16" fontWeight="700" fill="#0f172a" textAnchor="middle">U Net</text>

        {/* ================================================================ */}
        {/* PART (a): DIFFUSION U-NET with Timestep Conditioning              */}
        {/* ================================================================ */}

        {/* Timestep conditioning header */}
        <g transform="translate(18, 55)">
          <text x="18" y="-5" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">t</text>
          <text x="52" y="-5" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">&lt; 300</text>
          <rect x="77" y="-18" width="55" height="20" rx="2" fill="#fff" stroke="#475569" strokeWidth="1.2" />
          <text x="104" y="-4" fontSize="10" fontWeight="700" fill="#0f172a" textAnchor="middle">T = 1000</text>

          {/* linear / SiLU / linear blocks */}
          <line x1="0" y1="35" x2="15" y2="35" stroke="#475569" strokeWidth="1.5" />
          <rect x="15" y="8" width="16" height="55" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="23" y="38" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 23 38)" textAnchor="middle">linear</text>
          <rect x="33" y="8" width="16" height="55" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="41" y="38" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 41 38)" textAnchor="middle">SiLU</text>
          <rect x="51" y="8" width="16" height="55" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="59" y="38" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 59 38)" textAnchor="middle">linear</text>

          {/* Main conditioning bus */}
          <line x1="67" y1="35" x2="575" y2="35" stroke="#9333ea" strokeWidth="2.2" strokeDasharray="5,4" className="anim-flow-line" />

          {/* 7 T-junction branches dropping into the 7 res blocks */}
          {/* 1. Downsampling res block 1 */}
          <line x1="109" y1="35" x2="109" y2="120" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 2. Downsampling x1 res block */}
          <line x1="161" y1="35" x2="161" y2="132" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 3. Downsampling x2 res block */}
          <line x1="232" y1="35" x2="232" y2="140" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 4. Bottleneck res block */}
          <line x1="315" y1="35" x2="315" y2="132" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 5. Upsampling x2 res block */}
          <line x1="423" y1="35" x2="423" y2="140" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 6. Upsampling x1 res block */}
          <line x1="501" y1="35" x2="501" y2="132" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
          {/* 7. Final res block */}
          <line x1="575" y1="35" x2="575" y2="120" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />
        </g>

        {/* ---- Main U-Net shapes ---- */}
        {/* Input arrow */}
        <line x1="55" y1="178" x2="93" y2="178" stroke="#9a3412" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-brown)" />
        {/* Downsampling trapezoid */}
        <polygon points="93,112 285,138 285,220 93,245" fill="#ffedd5" stroke="#f97316" strokeWidth="1.2" />
        {/* Bottleneck */}
        <polygon points="295,140 348,140 348,218 295,218" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" />
        {/* Upsampling trapezoid (extended to x=600 for clean spacing) */}
        <polygon points="358,138 600,112 600,245 358,220" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.2" />
        {/* Output arrow */}
        <line x1="600" y1="178" x2="640" y2="178" stroke="#9a3412" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* ---- INSIDE DOWNSAMPLING ---- */}
        {/* 1. res block */}
        <rect x="100" y="128" width="18" height="100" rx="2" fill="#fef08a" stroke="#ca8a04" />
        <text x="109" y="178" fontSize="8" fontWeight="600" fill="#713f12" transform="rotate(-90 109 178)" textAnchor="middle">res block</text>
        <line x1="118" y1="178" x2="128" y2="178" stroke="#9a3412" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* 2. Conv2d (3 X 3) */}
        <rect x="128" y="142" width="15" height="72" rx="2" fill="#bae6fd" stroke="#0284c7" />
        <text x="135" y="178" fontSize="7" fontWeight="600" fill="#075985" transform="rotate(-90 135 178)" textAnchor="middle">Conv2d (3 X 3)</text>
        <line x1="143" y1="178" x2="152" y2="178" stroke="#9a3412" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* 3. x1 sub-block (dashed red) */}
        <rect x="152" y="136" width="40" height="86" rx="2" fill="#fff" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
        <text x="172" y="128" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">x 1</text>
        <line x1="156" y1="132" x2="188" y2="132" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="172" y1="132" x2="172" y2="142" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="154" y="142" width="14" height="74" rx="2" fill="#fef08a" stroke="#ca8a04" />
        <text x="161" y="180" fontSize="7" fontWeight="600" fill="#713f12" transform="rotate(-90 161 180)" textAnchor="middle">res block</text>
        <rect x="171" y="142" width="17" height="74" rx="2" fill="#fecaca" stroke="#dc2626" />
        <text x="179" y="180" fontSize="7" fontWeight="600" fill="#991b1b" transform="rotate(-90 179 180)" textAnchor="middle">Swin T Block</text>
        <line x1="192" y1="178" x2="202" y2="178" stroke="#9a3412" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* Two cyan bars */}
        <rect x="202" y="148" width="8" height="60" rx="1" fill="#bae6fd" stroke="#0284c7" />
        <rect x="212" y="148" width="8" height="60" rx="1" fill="#bae6fd" stroke="#0284c7" />

        {/* 4. x2 group in downsampling */}
        <rect x="224" y="146" width="32" height="66" rx="2" fill="#fff" stroke="#475569" strokeWidth="1" />
        <text x="240" y="134" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">x 2</text>
        <line x1="226" y1="138" x2="254" y2="138" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="240" y1="138" x2="240" y2="148" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="226" y="150" width="12" height="58" rx="1" fill="#fef08a" stroke="#ca8a04" />
        <rect x="240" y="150" width="13" height="58" rx="1" fill="#fecaca" stroke="#dc2626" />

        {/* cyan bar */}
        <rect x="257" y="150" width="8" height="54" rx="1" fill="#bae6fd" stroke="#0284c7" />
        <line x1="265" y1="178" x2="295" y2="178" stroke="#9a3412" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* ---- INSIDE BOTTLENECK ---- */}
        <rect x="307" y="146" width="32" height="66" rx="2" fill="#fff" stroke="#475569" strokeWidth="1" />
        <text x="323" y="134" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">x 2</text>
        <line x1="310" y1="138" x2="336" y2="138" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="323" y1="138" x2="323" y2="148" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="309" y="150" width="12" height="58" rx="1" fill="#fef08a" stroke="#ca8a04" />
        <rect x="323" y="150" width="12" height="58" rx="1" fill="#fecaca" stroke="#dc2626" />
        <line x1="348" y1="178" x2="358" y2="178" stroke="#9a3412" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* ---- INSIDE UPSAMPLING ---- */}
        {/* ConvT2d (2) */}
        <rect x="365" y="148" width="14" height="60" rx="2" fill="#eab308" stroke="#a16207" />
        <text x="372" y="178" fontSize="7" fontWeight="700" fill="#422006" transform="rotate(-90 372 178)" textAnchor="middle">ConvT2d (2)</text>

        {/* ConvT2d → ⊕1 */}
        <line x1="379" y1="178" x2="389" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* Addition node 1 */}
        <circle cx="397" cy="178" r="8" fill="#fff" stroke="#334155" strokeWidth="1.4" />
        <text x="397" y="182" fontSize="10" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>
        <line x1="405" y1="178" x2="415" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* x2 group */}
        <rect x="415" y="148" width="32" height="62" rx="2" fill="#fff" stroke="#475569" strokeWidth="1" />
        <text x="431" y="136" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">x 2</text>
        <line x1="417" y1="140" x2="445" y2="140" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="431" y1="140" x2="431" y2="150" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="417" y="152" width="12" height="54" rx="1" fill="#fef08a" stroke="#ca8a04" />
        <rect x="431" y="152" width="13" height="54" rx="1" fill="#fecaca" stroke="#dc2626" />

        {/* yellow bar */}
        <rect x="449" y="150" width="8" height="56" rx="1" fill="#eab308" stroke="#a16207" />
        <line x1="457" y1="178" x2="466" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* Addition node 2 */}
        <circle cx="474" cy="178" r="8" fill="#fff" stroke="#334155" strokeWidth="1.4" />
        <text x="474" y="182" fontSize="10" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>
        <line x1="482" y1="178" x2="493" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* x1 group */}
        <rect x="493" y="144" width="32" height="68" rx="2" fill="#fff" stroke="#475569" strokeWidth="1" />
        <text x="509" y="132" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">x 1</text>
        <line x1="495" y1="136" x2="523" y2="136" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="509" y1="136" x2="509" y2="146" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="495" y="148" width="13" height="60" rx="1" fill="#fef08a" stroke="#ca8a04" />
        <rect x="510" y="148" width="13" height="60" rx="1" fill="#fecaca" stroke="#dc2626" />

        {/* yellow bar */}
        <rect x="526" y="148" width="8" height="60" rx="1" fill="#eab308" stroke="#a16207" />
        <line x1="534" y1="178" x2="543" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* Addition node 3 */}
        <circle cx="551" cy="178" r="8" fill="#fff" stroke="#334155" strokeWidth="1.4" />
        <text x="551" y="182" fontSize="10" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>
        <line x1="559" y1="178" x2="568" y2="178" stroke="#334155" strokeWidth="1.6" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* Final res block */}
        <rect x="568" y="128" width="14" height="100" rx="2" fill="#fef08a" stroke="#ca8a04" />
        <text x="575" y="178" fontSize="7" fontWeight="600" fill="#713f12" transform="rotate(-90 575 178)" textAnchor="middle">res block</text>

        {/* Final Conv2d */}
        <rect x="584" y="142" width="12" height="72" rx="1" fill="#bae6fd" stroke="#0284c7" />
        <text x="590" y="178" fontSize="6" fontWeight="600" fill="#075985" transform="rotate(-90 590 178)" textAnchor="middle">Conv2d (3 X 3)</text>

        {/* ---- SKIP CONNECTIONS ---- */}
        {/* Skip 1 (longest): after Conv2d (143) → ⊕3 (551) */}
        <path d="M 143 228 L 143 260 L 551 260 L 551 186" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="5,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />
        {/* Skip 2 (middle): after x1 group (185) → ⊕2 (474) */}
        <path d="M 185 238 L 185 250 L 474 250 L 474 186" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="5,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />
        {/* Skip 3 (shortest): after x2 group (265) → ⊕1 (397) */}
        <path d="M 265 228 L 265 242 L 397 242 L 397 186" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="5,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />

        {/* Bottom section labels */}
        <text x="178" y="276" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">Downsampling Block</text>
        <text x="322" y="276" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">Bottleneck Layer</text>
        <text x="478" y="276" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">Upsampling Block</text>

        {/* ================================================================ */}
        {/* PART (b): RESIDUAL BLOCK DETAIL                                   */}
        {/* ================================================================ */}
        <g transform="translate(690, 50)">
          {/* Dashed red outer container */}
          <rect x="0" y="10" width="385" height="200" rx="4" fill="#cbd5e1" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,4" />
          {/* Inner Light Blue container */}
          <rect x="15" y="24" width="355" height="174" rx="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" />
          {/* Yellow res block container */}
          <rect x="30" y="36" width="278" height="150" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
          <text x="168" y="180" fontSize="12" fontWeight="700" fill="#713f12" textAnchor="middle">res block</text>

          {/* t drops into Addition1 */}
          <text x="80" y="-5" fontSize="12" fontWeight="700" fill="#0f172a">t</text>
          <path d="M 90 0 L 168 0 L 168 70" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-purple)" />

          {/* Input arrow into (b) */}
          <line x1="-18" y1="85" x2="35" y2="85" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="5,3" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Groupnorm & SiLU (packed together as in original) */}
          <rect x="45" y="52" width="22" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="56" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 56 88)" textAnchor="middle">Groupnorm</text>

          <rect x="67" y="52" width="18" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="76" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 76 88)" textAnchor="middle">SiLU</text>
          <line x1="85" y1="85" x2="98" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Conv2d ( 3 X 3 ) */}
          <rect x="98" y="52" width="24" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="110" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 110 88)" textAnchor="middle">Conv2d ( 3 X 3)</text>
          <line x1="122" y1="85" x2="158" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Addition node 1 (t enters from above) */}
          <circle cx="168" cy="85" r="9" fill="#fff" stroke="#334155" strokeWidth="1.5" />
          <text x="168" y="89" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>
          <line x1="177" y1="85" x2="190" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Second Groupnorm & SiLU (packed pair) */}
          <rect x="190" y="52" width="22" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="201" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 201 88)" textAnchor="middle">Groupnorm</text>

          <rect x="212" y="52" width="18" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="221" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 221 88)" textAnchor="middle">SiLU</text>
          <line x1="230" y1="85" x2="243" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Second Conv2d ( 3 X 3 ) */}
          <rect x="243" y="52" width="24" height="68" rx="2" fill="#e9d5ff" stroke="#9333ea" />
          <text x="255" y="88" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 255 88)" textAnchor="middle">Conv2d ( 3 X 3)</text>
          <line x1="267" y1="85" x2="293" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* Addition node 2 */}
          <circle cx="303" cy="85" r="9" fill="#fff" stroke="#334155" strokeWidth="1.5" />
          <text x="303" y="89" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>

          {/* Residual skip arc inside yellow box */}
          <path d="M 40 85 L 40 150 L 303 150 L 303 94" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />

          {/* Addition2 → Swin T Block */}
          <line x1="312" y1="85" x2="326" y2="85" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          <rect x="326" y="36" width="30" height="150" rx="2" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" />
          <text x="341" y="115" fontSize="10" fontWeight="700" fill="#991b1b" transform="rotate(-90 341 115)" textAnchor="middle">Swin T Block</text>

          {/* Number of Swin Blocks callout with underline */}
          <text x="341" y="-8" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">Number of</text>
          <text x="341" y="4" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="middle">Swin Blocks</text>
          <line x1="306" y1="8" x2="376" y2="8" stroke="#dc2626" strokeWidth="1.2" />
          <line x1="341" y1="8" x2="341" y2="34" stroke="#dc2626" strokeWidth="1.2" />

          {/* Output from (b) */}
          <line x1="356" y1="85" x2="390" y2="85" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="5,3" className="anim-flow-line" markerEnd="url(#arr-orange)" />
        </g>

        {/* ================================================================ */}
        {/* PART (c): TWO-STAGE PIPELINE ARCHITECTURE                         */}
        {/* ================================================================ */}
        <text x="35" y="315" fontSize="16" fontWeight="800" fill="#0f172a">(c)</text>

        {/* 1. Upsampled LR input box */}
        <rect x="42" y="330" width="70" height="44" rx="4" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" />
        <text x="77" y="349" fontSize="9" fontWeight="700" fill="#0f172a" textAnchor="middle">Upsampled</text>
        <text x="77" y="362" fontSize="9" fontWeight="700" fill="#0f172a" textAnchor="middle">LR</text>

        {/* Arrow into Stage 1 */}
        <line x1="112" y1="352" x2="135" y2="352" stroke="#9a3412" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* 2. Stage 1 - Residual Prediction Net Red Container */}
        <g transform="translate(135, 305)">
          <rect x="0" y="0" width="220" height="125" rx="6" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />

          {/* Inner grey container box enclosing the 6 blocks */}
          <rect x="12" y="24" width="196" height="85" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Curly bracket with x 20 over the 4 inner blocks */}
          <path
            d="M 52 20 Q 52 14 62 14 L 98 14 Q 104 14 104 8 Q 104 14 110 14 L 146 14 Q 156 14 156 20"
            fill="none"
            stroke="#0f172a"
            strokeWidth="1.3"
          />
          <text x="104" y="4" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">x 20</text>

          {/* The 6 Purple Blocks inside Stage 1 */}
          {/* Block 1: Conv ( 3 X 3 ) */}
          <rect x="18" y="28" width="28" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="32" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 32 66)" textAnchor="middle">Conv ( 3 X 3)</text>

          {/* Middle 4 Blocks under the bracket: */}
          {/* Block 2: Conv ( 3 X 3 ) */}
          <rect x="52" y="28" width="26" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="65" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 65 66)" textAnchor="middle">Conv ( 3 X 3)</text>

          {/* Block 3: ReLU */}
          <rect x="78" y="28" width="24" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="90" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 90 66)" textAnchor="middle">ReLU</text>

          {/* Block 4: Conv ( 3 X 3 ) */}
          <rect x="102" y="28" width="26" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="115" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 115 66)" textAnchor="middle">Conv ( 3 X 3)</text>

          {/* Block 5: SE - Block */}
          <rect x="128" y="28" width="28" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="142" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 142 66)" textAnchor="middle">SE - Block</text>

          {/* Block 6: Conv ( 3 X 3 ) */}
          <rect x="166" y="28" width="28" height="77" rx="2" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.2" />
          <text x="180" y="66" fontSize="8" fontWeight="600" fill="#581c87" transform="rotate(-90 180 66)" textAnchor="middle">Conv ( 3 X 3)</text>

          {/* Arrow leaving Stage 1 into Residual */}
          <line x1="220" y1="62" x2="245" y2="62" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-orange)" />

          {/* 3. Residual Box */}
          <rect x="245" y="38" width="70" height="48" rx="4" fill="#fff" stroke="#334155" strokeWidth="1.6" />
          <text x="280" y="67" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">Residual</text>
        </g>

        {/* 4. Top-Right Stage Badges with Solid Red Annotation Connectors */}
        <g transform="translate(770, 320)">
          <rect x="0" y="0" width="170" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="85" y="15" fontSize="10" fontWeight="700" fill="#1e40af" textAnchor="middle">Stage 1 - Residual</text>
          <text x="85" y="28" fontSize="10" fontWeight="700" fill="#1e40af" textAnchor="middle">Prediction Net</text>

          <rect x="0" y="52" width="170" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="85" y="67" fontSize="10" fontWeight="700" fill="#1e40af" textAnchor="middle">Stage 2 - Diffusion as a</text>
          <text x="85" y="80" fontSize="10" fontWeight="700" fill="#1e40af" textAnchor="middle">Refiner</text>
        </g>

        {/* Red connector from Stage 1 red box (355, 335) → Stage 1 badge (770, 338) */}
        <line x1="355" y1="338" x2="770" y2="338" stroke="#dc2626" strokeWidth="2" />

        {/* Red connector from Stage 2 red box (665, 480) → up to 430 → right to Stage 2 badge (770, 390) */}
        <path d="M 665 480 L 665 390 L 770 390" fill="none" stroke="#dc2626" strokeWidth="2" />

        {/* 5. Addition node ⊕ and T-junction (Symmetric between Upsampled LR and Residual) */}
        {/* Upsampled LR bottom: x=77, y=374 → down to 482 → right to 260 */}
        <path d="M 77 374 L 77 482 L 249 482" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-orange)" />

        {/* Residual bottom: x=135+280=415, y=305+86=391 → down to 482 → left to 271 */}
        <path d="M 415 391 L 415 482 L 271 482" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-orange)" />

        {/* Addition node ⊕: cx=260, cy=482 */}
        <circle cx="260" cy="482" r="11" fill="#fff" stroke="#334155" strokeWidth="1.8" />
        <text x="260" y="487" fontSize="14" fontWeight="700" fill="#334155" textAnchor="middle">⊕</text>

        {/* Arrow straight down from ⊕ into Coarse HR */}
        <line x1="260" y1="493" x2="260" y2="520" stroke="#ea580c" strokeWidth="2.2" strokeDasharray="5,4" className="anim-flow-line" markerEnd="url(#arr-orange)" />

        {/* 6. Coarse HR Box (Pink) */}
        <rect x="228" y="520" width="64" height="38" rx="4" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
        <text x="260" y="536" fontSize="10" fontWeight="700" fill="#831843" textAnchor="middle">Coarse</text>
        <text x="260" y="549" fontSize="10" fontWeight="700" fill="#831843" textAnchor="middle">HR</text>

        {/* Arrow from Coarse HR → Noisy HR (Frozen, animated blue) */}
        <text x="360" y="533" fontSize="10" fontWeight="600" fill="#475569" textAnchor="middle">Frozen</text>
        <line x1="292" y1="539" x2="435" y2="539" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />

        {/* 7. Diffusion Input & Noisy HR Box (with layered pink backing) */}
        <g transform="translate(435, 516)">
          <text x="40" y="-6" fontSize="10" fontWeight="700" fill="#334155" textAnchor="middle">Diffusion Input</text>
          {/* Layered pink shadow box */}
          <rect x="-6" y="8" width="76" height="40" rx="8" fill="#fecaca" opacity="0.75" />
          {/* Front beige/yellow box */}
          <rect x="0" y="4" width="78" height="42" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
          <text x="39" y="29" fontSize="10" fontWeight="700" fill="#7c2d12" textAnchor="middle">Noisy HR</text>
        </g>

        {/* Arrow from Noisy HR into Stage 2 U-Net */}
        <line x1="513" y1="539" x2="540" y2="539" stroke="#9a3412" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* 8. Stage 2 U-Net Big Red Box */}
        <g transform="translate(540, 480)">
          <rect x="0" y="0" width="160" height="120" rx="6" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />
          <text x="80" y="16" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">U Net</text>
          {/* Internal U-Net Trapezoids */}
          <polygon points="15,25 48,45 48,95 15,115" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
          <polygon points="48,45 78,55 78,85 48,95" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
          <polygon points="78,55 112,45 112,95 78,85" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" />
          <polygon points="112,45 145,25 145,115 112,95" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" />
        </g>

        {/* Arrow from Stage 2 U-Net into Refined SR */}
        <line x1="700" y1="539" x2="735" y2="539" stroke="#9a3412" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-brown)" />

        {/* 9. Refined SR Box */}
        <rect x="735" y="518" width="84" height="42" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="777" y="544" fontSize="11" fontWeight="700" fill="#854d0e" textAnchor="middle">Refined SR</text>

        {/* 10. Left SWT & Sub-bands Section (Directly underneath Coarse HR at x=260) */}
        {/* Arrow from Coarse HR bottom → Left SWT */}
        <line x1="260" y1="558" x2="260" y2="590" stroke="#334155" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />
        <rect x="235" y="590" width="50" height="24" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
        <text x="260" y="606" fontSize="10" fontWeight="700" fill="#0f172a" textAnchor="middle">SWT</text>

        {/* Left Sub-bands: centered symmetrically below Left SWT at x=260 */}
        <g transform="translate(260, 642)">
          {/* I^(1,2)_c,HF (elongated orange box) */}
          <rect x="-68" y="0" width="60" height="26" rx="3" fill="#fed7aa" stroke="#ea580c" />
          <text x="-38" y="17" fontSize="9" fontWeight="700" fill="#7c2d12" textAnchor="middle">
            I<tspan dy="-3" fontSize="7">(1,2)</tspan><tspan dy="5" fontSize="7">c,HF</tspan>
          </text>

          {/* I^(2)_c,LL (compact yellow box) */}
          <rect x="8" y="0" width="40" height="26" rx="3" fill="#fef08a" stroke="#ca8a04" />
          <text x="28" y="17" fontSize="9" fontWeight="700" fill="#854d0e" textAnchor="middle">
            I<tspan dy="-3" fontSize="7">(2)</tspan><tspan dy="5" fontSize="7">c,LL</tspan>
          </text>

          {/* Symmetric Branch Lines from SWT bottom-center (0, -28) to each sub-band top-center */}
          <line x1="0" y1="-28" x2="-38" y2="0" stroke="#334155" strokeWidth="1.8" markerEnd="url(#arr-gray)" />
          <line x1="0" y1="-28" x2="28" y2="0" stroke="#334155" strokeWidth="1.8" markerEnd="url(#arr-gray)" />
        </g>

        {/* 11. Right SWT & Sub-bands Section (Directly underneath Refined SR at x=777) */}
        {/* Arrow from Refined SR bottom → Right SWT */}
        <line x1="777" y1="560" x2="777" y2="590" stroke="#334155" strokeWidth="1.8" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />
        <rect x="752" y="590" width="50" height="24" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
        <text x="777" y="606" fontSize="10" fontWeight="700" fill="#0f172a" textAnchor="middle">SWT</text>

        {/* Right Sub-bands: centered symmetrically below Right SWT at x=777 */}
        <g transform="translate(777, 642)">
          {/* I^(1,2)_d,HF (elongated orange box) */}
          <rect x="-68" y="0" width="60" height="26" rx="3" fill="#fed7aa" stroke="#ea580c" />
          <text x="-38" y="17" fontSize="9" fontWeight="700" fill="#7c2d12" textAnchor="middle">
            I<tspan dy="-3" fontSize="7">(1,2)</tspan><tspan dy="5" fontSize="7">d,HF</tspan>
          </text>

          {/* I^(2)_d,LL (compact yellow box) */}
          <rect x="8" y="0" width="40" height="26" rx="3" fill="#fef08a" stroke="#ca8a04" />
          <text x="28" y="17" fontSize="9" fontWeight="700" fill="#854d0e" textAnchor="middle">
            I<tspan dy="-3" fontSize="7">(2)</tspan><tspan dy="5" fontSize="7">d,LL</tspan>
          </text>

          {/* Symmetric Branch Lines from Right SWT bottom-center (0, -28) to each sub-band top-center */}
          <line x1="0" y1="-28" x2="-38" y2="0" stroke="#334155" strokeWidth="1.8" markerEnd="url(#arr-gray)" />
          <line x1="0" y1="-28" x2="28" y2="0" stroke="#334155" strokeWidth="1.8" markerEnd="url(#arr-gray)" />
        </g>

        {/* 12. Central ISWT & FINAL SR Fusion */}
        {/* ISWT Box: centered at x=520, y=608 */}
        <rect x="475" y="608" width="90" height="28" rx="4" fill="url(#grayGradient)" stroke="#475569" strokeWidth="1.6" />
        <text x="520" y="626" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">ISWT</text>

        {/* Left fusion path: from I^(2)_c,LL (260+28=288, y=642) → UP to 622 → RIGHT into ISWT left (475, 622) */}
        <path d="M 288 642 L 288 622 L 475 622" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />

        {/* Right fusion path: from I^(1,2)_d,HF (777-38=739, y=642) → UP to 622 → LEFT into ISWT right (565, 622) */}
        <path d="M 739 642 L 739 622 L 565 622" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeDasharray="6,4" className="anim-flow-line" markerEnd="url(#arr-blue)" />

        {/* Arrow straight down from ISWT into FINAL SR */}
        <line x1="520" y1="636" x2="520" y2="658" stroke="#334155" strokeWidth="2.2" strokeDasharray="4,3" className="anim-flow-line" markerEnd="url(#arr-gray)" />

        {/* FINAL SR Box */}
        <rect x="435" y="658" width="170" height="34" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <text x="520" y="680" fontSize="13" fontWeight="800" fill="#854d0e" textAnchor="middle">FINAL SR</text>
      </svg>
    </div>
  );
};
