export default function AboutCTABanner() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div
        className="flex flex-col items-start overflow-clip px-[172px] py-[88px] relative rounded-[8px] w-full"
        style={{ backgroundImage: 'linear-gradient(143.7deg, rgb(226, 60, 119) 20.722%, rgb(32, 12, 21) 114.23%)' }}
      >
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <h2 className="font-black text-white text-[80px] leading-[80px] uppercase text-center w-[860px]">
            Let's Dominate iGaming Together
          </h2>
          <div className="font-medium text-white text-[24px] leading-[24px] text-center w-[1152px]">
            <p className="mb-0">Crush your limits with adaptable games built to scale. Dominator Play gives you full control, driving</p>
            <p>performance and growth like no other partner.</p>
          </div>
          <div
            className="flex h-[82px] items-center justify-center px-[32px] py-[12px] rounded-[8px] w-[272px] cursor-pointer"
            style={{ backgroundColor: '#ff4f8b' }}
          >
            <span className="font-bold text-white text-[18px] leading-[18px] whitespace-nowrap">Dominate Now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
