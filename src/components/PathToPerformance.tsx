const CogIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5192 6.6712C17.6875 5.70683 18.5613 5 19.5852 5H24.4148C25.4387 5 26.3125 5.70683 26.4808 6.6712L26.8783 8.94862C26.9944 9.61359 27.4598 10.1675 28.0775 10.494C28.2156 10.567 28.3521 10.6424 28.487 10.7201C29.0921 11.0691 29.8282 11.1775 30.4902 10.9407L32.7558 10.1303C33.7146 9.78728 34.7926 10.1565 35.3045 11.0032L37.7193 14.9968C38.2312 15.8435 38.0271 16.9195 37.2366 17.5409L35.3666 19.0108C34.822 19.4389 34.5521 20.0999 34.5651 20.7734C34.5666 20.8488 34.5673 20.9243 34.5673 21C34.5673 21.0757 34.5666 21.1512 34.5651 21.2266C34.5521 21.9 34.822 22.5611 35.3666 22.9892L37.2366 24.4591C38.0271 25.0805 38.2312 26.1565 37.7193 27.0032L35.3045 30.9968C34.7926 31.8435 33.7146 32.2127 32.7558 31.8697L30.4902 31.0593C29.8282 30.8224 29.0921 30.9309 28.487 31.2799C28.3521 31.3576 28.2156 31.433 28.0775 31.506C27.4598 31.8325 26.9944 32.3864 26.8783 33.0514L26.4808 35.3288C26.3125 36.2932 25.4387 37 24.4148 37H19.5852C18.5613 37 17.6875 36.2932 17.5192 35.3288L17.1217 33.0514C17.0056 32.3864 16.5402 31.8325 15.9225 31.506C15.7844 31.433 15.6479 31.3576 15.513 31.2799C14.9079 30.931 14.1718 30.8225 13.5098 31.0593L11.2442 31.8697C10.2854 32.2127 9.20744 31.8435 8.69549 30.9968L6.28073 27.0032C5.76878 26.1565 5.97294 25.0805 6.76343 24.4591L8.63336 22.9892C9.17796 22.5611 9.44792 21.9001 9.43486 21.2266C9.4334 21.1512 9.43267 21.0757 9.43267 21C9.43267 20.9243 9.4334 20.8488 9.43486 20.7734C9.44792 20.1 9.17796 19.4389 8.63336 19.0108L6.76343 17.5409C5.97294 16.9195 5.76878 15.8435 6.28073 14.9968L8.69549 11.0032C9.20744 10.1565 10.2854 9.7873 11.2442 10.1303L13.5098 10.9407C14.1718 11.1776 14.9079 11.0691 15.513 10.7201C15.6479 10.6424 15.7844 10.567 15.9225 10.494C16.5402 10.1675 17.0056 9.61359 17.1217 8.94862L17.5192 6.6712Z" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.585 20.9999C27.585 23.9454 25.0843 26.3332 21.9996 26.3332C18.9148 26.3332 16.4141 23.9454 16.4141 20.9999C16.4141 18.0543 18.9148 15.6665 21.9996 15.6665C25.0843 15.6665 27.585 18.0543 27.585 20.9999Z" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.25 5H14.125C11.8468 5 10 6.53502 10 8.42857V33.5714C10 35.465 11.8468 37 14.125 37H27.875C30.1532 37 32 35.465 32 33.5714V8.42857C32 6.53502 30.1532 5 27.875 5H23.75M18.25 5V7.28571H23.75V5M18.25 5H23.75M18.25 33.5714H23.75" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProgressionIcon = () => (
  <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2V24.6667C4 26.5076 5.49238 28 7.33333 28H30" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20L16 12L20 16L28 8M28 8H22M28 8V14" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="16" stroke="#FFEDED" strokeWidth="1.2" />
    <circle cx="21" cy="21" r="9" stroke="#FFEDED" strokeWidth="1.2" />
    <circle cx="21" cy="21" r="2" fill="#FFEDED" />
    <path d="M21 5V2M21 40V37M5 21H2M40 21H37" stroke="#FFEDED" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const cardBg = "linear-gradient(119.77deg, rgb(226, 60, 119) 37.77%, rgb(32, 12, 21) 108.16%)";

const features = [
  {
    title: "Full\nCustomization:",
    description: "RTP, Volatility & Branding",
    Icon: CogIcon,
  },
  {
    title: "Mobile-First",
    description: "Development Powered by\nProduct Analytics",
    Icon: PhoneIcon,
  },
  {
    title: "Progression",
    description: "Gamification Built for\nRetention & LTV",
    Icon: ProgressionIcon,
  },
  {
    title: "Operator Growth",
    description: "Support Through Content\n& Promotions",
    Icon: TargetIcon,
  },
];

export default function PathToPerformance() {
  return (
    <section className="w-full flex justify-center px-[120px]" style={{ paddingBottom: '120px' }}>
      <div className="w-full max-w-[1680px] flex flex-col gap-[80px] items-center">
        
        {/* Heading Block */}
        <div className="flex flex-col gap-[40px] items-center text-center w-[1187px]">
          <h2 className="font-black text-white text-[80px] leading-[80px] uppercase w-full">
            Dominator Play:<br />Path to Performance
          </h2>
          <p className="font-medium text-[24px] leading-[24px] text-[#ffeded] w-[926px]">
            We empower operators with customizable, scalable games built to earn placement, sustain retention, and drive long-term revenue growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex gap-[24px] items-center w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative flex flex-col items-start overflow-hidden p-[40px] rounded-[8px] w-[402px] h-[342px] shrink-0"
              style={{ backgroundImage: cardBg }}
            >
              {/* Icon - positioned exactly 50px top, 47px right */}
              <div className="absolute top-[50px] right-[47px] w-[42px] h-[42px] flex items-center justify-center z-10 pointer-events-none select-none">
                <f.Icon />
              </div>

              {/* Text Block - 112px below the icon's top baseline? 
                  The ruler showed 112 between icon box and title box. 
                  Icon is 42px, Top padding is 50px. 
                  So 50 (top) + 42 (icon) + 112 (gap) = 204px from top.
              */}
              <div 
                className="flex flex-col gap-[16px] items-start w-full"
                style={{ marginTop: '164px' }} 
              >
                {/* 164px margin-top + 40px container padding = 204px from top edge */}
                <h3 className="font-bold text-white text-[38px] leading-[42px] whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="font-normal text-[#ffeded] text-[24px] leading-[24px]">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
