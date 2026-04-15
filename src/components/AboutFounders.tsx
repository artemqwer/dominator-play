const imgD12A99722 = "https://www.figma.com/api/mcp/asset/fb7e53e5-7eda-4eae-a747-0009e49701ba";
const imgImg19014 = "https://www.figma.com/api/mcp/asset/556bd3f9-918f-4fc2-802f-9e4c63454949";
const imgSocial = "https://www.figma.com/api/mcp/asset/e9741778-b250-4fa7-8f0e-04b8e58cc2dc";
const imgEllipse514 = "https://www.figma.com/api/mcp/asset/249c1c08-0603-48dd-a75a-6950ebbc838a";
const imgD12A99721 = "https://www.figma.com/api/mcp/asset/fe9eb7a4-06bd-4a3d-9357-f8635baa4152";
const imgEllipse516 = "https://www.figma.com/api/mcp/asset/551a6720-16a3-4bff-bf1a-0893567d0b81";
const imgImg19013 = "https://www.figma.com/api/mcp/asset/ace14fff-8ade-482f-bd3c-f4e29f7fd09d";

export default function AboutFounders() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">

        <p className="font-black leading-[80px] text-[80px] text-center text-white uppercase w-full">
          Our Founders
        </p>

        <div className="flex gap-[34px] items-center w-full">

          {/* ── Ivan Kalashniuk ── no explicit width, auto from content */}
          <div className="bg-[#ffeded] flex h-[674px] items-center overflow-clip px-[34px] py-[42px] relative rounded-[8px] shrink-0">
            <div className="flex flex-col gap-[82px] items-start relative shrink-0 w-[516px]">

              <div className="flex flex-col gap-[40px] items-start w-full">

                {/* Name + photo row */}
                <div className="flex gap-[8px] items-center w-full">

                  {/* Name block */}
                  <div className="h-[208px] relative shrink-0 w-[284px]">
                    <div className="absolute flex flex-col gap-[8px] items-start left-0 top-0 w-[284px]">
                      <div className="font-black leading-0 text-[40px] text-[#1a0a12] tracking-[0.4px] uppercase w-full whitespace-pre-wrap">
                        <p className="leading-[42px] mb-0">Ivan </p>
                        <p className="leading-[42px]">Kalashniuk</p>
                      </div>
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocial} />
                      </div>
                    </div>
                    <p className="absolute font-normal leading-[27px] left-0 text-[24px] text-[#1a0a12] top-[154px] w-[284px]">
                      Co-Founder & Chief Executive Officer
                    </p>
                  </div>

                  {/* Photo (stacked grid) */}
                  <div className="inline-grid leading-0 place-items-start relative shrink-0">
                    {/* Pink ellipse background */}
                    <div className="col-start-1 row-start-1 ml-[6.26px] mt-[5.26px] relative size-[210px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse514} />
                    </div>
                    {/* Masked photo */}
                    <div className="col-start-1 row-start-1 inline-grid ml-0 mt-0 place-items-start relative" style={{ width: '222.516px', height: '222.516px' }}>
                      <div className="col-start-1 row-start-1 flex items-center justify-center relative" style={{ height: '249.187px', marginLeft: '-10.34px', marginTop: '-7px', width: '260.637px' }}>
                        <div className="flex-none rotate-[3.53deg]">
                          <div className="relative" style={{
                            height: '234.462px',
                            width: '246.686px',
                            maskImage: `url('${imgD12A99721}')`,
                            maskSize: '210.007px 210.007px',
                            maskPosition: '17.652px 13.877px',
                            maskRepeat: 'no-repeat',
                          }}>
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute max-w-none"
                                style={{ height: '166.78%', left: '-4.24%', top: '-51.2%', width: '105.69%' }}
                                src={imgD12A99722} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="font-normal h-[171px] leading-0 text-[18px] text-[#1a0a12] w-full whitespace-pre-wrap">
                  <p className="leading-[21px] mb-0">I have a sharp commercial instinct built over 7+ years in iGaming, spotting opportunities others often miss. </p>
                  <p className="leading-[21px] mb-0">Leading Dominator Play, I focus on building long-term partnerships that address our partners' challenges and deliver measurable results. Our performance-driven math, adaptable RTP and volatility, market-fit mechanics, and fast integration ensure we meet their goals efficiently.</p>
                  <p className="leading-[21px] mb-0">At Dominator Play, I make sure every decision is guided by data and full accountability. We move fast, with precision, leaving nothing to chance.</p>
                  <p className="leading-[21px] mb-0">​</p>
                  <p className="leading-[21px]">​</p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-medium italic leading-[24px] text-[24px] text-black w-[427px] whitespace-pre-wrap">
                Quote:{'\n'}{` "Risk more than others think is safe."`}
              </p>
            </div>
          </div>

          {/* ── Constantin Molodtov ── w-[584px] */}
          <div className="inline-grid leading-0 place-items-start relative shrink-0">
            <div className="col-start-1 row-start-1 bg-[#ffeded] flex h-[674px] items-center ml-0 mt-0 overflow-clip px-[34px] py-[42px] relative rounded-[8px] w-[584px]">
              <div className="flex flex-col gap-[20px] items-center w-[529px]">

                <div className="flex flex-col gap-[40px] items-start w-full">

                  {/* Name + photo row */}
                  <div className="flex gap-[8px] items-center w-full">

                    {/* Name block */}
                    <div className="h-[202px] relative shrink-0 w-[270px]">
                      <div className="absolute flex flex-col gap-[8px] items-start left-0 top-0 w-[270px]">
                        <div className="font-black leading-0 text-[40px] text-[#1a0a12] uppercase">
                          <p className="leading-[40px] mb-0 whitespace-pre">Constantin </p>
                          <p className="leading-[40px] whitespace-pre">Molodtov</p>
                        </div>
                        <div className="relative shrink-0 size-[20px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocial} />
                        </div>
                      </div>
                      <p className="absolute font-normal leading-[27px] left-0 text-[24px] text-[#1a0a12] top-[148px] w-[270px]">
                        Co-Founder & Chief Product Officer
                      </p>
                    </div>

                    {/* Photo (stacked grid) */}
                    <div className="inline-grid leading-0 place-items-start relative shrink-0">
                      <div className="inline-grid ml-0 mt-0 place-items-start relative">
                        {/* Pink ellipse background */}
                        <div className="col-start-1 row-start-1 relative size-[222px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse516} />
                        </div>
                        {/* Masked photo */}
                        <div className="col-start-1 row-start-1 inline-grid ml-0 mt-0 place-items-start relative">
                          <div className="col-start-1 row-start-1 flex items-center justify-center relative" style={{ height: '568.676px', marginLeft: '-133.2px', marginTop: '-31.71px', width: '528.01px' }}>
                            <div className="flex-none rotate-[5.31deg]">
                              <div className="relative" style={{
                                height: '526.368px',
                                width: '481.34px',
                                maskImage: `url('${imgImg19013}')`,
                                maskSize: '222px 222px',
                                maskPosition: '133.2px 31.714px',
                                maskRepeat: 'no-repeat',
                              }}>
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute max-w-none"
                                    style={{ height: '86.65%', left: '12.2%', top: '-13.59%', width: '71.08%' }}
                                    src={imgImg19014} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="font-normal h-[189px] leading-[21px] text-[18px] text-[#1a0a12] w-full">
                    For 7+ years, I've been building games that don't just perform — they compete to dominate. A player doesn't return for the payout. They return for the surge right before it, the moment of tension, the split second when control feels possible, the impulse to play again. If you don't understand that rhythm, you're not building a product. You're shipping a temporary distraction. Every mechanic at Dominator Play follows my lead — built to hit that peak, data-backed, performance-tested, and designed to drive GGR, not impressions.
                  </p>
                </div>

                {/* Quote */}
                <p className="font-medium italic leading-[24px] text-[24px] text-black w-full">
                  Quote:<br />
                  "Players don't return for the win — they return for the feeling that they can achieve more."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
