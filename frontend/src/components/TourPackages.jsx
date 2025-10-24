import { Badge } from "../components/ui/Badge";
import { Heart, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Two Hour Walking Tour Of Manhattan",
    location: "Veins City, Italy",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    originalPrice: 320,
    price: 320,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 2,
    title: "When You Visit The Eternal Dubai City",
    location: "Dubai, Emirates",
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    originalPrice: 299,
    price: 149,
    reviews: 5,
    badge: { type: "offer", label: "% Offer" },
  },
  {
    id: 3,
    title: "The Pulau Seribu, Jakarta Indonesia",
    location: "51 Dekor Land, Thailand",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    originalPrice: 349,
    price: 349,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 4,
    title: "American Parks Trail End Rapid City Express",
    location: "New York, USA",
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop",
    originalPrice: 280,
    price: 255,
    reviews: 4,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 5,
    title: "Southwestern Switzerland Akam City",
    location: "Switzerland City",
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop",
    originalPrice: 280,
    price: 255,
    reviews: 4,
    badge: null,
  },
  {
    id: 6,
    title: "Modern Stefano La Piazze Wergeland",
    location: "East Norway",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop",
    originalPrice: 280,
    price: 255,
    reviews: 4,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 7,
    title: "Vatican Museums, Sistine Chapel Skip The Line",
    location: "Rome City",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    originalPrice: 280,
    price: 142,
    reviews: 5,
    badge: null,
  },
  {
    id: 8,
    title: "Win Cities On Opposite Sides Of The",
    location: "Sydney, Australia",
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
    originalPrice: 240,
    price: 110,
    reviews: 5,
    badge: null,
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
            className="text-primary font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Most Popular Tour Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Something Amazing Waiting For you
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-primary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {pkg.badge && (
                  <Badge
                    className={`absolute top-4 left-4 ${
                      pkg.badge.type === "new"
                        ? "bg-accent"
                        : pkg.badge.type === "offer"
                        ? "bg-accent"
                        : "bg-secondary"
                    } text-white border-0`}
                  >
                    {pkg.badge.label}
                  </Badge>
                )}
                <button
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(pkg.id)
                        ? "fill-primary text-primary"
                        : ""
                    }`}
                  />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {pkg.location}
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {pkg.duration}
                </div>

                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="bg-primary text-white px-4 py-3 rounded-lg font-bold text-lg relative z-10">
                      {pkg.originalPrice !== pkg.price && (
                        <span className="line-through text-sm text-white/70 mr-2">
                          ${pkg.originalPrice}
                        </span>
                      )}
                      ${pkg.price}
                      <span className="text-sm font-normal">/Person</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-primary/30"></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-semibold">
                      ({pkg.reviews} Reviews)
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
