const imgMingcuteDownLine = "https://www.figma.com/api/mcp/asset/f6723b94-f7a5-4978-bb1a-c0f32886f0cd";

export default function AboutHero() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingTop: '24px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[24px] items-start">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[4px]">
          <span className="font-normal text-[16px] leading-[32px] text-white/60">home</span>
          <div className="flex items-center justify-center size-[14px] -rotate-90">
            <div className="overflow-clip relative size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMingcuteDownLine} />
            </div>
          </div>
          <span className="font-normal text-[16px] leading-[normal] lowercase text-[#ff4f8b]">About us</span>
        </div>

        {/* Hero Banner */}
        <div
          className="h-[604px] overflow-clip relative rounded-[8px] w-full"
          style={{ backgroundImage: 'linear-gradient(140.9deg, rgb(226, 60, 119) 20.722%, rgb(32, 12, 21) 114.23%)' }}
        >
          <div className="absolute flex flex-col gap-[60px] items-start left-[95px] top-[87px] w-[1094px]">
            <h1 className="font-black text-white text-[90px] leading-[90px] uppercase w-full">
              BUILT TO PERFORM. MADE TO DOMINATE.
            </h1>
            <p className="font-medium text-white text-[24px] leading-[24px] w-[580px]">
              Data-driven games built to deliver control, domination, and scalable operator revenue.
            </p>
            <div
              className="flex h-[82px] items-center justify-between px-[32px] py-[12px] rounded-[8px] w-[272px] cursor-pointer"
              style={{ backgroundColor: '#ff4f8b' }}
            >
              <span className="font-bold text-white text-[18px] leading-[18px] whitespace-nowrap">Dominate Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
