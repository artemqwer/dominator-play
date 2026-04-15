const imgD12A99722 = "https://www.figma.com/api/mcp/asset/fb7e53e5-7eda-4eae-a747-0009e49701ba";
const imgImg19014 = "https://www.figma.com/api/mcp/asset/556bd3f9-918f-4fc2-802f-9e4c63454949";
const imgSocial = "https://www.figma.com/api/mcp/asset/e9741778-b250-4fa7-8f0e-04b8e58cc2dc";
const imgEllipse514 = "https://www.figma.com/api/mcp/asset/249c1c08-0603-48dd-a75a-6950ebbc838a";
const imgEllipse516 = "https://www.figma.com/api/mcp/asset/551a6720-16a3-4bff-bf1a-0893567d0b81";
const imgImg19014Constantin = "https://www.figma.com/api/mcp/asset/556bd3f9-918f-4fc2-802f-9e4c63454949";

export default function AboutFounders() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">

        <h2 className="font-black text-[80px] leading-[80px] text-center text-white uppercase w-full">
          Our Founders
        </h2>

        <div className="flex gap-[34px] justify-center w-full">

          {/* ── Ivan Kalashniuk ── */}
          <div className="bg-[#ffeded] flex flex-col h-[674px] overflow-hidden px-[34px] py-[42px] rounded-[8px] w-[584px]">
            <div className="flex flex-col gap-[40px] w-full">
              {/* Top Section: Name + Role + Photo */}
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <div className="font-black text-[40px] leading-[42px] text-[#1a0a12] tracking-[0.4px] uppercase">
                    IVAN<br />KALASHNIUK
                  </div>
                  <div className="mt-[8px] mb-[12px] flex items-center">
                    <img alt="LinkedIn" className="size-[20px]" src={imgSocial} />
                  </div>
                  <div className="font-normal text-[24px] leading-[27px] text-[#1a0a12] max-w-[280px]">
                    Co-Founder & Chief Executive Officer
                  </div>
                </div>

                {/* Photo Circle */}
                <div className="relative size-[222px] shrink-0">
                  <div className="absolute inset-0 bg-[#ffeded]" style={{ borderRadius: '50%' }}>
                    <img alt="" className="w-full h-full" src={imgEllipse514} />
                  </div>
                  <div className="absolute inset-[6px] overflow-hidden rounded-full transform rotate-[3.53deg]">
                    <img alt="Ivan Kalashniuk" className="absolute max-w-none"
                      style={{ height: '166.78%', left: '-4.24%', top: '-51.2%', width: '105.69%' }}
                      src={imgD12A99722} />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-[15px] font-normal text-[18px] leading-[21px] text-[#1a0a12]">
                <p>I have a sharp commercial instinct built over 7+ years in iGaming, spotting opportunities others often miss.</p>
                <p>Leading Dominator Play, I focus on building long-term partnerships that address our partners&apos; challenges and deliver measurable results. Our performance-driven math, adaptable RTP and volatility, market-fit mechanics, and fast integration ensure we meet their goals efficiently.</p>
                <p>At Dominator Play, I make sure every decision is guided by data and full accountability. We move fast, with precision, leaving nothing to chance.</p>
              </div>
            </div>

            {/* Quote - Pushed to bottom */}
            <div className="mt-auto">
              <p className="font-medium text-[24px] leading-[28px] text-black">
                <span className="font-bold">Quote:</span><br />
                <span className="italic font-bold">&quot;Risk more than others think is safe.&quot;</span>
              </p>
            </div>
          </div>

          {/* ── Constantin Molodtov ── */}
          <div className="bg-[#ffeded] flex flex-col h-[674px] overflow-hidden px-[34px] py-[42px] rounded-[8px] w-[584px]">
            <div className="flex flex-col gap-[40px] w-full">
              {/* Top Section: Name + Role + Photo */}
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <div className="font-black text-[40px] leading-[42px] text-[#1a0a12] tracking-[0.4px] uppercase">
                    CONSTANTIN<br />MOLODTOV
                  </div>
                  <div className="mt-[8px] mb-[12px] flex items-center">
                    <img alt="LinkedIn" className="size-[20px]" src={imgSocial} />
                  </div>
                  <div className="font-normal text-[24px] leading-[27px] text-[#1a0a12] max-w-[280px]">
                    Co-Founder & Chief Product Officer
                  </div>
                </div>

                {/* Photo Circle */}
                <div className="relative size-[222px] shrink-0">
                  <div className="absolute inset-0 bg-[#ffeded]" style={{ borderRadius: '50%' }}>
                    <img alt="" className="w-full h-full" src={imgEllipse516} />
                  </div>
                  <div className="absolute inset-0 overflow-hidden rounded-full transform rotate-[5.31deg]">
                    <img alt="Constantin Molodtov" className="absolute max-w-none"
                      style={{ height: '86.65%', left: '12.2%', top: '-13.59%', width: '71.08%' }}
                      src={imgImg19014Constantin} />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="font-normal text-[18px] leading-[21px] text-[#1a0a12]">
                <p>
                  For 7+ years, I&apos;ve been building games that don&apos;t just perform — they compete to dominate. A player doesn&apos;t return for the payout. They return for the surge right before it, the moment of tension, the split second when control feels possible, the impulse to play again. If you don&apos;t understand that rhythm, you&apos;re not building a product. You&apos;re shipping a temporary distraction. Every mechanic at Dominator Play follows my lead — built to hit that peak, data-backed, performance-tested, and designed to drive GGR, not impressions.
                </p>
              </div>
            </div>

            {/* Quote - Pushed to bottom */}
            <div className="mt-auto">
              <p className="font-medium text-[24px] leading-[28px] text-black">
                <span className="font-bold">Quote:</span><br />
                <span className="italic font-bold">&quot;Players don&apos;t return for the win — they return for the feeling that they can achieve more.&quot;</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

