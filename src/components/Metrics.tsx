const imgGroup48095856 = "https://www.figma.com/api/mcp/asset/7d46a2d9-4b17-42de-9a7d-f4da9ed11150";
const imgGroup48095857 = "https://www.figma.com/api/mcp/asset/dd5fa323-4bf4-48e3-952b-93933072d29b";
const imgGroup48095859 = "https://www.figma.com/api/mcp/asset/85fde72c-2aa1-4c64-aa68-c8c5417ce096";
const imgGroup48095868 = "https://www.figma.com/api/mcp/asset/089caa1d-3799-4cf8-a3a6-91b1382a1226";
const imgGroup48095858 = "https://www.figma.com/api/mcp/asset/4de34b17-5585-4289-b378-634b9a673451";

export default function Metrics() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col items-center">
        <h2 
          className="font-black text-[#ffeded] text-[80px] leading-[80px] uppercase w-full text-center"
          style={{ marginBottom: '80px' }}
        >
          MATRICS THAT SAY MORE
        </h2>

        <div className="relative w-full flex justify-center">
          <div className="relative w-[828px] h-[383px]">

          {/* 24/7 — left, tall (w=260 h=383) */}
          <div className="absolute left-0 top-0 w-[260px] h-[383px]">
            <img alt="" src={imgGroup48095856} className="absolute inset-0 block size-full object-contain" />
            <div className="absolute left-[41.98px] top-[153px] flex flex-col items-start not-italic text-[#ffeded]">
              <p className="font-black text-[60px] leading-[90px] uppercase">24/7</p>
              <p className="font-medium text-[18px] leading-[18px] lowercase text-center ml-[45.69px]">SUPPORT</p>
            </div>
          </div>

          {/* ALL MAJOR CRYPTO — ml=275 mt=0 (w=326 h=163) */}
          <div className="absolute left-[275px] top-0 w-[326px] h-[163px]">
            <img alt="" src={imgGroup48095857} className="absolute inset-0 block size-full object-contain" />
            <p className="absolute font-black text-[34px] leading-[34px] text-white text-center uppercase whitespace-nowrap left-[62px] top-[52px]">
              ALL MAJOR<br />CRYPTO
            </p>
          </div>

          {/* 16+ LANGUAGES — ml=617 mt=0 (w=211 h=164) */}
          <div className="absolute left-[617px] top-0 w-[211px] h-[164px]">
            <img alt="" src={imgGroup48095859} className="absolute inset-0 block size-full object-contain" />
            <div className="absolute left-[48px] top-[44px] flex flex-col items-start">
              <p className="font-black text-[60px] leading-[90px] text-[#ffeded]">16+</p>
              <p className="font-medium text-[18px] leading-[18px] lowercase text-white text-center ml-[13px]">LANGUAGES</p>
            </div>
          </div>

          {/* GLOBAL FIAT COVERAGE — ml=274 mt=172 (w=327 h=209) */}
          <div className="absolute left-[274px] top-[172px] w-[327px] h-[209px]">
            <img alt="" src={imgGroup48095858} className="absolute inset-0 block size-full object-contain" />
            <p className="absolute font-black text-[34px] leading-[34px] text-white text-center uppercase whitespace-nowrap left-[51px] top-[75px]">
              GLOBAL FIAT<br />COVERAGE
            </p>
          </div>

          {/* MOBILE FIRST — ml=618 mt=173 (w=211 h=208) */}
          <div className="absolute left-[618px] top-[173px] w-[211px] h-[208px]">
            <img alt="" src={imgGroup48095868} className="absolute inset-0 block size-full object-contain" />
            <p className="absolute font-black text-[34px] leading-[34px] text-[#ffeded] text-center uppercase w-[147px] left-[32px] top-[75px]">
              mobile first
            </p>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
