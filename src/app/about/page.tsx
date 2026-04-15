import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutDominatorPlay from "@/components/AboutDominatorPlay";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutCulture from "@/components/AboutCulture";
import AboutFounders from "@/components/AboutFounders";
import AboutCTABanner from "@/components/AboutCTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — Dominator Play",
  description:
    "Learn about Dominator Play — a performance-driven B2B iGaming provider building data-validated games to dominate the market.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutDominatorPlay />
        <AboutMissionVision />
        <AboutCulture />
        <AboutFounders />
        <AboutCTABanner />
      </main>
      <Footer />
    </>
  );
}
