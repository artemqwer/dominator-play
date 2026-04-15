const imgCog = "https://www.figma.com/api/mcp/asset/dd6503e6-ae1a-4d10-b054-07e7c797bdb7";
const imgTarget = "https://www.figma.com/api/mcp/asset/6b2f7b9d-2cde-4e6d-8233-4c4b86a16106";
const imgLink = "https://www.figma.com/api/mcp/asset/30c3dd2d-213f-473f-902c-0bed504a722c";
const imgChat = "https://www.figma.com/api/mcp/asset/4be10bf2-341a-4bb9-9397-556f08d7ad76";
const imgFrame = "https://www.figma.com/api/mcp/asset/1f2accc0-bdc6-4868-9771-b974d3f08396";
const imgAudio = "https://www.figma.com/api/mcp/asset/1a39cac4-8de0-4e2d-b463-ebb8685a5c66";

const cardBg = "linear-gradient(122.26deg, rgb(226, 60, 119) 37.77%, rgb(32, 12, 21) 108.16%)";

const cultureCards = [
  {
    icon: imgCog,
    title: "Expert Team",
    description: "A team of professionals who live and breathe the product, using analytics to drive game development while keeping an operator-first perspective.",
  },
  {
    icon: imgTarget,
    title: "Domination Mindset",
    description: "We create with ambition, helping operators seize the lead, stay competitive, scale faster, and dominate their market through stronger content.",
    titleWidth: "456px",
  },
  {
    icon: imgLink,
    title: "Direct Connection",
    description: "Straightforward, transparent collaboration with partners – aligned goals, rapid feedback, clear communication, and zero fluff.",
  },
  {
    icon: imgChat,
    iconInner: true,
    title: "Data-Led Decisions",
    description: "We build and improve games through validated insights, performance metrics, and continuous iteration – turning real data into decisive power plays.",
    descWidth: "452px",
  },
  {
    icon: imgFrame,
    title: "Performance First",
    description: "Every feature is built with impact in mind: stronger gameplay, better retention, and operator results that hit hard and leave a mark.",
  },
  {
    icon: imgAudio,
    title: "Adaptive Setup",
    description: "Core gameplay that can be fine-tuned to match operator goals, mechanics, and performance, giving full control and command.",
  },
];

export default function AboutCulture() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">
        <h2 className="font-black text-white text-[80px] leading-[80px] uppercase text-center w-full">
          Our Culture
        </h2>

        <div className="flex flex-col gap-[24px] items-start w-full">
          {/* Row 1 */}
          <div className="flex gap-[24px] items-center w-full">
            {cultureCards.slice(0, 3).map((card, i) => (
              <div
                key={i}
                className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]"
                style={{ backgroundImage: cardBg }}
              >
                <div className="flex flex-col gap-[40px] items-end w-full">
                  <div className="relative shrink-0 size-[42px]">
                    {card.iconInner ? (
                      <div className="absolute left-[5px] size-[32px] top-[5px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                      </div>
                    ) : (
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                    )}
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                    <p
                      className="font-black text-[38px] leading-[38px] whitespace-nowrap"
                      style={{ width: card.titleWidth || 'auto' }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="font-normal text-[32px] leading-[32px]"
                      style={{ width: card.descWidth || '100%' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-[24px] items-center w-full">
            {cultureCards.slice(3, 6).map((card, i) => (
              <div
                key={i}
                className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]"
                style={{ backgroundImage: cardBg }}
              >
                <div className="flex flex-col gap-[40px] items-end w-full">
                  <div className="relative shrink-0 size-[42px]">
                    {card.iconInner ? (
                      <div className="absolute left-[5px] size-[32px] top-[5px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                      </div>
                    ) : (
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                    )}
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                    <p
                      className="font-black text-[38px] leading-[38px] whitespace-nowrap"
                      style={{ width: card.titleWidth || 'auto' }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="font-normal text-[32px] leading-[32px]"
                      style={{ width: card.descWidth || '100%' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
