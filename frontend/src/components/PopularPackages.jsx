import { useState } from "react";
import {
  MapPin,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Plane,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/Dialogs";

const popularPackages = [
  {
    id: 1,
    title: "Majestic AUSTRALIA ROAD TRIP",
    duration: "7 Nights | 8 Days",
    locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Accommodation at 3N Melbourne, 2N Canberra, 2N Sydney",
      "Daily Breakfast, Lunch & Indian Dinner",
      "Australian Tourist Visa with Travel Insurance",
      "English/Hindi Speaking Tour Manager",
      "Full-Day Great Ocean Road Tour",
      "Phillip Island - Penguin Parade",
      "Experience Blue Mountains with Scenic World Rides",
      "Bondi Beach Visit",
      "Photo Stops at Sydney Opera House & Harbour Bridge",
      "Panoramic Views from Mount Ainslie - Canberra",
      "Scenic Grand Pacific Drive from Canberra",
    ],
  },
  {
    id: 2,
    title: "SWISS PARIS AT A GLANCE",
    duration: "6 Nights | 7 Days",
    locations: "Zurich 3N, Paris 3N",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Stay in good 4-star hotels in Europe",
      "Daily Continental Breakfast",
      "Covers the best of sightseeing in Paris and Switzerland",
      "Cover exclusive attractions in Western Switzerland",
      "6 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "1 Lunch on Top of Mountains",
      "All Transfers and Tours by Luxury AC Coach",
      "Services of an English/Hindi Experienced Tour Manager",
      "Driver and Tour Manager Tips Included",
    ],
  },
  {
    id: 3,
    title: "Magnificent NEW ZEALAND",
    duration: "9 Nights | 10 Days",
    locations: "2N Auckland, 2N Rotorua, 3N Queenstown and 2N Christchurch",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
    gradient: "from-emerald-500 to-teal-500",
    departureCities: ["Delhi", "Mumbai", "Bangalore"],
    withFlights: true,
    highlights: [
      "To and Fro Economy Class Airfare (ex India)",
      "Domestic Flight from Rotorua to Queenstown",
      "09 Nights Accommodation in All 4 Places",
      "4 Star Hotel Category or Similar",
      "Daily Breakfast, Lunch and Dinner",
      "Auckland Highlights Luxury Tour with Sky Tower Entry",
      "Waitomo Cave Tour",
      "Hobbiton Tour",
      "Milford Sound Experience",
      "Shotover Jet, Mt Cook & Lake Tekapo",
      "Christchurch Attractions Combo Pass (Gondola and Tram)",
      "Experienced Tour Guide",
    ],
  },
  {
    id: 4,
    title: "Glimpses of EUROPE",
    duration: "8 Nights | 9 Days",
    locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
    gradient: "from-amber-500 to-orange-500",
    departureCities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad"],
    withFlights: true,
    highlights: [
      "To and Fro Economy Class Flights",
      "3 star hotels in Europe with Daily Continental Breakfast",
      "Best Sightseeing in Switzerland, Netherlands and Paris",
      "8 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "All Transfers and Tours by Luxury AC Coach",
      "Services of a English/Hindi Experienced Tour Manager",
      "All Tour Manager and Driver Tips Included",
    ],
    includes: [
      "Hotels",
      "Flights",
      "Transfers",
      "Meals",
      "Sightseeing",
      "Visa",
    ],
  },
];

const PopularPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Duplicate packages for seamless infinite scroll
  const duplicatedPackages = [...popularPackages, ...popularPackages];

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <span className="text-violet-600 font-semibold text-lg">
                Featured Destinations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked journeys to the world's most breathtaking destinations
            </p>
          </div>

          {/* Infinite Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Subtle fade on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-50/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-orange-50/80 to-transparent z-20 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                className="flex gap-4 animate-scroll"
                style={{
                  width: "fit-content",
                }}
              >
                {duplicatedPackages.map((pkg, index) => (
                  <div
                    key={`${pkg.id}-${index}`}
                    onClick={() => handleCardClick(pkg)}
                    className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-amber-200 transform hover:-translate-y-1 cursor-pointer shrink-0 w-[280px] md:w-[320px]"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Badge on top right */}
                      {pkg.withFlights && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-500 text-white shadow-lg text-xs">
                            <Plane className="w-3 h-3 mr-1" />
                            Flights
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {pkg.title}
                      </h3>

                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" />
                          <span className="font-medium">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" />
                          <span className="truncate max-w-[120px] text-xs">
                            {pkg.locations.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">
                          Click for details
                        </span>
                        <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedPackage.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-amber-600" />
                      {selectedPackage.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                      {selectedPackage.locations}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Package Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";
                    }}
                  />
                </div>

                {/* Departure Cities */}
                {selectedPackage.departureCities && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Departure Cities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackage.departureCities.map((city, idx) => (
                        <Badge
                          key={idx}
                          className="bg-blue-600 text-white text-xs"
                        >
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Includes */}
                {selectedPackage.includes && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackage.includes.map((item, idx) => (
                        <Badge
                          key={idx}
                          className="bg-amber-600 text-white text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xl">Highlights</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 shadow-lg"
                  onClick={() => {
                    const phoneNumber = "919549134848";
                    const message = `Hello! I'm interested in ${selectedPackage.title}. Please provide pricing and more details.`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.location.href = whatsappUrl;
                  }}
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularPackages;
