import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  MapPin,
  Clock,
  Star,
  ArrowLeft,
  MessageCircle,
  Phone,
} from "lucide-react";
import { getDestinationByName } from "../utils/searchData";

const Destination = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const destination = getDestinationByName(decodeURIComponent(name || ""));

  const formatPrice = (price) => {
    if (price === 0) return "Contact for Pricing";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppClick = (packageTitle) => {
    const phoneNumber = "919549134848";
    const message = `Hello! I'm interested in ${packageTitle} for ${destination?.name}. Please provide more details and pricing.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919549134848";
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Destination not found
          </h1>
          <p className="text-gray-600 mb-6">
            The destination you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/packages")}
            className="bg-amber-600 hover:bg-amber-700"
          >
            View All Packages
          </Button>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-gray-700 hover:text-amber-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-amber-600" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {destination.name}
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                {destination.country}
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            Discover {destination.packages.length} amazing{" "}
            {destination.packages.length === 1 ? "package" : "packages"} for{" "}
            {destination.name}
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            onClick={() =>
              handleWhatsAppClick(`Packages for ${destination.name}`)
            }
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact on WhatsApp
          </Button>
          <Button
            onClick={handleCallClick}
            variant="outline"
            className="border-amber-300 text-white hover:bg-amber-50"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +91 9549134848
          </Button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/slider1.webp";
                  }}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white text-xs px-2 py-1">
                    {pkg.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-gray-600 text-xs mb-3">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{pkg.duration}</span>
                </div>

                {pkg.locations && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Locations:</span>{" "}
                      {pkg.locations}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-lg font-bold text-amber-600">
                    {formatPrice(pkg.price)}
                  </p>
                </div>

                <Button
                  onClick={() => handleWhatsAppClick(pkg.title)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2"
                  size="sm"
                >
                  <MessageCircle className="w-3 h-3 mr-2" />
                  Get Details on WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose {destination.name}?
          </h2>
          <p className="text-gray-700 mb-6">
            Explore {destination.name} with our carefully curated packages. We
            offer the best deals, expert guidance, and seamless travel
            experiences. All our packages include detailed itineraries,
            accommodation options, and professional support throughout your
            journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Best Prices
                </h3>
                <p className="text-sm text-gray-600">
                  Competitive pricing with no hidden charges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Expert Guidance
                </h3>
                <p className="text-sm text-gray-600">
                  Professional tour managers and local guides
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">
                  Round-the-clock assistance via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destination;
