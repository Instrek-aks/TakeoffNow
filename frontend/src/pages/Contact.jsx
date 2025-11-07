import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/TextArea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  Calendar,
  Plane,
  Zap,
  Award,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Call us for immediate assistance",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["info@takeoffnow.com", "bookings@takeoffnow.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Office Location",
      details: ["Aviation Plaza", "Near India Gate, New Delhi 110003", "India"],
      description: "Visit our main office",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      description: "We're here to help you",
    },
  ];

  const services = [
    "Airplane Tours",
    "Helicopter Adventures",
    "Private Jet Charters",
    "Ready-made Itineraries",
    "Custom Packages",
    "Group Bookings",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-700">
            Get in touch with our aviation experts and start planning your next
            adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
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

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Map & Office Location */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234567890!2d77.2295!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TakeoffNow Office Location - Delhi India Gate"
                    ></iframe>
                  </div>
                </div>

                {/* Office Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Visit Our Office
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Main Office
                        </h4>
                        <p className="text-gray-600">
                          Aviation Plaza
                          <br />
                          Near India Gate
                          <br />
                          New Delhi, Delhi 110003
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Office Hours
                        </h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 8:00 AM - 8:00 PM
                          <br />
                          Sunday: 10:00 AM - 6:00 PM
                          <br />
                          <span className="text-sm text-gray-500">
                            (Emergency services available 24/7)
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Direct Contact
                        </h4>
                        <p className="text-gray-600">
                          +91 98765 43210
                          <br />
                          +91 98765 43211
                          <br />
                          <span className="text-sm text-gray-500">
                            (Available for immediate assistance)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Quick Actions
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Integration Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Chat with Us on WhatsApp
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Get instant responses and personalized assistance for your
              aviation needs
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 rounded-2xl p-6">
                <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Support</h3>
                <p className="text-green-100">
                  Get immediate answers to your questions
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                <p className="text-green-100">
                  Book your flights and tours directly via chat
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <User className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Personal Service</h3>
                <p className="text-green-100">
                  One-on-one assistance from our experts
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Aviation Services
              </h2>
              <p className="text-xl text-gray-600">What we can help you with</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <Plane className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Airplane Tours
                </h3>
                <p className="text-gray-600 mb-6">
                  Scenic flights and city tours with professional pilots
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Helicopter Adventures
                </h3>
                <p className="text-gray-600 mb-6">
                  Mountain tours and special landing experiences
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Learn More
                </Button>
              </div>

              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Private Jet Charters
                </h3>
                <p className="text-gray-600 mb-6">
                  Luxury private jet services for special occasions
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Learn More
                </Button>
              </div>
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

export default Contact;
