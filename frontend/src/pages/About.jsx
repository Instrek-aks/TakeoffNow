import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import {
  Users,
  Globe,
  Heart,
  Star,
  Award,
  MapPin,
  Phone,
  Mail,
  Quote,
  CheckCircle,
  Plane,
  Camera,
  Compass,
} from "lucide-react";

const About = () => {
  const teamMember = {
    name: "Akshat Sharma",
    role: "Founder & Travel Expert",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Passionate traveler with extensive experience in creating personalized travel experiences. Dedicated to crafting unique journeys tailored to each traveler's dreams.",
  };

  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1544005313-94bdf02852df?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "TakeoffNow made our dream vacation to Bali absolutely perfect. Every detail was handled with care and professionalism.",
    },
    {
      name: "Robert Kim",
      location: "Seoul, South Korea",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The team's expertise and local knowledge made our European tour unforgettable. Highly recommended!",
    },
    {
      name: "Lisa Anderson",
      location: "London, UK",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "From planning to execution, TakeoffNow exceeded our expectations. We'll definitely use their services again.",
    },
  ];

  const stats = [
    { number: "2000+", label: "Custom Itineraries Designed" },
    { number: "100+", label: "Corporate Clients Served" },
    { number: "50+", label: "Global Destinations" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "8+", label: "Years of Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <img
            src="/about us 1.webp"
            alt="About TakeoffNow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
            About TakeoffNow
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#11224E] font-bold">
            Your trusted partner in creating unforgettable travel experiences
          </p>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-blue-500 text-white px-8 py-4 text-lg"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At TakeoffNow, we turn travel dreams into beautifully crafted
                  experiences. We design personalized itineraries that match
                  your interests, pace, and style making every trip stress-free
                  and memorable.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From quick getaways to luxury international vacations, our
                  team of passionate travelers plans every detail with care and
                  creativity. With TakeoffNow, you don’t just travel. you
                  experience the world, your way.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-blue-50 rounded-lg"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/about us 2.webp"
                  alt="Who We Are"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">Award Winning</div>
                      <div className="text-sm">Travel Agency</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in end-to-end travel planning from flights and
                hotels to local activities and guided tours. Every itinerary is
                tailored around your interests and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Plane className="w-12 h-12 text-[#11224E]" />,
                  title: "Flight Bookings",
                  description:
                    "Competitive airfares and seamless flight arrangements to destinations worldwide.",
                },
                {
                  icon: <MapPin className="w-12 h-12 text-[#11224E]" />,
                  title: "Accommodation",
                  description:
                    "Carefully selected hotels and unique stays that match your preferences and budget.",
                },
                {
                  icon: <Compass className="w-12 h-12 text-[#11224E]" />,
                  title: "Guided Tours",
                  description:
                    "Expert-led tours and experiences that showcase the best of each destination.",
                },
                {
                  icon: <Camera className="w-12 h-12 text-[#11224E]" />,
                  title: "Travel Planning",
                  description:
                    "Comprehensive itineraries tailored to your interests, timeline, and budget.",
                },
                {
                  icon: <Heart className="w-12 h-12 text-[#11224E]" />,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock assistance to ensure your journey is smooth and worry-free.",
                },
                {
                  icon: <Globe className="w-12 h-12 text-[#11224E]" />,
                  title: "Global Network",
                  description:
                    "Local partners and guides in over 50 countries for authentic experiences.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-200"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFA239] rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Let us help you plan the perfect trip that matches your dreams
                and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-amber-50 text-violet-600 hover:bg-amber-100 border border-amber-300"
                  onClick={() => {
                    const phoneNumber = "+919549134848";
                    const message =
                      "Hello! I'm ready to start my adventure. Please help me plan my perfect trip.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-violet-600"
                  onClick={() => (window.location.href = "/packages")}
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The passionate professional behind your perfect travel
                experience
              </p>
            </div>

            {/* Team Member Card with Frame */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-200/50 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Photo on Left */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>

                {/* Details on Right */}
                <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {teamMember.name}
                    </h3>
                    <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
                      {teamMember.role}
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-6 border-2 border-amber-200/50 shadow-md">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {teamMember.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text-center mt-16">
              <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-12 shadow-lg max-w-4xl mx-auto border border-sky-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Join Our Team
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're always looking for passionate individuals who share our
                  love for travel and commitment to exceptional service.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View Open Positions
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get in touch with our travel experts and let us create the perfect
              journey for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-50 text-blue-600 hover:bg-amber-100 border border-amber-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
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
    </div>
  );
};

export default About;
