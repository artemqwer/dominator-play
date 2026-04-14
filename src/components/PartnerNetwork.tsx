const row1 = [
  "https://www.figma.com/api/mcp/asset/53902644-7bd3-4fe9-956e-f4383c9c0da1",
  "https://www.figma.com/api/mcp/asset/5bf26969-3387-4d1b-b1a1-c302ffd6d6a3",
  "https://www.figma.com/api/mcp/asset/53902644-7bd3-4fe9-956e-f4383c9c0da1",
  "https://www.figma.com/api/mcp/asset/5c99d8e0-27ec-4845-81bf-1b04829f2a24",
  "https://www.figma.com/api/mcp/asset/4adec2e5-02d7-4ff6-abb1-f5640698ae03",
  "https://www.figma.com/api/mcp/asset/29035880-3f55-4619-8de6-33d4124bc340",
  "https://www.figma.com/api/mcp/asset/53902644-7bd3-4fe9-956e-f4383c9c0da1",
  "https://www.figma.com/api/mcp/asset/4adec2e5-02d7-4ff6-abb1-f5640698ae03",
];

function LogoRow({ logos, offsetLeft }: { logos: string[]; offsetLeft: number }) {
  return (
    <div className="relative h-[80px] w-[1768px]" style={{ marginLeft: `${offsetLeft}px` }}>
      {logos.map((src, i) => (
        <div key={i} className="absolute top-0 h-[80px] w-[200px]" style={{ left: `${i * 224}px` }}>
          <img alt="" src={src} className="block size-full object-contain" />
        </div>
      ))}
    </div>
  );
}

export default function PartnerNetwork() {
  return (
    <section className="w-full flex justify-center overflow-hidden" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col items-center">
        <h2 
          className="font-black text-white text-[80px] leading-[90px] uppercase text-center w-full"
          style={{ marginBottom: '80px' }}
        >
          Partner Network
        </h2>

        <div className="flex flex-col items-start" style={{ gap: "38px" }}>
          <LogoRow logos={row1} offsetLeft={0} />
          <LogoRow logos={row1} offsetLeft={238} />
          <LogoRow logos={row1} offsetLeft={55} />
        </div>
      </div>
    </section>
  );
}
