import Image from "next/image";

const imgGame = "https://www.figma.com/api/mcp/asset/79125b76-c00c-4af6-8bd2-380b02364565";
const imgGame2 = "https://www.figma.com/api/mcp/asset/56e3f378-f41a-4004-827c-679eb8412f4a";

type BtnVariant = "pink" | "outline-pink" | "outline-white" | "light";

const cards = [
  {
    image: imgGame,
    title: "Cleopatra Mystery Riches",
    subtitle: "games",
    btn1: "pink" as BtnVariant,
    btn1Label: "Play demo",
    btn2: "outline-white" as BtnVariant,
    btn2Label: "More info",
  },
  {
    image: imgGame2,
    title: "Sugar Rush",
    subtitle: "games",
    btn1: "pink" as BtnVariant,
    btn1Label: "Play demo",
    btn2: "outline-white" as BtnVariant,
    btn2Label: "More info",
  },
  {
    image: imgGame,
    title: "Cleopatra Mystery Riches",
    subtitle: "games",
    btn1: "pink" as BtnVariant,
    btn1Label: "Play demo",
    btn2: "outline-white" as BtnVariant,
    btn2Label: "More info",
  },
];

function Btn({ variant, label }: { variant: BtnVariant; label: string }) {
  const base =
    "flex items-center justify-center flex-1 h-[56px] px-[24px] py-[12px] rounded-[8px] font-medium text-[18px] leading-[18px] whitespace-nowrap cursor-pointer transition-all border-solid border";
  
  if (variant === "pink")
    return (
      <button className={`${base} bg-transparent text-white border-[#ff4f8b] hover:bg-[#ff4f8b]`}>
        {label}
      </button>
    );

  if (variant === "outline-pink")
    return (
      <button className={`${base} bg-transparent text-white border-[#ff4f8b] hover:bg-[#ff4f8b]/10`}>
        {label}
      </button>
    );

  return (
    <button className={`${base} bg-transparent text-[#ffeded] border-[#ffeded] hover:bg-white/5`}>
      {label}
    </button>
  );
}

export default function OurGames() {
  return (
    <section id="games" className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">
        <h2 className="font-black text-white text-[80px] leading-[90px] uppercase text-center w-full">
          Our games
        </h2>

        <div className="flex flex-col gap-[80px] items-center w-full">
          <div className="flex gap-[24px] items-center w-full">
            {cards.map((c, i) => (
              <div
                key={i}
                className="flex flex-col items-start overflow-hidden rounded-[9px] w-[544px] h-[602px] shrink-0"
                style={{
                  backgroundImage:
                    "linear-gradient(-42.78deg, rgb(38, 13, 24) 8.84%, rgb(134, 36, 72) 104.59%)",
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  paddingLeft: '24px',
                  paddingRight: '32px'
                }}
              >
                <div className="flex flex-col gap-[24px] items-start w-full h-full">
                  <div className="h-[404px] w-full rounded-[8px] overflow-hidden relative shrink-0">
                    <Image
                      alt={c.title}
                      src={c.image}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-bold text-[#ffeded] text-[24px] whitespace-nowrap leading-none">{c.title}</p>
                    <p className="font-normal text-[#f6c1d1] text-[18px] leading-none">{c.subtitle}</p>
                  </div>
                  <div className="flex gap-[8px] items-center w-full mt-auto">
                    <Btn variant={c.btn1} label={c.btn1Label} />
                    <Btn variant={c.btn2} label={c.btn2Label} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center justify-center w-[272px] h-[82px] px-[32px] py-[12px] rounded-[8px] bg-[#ff4f8b] hover:bg-[#ff3a7a] transition-colors cursor-pointer border-0">
            <span className="font-bold text-[18px] leading-[18px] text-white whitespace-nowrap">
              View all our Games
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
