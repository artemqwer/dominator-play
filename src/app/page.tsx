import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PathToPerformance from "@/components/PathToPerformance";
import OurGames from "@/components/OurGames";
import UpcomingReleases from "@/components/UpcomingReleases";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import PartnerNetwork from "@/components/PartnerNetwork";
import Metrics from "@/components/Metrics";
import DominateNextStage from "@/components/DominateNextStage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PathToPerformance />
        <OurGames />
        <UpcomingReleases />
        <WhatSetsUsApart />
        <PartnerNetwork />
        <Metrics />
        <DominateNextStage />
      </main>
      <Footer />
    </>
  );
}
