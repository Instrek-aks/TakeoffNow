import { Button } from "../components/ui/Button";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";

const DiscoverSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p
              className="text-violet-600 font-semibold text-lg mb-2"
              style={{ fontStyle: "italic" }}
            >
              Why Choose TakeoffNow
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travel Smarter. Experience More.
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Handcrafted itineraries, seamless planning, and dedicated support,
              we ensure every moment truly counts.
            </p>
            <p className="text-violet-600 font-semibold italic text-lg mb-8">
              ✨ Your journey, designed just for you
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
                  title: "Best Value Guarantee",
                  desc: "Affordable and transparent pricing with premium experiences.",
                },
                {
                  title: "24/7 Assistance",
                  desc: "Dedicated travel support before and during your trip.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-violet-600/10 rounded-full p-3 mt-1">
                    <CheckCircle className="w-8 h-8 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-600/90 px-8 py-6 text-lg rounded-full"
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
                  src="/slider1.webp"
                  alt="Beach boats"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="/slider2.webp"
                  alt="Couple traveling"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
                <img
                  src="/slider1.webp"
                  alt="Beach aerial"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Text */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
              <span className="text-8xl font-bold text-primary/10 whitespace-nowrap">
                TRAVEL
              </span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-violet-600">Plan.</span>{" "}
              <span className="text-sky-500">Book.</span>{" "}
              <span className="text-yellow-500">Fly.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four simple steps to your perfect journey
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative items-stretch">
              {[
                {
                  step: "1",
                  title: "Share Your Preferences",
                  desc: "Tell us where you want to go and what you love doing.",
                },
                {
                  step: "2",
                  title: "Design Your Itinerary",
                  desc: "Our experts craft the perfect travel plan for you.",
                },
                {
                  step: "3",
                  title: "Book & Confirm",
                  desc: "Review, pay securely, and confirm your bookings.",
                },
                {
                  step: "4",
                  title: "Enjoy Your Trip!",
                  desc: "Travel confidently with real-time assistance.",
                },
              ].map((it, i) => (
                <div key={i} className="relative flex">
                  {/* Arrow between boxes - Desktop horizontal, Mobile vertical */}
                  {i < 3 && (
                    <>
                      {/* Desktop horizontal arrow */}
                      <div className="hidden md:block absolute top-1/2 -right-5 z-20 -translate-y-1/2">
                        <div className="bg-yellow-400 rounded-full p-2 shadow-lg">
                          <ArrowRight className="w-6 h-6 text-yellow-900" />
                        </div>
                      </div>
                      {/* Mobile vertical arrow */}
                      <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                        <div className="bg-yellow-400 rounded-full p-2 shadow-lg">
                          <ArrowRight className="w-6 h-6 text-yellow-900 rotate-90" />
                        </div>
                      </div>
                    </>
                  )}
                  {/* Yellow Box */}
                  <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:-translate-y-2 border-2 border-yellow-300/50 relative overflow-hidden group flex flex-col h-full w-full">
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                    </div>

                    {/* Step Number Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl font-bold text-yellow-600">
                          {it.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors min-h-[3rem]">
                        {it.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                        {it.desc}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-50 group-hover:opacity-100 transition-opacity"></div>
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
