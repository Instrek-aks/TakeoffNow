import { MapPin, Clock, CheckCircle, Star, ArrowRight, Plane, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

const popularPackages = [
  {
    id: 1,
    title: "Majestic AUSTRALIA ROAD TRIP",
    duration: "7 Nights | 8 Days",
    locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
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
    includes: ["Hotels", "Flights", "Transfers", "Meals", "Sightseeing", "Visa"],
  },
];

const PopularPackages = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
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
              <span className="text-violet-600 font-semibold text-lg">Featured Destinations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked journeys to the world's most breathtaking destinations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {popularPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-80`}></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="truncate max-w-[150px]">{pkg.locations.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge on top right */}
                  {pkg.withFlights && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white shadow-lg">
                        <Plane className="w-3 h-3 mr-1" />
                        With Flights
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6">
                  {/* Location and badges */}
                  <div className="mb-4 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      <span className="font-medium">{pkg.locations}</span>
                    </div>
                    
                    {pkg.departureCities && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                          Departure Cities:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.departureCities.map((city, idx) => (
                            <Badge
                              key={idx}
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs shadow-md"
                            >
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {pkg.includes && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                          Includes:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes.map((item, idx) => (
                            <Badge
                              key={idx}
                              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs shadow-md"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlights with fixed height and smooth scroll */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-lg">Highlights</span>
                    </h4>
                    <div className="relative">
                      {/* Gradient fade at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                      <ul 
                        className="space-y-2.5 h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#93c5fd #f3f4f6'
                        }}
                      >
                        {pkg.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-700 flex items-start group/item"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    onClick={() => {
                      const phoneNumber = "919549134848";
                      const message = `Hello! I'm interested in ${pkg.title}. Please provide pricing and more details.`;
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.location.href = whatsappUrl;
                    }}
                  >
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;

