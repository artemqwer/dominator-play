const imgEllipse514 = "https://www.figma.com/api/mcp/asset/d434ed10-46cc-4f75-8317-6f3ad387d49a";
const imgD12A99721 = "https://www.figma.com/api/mcp/asset/ccc3ca58-fee0-4f28-b405-3589b45ac29b";
const imgD12A99722 = "https://www.figma.com/api/mcp/asset/0b3ca15e-0499-42f2-a02f-87a42e35c6d9";
const imgEllipse516 = "https://www.figma.com/api/mcp/asset/72ae1f45-5ce6-4271-a515-bbeb61db076a";
const imgImg19013 = "https://www.figma.com/api/mcp/asset/98ac9ceb-58d0-4ba4-beca-ff9a3eafe618";
const imgImg19014 = "https://www.figma.com/api/mcp/asset/20d48a51-4bd0-4071-bf0b-30a8a381fc45";
const imgSocial = "https://www.figma.com/api/mcp/asset/c9a6331f-5ba7-4bc1-b541-da42b4c6e408";

export default function AboutFounders() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">
        <h2 className="font-black text-white text-[80px] leading-[80px] uppercase text-center w-full">
          Our Founders
        </h2>

        <div className="flex gap-[34px] items-center w-full">

          {/* Ivan Kalashniuk */}
          <div className="bg-[#ffeded] flex h-[674px] items-center overflow-clip px-[34px] py-[42px] relative rounded-[8px] shrink-0">
            <div className="flex flex-col gap-[82px] items-start w-[516px]">
              <div className="flex flex-col gap-[40px] items-start w-full">
                {/* Name + photo row */}
                <div className="flex gap-[8px] items-center w-full">
                  <div className="h-[208px] relative shrink-0 w-[284px]">
                    <div className="absolute flex flex-col gap-[8px] items-start left-0 top-0 w-[284px]">
                      <div className="flex flex-col items-start">
                        <div className="font-black text-[40px] text-[#1a0a12] tracking-[0.4px] uppercase leading-[0]">
                          <p className="leading-[42px] mb-0">Ivan</p>
                          <p className="leading-[42px]">Kalashniuk</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocial} />
                      </div>
                    </div>
                    <p className="absolute font-normal text-[24px] leading-[27px] left-0 text-[#1a0a12] top-[154px] w-[284px]">
                      Co-Founder & Chief Executive Officer
                    </p>
                  </div>

                  {/* Photo */}
                  <div className="inline-grid leading-[0] place-items-start relative">
                    <div className="col-1 row-1 ml-[6.26px] mt-[5.26px] relative size-[210px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse514} />
                    </div>
                    <div className="col-1 row-1 inline-grid ml-0 mt-0 place-items-start relative size-[222px]" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
                      <div className="flex h-[249px] items-center justify-center ml-[-10.34px] mt-[-7px] relative w-[260px]" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
                        <div style={{ transform: 'rotate(3.53deg)' }}>
                          <div
                            className="relative"
                            style={{
                              height: '234px',
                              width: '246px',
                              maskImage: `url('${imgD12A99721}')`,
                              maskSize: '210px 210px',
                              maskPosition: '17.65px 13.88px',
                              maskRepeat: 'no-repeat',
                            }}
                          >
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
                <div className="font-normal text-[18px] text-[#1a0a12] leading-[0] w-full" style={{ height: '171px' }}>
                  <p className="leading-[21px] mb-0">I have a sharp commercial instinct built over 7+ years in iGaming, spotting opportunities others often miss.</p>
                  <p className="leading-[21px] mb-0">Leading Dominator Play, I focus on building long-term partnerships that address our partners' challenges and deliver measurable results. Our performance-driven math, adaptable RTP and volatility, market-fit mechanics, and fast integration ensure we meet their goals efficiently.</p>
                  <p className="leading-[21px] mb-0">At Dominator Play, I make sure every decision is guided by data and full accountability. We move fast, with precision, leaving nothing to chance.</p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-medium italic text-[24px] leading-[24px] text-black w-[427px]">
                Quote:<br />
                {` "Risk more than others think is safe."`}
              </p>
            </div>
          </div>

          {/* Constantin Molodtov */}
          <div className="bg-[#ffeded] flex h-[674px] items-center overflow-clip px-[34px] py-[42px] relative rounded-[8px] shrink-0 w-[584px]">
            <div className="flex flex-col gap-[20px] items-center w-[529px]">
              <div className="flex flex-col gap-[40px] items-start w-full">
                {/* Name + photo row */}
                <div className="flex gap-[8px] items-center w-full">
                  <div className="h-[202px] relative shrink-0 w-[270px]">
                    <div className="absolute flex flex-col gap-[8px] items-start left-0 top-0 w-[270px]">
                      <div className="flex flex-col items-start">
                        <div className="font-black text-[40px] text-[#1a0a12] uppercase leading-[0]">
                          <p className="leading-[40px] mb-0 whitespace-pre">Constantin</p>
                          <p className="leading-[40px] whitespace-pre">Molodtov</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocial} />
                      </div>
                    </div>
                    <p className="absolute font-normal text-[24px] leading-[27px] left-0 text-[#1a0a12] top-[148px] w-[270px]">
                      Co-Founder & Chief Product Officer
                    </p>
                  </div>

                  {/* Photo */}
                  <div className="inline-grid leading-[0] place-items-start relative">
                    <div className="inline-grid place-items-start relative">
                      <div className="relative size-[222px]" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse516} />
                      </div>
                      <div className="inline-grid place-items-start relative" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
                        <div className="inline-grid place-items-start relative" style={{ gridColumnStart: 1, gridRowStart: 1 }}>
                          <div className="flex items-center justify-center relative" style={{ gridColumnStart: 1, gridRowStart: 1, height: '568px', marginLeft: '-133.2px', marginTop: '-31.71px', width: '528px' }}>
                            <div style={{ transform: 'rotate(5.31deg)' }}>
                              <div
                                className="relative"
                                style={{
                                  height: '526px',
                                  width: '481px',
                                  maskImage: `url('${imgImg19013}')`,
                                  maskSize: '222px 222px',
                                  maskPosition: '133.2px 31.714px',
                                  maskRepeat: 'no-repeat',
                                }}
                              >
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
                </div>

                {/* Bio */}
                <p className="font-normal text-[18px] text-[#1a0a12] leading-[21px] w-full" style={{ height: '189px' }}>
                  For 7+ years, I've been building games that don't just perform — they compete to dominate. A player doesn't return for the payout. They return for the surge right before it, the moment of tension, the split second when control feels possible, the impulse to play again. If you don't understand that rhythm, you're not building a product. You're shipping a temporary distraction. Every mechanic at Dominator Play follows my lead — built to hit that peak, data-backed, performance-tested, and designed to drive GGR, not impressions.
                </p>
              </div>

              {/* Quote */}
              <p className="font-medium italic text-[24px] leading-[24px] text-black w-full">
                Quote:<br />
                "Players don't return for the win — they return for the feeling that they can achieve more."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
