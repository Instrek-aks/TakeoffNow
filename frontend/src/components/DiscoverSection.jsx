import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, Globe, CheckCircle, PlaneTakeoff } from "lucide-react";

const DiscoverSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-12 bg-[#fff9ee]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p
              className="text-[#11224E] font-semibold text-lg mb-2"
              style={{ fontStyle: "italic" }}
            >
              Why Choose TakeoffNow
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#11224E]">
              Travel Smarter. Experience More.
            </h2>
            <p className="text-[#11224E]/80 text-lg mb-4">
              Handcrafted itineraries, seamless planning, and dedicated support,
              we ensure every moment truly counts.
            </p>
            <p className="text-[#11224E] font-semibold italic text-lg mb-8">
              Your journey, designed just for you
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Personalized Itineraries",
                  desc: "Every trip is tailored to your interests, budget, and travel style.",
                },
                {
                  title: "End-to-End Planning",
                  desc: "Flights, hotels, transport, and activities – we handle it all.",
                },
                {
                  title: "Trusted Expertise",
                  desc: "Experienced travel planners with global partnerships.",
                },
                {
                  title: "Luxury That Fits Your Budget.",
                  desc: "Transparent pricing paired with world-class experiences.",
                },
                {
                  title: "24/7 Assistance",
                  desc: "Dedicated travel support before and during your trip.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="bg-[#11224E] rounded-full p-3 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-[#11224E] group-hover:text-[#11224E]/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#11224E]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#11224E] hover:bg-[#11224E]/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const phoneNumber = "+919549134848";
                const message =
                  "Hello! I'm ready to book my trip. Please help me plan my perfect journey.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              BOOK YOUR TRIP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/slider7.webp"
                  alt="Beach boats"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#11224E]/20"
                  loading="lazy"
                />
                <img
                  src="/slider8.webp"
                  alt="Travel destination"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#11224E]/20"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="/slider2.webp"
                  alt="Couple traveling"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#11224E]/20"
                  loading="lazy"
                />
                <img
                  src="/slider1.webp"
                  alt="Beach aerial"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#11224E]/20"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Text */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
              <span className="text-8xl font-bold text-[#11224E]/20 whitespace-nowrap">
                TRAVEL
              </span>
            </div>
          </div>
        </div>

        {/* How It Works - Simple Wavy Line Design */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 flex-wrap">
              <span className="bg-[#ffd739] bg-clip-text text-transparent">
                Plan
              </span>
              <span className="text-[#11224E]">|</span>
              <span className="text-[#2c3892]">Book</span>
              <span className="text-[#11224E]">|</span>
              <span className="text-[#0cc0df]">TakeoffNow</span>
            </h2>
            <p className="text-[#11224E]/70 text-lg max-w-2xl mx-auto">
              Four simple steps to your perfect journey
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            {/* Desktop: Horizontal Layout with Wavy Line */}
            <div className="hidden md:block relative pt-8 pb-12">
              {/* Wavy Line SVG */}
              <div
                className="absolute top-12 left-0 right-0"
                style={{ height: "80px" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1200 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
                    stroke="url(#wavyGradient)"
                    strokeWidth="4"
                    fill="none"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient
                      id="wavyGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#11224E" stopOpacity="0.7" />
                      <stop
                        offset="33%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="66%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Steps in Grid */}
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    step: "1",
                    title: "Share Your Preferences",
                    desc: "Tell us where you want to go and what you love doing.",
                    color: "bg-[#11224E]",
                    bgColor: "bg-[#11224E]/5",
                  },
                  {
                    step: "2",
                    title: "Design Your Itinerary",
                    desc: "Our experts craft the perfect travel plan for you.",
                    color: "bg-[#11224E]",
                    bgColor: "bg-[#11224E]/5",
                  },
                  {
                    step: "3",
                    title: "Book & Confirm",
                    desc: "Review, pay securely, and confirm your bookings.",
                    color: "bg-[#11224E]",
                    bgColor: "bg-[#11224E]/5",
                  },
                  {
                    step: "4",
                    title: "Enjoy Your Trip!",
                    desc: "Travel confidently with real-time assistance.",
                    color: "bg-[#11224E]",
                    bgColor: "bg-[#11224E]/5",
                  },
                ].map((it, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    } transition-all duration-700`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Small Circle on Wavy Line */}
                    <div
                      className={`w-14 h-14 rounded-full ${
                        it.color
                      } flex items-center justify-center shadow-xl border-2 border-white relative z-20 transition-all duration-500 mb-4 ${
                        activeStep === i
                          ? "scale-125 ring-4 ring-[#11224E]/30 shadow-2xl"
                          : "scale-100"
                      }`}
                    >
                      {activeStep === i && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#11224E]/30 animate-ping"></div>
                      )}
                      <span className="text-xl font-bold text-white relative z-10">
                        {it.step}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`w-full ${
                        it.bgColor
                      } rounded-xl p-4 shadow-md border border-[#11224E]/10 transition-all duration-500 ${
                        activeStep === i
                          ? "scale-105 shadow-lg ring-2 ring-[#11224E]/20"
                          : "scale-100"
                      }`}
                    >
                      <h3 className="text-base font-bold text-[#11224E] mb-2">
                        {it.title}
                      </h3>
                      <p className="text-sm text-[#11224E]/70 leading-relaxed">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical Layout with Wavy Line */}
            <div className="md:hidden relative pl-12">
              {/* Mobile Wavy Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 800"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M50,0 Q30,100 50,200 T50,400 T50,600 T50,800"
                    stroke="url(#wavyGradientMobile)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="wavyGradientMobile"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#11224E" stopOpacity="0.7" />
                      <stop
                        offset="33%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="66%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="#11224E"
                        stopOpacity="0.7"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Steps */}
              {[
                {
                  step: "1",
                  title: "Share Your Preferences",
                  desc: "Tell us where you want to go and what you love doing.",
                  color: "bg-[#11224E]",
                  bgColor: "bg-[#11224E]/5",
                },
                {
                  step: "2",
                  title: "Design Your Itinerary",
                  desc: "Our experts craft the perfect travel plan for you.",
                  color: "bg-[#11224E]",
                  bgColor: "bg-[#11224E]/5",
                },
                {
                  step: "3",
                  title: "Book & Confirm",
                  desc: "Review, pay securely, and confirm your bookings.",
                  color: "bg-[#11224E]",
                  bgColor: "bg-[#11224E]/5",
                },
                {
                  step: "4",
                  title: "Enjoy Your Trip!",
                  desc: "Travel confidently with real-time assistance.",
                  color: "bg-[#11224E]",
                  bgColor: "bg-[#11224E]/5",
                },
              ].map((it, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-4 mb-6 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Small Circle */}
                  <div className="relative shrink-0 -ml-6">
                    <div
                      className={`w-12 h-12 rounded-full ${
                        it.color
                      } flex items-center justify-center shadow-xl border-2 border-white relative z-20 transition-all duration-500 ${
                        activeStep === i
                          ? "scale-125 ring-4 ring-[#11224E]/30 shadow-2xl"
                          : "scale-100"
                      }`}
                    >
                      {activeStep === i && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#11224E]/30 animate-ping"></div>
                      )}
                      <span className="text-lg font-bold text-white relative z-10">
                        {it.step}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    className={`flex-1 ${
                      it.bgColor
                    } rounded-xl p-4 shadow-md border border-[#11224E]/10 transition-all duration-500 ${
                      activeStep === i
                        ? "scale-105 shadow-lg ring-2 ring-[#11224E]/20"
                        : "scale-100"
                    }`}
                  >
                    <h3 className="text-base font-bold text-[#11224E] mb-1">
                      {it.title}
                    </h3>
                    <p className="text-sm text-[#11224E]/70 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
