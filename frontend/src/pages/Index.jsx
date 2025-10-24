import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import SearchTabs from "../components/SearchTabs";
import TourPackages from "../components/TourPackages";
import DiscoverSection from "../components/DiscoverSection";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <HeroCarousel />
        {/* SearchTabs positioned absolutely on desktop, but below on mobile */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-10">
          <SearchTabs />
        </div>
      </div>

      {/* SearchTabs visible on mobile below HeroCarousel */}
      <div className="block md:hidden -mt-16 relative z-10">
        <SearchTabs />
      </div>

      <div className="pt-32">
        <DiscoverSection />
        <TourPackages />
        <Destinations />
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
