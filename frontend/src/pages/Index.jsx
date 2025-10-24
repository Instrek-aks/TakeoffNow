import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import SearchTabs from "../components/SearchTabs";
import TourPackages from "../components/TourPackages";
import DiscoverSection from "../components/DiscoverSection";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <HeroCarousel />
        <SearchTabs />
      </div>
      <div className="pt-32">
        <DiscoverSection />
        <TourPackages />
        <Destinations />
        <Testimonials />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
