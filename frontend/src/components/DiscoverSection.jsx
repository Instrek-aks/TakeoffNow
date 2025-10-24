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
              Dream Your Next Trip
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover When Even You Want To Go
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Are You Tired Of The Typical Tourist Destinations And Looking To
              Step Out Of Your Comfort Zone? Adventure Travel May Be The Perfect
              Solution For You! Here Are Four.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-violet-600/10 rounded-full p-3 mt-1">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Travel Agency</h3>
                  <p className="text-muted-foreground">
                    Are you tired of the typical tourist destinatio and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-violet-600/10 rounded-full p-3 mt-1">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Secure Journey With Us
                  </h3>
                  <p className="text-muted-foreground">
                    Are you tired of the typical tourist destinatio and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>
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

        {/* Bottom Section */}
        <div className="mt-24 text-center">
          <p
            className="text-primary font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Most Popular Tour
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Discover The World With Our Excellent Eyes
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
