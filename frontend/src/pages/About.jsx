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
  Linkedin,
} from "lucide-react";

const About = () => {
  const teamMember = {
    name: "Akshat Goel",
    role: "Founder & CEO, TakeOffNow",
    image: "/akshat.webp",
    description:
      "At TakeOffNow, our goal is to make travel feel easy, friendly, and enjoyable. Whether you're planning your first trip or your hundredth, my team and I are here to support you like family.\n\nThank you for trusting us. Your journey matters to us.",
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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0">
          <img
            src="/about9.webp"
            alt="About TakeoffNow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            <span className="text-white">About</span>{" "}
            <span className="text-white">TakeoffNow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-500 font-bold drop-shadow-2xl">
            Your trusted partner in creating unforgettable travel experiences
          </p>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 text-lg shadow-xl"
            onClick={() => {
              window.location.href = "/packages";
            }}
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
                      className="text-center p-6 bg-white rounded-lg"
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
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-200"
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
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-0">
                        {teamMember.name}
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/akshat-goel-2b650b2aa?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        aria-label="Akshat Goel on LinkedIn"
                      >
                        <Linkedin className="w-7 h-7" />
                      </a>
                    </div>
                    <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
                      {teamMember.role}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200/50 shadow-md">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
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
                onClick={() => {
                  window.location.href = "tel:+919549134848";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => {
                  window.location.href = "mailto:Travel@takeoffnow.in";
                }}
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
