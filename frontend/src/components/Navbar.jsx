import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {
  Phone,
  ShoppingCart,
  Menu,
  ChevronDown,
  User,
  Search,
  MapPin,
} from "lucide-react";
import { searchDestinations } from "../utils/searchData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/Dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { Badge } from "../components/ui/Badge";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchDestinations(searchQuery);
      setSearchResults(results.slice(0, 5)); // Show max 5 results
      setShowSearchResults(results.length > 0);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchResults(false);
      setSearchQuery("");
    }
  };

  const handleDestinationClick = (destinationName) => {
    navigate(`/destination/${encodeURIComponent(destinationName)}`);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
      hasDropdown: false,
      dropdownItems: [
        "Hero banner (images + tagline)",
        "Highlights (Top packages, testimonials, CTA buttons)",
        "Quick contact / WhatsApp chat icon",
      ],
    },
    {
      name: "About Us",
      href: "/about",
      hasDropdown: false,
      dropdownItems: [
        "Who We Are",
        "What We Do (Website Description)",
        "Client Testimonials",
        "Team (optional)",
      ],
    },
    {
      name: "Packages",
      href: "/packages",
      hasDropdown: false,
      dropdownItems: ["Ready-made Itineraries"],
    },
    {
      name: "Contact",
      href: "/contact",
      hasDropdown: false,
      dropdownItems: [
        "Contact Form",
        "Email & Phone",
        "Map / Office Location",
        "WhatsApp Chat Integration",
      ],
    },
  ];

  const isHomePage = ["/", "/about", "/contact", "/packages"].includes(
    location.pathname
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage
          ? isScrolled
            ? "bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          : "bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-20 h-12 flex items-center justify-center">
              <img
                src="/logoB.webp"
                alt="TakeoffNow Logo"
                className={`w-full h-full object-contain transition-all ${
                  isScrolled ? "" : "drop-shadow-lg"
                }`}
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger
                    className={`flex items-center space-x-1 transition-colors cursor-pointer ${
                      isHomePage
                        ? isScrolled
                          ? "text-gray-800 hover:text-emerald-600"
                          : "text-white hover:text-amber-300 drop-shadow-lg"
                        : "text-gray-900 hover:text-emerald-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
                    {link.dropdownItems.map((item, index) => (
                      <DropdownMenuItem key={index} className="text-sm">
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={link.name === "Home" ? handleHomeClick : undefined}
                  className={`transition-colors ${
                    isHomePage
                      ? isScrolled
                        ? "text-gray-800 hover:text-emerald-600"
                        : "text-white hover:text-amber-300 drop-shadow-lg"
                      : "text-gray-900 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Search Bar - Mobile (Centered) */}
          <div className="flex-1 lg:hidden mx-4">
            <div className="relative max-w-md mx-auto" ref={searchRef}>
              <form onSubmit={handleSearchSubmit}>
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    isHomePage && !isScrolled
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                />
                <Input
                  type="search"
                  placeholder="Search Countries..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={`pl-10 pr-4 py-2 w-full ${
                    isScrolled
                      ? "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                      : "bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder-gray-500"
                  } rounded-full focus:ring-2 focus:ring-amber-500`}
                />
              </form>
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-amber-200 z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => handleDestinationClick(dest.name)}
                      className="w-full px-4 py-3 text-left hover:bg-amber-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                    >
                      <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">
                          {dest.name}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                          {dest.country} • {dest.packages.length} packages
                        </p>
                      </div>
                    </button>
                  ))}
                  {searchResults.length === 5 && (
                    <button
                      onClick={handleSearchSubmit}
                      className="w-full px-4 py-3 text-center text-amber-600 font-semibold hover:bg-amber-50 transition-colors border-t border-gray-200"
                    >
                      View all results
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop (Right Side) */}
            <div className="hidden lg:block">
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearchSubmit}>
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  />
                  <Input
                    type="search"
                    placeholder="Search Countries, Cities..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={`pl-10 pr-4 py-2 w-64 ${
                      isScrolled
                        ? "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                        : "bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder-gray-500"
                    } rounded-full focus:ring-2 focus:ring-amber-500`}
                  />
                </form>
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-amber-200 z-50 max-h-80 overflow-y-auto">
                    {searchResults.map((dest) => (
                      <button
                        key={dest.name}
                        onClick={() => handleDestinationClick(dest.name)}
                        className="w-full px-4 py-3 text-left hover:bg-amber-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                      >
                        <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {dest.name}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {dest.country} • {dest.packages.length} packages
                          </p>
                        </div>
                      </button>
                    ))}
                    {searchResults.length === 5 && (
                      <button
                        onClick={handleSearchSubmit}
                        className="w-full px-4 py-3 text-center text-amber-600 font-semibold hover:bg-amber-50 transition-colors border-t border-gray-200"
                      >
                        View all results
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+919549134848"
              className={`hidden md:flex items-center space-x-2 transition-colors ${
                isHomePage
                  ? isScrolled
                    ? "text-gray-800 hover:text-emerald-600"
                    : "text-white hover:text-amber-300 drop-shadow-lg"
                  : "text-gray-900 hover:text-emerald-600"
              }`}
            >
              <Phone className="w-5 h-5" />
              <div className="text-sm">
                <div
                  className={`text-xs ${
                    isHomePage
                      ? isScrolled
                        ? "text-gray-600"
                        : "text-white/80"
                      : "text-gray-600"
                  }`}
                >
                  Call Us:
                </div>
                <div
                  className={`font-semibold ${
                    isHomePage
                      ? isScrolled
                        ? "text-gray-800"
                        : "text-white"
                      : "text-gray-900"
                  }`}
                >
                  +91 9549134848
                </div>
              </div>
            </a>

            {/* Cart */}
            {/* <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-xs">
                0
              </Badge>
            </Button> */}

            {/* Login Button */}
            {/* <Button className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-600/90">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button> */}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${
                    isHomePage && !isScrolled
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 h-auto max-h-screen overflow-y-auto"
              >
                <div className="flex flex-col space-y-4 mt-8 pb-8">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-2">
                      <Link
                        to={link.href}
                        onClick={
                          link.name === "Home" ? handleHomeClick : undefined
                        }
                        className="text-lg text-gray-800 hover:text-blue-600 transition-colors py-2 block font-semibold"
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <div className="ml-4 space-y-1">
                          {link.dropdownItems.map((item, index) => (
                            <Link
                              key={index}
                              to={link.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 block"
                            >
                              • {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
