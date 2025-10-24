import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Maldives island",
    subtitle:
      "When An Unknown Printer Took Ar Galley Offer Type Area Year Anddey Make Specimen Book",
    price: "299",
    offer: "* This Offer Valid Till 22 August",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
  },
  {
    title: "Swiss Alps Adventure",
    subtitle:
      "Experience The Breathtaking Beauty Of Mountain Peaks And Crystal Clear Lakes",
    price: "399",
    offer: "* Limited Time Offer",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  },
  {
    title: "Dubai Skyline",
    subtitle:
      "Discover Luxury And Modern Architecture In The Heart Of The Desert",
    price: "349",
    offer: "* Book Now & Save 20%",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

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
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <div
                className={`transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-sm md:text-base mb-4 font-light">
                  {slide.offer}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 capitalize">
                  {slide.title}
                </h1>
                <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                <p className="text-sm md:text-lg mb-8 max-w-3xl mx-auto font-light">
                  {slide.subtitle}
                </p>
                <div className="text-2xl md:text-3xl mb-8">
                  Booking Start From{" "}
                  <span className="text-5xl md:text-6xl font-bold">
                    ${slide.price}
                  </span>
                  <span className="text-xl">/night</span>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                >
                  TAKE A TOUR
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-foreground rounded-full p-3 md:p-4 shadow-lg transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-foreground rounded-full p-3 md:p-4 shadow-lg transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

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
