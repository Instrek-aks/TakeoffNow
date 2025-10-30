import { Button } from "../components/ui/Button";
import { ArrowRight, Globe, Shield } from "lucide-react";

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
            <p className="text-muted-foreground text-lg mb-8">
              Handcrafted itineraries, end-to-end planning, and dedicated
              support — we make every moment count.
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
                    <Shield className="w-8 h-8 text-blue-600" />
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
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop"
                  alt="Beach boats"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&h=300&fit=crop"
                  alt="Couple traveling"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
                  alt="Beach aerial"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
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
          <div className="text-center mb-10">
            <p
              className="text-primary font-semibold text-lg mb-2"
              style={{ fontStyle: "italic" }}
            >
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Plan. Book. Fly.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1.",
                title: "Share Your Preferences",
                desc: "Tell us where you want to go and what you love doing.",
              },
              {
                step: "2.",
                title: "We Design Your Itinerary",
                desc: "Our experts craft the perfect travel plan for you.",
              },
              {
                step: "3.",
                title: "Book & Confirm",
                desc: "Review, pay securely, and confirm your bookings.",
              },
              {
                step: "4.",
                title: "Enjoy Your Trip!",
                desc: "Travel confidently with real-time assistance.",
              },
            ].map((it, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {it.step}
                </div>
                <div className="font-semibold mb-1">{it.title}</div>
                <div className="text-muted-foreground text-sm">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
