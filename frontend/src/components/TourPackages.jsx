import { MapPin, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

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

// Generate user data for yellow header
const generateUserData = (index) => {
  const users = [
    { name: "Saharsha", location: "Hyderabad", avatar: "S", time: "13hr ago" },
    { name: "Anugraha", location: "Bengaluru", avatar: "A", time: "14hr ago" },
    { name: "Dhivya", location: "Chennai", avatar: "D", time: "15hr ago" },
    { name: "Rajesh", location: "Mumbai", avatar: "R", time: "16hr ago" },
    { name: "Priya", location: "Delhi", avatar: "P", time: "17hr ago" },
    { name: "Kumar", location: "Pune", avatar: "K", time: "18hr ago" },
    { name: "Amit", location: "Kolkata", avatar: "A", time: "19hr ago" },
    { name: "Neha", location: "Ahmedabad", avatar: "N", time: "20hr ago" },
  ];
  return users[index % users.length];
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price * 1000); // Assuming price is in thousands
};

const TravelStories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-primary font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Recent Travel Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See What Travelers Are Experiencing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {packages.map((pkg, index) => {
            const user = generateUserData(index);
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* User Header - Yellow Bar */}
                <div className="bg-yellow-400 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center font-bold text-white text-xs">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">
                      {user.name} from {user.location}
                    </p>
                  </div>
                  <span className="text-xs text-gray-700 whitespace-nowrap">
                    • {user.time}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/slider1.webp";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 line-clamp-2 min-h-10">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <MapPin className="w-3 h-3 mr-1 shrink-0" />
                    <span className="truncate">{pkg.location}</span>
                  </div>

                  {pkg.badge && (
                    <Badge className="bg-pink-500 text-white border-0 text-xs px-2 py-0.5 mb-3">
                      {pkg.badge.label}
                    </Badge>
                  )}

                  <div className="flex items-end justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-900">
                        {formatPrice(pkg.price)}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-500">
                          {pkg.reviews} • {pkg.duration}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 whitespace-nowrap shrink-0"
                      onClick={() => {
                        const phoneNumber = "+919549134848";
                        const message = `Hello! I'm interested in ${pkg.title}. Please provide more details.`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelStories;
