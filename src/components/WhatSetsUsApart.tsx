const imgPlus02 = "https://www.figma.com/api/mcp/asset/498a9989-0627-4d06-a5c5-1d5ffc75f59e";

const leftItems = [
  "Flexible game customization",
  "Gamification with advantage",
  "Configurable game architecture",
  "Designed for lobby visibility",
];

const rightItems = [
  "24/7 Technical support",
  "Exclusive early access",
  "Real-time analytics",
  "Custom integration",
];

function AccordionItem({ label }: { label: string }) {
  return (
    <div 
      className="w-full bg-[#491429] rounded-[9px] h-[72px] flex items-center relative group cursor-pointer hover:bg-[#5a1a33] transition-colors"
      style={{ paddingLeft: '32px', paddingRight: '32px' }}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-medium text-white text-[24px] leading-[24px] tracking-[0%]">
          {label}
        </span>
        <div className="shrink-0 size-[24px] relative opacity-60 group-hover:opacity-100 transition-opacity">
          <img alt="+" src={imgPlus02} className="absolute inset-0 block size-full" />
        </div>
      </div>
    </div>
  );
}

export default function WhatSetsUsApart() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col items-center">
        <h2 
          className="font-black text-white text-[120px] leading-[1] text-center w-full uppercase"
          style={{ marginBottom: '80px' }}
        >
          WHAT SETS US APART
        </h2>

        <div className="flex gap-[43px] items-start w-full">
          {/* Left column */}
          <div className="flex flex-col gap-[34px] flex-1 self-stretch">
            <h3 className="font-bold text-white text-[48px] leading-[1] w-full" style={{ paddingLeft: '32px' }}>
              What makes us different
            </h3>
            <div className="flex flex-col gap-[24px] w-full">
              {leftItems.map((t) => (
                <AccordionItem key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[34px] flex-1 self-stretch">
            <h3 className="font-bold text-white text-[48px] leading-[1] w-full" style={{ paddingLeft: '32px' }}>
              Partner benefits
            </h3>
            <div className="flex flex-col gap-[24px] w-full">
              {rightItems.map((t) => (
                <AccordionItem key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
