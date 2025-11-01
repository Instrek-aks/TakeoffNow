import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
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
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Passionate traveler with 15+ years in tourism industry",
    },
    {
      name: "Michael Chen",
      role: "Travel Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Expert in creating unforgettable travel experiences",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Relations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to ensuring every client's satisfaction",
    },
    {
      name: "David Thompson",
      role: "Adventure Specialist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in adventure and outdoor travel experiences",
    },
  ];

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <img
            src="/about us 1.png"
            alt="About TakeoffNow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-blue-400 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About TakeoffNow
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-900">
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
      <section className="py-20 bg-white">
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
                  your interests, pace, and style — making every trip
                  stress-free and memorable.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From quick getaways to luxury international vacations, our
                  team of passionate travelers plans every detail with care and
                  creativity. With TakeoffNow, you don’t just travel — you
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
                  src="/who we are 1.png"
                  alt="Who We Are"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">Award Winning</div>
                      <div className="text-sm">Travel Agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in end-to-end travel planning — from flights and
                hotels to local activities and guided tours. Every itinerary is
                tailored around your interests and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Plane className="w-12 h-12 text-blue-600" />,
                  title: "Flight Bookings",
                  description:
                    "Competitive airfares and seamless flight arrangements to destinations worldwide.",
                },
                {
                  icon: <MapPin className="w-12 h-12 text-blue-600" />,
                  title: "Accommodation",
                  description:
                    "Carefully selected hotels and unique stays that match your preferences and budget.",
                },
                {
                  icon: <Compass className="w-12 h-12 text-blue-600" />,
                  title: "Guided Tours",
                  description:
                    "Expert-led tours and experiences that showcase the best of each destination.",
                },
                {
                  icon: <Camera className="w-12 h-12 text-blue-600" />,
                  title: "Travel Planning",
                  description:
                    "Comprehensive itineraries tailored to your interests, timeline, and budget.",
                },
                {
                  icon: <Heart className="w-12 h-12 text-blue-600" />,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock assistance to ensure your journey is smooth and worry-free.",
                },
                {
                  icon: <Globe className="w-12 h-12 text-blue-600" />,
                  title: "Global Network",
                  description:
                    "Local partners and guides in over 50 countries for authentic experiences.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Let us help you plan the perfect trip that matches your dreams
                and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it – hear from our satisfied
                travelers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The passionate professionals behind your perfect travel
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
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
                className="bg-white text-blue-600 hover:bg-gray-100"
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
      <ScrollToTop />
    </div>
  );
};

export default About;
