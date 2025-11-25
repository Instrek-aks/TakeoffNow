import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-28 h-16 flex items-center justify-center ">
                <img
                  src="/logoB.webp"
                  alt="TakeoffNow Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              {/* <div>
                <div className="text-xl font-bold">TakeoffNow</div>
                <div className="text-xs text-blue-600/70 -mt-1">
                  A Travel Agency
                </div>
              </div> */}
            </div>

            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your mail"
                className="bg-white border border-gray-200 text-gray-800 placeholder:text-gray-500"
              />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-600/90">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors text-emerald-600 shadow"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors text-blue-600 shadow"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-goel-2b650b2aa?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors text-sky-700 shadow"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919549134848?text=Hello!%20I'm%20interested%20in%20your%20travel%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors text-green-600 shadow"
                title="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Packages", path: "/packages" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-gray-600 text-sm">
                  Shop No. 06, Dev Plaza, Bhiwadi - Alwar Bypass Road,
                  <br />
                  301019
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-gray-600 text-sm">+91 9549134848</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-gray-600 text-sm">
                  Mon – Sat: 10:00 AM – 7:00 PM
                  <br />
                  Sunday:{" "}
                  <span className="font-bold text-gray-900">CLOSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            Copyright ©TakeoffNow | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
