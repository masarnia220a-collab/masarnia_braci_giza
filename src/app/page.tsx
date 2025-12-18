import { TopProducts } from "../components/TopProducts";
import { AboutUs } from "../landingPage/AboutUs";
import { ContactUs } from "../landingPage/ContactUs";
import Gallery from "../landingPage/Gallery";
import { HeroSection } from "../landingPage/HeroSection";
import { HowWeWork } from "../landingPage/HowWeWork";
import { Reviews } from "../landingPage/Reviews";
import { SocialProve } from "../landingPage/SocialProve";
import { WhyUs } from "../landingPage/WhyUs";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto flex flex-col gap-[190px] px-4 max-[1200px]:overflow-hidden">
      <HeroSection />
      <SocialProve />
      <AboutUs />
      <HowWeWork />
      <TopProducts />
      <WhyUs />
      <Gallery />
      {/* <Reviews /> */}
      <ContactUs />
    </main>
  );
}
