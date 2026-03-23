export default function SectionDivider({
  variant = 'wave',
  flip = false,
  color = '#111827',
}: {
  variant?: 'wave' | 'zigzag' | 'torn' | 'slant';
  flip?: boolean;
  color?: string;
}) {
  const transform = flip ? 'scaleY(-1)' : undefined;

  const paths: Record<string, string> = {
    wave: 'M0,32 C120,64 240,0 360,32 C480,64 600,0 720,32 C840,64 960,0 1080,32 C1200,64 1320,0 1440,32 L1440,64 L0,64 Z',
    zigzag: 'M0,32 L80,48 L160,16 L240,48 L320,16 L400,48 L480,16 L560,48 L640,16 L720,48 L800,16 L880,48 L960,16 L1040,48 L1120,16 L1200,48 L1280,16 L1360,48 L1440,32 L1440,64 L0,64 Z',
    torn: 'M0,40 L60,32 L100,44 L160,28 L200,42 L260,30 L340,46 L400,26 L460,38 L520,44 L600,28 L660,40 L720,32 L800,48 L860,30 L920,42 L1000,26 L1060,44 L1120,32 L1200,46 L1260,28 L1320,42 L1380,34 L1440,40 L1440,64 L0,64 Z',
    slant: 'M0,64 L1440,0 L1440,64 Z',
  };

  return (
    <div className="w-full leading-[0] -mb-px" style={{ transform }}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-16 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} fill={color} />
      </svg>
    </div>
  );
}
