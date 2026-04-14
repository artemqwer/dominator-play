import Link from "next/link";

const imgLogo = "/logo.svg";
const imgAge = "https://www.figma.com/api/mcp/asset/41059730-36d2-4794-95b2-4dc5bdda97b8";
const imgSocial1 = "https://www.figma.com/api/mcp/asset/349f0b48-9267-447c-92a7-37cbf4ca9477";
const imgSocial2 = "https://www.figma.com/api/mcp/asset/22f2931c-6043-4e07-b3de-7fb4c3ed9075";

const exploreLinks = ["Home", "Our games", "About us", "Events", "Blog", "Careers", "Contact us"];
const legalLinks = ["Privacy Policy", "Terms of service", "Compliance", "Cookie Policy"];

export default function Footer() {
  return (
    <footer key="footer-vfinal" className="w-full bg-[#492035] px-[120px] pb-[80px] flex justify-center border-t border-white/5" style={{ paddingTop: '40px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[72px]">

        {/* Triple column layout with strict 420px gaps */}
        <div className="flex flex-row items-start" style={{ gap: '420px' }}>
          
          {/* Column 1: Info (Logo + Contact) - 309px width */}
          <div className="flex flex-col items-start w-[309px] shrink-0">
            <div className="mb-[24px]" style={{ width: '82px', height: '40px' }}>
               <img 
                 alt="DP" 
                 src={imgLogo} 
                 width={82} 
                 height={40} 
                 style={{ width: '82px', height: '40px', display: 'block', objectFit: 'contain' }} 
               />
            </div>
            
            <div className="flex flex-col gap-[12px] mb-[24px]">
              <div style={{ width: '32px', height: '28px' }}>
                <img alt="18+" src={imgAge} width={32} height={28} />
              </div>
              <p className="font-medium text-[14px] leading-[20px] text-white/50 max-w-[210px]">
                Our website is intended for users aged 18 and over.
              </p>
            </div>
            
            <p className="font-bold text-[18px] text-white mb-[24px]">
              partners@dominatorplay.com
            </p>
            
            <div className="flex gap-[16px] items-center">
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img alt="social" src={imgSocial1} width={24} height={24} />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img alt="social" src={imgSocial2} width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-[32px] shrink-0 min-w-[150px]">
            <p className="font-bold text-white text-[14px] uppercase tracking-[0.1em]">Explore</p>
            <nav className="flex flex-col gap-[16px]">
              {exploreLinks.map((item) => (
                <Link key={item} href="#" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-[32px] shrink-0 min-w-[150px]">
            <p className="font-bold text-white text-[14px] uppercase tracking-[0.1em]">Legal</p>
            <nav className="flex flex-col gap-[16px]">
              {legalLinks.map((item) => (
                <Link key={item} href="#" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom line */}
        <div className="flex flex-col gap-[40px] items-center w-full">
          <div className="w-full h-px bg-white/10" />
          <p className="font-medium text-[16px] text-white/20">
            2026 © Brand All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
