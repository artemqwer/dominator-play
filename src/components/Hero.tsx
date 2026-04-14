export default function Hero() {
  return (
    <section className="w-full flex justify-center pt-[42px] px-[120px]" style={{ paddingBottom: '120px' }}>
      <div
        className="relative w-full max-w-[1680px] h-[658px] rounded-[8px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(138.64deg, rgb(226, 60, 119) 20.72%, rgb(32, 12, 21) 114.23%)",
        }}
      >
        <div className="absolute left-[145px] top-[104px] w-[1400px] flex flex-col gap-[40px] items-start justify-center">
          <h1 className="font-black uppercase text-white text-[80px] leading-[79px] tracking-normal">
            Make Control.
            <br />
            Dominate.
            <br />
            Scale Revenue.
          </h1>

          <p className="font-medium text-[24px] leading-[24px] text-[#ffeded] w-[712px]">
            Dominator Play is a performance-focused game studio that builds
            scalable games to help operators boost engagement, retention, and
            revenue.
          </p>

          <button className="flex items-center justify-center w-[272px] h-[82px] px-[32px] py-[12px] rounded-[8px] bg-[#ff4f8b] hover:bg-[#ff3a7a] transition-colors cursor-pointer border-0">
            <span className="font-bold text-[18px] leading-[16px] text-white whitespace-nowrap">
              Dominate Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
