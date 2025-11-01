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
      title: "Bali – 6 Nights 7 Days Custom Itinerary",
      duration: "7 Days",
      price: 145000,
      originalPrice: 165000,
      discount: "12%",
      image:
        "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1200&fit=crop",
      description:
        "Water sports, Nusa Penida West, temple sunsets, jungle swing, Phinisi dinner cruise and more.",
      itinerary: [
        "14 Dec: Arrival",
        "15 Dec: Water Sports (Banana Boat, Fly Fish, Jet Ski) + Sunset @ Uluwatu Temple | Standard Setup – CLD @ Jimbaran Beach (Indian Food + Rose + Wine) on return",
        "16 Dec: Nusa Penida West (Private) – Kelingking, Angel Billabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (time permitting) | Local Lunch",
        "17 Dec: Ulun Danu Beratan Temple + Sunset @ Tanah Lot",
        "18 Dec: Kintamani + Coffee Plantation + Bali Jungle Swing (Unlimited Swings + Nest) + Complimentary Small Local Lunch",
        "19 Dec: Phinisi Dinner Cruise @ Sunset",
        "20 Dec: Day free for Leisure",
        "21 Dec: Check-out & Airport Drop",
      ],
      includes: [
        "Private tours as per plan",
        "Romantic setup @ Jimbaran (as noted)",
        "Local lunches where specified",
        "All transfers",
      ],
      rating: 4.9,
      reviews: 112,
      popular: true,
    },
    {
      id: 2,
      title: "Dubai + Abu Dhabi Highlights",
      duration: "6 Days",
      price: 175000,
      originalPrice: 199000,
      discount: "12%",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&fit=crop",
      description:
        "Desert Safari, Burj Khalifa, Sky Views, Dubai Frame, Miracle Garden, Global Village, Abu Dhabi city tour.",
      itinerary: [
        "D1: Arrival DXB → Hotel + Desert Safari with BBQ dinner (SIC)",
        "D2: Burj Khalifa 124th (Non-Prime) + Sky Views (Glass Slide) + Dubai Frame (3-way PVT)",
        "D3: Miracle Garden + Global Village",
        "D4: DXB→AUH transfer + Abu Dhabi City Tour + BAPS Temple",
        "D5: Yas Island – 1 Day 2 Parks (tickets only)",
        "D6: AUH hotel → AUH airport",
      ],
      includes: ["All tours/transfers PVT except Desert Safari (SIC)"],
      rating: 4.8,
      reviews: 96,
      popular: false,
    },
    {
      id: 3,
      title: "Singapore Essentials – Attractions Combo",
      duration: "6 Days",
      price: 160000,
      originalPrice: 185000,
      discount: "14%",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&fit=crop",
      description:
        "Night Safari, Bird Paradise, S.E.A. Aquarium, Wings of Time, Universal Studios, Sands SkyPark & Gardens by the Bay.",
      itinerary: [
        "Night Safari + Bird Paradise (PVT; complimentary show + tram)",
        "Experiential Singapore Tour (PVT; STB-licensed guide)",
        "S.E.A. Aquarium (10am–4pm; Thu–Mon)",
        "Wings of Time (07:40 PM; ticket only)",
        "Universal Studios (PVT)",
        "Sands SkyPark & Gardens by the Bay Combo (Cloud Forest + Flower Dome; SSP before 4 PM)",
        "1 Arrival + 1 Departure transfer (PVT)",
      ],
      includes: ["9 tour transfers per plan", "Licensed guide where noted"],
      rating: 4.9,
      reviews: 128,
      popular: true,
    },
    {
      id: 4,
      title: "Thailand – Bangkok & Pattaya",
      duration: "5 Days",
      price: 98000,
      originalPrice: 115000,
      discount: "15%",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&fit=crop",
      description:
        "Alcazar show, Coral Island with Indian lunch, Ramayana Water Park, Dolphin Show + Underwater World.",
      itinerary: [
        "Day 1 (24-09-2025): Bangkok arrival → Pattaya; Alcazar Show (PVT)",
        "Day 2 (25-09-2025): Coral Island by Speedboat (SIC) with Indian Buffet Lunch",
        "Day 3 (26-09-2025): Ramayana Water Park (Ticket + PVT transfer)",
        "Day 4 (27-09-2025): Dolphin Show (Wed closed) + Underwater World (PVT)",
        "Day 5 (28-09-2025): Pattaya → Bangkok Airport",
      ],
      includes: ["Private + SIC transfers as stated", "Tickets as per plan"],
      rating: 4.7,
      reviews: 74,
      popular: false,
    },
    {
      id: 5,
      title: "Malaysia – KL & Genting Highlights",
      duration: "6 Days",
      price: 110000,
      originalPrice: 129000,
      discount: "15%",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&fit=crop",
      description:
        "KL city tour, KL Tower deck, Genting cable car + Batu Caves, Putrajaya cruise, Legoland day, Themepark + Waterpark + Sealife.",
      itinerary: [
        "KL Airport → Hotel (PVT; 6 AM – 11 PM)",
        "Kuala Lumpur City Tour (PVT) + KL Tower Observation Deck",
        "Full-day Genting (SIC) + two-way cable car + enroute Batu Caves",
        "Half-day Putrajaya (Sharing Cruise) with PVT transfers",
        "Legoland Malaysia full day (PVT transfers)",
        "1-Day Themepark + Waterpark + Sealife combo (26 Jun 2025)",
        "KL Hotel → Airport (PVT; 6 AM – 11 PM)",
      ],
      includes: [
        "Private transfers where noted",
        "Attraction tickets as listed",
      ],
      rating: 4.8,
      reviews: 58,
      popular: false,
    },
    {
      id: 6,
      title: "Vietnam – Phu Quoc Island Plan",
      duration: "6 Days",
      price: 125000,
      originalPrice: 145000,
      discount: "14%",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&fit=crop",
      description:
        "Grandworld, VinWonders + VinSafari, 4-Island Hopping with lunch + cable car + Aquatopia.",
      itinerary: [
        "D1 (Tue, 14 Oct): PQC Pick Up – North Phu Quoc (PVT)",
        "D2 (Wed, 15 Oct): Grandworld Phu Quoc (PVT; no guide)",
        "D3 (Thu, 16 Oct): VinWonders + VinSafari (Tour; combo)",
        "D5 (Sat, 18 Oct): 4 Island Hopping – Lunch + Cable Car + Aquatopia + Speedboat (SIC)",
        "2 Hrs Return Transfers for shopping/meals (PVT)",
        "D6 (Sun, 19 Oct): PQC Airport Drop (PVT)",
      ],
      includes: ["Private transfers as listed", "SIC tour where noted"],
      rating: 4.7,
      reviews: 41,
      popular: false,
    },
    {
      id: 7,
      title: "Vietnam – Multi-City Discovery",
      duration: "11 Days",
      price: 215000,
      originalPrice: 249000,
      discount: "14%",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&fit=crop",
      description:
        "HCMC + Cu Chi, Phu Quoc highlights, Danang & Hoi An, Ba Na Hills, Hanoi city & Halong Bay day cruise.",
      itinerary: [
        "D1 (24 Sep): SGN Pick Up – HCMC (PVT)",
        "D2 (25 Sep): Cu Chi + Saigon City Tour (SIC)",
        "D3 (26 Sep): SGN drop | PQC pick up – North Phu Quoc (PVT); Grand World (PVT)",
        "D4 (27 Sep): VinWonders + VinSafari (Tour; combo)",
        "D5 (28 Sep): 4 Island Hopping – Lunch + Cable Car + Aquatopia + Speedboat (SIC)",
        "D6 (29 Sep): PQC drop (PVT) | DAD pick up – Danang (PVT)",
        "D7 (30 Sep): Coconut Forest Basket Boat + Hoi An + Lantern Boat (SIC)",
        "D8 (1 Oct): Ba Na Hills – Cable Car + Golden Bridge + Fantasy Park + French Village (SIC)",
        "D9 (2 Oct): DAD drop (PVT) | HAN pick up – Hanoi (PVT); Hanoi City Tour Half Day (PVT)",
        "D10 (3 Oct): Halong Bay Deluxe Day Cruise 6H – Kayaking, Lunch, Sunset Party (SIC; 35S bus)",
        "D11 (4 Oct): Hanoi → HAN Airport Drop (PVT)",
      ],
      includes: [
        "Private transfers where noted",
        "SIC tours as specified",
        "Entry tickets per plan",
      ],
      rating: 4.9,
      reviews: 77,
      popular: true,
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
      {/* {(selectedCategory === "all" || selectedCategory === "basic") && (
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
      )} */}

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
