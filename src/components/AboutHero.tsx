const imgMingcuteDownLine = "https://www.figma.com/api/mcp/asset/f6723b94-f7a5-4978-bb1a-c0f32886f0cd";

export default function AboutHero() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingTop: '24px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[24px] items-start">

        {/* Breadcrumb */}
        <div className="flex items-center gap-[4px]">
          <p className="font-normal text-[16px] leading-[32px] text-white/60 text-center whitespace-nowrap">home</p>
          <div className="flex items-center justify-center size-[14px] -rotate-90">
            <div className="overflow-clip relative size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMingcuteDownLine} />
            </div>
          </div>
          <p className="font-normal text-[16px] leading-[normal] lowercase text-[#ff4f8b] text-center whitespace-nowrap">About us</p>
        </div>

        {/* Hero Banner */}
        <div
          className="h-[604px] overflow-clip relative rounded-[8px] w-full"
          style={{ backgroundImage: 'linear-gradient(140.9deg, rgb(226, 60, 119) 20.722%, rgb(32, 12, 21) 114.23%)' }}
        >
          <div className="absolute flex flex-col gap-[60px] items-start left-[95px] top-[87px] w-[1094px]">
            {/* Title */}
            <p className="font-black leading-[90px] min-w-full text-[90px] text-white uppercase w-min">
              BUILT TO PERFORM. MADE TO DOMINATE.
            </p>
            {/* Subtext */}
            <div className="flex flex-col font-medium justify-center leading-0 text-[24px] text-white w-[580px]">
              <p className="leading-[24px]">Data-driven games built to deliver control, domination, and scalable operator revenue.</p>
            </div>
            {/* Button */}
            <div
              className="flex h-[82px] items-center justify-center px-[32px] py-[12px] rounded-[8px] shrink-0 w-[272px] cursor-pointer"
              style={{ backgroundColor: '#ff4f8b' }}
            >
              <div className="flex flex-col font-bold justify-center leading-0 text-[18px] text-white whitespace-nowrap">
                <p className="leading-[18px]">Dominate Now</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
