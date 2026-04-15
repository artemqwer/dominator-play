const imgCog = "https://www.figma.com/api/mcp/asset/dd6503e6-ae1a-4d10-b054-07e7c797bdb7";
const imgTarget = "https://www.figma.com/api/mcp/asset/6b2f7b9d-2cde-4e6d-8233-4c4b86a16106";
const imgLink = "https://www.figma.com/api/mcp/asset/30c3dd2d-213f-473f-902c-0bed504a722c";
const imgChat = "https://www.figma.com/api/mcp/asset/4be10bf2-341a-4bb9-9397-556f08d7ad76";
const imgFrame = "https://www.figma.com/api/mcp/asset/1f2accc0-bdc6-4868-9771-b974d3f08396";
const imgAudio = "https://www.figma.com/api/mcp/asset/1a39cac4-8de0-4e2d-b463-ebb8685a5c66";

const cardBg = "linear-gradient(122.26deg, rgb(226, 60, 119) 37.77%, rgb(32, 12, 21) 108.16%)";

export default function AboutCulture() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">

        <p className="font-black text-white text-[80px] leading-[80px] uppercase text-center w-full">
          Our Culture
        </p>

        <div className="flex flex-col gap-[24px] items-start w-full">

          {/* Row 1 */}
          <div className="flex gap-[24px] items-center w-full">

            {/* Expert Team */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="relative shrink-0 size-[42px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCog} />
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] whitespace-nowrap">Expert Team</p>
                  <p className="font-normal text-[32px] leading-[32px] min-w-full w-min">
                    A team of professionals who live and breathe the product, using analytics to drive game development while keeping an operator-first perspective.
                  </p>
                </div>
              </div>
            </div>

            {/* Domination Mindset */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="relative shrink-0 size-[42px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTarget} />
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] w-[456px]">Domination Mindset</p>
                  <p className="font-normal text-[32px] leading-[32px] min-w-full w-min">
                    We create with ambition, helping operators seize the lead, stay competitive, scale faster, and dominate their market through stronger content.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connection */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="relative shrink-0 size-[42px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLink} />
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] whitespace-nowrap">Direct Connection</p>
                  <p className="font-normal text-[32px] leading-[32px] min-w-full w-min">
                    Straightforward, transparent collaboration with partners – aligned goals, rapid feedback, clear communication, and zero fluff.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2 */}
          <div className="flex gap-[24px] items-center w-full">

            {/* Data-Led Decisions */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="overflow-clip relative shrink-0 size-[42px]">
                  <div className="absolute left-[5px] size-[32px] top-[5px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChat} />
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] whitespace-nowrap">Data-Led Decisions</p>
                  <p className="font-normal text-[32px] leading-[32px] w-[452px]">
                    We build and improve games through validated insights, performance metrics, and continuous iteration – turning real data into decisive power plays.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance First */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="relative shrink-0 size-[42px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] whitespace-nowrap">Performance First</p>
                  <p className="font-normal text-[32px] leading-[32px] min-w-full w-min">
                    Every feature is built with impact in mind: stronger gameplay, better retention, and operator results that hit hard and leave a mark.
                  </p>
                </div>
              </div>
            </div>

            {/* Adaptive Setup */}
            <div className="flex flex-col h-[414px] items-start overflow-clip p-[40px] rounded-[8px] shrink-0 w-[537px]" style={{ backgroundImage: cardBg }}>
              <div className="flex flex-col gap-[40px] items-end w-full">
                <div className="relative shrink-0 size-[42px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAudio} />
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-end text-white w-full">
                  <p className="font-black text-[38px] leading-[38px] whitespace-nowrap">Adaptive Setup</p>
                  <p className="font-normal text-[32px] leading-[32px] min-w-full w-min">
                    Core gameplay that can be fine-tuned to match operator goals, mechanics, and performance, giving full control and command.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
