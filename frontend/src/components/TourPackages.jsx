import { Badge } from "../components/ui/Badge";
import { Heart, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Beautiful Bali Escape",
    location: "Bali, Indonesia",
    duration: "7 Days",
    image: "/bali.webp",
    originalPrice: 320,
    price: 320,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 2,
    title: "Dazzling Dubai & Abu Dhabi",
    location: "UAE, Emirates",
    duration: "6 Days",
    image: "/thieland.webp",
    originalPrice: 299,
    price: 299,
    reviews: 5,
    badge: { type: "offer", label: "% Offer" },
  },
  {
    id: 3,
    title: "Sensational Singapore Discovery",
    location: "Singapore City",
    duration: "5 Days",
    image: "/singapore.webp",
    originalPrice: 349,
    price: 349,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 4,
    title: "Thrilling Thailand Getaway",
    location: "Pattaya & Bangkok, Thailand",
    duration: "5 Days",
    image: "/vietnam.webp",
    originalPrice: 280,
    price: 280,
    reviews: 4,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 5,
    title: "Majestic Malaysia Adventure",
    location: "Kuala Lumpur, Malaysia",
    duration: "6 Days",
    image: "/mal.webp",
    originalPrice: 280,
    price: 280,
    reviews: 4,
    badge: null,
  },
  {
    id: 6,
    title: "Vibrant Vietnam Experience",
    location: "Hanoi, Danang & Phu Quoc",
    duration: "7 Days",
    image: "/dubai.webp",
    originalPrice: 290,
    price: 290,
    reviews: 5,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 7,
    title: "Exotic Bali Bliss Retreat",
    location: "Ubud & Seminyak, Indonesia",
    duration: "6 Days",
    image: "/bali1.webp",
    originalPrice: 340,
    price: 340,
    reviews: 5,
    badge: { type: "offer", label: "Special" },
  },
  {
    id: 8,
    title: "Enchanting Vietnam Trails",
    location: "Ho Chi Minh to Hanoi",
    duration: "8 Days",
    image: "/veietnam2.webp",
    originalPrice: 360,
    price: 360,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
];

const TourPackages = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-violet-600 font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Most Popular Tour Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Something Amazing Waiting For you
          </h2>
        </div>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Tour",
            "Hotel",
            "Restaurant",
            "Rental",
            "Activity",
            "Car Rental",
          ].map((tab, idx) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                idx === 0
                  ? "bg-violet-600 text-white"
                  : "bg-muted text-foreground hover:bg-violet-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Location Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <MapPin className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-800 truncate">
                      {pkg.location}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                {pkg.badge && (
                  <Badge
                    className={`absolute top-4 left-4 z-10 ${
                      pkg.badge.type === "new"
                        ? "bg-green-500"
                        : pkg.badge.type === "offer"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    } text-white border-0 shadow-lg font-semibold px-3 py-1`}
                  >
                    {pkg.badge.label}
                  </Badge>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      favorites.includes(pkg.id)
                        ? "fill-violet-600 text-violet-600"
                        : "text-gray-700"
                    }`}
                  />
                </button>
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold mb-4 group-hover:text-violet-600 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                  {pkg.title}
                </h3>

                {/* Duration and Reviews */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4 text-violet-600" />
                    <span className="text-sm font-semibold">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {pkg.reviews}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
