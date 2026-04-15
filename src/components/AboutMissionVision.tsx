const imgVector13 = "https://www.figma.com/api/mcp/asset/e7529cd9-642f-492e-9f1e-637048622e75";
const imgEllipse530 = "https://www.figma.com/api/mcp/asset/93ba6f5a-085b-4579-bdb0-2c9b42804eb2";
const imgEllipse532 = "https://www.figma.com/api/mcp/asset/f8d5af49-061f-41ec-b6f6-0098b931029e";
const imgChatGptMission = "https://www.figma.com/api/mcp/asset/e0e69c32-f210-4a29-b8c7-eb77257d1596";

function DecorativeCard({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="bg-[#1a0a12] h-[604px] overflow-clip relative rounded-[8px] shrink-0 w-[828px]">
      {/* Vector top-left */}
      <div className="absolute flex items-center justify-center" style={{ inset: '-26.82% 74.02% 54.82% -25.97%', containerType: 'size' }}>
        <div style={{ flexShrink: 0, height: 'hypot(-39.3821cqw, 37.1437cqh)', transform: 'rotate(46.36deg)', width: 'hypot(60.6179cqw, 62.8563cqh)' }}>
          <div className="relative size-full">
            <div className="absolute" style={{ inset: '-14.53% -9%' }}>
              <img alt="" className="block max-w-none size-full" src={imgVector13} />
            </div>
          </div>
        </div>
      </div>
      {/* Vector bottom-right */}
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
      {/* Ellipse full-center */}
      <div className="absolute flex items-center justify-center" style={{ inset: '-0.83% 12.83% 2.04% 15.1%', containerType: 'size' }}>
        <div style={{ flexShrink: 0, height: 'hypot(51.5954cqw, -48.6682cqh)', transform: 'rotate(-133.32deg)', width: 'hypot(-48.4046cqw, -51.3318cqh)' }}>
          <div className="relative size-full">
            <div className="absolute" style={{ inset: '-46.07% -46.31%' }}>
              <img alt="" className="block max-w-none size-full" src={imgEllipse530} />
            </div>
          </div>
        </div>
      </div>
      {/* Main photo */}
      <div className="absolute overflow-hidden pointer-events-none"
        style={{ height: '430px', left: 'calc(50% + 0.5px)', top: '50%', transform: 'translate(-50%, -50%)', width: '731px' }}>
        <img alt="" className="absolute max-w-none"
          style={{ height: '123.57%', left: '-5.88%', top: '-12.6%', width: '109.03%' }}
          src={imageSrc} />
      </div>
    </div>
  );
}

export default function AboutMissionVision() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[120px] items-center">

        {/* Our Mission */}
        <div className="flex gap-[20px] items-center w-full">
          {/* Text */}
          <div className="h-[604px] overflow-clip relative shrink-0 w-[828px]">
            <div className="absolute flex flex-col gap-[80px] items-start left-0 top-0 w-[593px]">
              <h2 className="font-black text-white text-[80px] leading-[80px] uppercase w-full">
                Our Mission
              </h2>
              <p className="font-medium text-white text-[24px] leading-[26px] w-full">
                Dominator Play builds and scales gaming products based on data-validated hypotheses, tailoring them to specific operator business objectives. We operate as a product-commercial partner, focused on maximizing operator turnover through pre-launch configuration, post-launch adaptation based on live performance, and collaborative marketing activities.
              </p>
            </div>
          </div>
          {/* Image */}
          <DecorativeCard imageSrc={imgChatGptMission} />
        </div>

        {/* Our Vision */}
        <div className="flex gap-[20px] items-center w-full">
          {/* Image */}
          <DecorativeCard imageSrc={imgChatGptMission} />
          {/* Text */}
          <div className="h-[591px] overflow-clip relative shrink-0 w-[826px]">
            <h2 className="absolute font-black text-white text-[80px] leading-[80px] left-0 top-[0.5px] uppercase w-[518px]">
              Our Vision
            </h2>
            <p className="absolute font-medium text-white text-[24px] leading-[26px] left-0 top-[160.5px] w-[625px]">
              Dominator Play focuses on building games that deliver scalable operator revenue and, through this approach, strengthens its market position. These performance-driven products are designed to outperform comparable content under the same initial conditions, establishing trust with operators and enabling deeper, results-focused collaboration. As an outcome, operators gain long-term partnerships and bespoke games tailored to their audiences, commercial objectives, and monetization models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
