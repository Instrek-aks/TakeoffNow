import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const testimonials = [
  {
    id: 1,
    name: "Anish Gupta",
    role: "Vietnam Explorer",
    avatar: "/anish.jpeg",
    rating: 5,
    text: "Vietnam was honestly one of the best trips I’ve ever taken. From the Cu Chi Tunnels to the calm beauty of Halong Bay and the cozy streets of Hoi An, everything felt special. The guides were warm and fun, and the whole trip ran so smoothly. I loved every moment.",
    badge: "Vietnam",
  },

  {
    id: 2,
    name: "Anil Wadhwa",
    role: "Singapore Explorer",
    avatar: "/anil.jpeg",
    rating: 5,
    text: "Singapore amazed me in ways I didn’t expect. The Supertrees at night, Marina Bay Sands, Sentosa—everything was beautiful. Exploring Chinatown and Little India was so much fun too. The trip was super easy and the people guiding us were genuinely helpful. I loved it.",
    badge: "Singapore",
  },
  {
    id: 3,
    name: "Diwanshi Gupta",
    role: "Dubai Dreamer",
    avatar: "/diwanshi.jpeg",
    rating: 5,
    text: "Dubai was such an unforgettable experience. The desert safari was thrilling, the view from Burj Khalifa was surreal, and exploring Old Dubai was really special. Everything was well-organized and comfortable, and the guides were so friendly. I’d happily do it all over again.",
    badge: "Dubai",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travelers Who Trusted Us, And Loved It!
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-stone-50 to-slate-50 border border-stone-200 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-muted-foreground/20" />

                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="font-bold text-xl text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg italic mb-6 text-center md:text-left leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex justify-center md:justify-start space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < testimonial.rating
                              ? "fill-orange-500 text-orange-500"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 rounded-full shadow-lg w-12 h-12 z-10"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 rounded-full shadow-lg w-12 h-12 z-10"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-violet-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
