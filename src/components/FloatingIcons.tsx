'use client';

export default function FloatingIcons({ density = 'normal' }: { density?: 'sparse' | 'normal' | 'dense' }) {
  const count = density === 'sparse' ? 8 : density === 'dense' ? 20 : 14;

  const icons = [
    // Skeleton key
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <circle cx="10" cy="10" r="6" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <circle cx="8" cy="10" r="2" strokeWidth="1" fill="none" stroke="currentColor" />
        <line x1="16" y1="10" x2="30" y2="10" strokeWidth="1.5" stroke="currentColor" />
        <line x1="26" y1="10" x2="26" y2="16" strokeWidth="1.5" stroke="currentColor" />
        <line x1="22" y1="10" x2="22" y2="14" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    // Magnifying glass
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <circle cx="14" cy="14" r="8" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <line x1="20" y1="20" x2="28" y2="28" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    // Padlock
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <rect x="6" y="14" width="20" height="14" rx="2" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <path d="M10 14V10a6 6 0 0 1 12 0v4" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <circle cx="16" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
    // Question mark
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <path d="M11 12a5 5 0 0 1 9.5 2c0 3-4.5 3-4.5 6" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinecap="round" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
      </svg>
    ),
    // Puzzle piece
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <path d="M6 6h8v3a3 3 0 0 0 6 0V6h6v8h-3a3 3 0 0 0 0 6h3v6H6V6z" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
    // Footprint
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <ellipse cx="14" cy="20" rx="5" ry="8" strokeWidth="1.5" fill="none" stroke="currentColor" transform="rotate(-10 14 20)" />
        <ellipse cx="10" cy="8" rx="2" ry="3" strokeWidth="1" fill="none" stroke="currentColor" />
        <ellipse cx="16" cy="6" rx="2" ry="3" strokeWidth="1" fill="none" stroke="currentColor" />
        <ellipse cx="21" cy="8" rx="2" ry="2.5" strokeWidth="1" fill="none" stroke="currentColor" />
      </svg>
    ),
    // Keyhole
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="12" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <circle cx="16" cy="13" r="3" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <path d="M14 16l-2 8h8l-2-8" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
    // Envelope
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <rect x="4" y="8" width="24" height="16" rx="2" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <path d="M4 10l12 8 12-8" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round" />
      </svg>
    ),
    // Eye
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <path d="M2 16s5-8 14-8 14 8 14 8-5 8-14 8S2 16 2 16z" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <circle cx="16" cy="16" r="4" strokeWidth="1.5" fill="none" stroke="currentColor" />
      </svg>
    ),
    // Fingerprint (arcs)
    (p: IconProps) => (
      <svg {...svgProps(p)} viewBox="0 0 32 32">
        <path d="M16 28c0-6-4-10-4-14a4 4 0 0 1 8 0" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinecap="round" />
        <path d="M10 22c0-4-2-6-2-10a8 8 0 0 1 16 0c0 2-.5 4-1 6" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinecap="round" />
        <path d="M6 20c0-2-1-4-1-8a11 11 0 0 1 22 0c0 2 0 3-.5 5" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
  ];

  type IconProps = { className?: string; style?: React.CSSProperties };

  function svgProps(p: IconProps) {
    return {
      className: p.className,
      style: p.style,
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    };
  }

  // Deterministic placement based on index
  const placements = Array.from({ length: count }, (_, i) => {
    const seed = (i * 7 + 3) % 100;
    const iconIdx = i % icons.length;
    const size = 24 + (seed % 5) * 8; // 24-56px
    const top = ((i * 17 + 11) % 90) + 2; // 2-92%
    const left = ((i * 23 + 7) % 92) + 3; // 3-95%
    const opacity = 0.03 + (seed % 6) * 0.01; // 0.03-0.08
    const animDuration = 15 + (seed % 12); // 15-26s
    const animDelay = (i * 2.3) % 10; // 0-10s staggered
    const rotation = (seed * 3.6) % 360;
    const animName = `float-drift-${(i % 3) + 1}`;

    return { iconIdx, size, top, left, opacity, animDuration, animDelay, rotation, animName };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {placements.map((p, i) => {
        const Icon = icons[p.iconIdx];
        return (
          <div
            key={i}
            className="absolute text-teal-400"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              transform: `rotate(${p.rotation}deg)`,
              animation: `${p.animName} ${p.animDuration}s ease-in-out ${p.animDelay}s infinite`,
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
