import Image from "next/image";

const imgBg = "https://www.figma.com/api/mcp/asset/c52cf22e-279b-4934-bce7-efcd37bc40a0";

type TimerCard = {
  day: string;
  hour: string;
  min: string;
  sec: string;
  progress: number;
};

const timerData: TimerCard = { day: "00", hour: "05", min: "08", sec: "32", progress: 0.9 };

function TimerCard({ card }: { card: TimerCard }) {
  return (
    <div className="relative flex flex-col gap-[30px] items-center justify-center h-[602px] w-[544px] px-[80px] py-[120px] rounded-[8px] overflow-hidden shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Blurred background image */}
      <div className="absolute inset-0 rounded-[8px] blur-[7.5px] overflow-hidden">
        <Image
          alt=""
          src={imgBg}
          fill
          className="object-cover pointer-events-none rounded-[8px] grayscale"
        />
      </div>

      {/* Timer content */}
      <div className="relative flex flex-col gap-[120px] items-center justify-center w-full h-full">
        <div className="flex items-end justify-center gap-0 w-full">
          <div className="flex flex-col items-center w-[83px]">
            <span className="font-bold text-[60px] leading-[80px] text-black/[0.38] text-center">
              {card.day}
            </span>
            <span className="font-bold text-[16px] leading-[16px] text-[#1a1a1a] text-center -mt-2">
              day
            </span>
          </div>
          <span className="font-['Poppins'] font-semibold text-[60px] leading-[80px] text-white/[0.38] text-center w-[22px] -mt-[6px]">
            :
          </span>
          <div className="flex flex-col items-center w-[83px]">
            <span className="font-bold text-[60px] leading-[80px] text-[#ff4f8b] text-center">
              {card.hour}
            </span>
            <span className="font-bold text-[16px] leading-[16px] text-white text-center -mt-2">
              hour
            </span>
          </div>
          <span className="font-['Poppins'] font-semibold text-[60px] leading-[80px] text-white/[0.38] text-center w-[22px] -mt-[6px]">
            :
          </span>
          <div className="flex flex-col items-center w-[83px]">
            <span className="font-bold text-[60px] leading-[80px] text-[#ff4f8b] text-center">
              {card.min}
            </span>
            <span className="font-bold text-[16px] leading-[16px] text-white text-center -mt-2">
              minutes
            </span>
          </div>
          <span className="font-['Poppins'] font-semibold text-[60px] leading-[80px] text-white/[0.38] text-center w-[22px] -mt-[6px]">
            :
          </span>
          <div className="flex flex-col items-center w-[83px]">
            <span className="font-bold text-[60px] leading-[80px] text-[#ff4f8b] text-center drop-shadow-[0px_2px_2px_rgba(0,0,0,0.16)]">
              {card.sec}
            </span>
            <span className="font-bold text-[16px] leading-[16px] text-white text-center -mt-2">
              seconds
            </span>
          </div>
        </div>
        <div className="flex items-start h-[15px] w-[384px] rounded-[8px] border-2 border-[#5a1f33] overflow-hidden">
          <div
            className="bg-[#ff4f8b] h-full"
            style={{ width: `${Math.round(card.progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Hero Title at the bottom */}
      <div className="absolute bottom-[40px] w-full flex justify-center">
        <h4 className="font-black text-white text-[48px] leading-[48px] tracking-[0.2em] uppercase opacity-40">
          Zeus
        </h4>
      </div>
    </div>
  );
}

export default function UpcomingReleases() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">
        <h2 className="font-black text-white text-[80px] leading-[90px] uppercase text-center w-full">
          Upcoming Releases
        </h2>

        <div className="flex flex-col gap-[24px] items-start w-full">
          {/* Row 1: 3 timer cards */}
          <div className="flex gap-[24px] items-center w-full">
            <TimerCard card={timerData} />
            <TimerCard card={timerData} />
            <TimerCard card={timerData} />
          </div>

          {/* Row 2: 2 timer cards + CTA */}
          <div className="flex gap-[24px] items-center w-full">
            <TimerCard card={timerData} />
            <TimerCard card={timerData} />

            <div
              className="flex flex-col items-center justify-center h-auto w-[544px] overflow-hidden rounded-[8px] shrink-0"
              style={{
                paddingTop: '188px',
                paddingBottom: '188px',
                paddingLeft: '85px',
                paddingRight: '85px',
                backgroundImage:
                  "linear-gradient(111.78deg, rgb(226, 60, 119) 20.72%, rgb(32, 12, 21) 114.23%)",
              }}
            >
              <div className="flex flex-col gap-[60px] items-center justify-center w-full">
                <h3 className="font-bold text-[#ffeded] text-[45px] leading-[45px] text-center uppercase w-full">
                  Stay Ahead of
                  <br />
                  the Curve
                </h3>
                <button className="flex items-center justify-center w-[272px] h-[82px] px-[32px] py-[12px] rounded-[8px] bg-[#ff4f8b] hover:bg-[#ff3a7a] transition-colors cursor-pointer border-0">
                  <span className="font-bold text-[18px] leading-[16px] text-white whitespace-nowrap uppercase">
                    Summon us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
