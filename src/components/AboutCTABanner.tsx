export default function AboutCTABanner() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div
        className="flex flex-col items-center overflow-clip px-[172px] py-[88px] relative rounded-[8px] w-full"
        style={{ backgroundImage: 'linear-gradient(143.7deg, rgb(226, 60, 119) 20.722%, rgb(32, 12, 21) 114.23%)' }}
      >
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <p className="font-black leading-[80px] text-[80px] text-white uppercase text-center w-[860px]">
            Let's Dominate iGaming Together
          </p>
          <div className="flex flex-col font-medium justify-center leading-0 text-[24px] text-white text-center w-[1152px]">
            <p className="leading-[24px] mb-0">Crush your limits with adaptable games built to scale. Dominator Play gives you full control, driving</p>
            <p className="leading-[24px]">performance and growth like no other partner.</p>
          </div>
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
    </section>
  );
}
