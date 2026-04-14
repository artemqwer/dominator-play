export default function DominateNextStage() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div
        className="w-[1680px] h-[558px] flex flex-col items-center justify-center rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(111.78deg, #E23C77 20.72%, #200C15 114.23%)",
        }}
      >
        <div className="flex flex-col items-center px-[260px] py-[144px] h-full w-full justify-center gap-[40px]">
          <div className="flex flex-col items-center gap-[40px]">
            <h2 className="font-extrabold text-white text-[80px] leading-[1] uppercase text-center w-full">
              Dominate the next stage
            </h2>
            <p className="font-medium text-[20px] leading-[28px] text-white/80 text-center max-w-[664px]">
              Partner with Dominator Play to launch high-impact casino games that
              command operator performance, own the lobby, and seize the
              competitive edge.
            </p>
          </div>

          <button className="w-[272px] h-[82px] bg-[#ff4f8b] text-white font-bold text-[18px] px-[32px] py-[12px] flex items-center justify-center gap-[8px] rounded-[6px] hover:bg-[#ff1f6b] transition-colors uppercase tracking-[0.05em]">
            Dominate Your Market
          </button>
        </div>
      </div>
    </section>
  );
}
