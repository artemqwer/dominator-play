const imgVector13 = "https://www.figma.com/api/mcp/asset/e7529cd9-642f-492e-9f1e-637048622e75";
const imgEllipse530 = "https://www.figma.com/api/mcp/asset/93ba6f5a-085b-4579-bdb0-2c9b42804eb2";
const imgEllipse532 = "https://www.figma.com/api/mcp/asset/f8d5af49-061f-41ec-b6f6-0098b931029e";
const imgEllipse533 = "https://www.figma.com/api/mcp/asset/d7c2a86e-d46c-4c79-bd23-993c9cc326af";
const imgEllipse6133 = "https://www.figma.com/api/mcp/asset/023a143a-c48b-427c-a442-d6c760448e15";
const imgChatGptAbout = "https://www.figma.com/api/mcp/asset/60713bc6-f710-40fc-8e50-06d5e9e61c4b";

const imgCog = "https://www.figma.com/api/mcp/asset/b2551035-2953-45ee-b626-51fc9d54b73e";
const imgAudioSettings = "https://www.figma.com/api/mcp/asset/b713d6a1-7d80-4e5f-b104-320a519fe45b";
const imgElements = "https://www.figma.com/api/mcp/asset/5092df02-7863-4f6d-9874-ce9d0ef83704";
const imgBarChart = "https://www.figma.com/api/mcp/asset/36df0c72-778c-415b-9980-008937448789";

const cardBg = "linear-gradient(119.63deg, rgb(226, 60, 119) 37.77%, rgb(32, 12, 21) 108.16%)";

const featureCards = [
  {
    icon: imgCog,
    iconInner: true,
    title: "Proven\nmechanics",
    description: "Games built on proven industry mechanics that are trusted by operators and familiar to players",
  },
  {
    icon: imgAudioSettings,
    iconInner: false,
    title: "Fast customization",
    description: "Quick adjustments to RTP, volatility and game settings — tailored to each operator's needs.",
    titleWidth: "270px",
  },
  {
    icon: imgElements,
    iconInner: true,
    title: "Gamification built in",
    description: "Progression-based features designed to boost engagement, acquisition and retention.",
  },
  {
    icon: imgBarChart,
    iconInner: false,
    title: "Post-launch\noptimization",
    description: "Ongoing improvements after release, driven by live data to maximize performance.",
    titleSize: "34px",
    titleWidth: "226px",
  },
];

export default function AboutDominatorPlay() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[120px] items-center">

        {/* About section: text left + image right */}
        <div className="flex gap-[20px] items-center w-full">
          {/* Text */}
          <div className="h-[604px] overflow-clip relative shrink-0 w-[828px]">
            <div className="absolute flex flex-col gap-[80px] items-start left-0 top-[7px] w-[789px]">
              <h2 className="font-black text-white text-[80px] leading-[80px] uppercase w-full">
                About Dominator Play
              </h2>
              <div className="font-medium text-[#ffeded] text-[24px] leading-[24px] w-full">
                <p className="mb-0">Dominator Play is a performance-driven B2B iGaming provider. We don't just build games — we craft experiences that dominate, keep tension high, and pull players in. Our adaptable slots, instant-action thrills, and crash mechanics are designed to deliver control, engagement, and measurable operator impact.</p>
                <p className="mb-0">Every mechanic is engineered around the peak moment, the split second before a win, when players feel the urge to play. We don't chase trends; we create games that rise to the top of analytics dashboards and stay there. At the heart of it all is the thrill that keeps players returning for the peak moments.</p>
              </div>
            </div>
          </div>

          {/* Decorative image card */}
          <div className="bg-[#1a0a12] h-[604px] overflow-clip relative rounded-[8px] shrink-0 w-[828px]">
            {/* Vector pattern top-left */}
            <div className="absolute flex items-center justify-center" style={{ inset: '-26.82% 74.02% 54.82% -25.97%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(-39.3821cqw, 37.1437cqh)', transform: 'rotate(46.36deg)', width: 'hypot(60.6179cqw, 62.8563cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-14.53% -9%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgVector13} />
                  </div>
                </div>
              </div>
            </div>
            {/* Vector pattern bottom-right */}
            <div className="absolute flex items-center justify-center" style={{ inset: '69.7% -5.93% -41.71% 53.99%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(-39.3821cqw, 37.1437cqh)', transform: 'rotate(46.36deg)', width: 'hypot(60.6179cqw, 62.8563cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-14.53% -9%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgVector13} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ellipse top-left */}
            <div className="absolute flex items-center justify-center" style={{ inset: '-48.01% 53.89% 49.22% -25.97%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-46.07% -46.31%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgEllipse530} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ellipse upper-right */}
            <div className="absolute flex items-center justify-center" style={{ inset: '-31.79% -13.46% 69.81% 68.24%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-73.43% -73.82%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgEllipse532} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ellipse center */}
            <div className="absolute flex items-center justify-center" style={{ inset: '13.58% 36.06% 24.44% 18.72%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-73.43% -73.82%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgEllipse532} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ellipse full */}
            <div className="absolute flex items-center justify-center" style={{ inset: '-0.83% 12.83% 2.04% 15.1%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-46.07% -46.31%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgEllipse530} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ellipse small center */}
            <div className="absolute flex items-center justify-center" style={{ inset: '20.03% 34.5% 28.42% 27.9%', containerType: 'size' }}>
              <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: '-88.3% -88.77%' }}>
                    <img alt="" className="block max-w-none size-full" src={imgEllipse533} />
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom glow */}
            <div className="absolute" style={{ height: '108px', left: '83px', top: '397px', width: '689px' }}>
              <div className="absolute" style={{ inset: '-31.48% -4.93%' }}>
                <img alt="" className="block max-w-none size-full" src={imgEllipse6133} />
              </div>
            </div>
            {/* Main photo */}
            <div className="absolute overflow-hidden pointer-events-none"
              style={{ aspectRatio: '765/421', left: '2.9%', right: '4.71%', top: '91px' }}>
              <img alt="" className="absolute max-w-none"
                style={{ height: '147.76%', left: '-3.15%', top: '-25.4%', width: '108.39%' }}
                src={imgChatGptAbout} />
            </div>
          </div>
        </div>

        {/* 4 feature cards */}
        <div className="flex gap-[24px] items-center w-full">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col h-[344px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[402px]"
              style={{ backgroundImage: cardBg }}
            >
              <div className="flex flex-col gap-[73px] items-end w-full">
                <div className="overflow-clip relative shrink-0 size-[42px]">
                  {card.iconInner ? (
                    <div className="absolute left-[3px] size-[36px] top-[3px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                    </div>
                  ) : (
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={card.icon} />
                  )}
                </div>
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p
                    className="font-bold text-white leading-[38px] whitespace-pre-line"
                    style={{
                      fontSize: card.titleSize || '38px',
                      width: card.titleWidth || '100%',
                    }}
                  >
                    {card.title}
                  </p>
                  <p className="font-normal text-[#ffeded] text-[18px] leading-[20px] w-full">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
