import { useState } from "react";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/Dialogs";

const packages = [
  {
    id: 1,
    title: "Beautiful Bali Escape",
    location: "Bali, Indonesia",
    duration: "7 Days",
    image: "/bali.webp",
    originalPrice: 31,
    price: 30.5,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 2,
    title: "Dazzling Dubai & Abu Dhabi",
    location: "UAE, Emirates",
    duration: "6 Days",
    image: "/Dazzling.webp",
    originalPrice: 62,
    price: 60.4,
    reviews: 5,
    badge: { type: "offer", label: "% Offer" },
  },
  {
    id: 3,
    title: "Sensational Singapore Discovery",
    location: "Singapore City",
    duration: "5 Days",
    image: "/Sensational.webp",
    originalPrice: 51,
    price: 50.6,
    reviews: 5,
    badge: { type: "new", label: "New" },
  },
  {
    id: 4,
    title: "Thrilling Thailand Getaway",
    location: "Pattaya & Bangkok, Thailand",
    duration: "5 Days",
    image: "/Thrilling.webp",
    originalPrice: 25.5,
    price: 24.8,
    reviews: 4,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 5,
    title: "Majestic Malaysia Adventure",
    location: "Kuala Lumpur, Malaysia",
    duration: "6 Days",
    image: "/mal.webp",
    originalPrice: 46,
    price: 45.3,
    reviews: 4,
    badge: null,
  },
  {
    id: 6,
    title: "Vibrant Vietnam Experience",
    location: "Hanoi, Danang & Phu Quoc",
    duration: "7 Days",
    image: "/Vibrant.webp",
    originalPrice: 61.2,
    price: 60.2,
    reviews: 5,
    badge: { type: "featured", label: "Featured" },
  },
  {
    id: 7,
    title: "Exotic Bali Bliss Retreat",
    location: "Ubud & Seminyak, Indonesia",
    duration: "6 Days",
    image: "/bali1.webp",
    originalPrice: 52.3,
    price: 50.4,
    reviews: 5,
    badge: { type: "offer", label: "Special" },
  },
  {
    id: 8,
    title: "Enchanting Vietnam Trails",
    location: "Ho Chi Minh to Hanoi",
    duration: "8 Days",
    image: "/veietnam2.webp",
    originalPrice: 46.2,
    price: 45.1,
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
  const [showPriceForm, setShowPriceForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formStep, setFormStep] = useState(1); // 1: departure city, 2: dates, 3: hotel, 4: phone
  const [priceFormData, setPriceFormData] = useState({
    departureCity: "",
    travelDate: "",
    hotelCategory: "",
    phoneNumber: "",
  });

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    setShowPriceForm(true);
    setFormStep(1);
    setPriceFormData({
      departureCity: "",
      travelDate: "",
      hotelCategory: "",
      phoneNumber: "",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Explore.</span>{" "}
            <span className="text-blue-900">Experience.</span>{" "}
            <span className="text-black">Enjoy.</span>
          </h2>
          <p
            className="text-primary font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Premium travel packages created for comfort, excitement, and
            discovery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
          {packages.map((pkg, index) => {
            return (
              <div
                key={pkg.id}
                className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-50 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      e.target.src = "/slider1.webp";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col grow">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 line-clamp-2 min-h-10">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center text-white text-xs mb-2 shrink-0">
                    <MapPin className="w-3 h-3 mr-1 shrink-0 text-black" />
                    <span className="truncate text-black">{pkg.location}</span>
                  </div>

                  <div className="mb-3 min-h-6 shrink-0">
                    {pkg.badge ? (
                      <Badge className="bg-pink-500 text-white border-0 text-xs px-2 py-0.5">
                        {pkg.badge.label}
                      </Badge>
                    ) : (
                      <div className="h-5"></div>
                    )}
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold text-gray-900 flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
                        <span className="text-sm font-medium text-gray-600">
                          Starting from
                        </span>
                        <span>{formatPrice(pkg.price)} /person</span>
                      </p>

                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                        <span className="text-xs text-gray-500">
                          {pkg.reviews} | {pkg.duration}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 whitespace-nowrap shrink-0"
                      onClick={() => handleViewDetails(pkg)}
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

      {/* Price Form Dialog */}
      <Dialog open={showPriceForm} onOpenChange={setShowPriceForm}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedPackage?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {formStep === 1 && "Select your departure city"}
              {formStep === 2 && "Choose your travel dates"}
              {formStep === 3 && "Select hotel category"}
              {formStep === 4 &&
                "Enter your phone number to connect via WhatsApp"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {formStep === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Departure City
                </label>
                <select
                  value={priceFormData.departureCity}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      departureCity: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="">Select departure city</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                </select>
                <Button
                  className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={() => {
                    if (priceFormData.departureCity) setFormStep(2);
                  }}
                  disabled={!priceFormData.departureCity}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {formStep === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Dates
                </label>
                <Input
                  type="date"
                  value={priceFormData.travelDate}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      travelDate: e.target.value,
                    })
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (priceFormData.travelDate) setFormStep(3);
                    }}
                    disabled={!priceFormData.travelDate}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hotel Category
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["3★", "4★", "5★"].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        setPriceFormData({
                          ...priceFormData,
                          hotelCategory: star,
                        })
                      }
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        priceFormData.hotelCategory === star
                          ? "border-violet-600 bg-violet-50 text-violet-600 font-bold"
                          : "border-gray-300 hover:border-violet-300"
                      }`}
                    >
                      {star}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (priceFormData.hotelCategory) setFormStep(4);
                    }}
                    disabled={!priceFormData.hotelCategory}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {formStep === 4 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={priceFormData.phoneNumber}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(3)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      if (priceFormData.phoneNumber) {
                        const phoneNumber = "919549134848";
                        const message = `Hello! I'm interested in ${selectedPackage?.title}.\n\nDetails:\n- Departure City: ${priceFormData.departureCity}\n- Travel Date: ${priceFormData.travelDate}\n- Hotel Category: ${priceFormData.hotelCategory}\n- Phone: ${priceFormData.phoneNumber}\n\nPlease provide pricing and details.`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                        setShowPriceForm(false);
                        setFormStep(1);
                        setPriceFormData({
                          departureCity: "",
                          travelDate: "",
                          hotelCategory: "",
                          phoneNumber: "",
                        });
                      }
                    }}
                    disabled={!priceFormData.phoneNumber}
                  >
                    Connect via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TravelStories;
