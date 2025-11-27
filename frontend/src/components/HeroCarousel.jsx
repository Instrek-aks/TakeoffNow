import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Your Journey, Perfectly Planned",
    subtitle: "From flights to stays, we design trips that fit you perfectly.",
    image: "/newSlide1.webp",
  },
  {
    title: "Travel Smarter, Experience More",
    subtitle: "Discover handcrafted itineraries that make every moment count.",
    image: "/newSlide2.webp",
  },
  {
    title: "Let's Take Off to Your Dream Destination",
    subtitle: "We turn your travel goals into seamless experiences.",
    image: "/banner2.webp",
  },
];

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center z-20">
            <div className="container mx-auto px-4 text-center text-white">
              <div
                className={`transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Tagline only; removed offer */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 capitalize">
                  {slide.title}
                </h1>
                {/* <div className="w-20 h-1 bg-white mx-auto mb-6"></div> */}
                <p className="text-sm md:text-lg mb-8 max-w-3xl mx-auto font-light">
                  {slide.subtitle}
                </p>
                {/* Removed price block */}
                {index === currentSlide && (
                  <Button
                    size="lg"
                    className="bg-violet-600 hover:bg-blue-600/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 relative z-30 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate("/packages");
                    }}
                  >
                    TAKE A TOUR
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white text-foreground rounded-full p-3 md:p-4 shadow-lg transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white text-foreground rounded-full p-3 md:p-4 shadow-lg transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
