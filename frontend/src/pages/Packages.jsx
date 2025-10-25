import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Plane,
  Zap,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Shield,
  Award,
  Heart,
} from "lucide-react";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const basicPackages = [
    {
      id: 1,
      title: "City Sky Tour",
      type: "Airplane",
      duration: "2 Hours",
      price: 15000,
      originalPrice: 18000,
      discount: "17%",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      description:
        "Experience the city from above with our signature airplane tour",
      features: [
        "Professional pilot",
        "Safety briefing",
        "City landmarks tour",
        "Photo opportunities",
        "Refreshments included",
      ],
      rating: 4.8,
      reviews: 124,
      popular: true,
    },
    {
      id: 2,
      title: "Mountain Helicopter Adventure",
      type: "Helicopter",
      duration: "3 Hours",
      price: 25000,
      originalPrice: 30000,
      discount: "17%",
      image:
        "https://images.unsplash.com/photo-1551524164-6cf2ac531f03?w=600&h=400&fit=crop",
      description:
        "Soar over majestic mountains and valleys in our luxury helicopter",
      features: [
        "Expert helicopter pilot",
        "Mountain range views",
        "Landing at scenic spots",
        "Professional photography",
        "Safety equipment provided",
      ],
      rating: 4.9,
      reviews: 89,
      popular: false,
    },
    {
      id: 3,
      title: "Coastal Flight Experience",
      type: "Airplane",
      duration: "1.5 Hours",
      price: 12000,
      originalPrice: 15000,
      discount: "20%",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      description:
        "Fly along the beautiful coastline with breathtaking ocean views",
      features: [
        "Coastal route flight",
        "Ocean view experience",
        "Professional guide",
        "Comfortable seating",
        "Weather guarantee",
      ],
      rating: 4.7,
      reviews: 156,
      popular: false,
    },
  ];

  const readyMadeItineraries = [
    {
      id: 1,
      title: "Golden Triangle Aviation Tour",
      duration: "5 Days",
      price: 125000,
      originalPrice: 150000,
      discount: "17%",
      image: "/golden-triangle-tour2.jpg",
      description:
        "Explore Delhi, Agra, and Jaipur with private aircraft transfers",
      itinerary: [
        "Day 1: Delhi arrival & city tour by helicopter",
        "Day 2: Fly to Agra, visit Taj Mahal",
        "Day 3: Helicopter tour of Agra Fort",
        "Day 4: Fly to Jaipur, palace visits",
        "Day 5: Return to Delhi by private jet",
      ],
      includes: [
        "Private aircraft transfers",
        "5-star accommodation",
        "All meals included",
        "Professional guide",
        "Entrance fees",
        "Photography service",
      ],
      rating: 4.9,
      reviews: 67,
      popular: true,
    },
    {
      id: 2,
      title: "Himalayan Helicopter Expedition",
      duration: "7 Days",
      price: 180000,
      originalPrice: 220000,
      discount: "18%",
      image: "/golden-triangle-tour2.jpg",
      description:
        "Journey through the Himalayas with multiple helicopter landings",
      itinerary: [
        "Day 1: Delhi to Manali by helicopter",
        "Day 2: Rohtang Pass helicopter tour",
        "Day 3: Spiti Valley exploration",
        "Day 4: Leh-Ladakh helicopter transfer",
        "Day 5: Pangong Lake helicopter tour",
        "Day 6: Nubra Valley adventure",
        "Day 7: Return to Delhi",
      ],
      includes: [
        "Helicopter transfers",
        "Mountain lodge stays",
        "All meals & refreshments",
        "Oxygen equipment",
        "Expert mountain guide",
        "Emergency medical support",
      ],
      rating: 4.8,
      reviews: 43,
      popular: false,
    },
    {
      id: 3,
      title: "South India Aviation Circuit",
      duration: "6 Days",
      price: 95000,
      originalPrice: 120000,
      discount: "21%",
      image: "/golden-triangle-tour2.jpg",
      description:
        "Discover South India's beauty with private aircraft and helicopter tours",
      itinerary: [
        "Day 1: Bangalore arrival & city helicopter tour",
        "Day 2: Fly to Mysore, palace helicopter tour",
        "Day 3: Coorg helicopter adventure",
        "Day 4: Fly to Kerala, backwater helicopter tour",
        "Day 5: Munnar hill station helicopter tour",
        "Day 6: Return to Bangalore",
      ],
      includes: [
        "Private aircraft transfers",
        "Luxury resort stays",
        "All meals included",
        "Cultural experiences",
        "Professional photographer",
        "Souvenir package",
      ],
      rating: 4.7,
      reviews: 89,
      popular: false,
    },
  ];

  const startingPrices = [
    {
      category: "Airplane Tours",
      minPrice: 8000,
      maxPrice: 50000,
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      description: "From scenic city tours to long-distance flights",
      features: [
        "Professional pilots",
        "Safety certified",
        "Weather dependent",
      ],
    },
    {
      category: "Helicopter Adventures",
      minPrice: 15000,
      maxPrice: 80000,
      icon: <Zap className="w-8 h-8 text-green-600" />,
      description: "Mountain tours, coastal flights, and special landings",
      features: ["Expert pilots", "Flexible routes", "Scenic landings"],
    },
    {
      category: "Private Jet Charters",
      minPrice: 100000,
      maxPrice: 500000,
      icon: <Award className="w-8 h-8 text-purple-600" />,
      description: "Luxury private jet services for special occasions",
      features: [
        "Luxury aircraft",
        "Personalized service",
        "Flexible scheduling",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "basic", name: "Basic Packages" },
    { id: "itineraries", name: "Ready-made Itineraries" },
    { id: "pricing", name: "Starting Prices" },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop"
            alt="Aviation Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-violet-500 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Aviation Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-900">
            Experience the world from above with our premium airplane and
            helicopter tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Plane className="w-5 h-5 mr-2" />
              Explore Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Packages Section */}
      {(selectedCategory === "all" || selectedCategory === "basic") && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Basic Packages
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from our curated selection of airplane and helicopter
                  experiences
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {basicPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-red-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          console.log("Image failed to load:", pkg.image);
                          e.target.src =
                            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          {pkg.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {pkg.rating} ({pkg.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>

                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {pkg.duration}
                        </span>
                        <Users className="w-4 h-4 text-gray-500 ml-4" />
                        <span className="text-sm text-gray-600">
                          Up to 6 people
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-blue-600">
                            {formatPrice(pkg.price)}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </span>
                          <Badge className="bg-green-100 text-green-800">
                            {pkg.discount} OFF
                          </Badge>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ready-made Itineraries Section */}
      {(selectedCategory === "all" || selectedCategory === "itineraries") && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready-made Itineraries
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete travel experiences combining multiple destinations
                  with aviation
                </p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {readyMadeItineraries.map((itinerary) => (
                  <div
                    key={itinerary.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={itinerary.image}
                          alt={itinerary.title}
                          className="w-full h-64 md:h-full object-cover"
                          onError={(e) => {
                            console.log(
                              "Image failed to load:",
                              itinerary.image
                            );
                            e.target.src =
                              "https://images.unsplash.com/photo-1506905925346-04b8e0e7c4c0?w=600&h=400&fit=crop";
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {itinerary.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {itinerary.description}
                            </p>
                          </div>
                          {itinerary.popular && (
                            <Badge className="bg-red-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Itinerary:
                            </h4>
                            <ul className="space-y-1">
                              {itinerary.itinerary.map((day, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-600 flex items-start"
                                >
                                  <Calendar className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                  {day}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Includes:
                            </h4>
                            <ul className="space-y-1">
                              {itinerary.includes.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-3xl font-bold text-blue-600">
                                {formatPrice(itinerary.price)}
                              </span>
                              <span className="text-lg text-gray-500 line-through">
                                {formatPrice(itinerary.originalPrice)}
                              </span>
                              <Badge className="bg-green-100 text-green-800">
                                {itinerary.discount} OFF
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {itinerary.duration}
                              <Star className="w-4 h-4 text-yellow-400 fill-current ml-4 mr-1" />
                              {itinerary.rating} ({itinerary.reviews} reviews)
                            </div>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                            Book Package
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Starting Prices Section */}
      {(selectedCategory === "all" || selectedCategory === "pricing") && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Starting Prices
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transparent pricing for all our aviation services
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {startingPrices.map((price, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">{price.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {price.category}
                    </h3>
                    <p className="text-gray-600 mb-6">{price.description}</p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {formatPrice(price.minPrice)} -{" "}
                        {formatPrice(price.maxPrice)}
                      </div>
                      <div className="text-sm text-gray-500">Starting from</div>
                    </div>

                    <ul className="space-y-2 mb-8">
                      {price.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-600 flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Take Flight?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your aviation adventure today and experience the world from
              above
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 98765 43210
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Packages;
