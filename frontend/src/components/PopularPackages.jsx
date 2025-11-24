import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Plane,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/Dialogs";
import { openWhatsApp } from "../utils/whatsapp";

const popularPackages = [
  {
    id: 1,
    title: "Majestic AUSTRALIA ROAD TRIP",
    locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
    image: "/slider1.webp",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Accommodation at 3N Melbourne, 2N Canberra, 2N Sydney",
      "Daily Breakfast, Lunch & Indian Dinner",
      "Australian Tourist Visa with Travel Insurance",
      "English/Hindi Speaking Tour Manager",
      "Full-Day Great Ocean Road Tour",
      "Phillip Island - Penguin Parade",
      "Experience Blue Mountains with Scenic World Rides",
      "Bondi Beach Visit",
      "Photo Stops at Sydney Opera House & Harbour Bridge",
      "Panoramic Views from Mount Ainslie - Canberra",
      "Scenic Grand Pacific Drive from Canberra",
    ],
  },
  {
    id: 2,
    title: "SWISS PARIS AT A GLANCE",
    locations: "Zurich 3N, Paris 3N",
    image: "/slider2.webp",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Stay in good 4-star hotels in Europe",
      "Daily Continental Breakfast",
      "Covers the best of sightseeing in Paris and Switzerland",
      "Cover exclusive attractions in Western Switzerland",
      "6 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "1 Lunch on Top of Mountains",
      "All Transfers and Tours by Luxury AC Coach",
      "Services of an English/Hindi Experienced Tour Manager",
      "Driver and Tour Manager Tips Included",
    ],
  },
  {
    id: 3,
    title: "Magnificent NEW ZEALAND",
    locations: "2N Auckland, 2N Rotorua, 3N Queenstown and 2N Christchurch",
    image: "/slider7.webp",
    gradient: "from-emerald-500 to-teal-500",
    departureCities: ["Delhi", "Mumbai", "Bangalore"],
    withFlights: true,
    highlights: [
      "To and Fro Economy Class Airfare (ex India)",
      "Domestic Flight from Rotorua to Queenstown",
      "09 Nights Accommodation in All 4 Places",
      "4 Star Hotel Category or Similar",
      "Daily Breakfast, Lunch and Dinner",
      "Auckland Highlights Luxury Tour with Sky Tower Entry",
      "Waitomo Cave Tour",
      "Hobbiton Tour",
      "Milford Sound Experience",
      "Shotover Jet, Mt Cook & Lake Tekapo",
      "Christchurch Attractions Combo Pass (Gondola and Tram)",
      "Experienced Tour Guide",
    ],
  },
  {
    id: 4,
    title: "Glimpses of EUROPE",
    locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
    image: "/slider8.webp",
    gradient: "from-amber-500 to-orange-500",
    departureCities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad"],
    withFlights: true,
    highlights: [
      "To and Fro Economy Class Flights",
      "3 star hotels in Europe with Daily Continental Breakfast",
      "Best Sightseeing in Switzerland, Netherlands and Paris",
      "8 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "All Transfers and Tours by Luxury AC Coach",
      "Services of a English/Hindi Experienced Tour Manager",
      "All Tour Manager and Driver Tips Included",
    ],
    includes: [
      "Hotels",
      "Flights",
      "Transfers",
      "Meals",
      "Sightseeing",
      "Visa",
    ],
  },
  {
    id: 5,
    title: "DUBAI 4 NIGHTS",
    locations: "Dubai",
    image: "/DUBAI 4 NIGHTS.jpg",
    gradient: "from-amber-500 to-orange-500",
    highlights: [
      "Evening Marina Dhow Cruise with buffet dinner & live entertainment",
      "Half-Day Dubai City Tour – heritage sites, Gold & Spice Souks, Palm Jumeirah",
      "Photo stops at Dubai Frame, Burj Al Arab & Museum of the Future",
      "Top of Burj Khalifa (124th Floor) with Dubai Mall & Fountain show",
      "Dubai Frame Visit – panoramic city views & cultural exhibits",
      "Desert Safari Adventure – dune bashing, camel rides, sandboarding & BBQ dinner",
      "Global Village Entry – cultural extravaganza with shopping & food from 70+ countries",
      "Dubai Miracle Garden – the world's largest flower garden",
      "Airport and Sightseeing transfers",
    ],
  },
  {
    id: 6,
    title: "VIETNAM DISCOVERY",
    locations: "Ho Chi Minh City, Da Nang, Hanoi",
    image: "/Vietnam – 6 Nights 7 Days Discovery.jpg",
    gradient: "from-emerald-500 to-teal-500",
    highlights: [
      "Ho Chi Minh City Tour & Cu Chi Tunnels Tour (Shared Basis)",
      "Mekong Delta Tour with Vinh Trang Pagoda, boat rides, and local experiences",
      "Ba Na Hills Tour with Golden Bridge, Linh Ung Pagoda, and 27m Buddha statue",
      "Hoi An Ancient Town Tour with Phuc Kien Assembly Hall & Japanese Covered Bridge",
      "Lantern Release Ceremony along the Hoai River",
      "Hanoi City Tour with Temple of Literature & Hoa Lo Prison Museum",
      "Halong Bay Day Cruise exploring Surprising Cave, Pelican Grotto, and grottos",
      "Single Entry Vietnam E-Visa included",
      "All airport and sightseeing transfers (Private/Shared as specified)",
    ],
  },
  {
    id: 7,
    title: "THAILAND GETAWAY",
    locations: "Pattaya & Bangkok",
    image: "/Thailand – Bangkok & Pattaya.jpg",
    gradient: "from-pink-500 to-rose-500",
    withFlights: true,
    highlights: [
      "4-star hotels in Pattaya & Bangkok with daily breakfast",
      "Private transfers throughout",
      "Coral Island Tour with water activities",
      "Nong Nooch Village Show with authentic Thai culture & lunch",
      "Alcazar Show – dazzling performances of Thai culture, music, and dance",
      "Chao Phraya Dinner Cruise with stunning river views and live entertainment",
      "Safari World & Marine Park with wildlife shows and lunch",
    ],
  },
  {
    id: 8,
    title: "SINGAPORE & MALAYSIA",
    locations: "Singapore & Kuala Lumpur",
    image: "/Singapore & Malaysia – 6 Nights 7 Days.jpg",
    gradient: "from-blue-500 to-indigo-500",
    withFlights: true,
    highlights: [
      "Return Economy Class Airfare (up to 1 stopover)",
      "06 nights' accommodation in Singapore and Malaysia",
      "Daily Continental Breakfast",
      "Singapore City Tour (Little India, Merlion, Chinatown, Sri Mariamman Temple)",
      "Gardens by the Bay (Cloud Forest, Flower Dome, Light & Sound Show)",
      "River Cruise (Bum Boat Ride along Singapore River)",
      "Marina Bay Sands Sky Park Observation Deck",
      "Sentosa Island Tour (Cable Car, Madame Tussauds 5-in-1, Wings of Time)",
      "Full Day at Universal Studios Singapore (7 themed areas)",
      "Putrajaya orientation tour with photo-stops",
      "Kuala Lumpur City Tour (National Mosque, King's Palace, Menara KL Tower)",
      "Batu Caves and Genting Highlands Tour (Cable Car, Skyway Ride)",
      "Travel Insurance for passengers up to 69 years",
      "All entry fees and attraction tickets included",
    ],
  },
  {
    id: 9,
    title: "Bali Romance Getaway",
    locations: "Bali",
    image: "/bali1.webp",
    gradient: "from-rose-500 to-pink-500",
    highlights: [
      "Water sports - Banana Boat, Fly Fish, and Jet Ski",
      "Magical sunset at Uluwatu Temple",
      "Romantic candlelight dinner at Jimbaran Beach with Indian cuisine, roses, and wine",
      "Nusa Penida West Island Tour (Private) - Kelingking Beach, Angel's Billabong, Broken Bay, and Bubu Beach",
      "Complimentary snorkeling (time permitting) and local lunch",
      "Ulun Danu Beratan Temple visit",
      "Breathtaking sunset at Tanah Lot Temple",
      "Kintamani and coffee plantation visit",
      "Bali Jungle Swing - unlimited swings and iconic nests",
      "Phinisi Sunset Dinner Cruise with live entertainment",
      "Leisure day for local markets, spa, or pool relaxation",
      "Private tours as per plan",
      "Romantic setup @ Jimbaran",
      "Local lunches where specified",
      "All transfers",
    ],
  },
  {
    id: 10,
    title: "Dubai 4 Nights – Ultimate Experience",
    locations: "Dubai",
    image: "/Dazzling.webp",
    gradient: "from-amber-500 to-orange-500",
    highlights: [
      "Marina Dhow Cruise with buffet dinner and live entertainment",
      "Half-day Dubai City Tour – heritage sites, Gold & Spice Souks, Palm Jumeirah",
      "Photo stops at Dubai Frame, Burj Al Arab & Museum of the Future",
      "Top of Burj Khalifa (124th Floor) for panoramic city views",
      "Dubai Mall and mesmerizing Fountain show",
      "Dubai Frame for cultural exhibits and stunning vistas",
      "Desert Safari Adventure – dune bashing, camel rides, sandboarding",
      "BBQ dinner under the stars with traditional shows",
      "Global Village – cultural extravaganza with shopping and food from 70+ countries",
      "Dubai Miracle Garden – the world's largest flower garden",
      "All sightseeing transfers",
      "Entry tickets to all attractions",
      "Professional guides where applicable",
    ],
  },
  {
    id: 11,
    title: "Dubai + Abu Dhabi Highlights",
    locations: "Dubai & Abu Dhabi",
    image: "/Dubai + Abu Dhabi Highlights.jpg",
    gradient: "from-amber-500 to-yellow-500",
    highlights: [
      "Desert Safari adventure with BBQ dinner and traditional entertainment",
      "Top of Burj Khalifa (124th Floor) for stunning city views",
      "Thrilling Glass Slide at Sky Views",
      "Dubai Frame for panoramic vistas and cultural exhibits",
      "Dubai Miracle Garden – world's largest flower garden",
      "Global Village – cultural extravaganza with shopping and food",
      "Abu Dhabi City Tour including magnificent BAPS Temple",
      "Full day at Yas Island with access to 2 parks",
      "Thrilling rides, water attractions, and endless entertainment",
      "All tours/transfers PVT except Desert Safari (SIC)",
    ],
  },
  {
    id: 12,
    title: "Singapore Essentials – Attractions Combo",
    locations: "Singapore",
    image: "/singapore.webp",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Night Safari with complimentary shows and tram rides",
      "Bird Paradise – exotic birds in their natural habitat",
      "Experiential Singapore Tour with licensed guide",
      "Discover local neighborhoods, cultural sites, and authentic experiences",
      "S.E.A. Aquarium – one of the world's largest aquariums",
      "Wings of Time show – mesmerizing display of lights, water, and fire",
      "Full day at Universal Studios Singapore",
      "World-class rides, shows, and attractions across 7 themed areas",
      "Sands SkyPark for panoramic views",
      "Gardens by the Bay – Cloud Forest and Flower Dome",
      "Stunning floral displays and climate-controlled environments",
      "9 tour transfers per plan",
      "Licensed guide where noted",
    ],
  },
  {
    id: 13,
    title: "Singapore & Malaysia – 6 Nights 7 Days",
    locations: "Singapore & Malaysia",
    image: "/singapore.webp",
    gradient: "from-indigo-500 to-purple-500",
    withFlights: true,
    highlights: [
      "Return economy class airfare",
      "06 nights' accommodation in Singapore and Malaysia",
      "Daily Continental Breakfast",
      "Singapore City Tour (Little India, Merlion, Chinatown, Sri Mariamman Temple)",
      "Gardens by the Bay (Cloud Forest, Flower Dome, Light & Sound Show)",
      "River Cruise (Bum Boat Ride along Singapore River)",
      "Marina Bay Sands Sky Park Observation Deck",
      "Sentosa Island Tour (Cable Car, Madame Tussauds 5-in-1, Wings of Time)",
      "Full Day at Universal Studios Singapore",
      "Putrajaya orientation tour with photo-stop",
      "Kuala Lumpur City Tour (National Mosque, King's Palace, Menara KL Tower)",
      "Batu Caves and Genting Highlands Tour (Cable Car, Skyway Ride)",
      "Travel Insurance for passengers up to 69 years",
      "All entry fees and attraction tickets",
      "All sightseeing and transfers on shared transport",
    ],
  },
  {
    id: 14,
    title: "Thailand – Bangkok & Pattaya",
    locations: "Bangkok & Pattaya",
    image: "/thieland.webp",
    gradient: "from-pink-500 to-rose-500",
    highlights: [
      "4-star hotel accommodation in Pattaya & Bangkok with daily breakfast",
      "Private transfers as per itinerary",
      "Coral Island Tour with water activities",
      "Nong Nooch Village Show with authentic Thai culture & lunch",
      "Alcazar Show – dazzling performances of Thai culture, music, and dance",
      "Chao Phraya Dinner Cruise with stunning river views and live entertainment",
      "Safari World & Marine Park entry with lunch",
      "Wildlife shows and marine life exploration",
    ],
  },
  {
    id: 15,
    title: "Malaysia – KL & Genting Highlights",
    locations: "Kuala Lumpur & Genting",
    image: "/mal.webp",
    gradient: "from-green-500 to-emerald-500",
    highlights: [
      "Kuala Lumpur City Tour with KL Tower Observation Deck",
      "Panoramic city views",
      "Genting Highlands via cable car with stunning mountain views",
      "Batu Caves with colorful steps and temple",
      "Cool mountain resort exploration",
      "Putrajaya Cruise – sharing cruise through stunning architecture",
      "Modern administrative capital with impressive buildings",
      "Full day at Legoland Malaysia",
      "Thrilling rides, themed areas, and endless fun",
      "Theme Park, Water Park, and Sealife combo",
      "Perfect for families seeking adventure",
      "Private transfers where noted",
      "Attraction tickets as listed",
    ],
  },
  {
    id: 16,
    title: "Vietnam – Phu Quoc Island Plan",
    locations: "Phu Quoc",
    image: "/vietnam.webp",
    gradient: "from-cyan-500 to-blue-500",
    highlights: [
      "Grandworld Phu Quoc – vibrant entertainment complex",
      "Cultural shows, shopping, and dining experiences",
      "VinWonders theme park and VinSafari combo",
      "Thrilling rides, wildlife exploration, and world-class entertainment",
      "4 Island Hopping Adventure by speedboat",
      "Snorkeling, stunning beaches, cable car ride",
      "Aquatopia exploration",
      "Delicious lunch on board",
      "Shopping & Leisure time",
      "Flexible time for local markets and dining",
      "Private transfers as listed",
      "SIC tour where noted",
    ],
  },
  {
    id: 17,
    title: "Vietnam – Multi-City Discovery",
    locations: "Ho Chi Minh, Phu Quoc, Danang, Hoi An, Hanoi, Halong Bay",
    image: "/veietnam2.webp",
    gradient: "from-teal-500 to-cyan-500",
    highlights: [
      "Ho Chi Minh City exploration",
      "Cu Chi Tunnels – incredible network of underground tunnels",
      "Phu Quoc Island – Grand World Phu Quoc",
      "VinWonders theme park and VinSafari",
      "4 Island Hopping by speedboat with snorkeling",
      "Cable car, Aquatopia, and delicious lunch",
      "Danang & Hoi An Ancient Town",
      "Coconut Forest Basket Boat ride",
      "Magical Lantern Boat cruise along the river",
      "Ba Na Hills via cable car",
      "Iconic Golden Bridge supported by colossal hands",
      "Fantasy Park, French Village, and stunning mountain views",
      "Hanoi City – half-day city tour",
      "Rich history, ancient temples, and vibrant local culture",
      "Halong Bay Deluxe Day Cruise",
      "Kayaking through limestone karsts",
      "Delicious lunch and stunning sunset party",
      "Private transfers where noted",
      "SIC tours as specified",
      "Entry tickets per plan",
    ],
  },
  {
    id: 18,
    title: "Vietnam – 6 Nights 7 Days Discovery",
    locations:
      "Ho Chi Minh, Cu Chi, Mekong Delta, Da Nang, Ba Na Hills, Hoi An, Hanoi, Halong Bay",
    image: "/vietnam.webp",
    gradient: "from-emerald-500 to-teal-500",
    highlights: [
      "Ho Chi Minh City Tour",
      "Cu Chi Tunnels – incredible underground network",
      "Mekong Delta Adventure with Vinh Trang Pagoda",
      "Boat ride to Unicorn Island",
      "Local bee farms and fruit orchards",
      "Peaceful rowboat ride through water coconut trees",
      "Local lunch included",
      "Ba Na Hills & Golden Bridge via cable car",
      "Linh Ung Pagoda with 27m Buddha statue",
      "Le Jardin gardens exploration",
      "Hoi An Ancient Town – UNESCO World Heritage site",
      "Phuc Kien Assembly Hall, Tan Ky Ancient House, Japanese Covered Bridge",
      "Magical Lantern Release Ceremony along Hoai River",
      "Hanoi City Discovery",
      "Temple of Literature, Hoa Lo Prison Museum (Hanoi Hilton)",
      "Guided tour with lunch included",
      "Halong Bay Scenic Day Cruise",
      "Surprising Cave, Pelican Grotto, and stunning grottos",
      "Swimming or relaxing on sundeck",
      "Delicious lunch included",
      "Single Entry Vietnam E-Visa",
      "All transfers (Private Basis)",
      "All sightseeing tours on shared basis as mentioned",
      "Professional guides where applicable",
      "Lunch where specified",
      "Entry tickets to all attractions",
    ],
  },
  {
    id: 19,
    title: "Maldives Honeymoon",
    locations: "Malé",
    image: "/Maldives Honeymoon.jpg",
    gradient: "from-cyan-500 to-blue-500",
    highlights: [
      "Arrival at Malé • Transfer by speedboat/seaplane • Check-in • Romantic beachfront dinner",
      "Leisure & Spa Day • Water activities • Candlelight dinner by the beach",
      "Island Hopping • Snorkeling • Sandbank picnic • Sunset cruise",
      "Water Sports adventure • Jet Ski / Parasailing • Floating dinner setup",
      "Relaxation & Resort exploration • Couple's massage • Farewell dinner",
      "Breakfast • Transfer to airport • Depart with memories of paradise",
    ],
  },
  {
    id: 20,
    title: "Greece Getaway",
    locations: "Athens, Santorini, Mykonos",
    image: "/Greece Getaway.jpg",
    gradient: "from-blue-500 to-indigo-500",
    highlights: [
      "Athens Arrival • Check-in • Evening at leisure in Plaka • Dinner with Acropolis view",
      "Athens Sightseeing • Explore Acropolis, Parthenon & Temple of Zeus • Stroll through Syntagma Square • Optional rooftop dinner",
      "Athens → Santorini • Morning ferry/flight to Santorini • Check-in • Sunset at Oia • Romantic dinner by the caldera",
      "Santorini Exploration • Volcano & Hot Springs Cruise • Red Beach & Wine tasting • Evening free for shopping or spa",
      "Santorini → Mykonos • Transfer to Mykonos • Visit Little Venice & Windmills • Beach time & nightlife experience",
      "Departure • Breakfast • Transfer to airport • Fly back with memories of the Aegean",
    ],
  },
  {
    id: 21,
    title: "Enchanting Edinburgh",
    locations: "Edinburgh, Scottish Highlands",
    image: "/Enchanting Edinburgh.jpg",
    gradient: "from-slate-500 to-gray-500",
    highlights: [
      "Arrival in Edinburgh • Transfer to hotel • Evening stroll along Princes Street • Welcome dinner with castle views",
      "Discover the Royal Mile • Visit Edinburgh Castle • St. Giles' Cathedral • Holyrood Palace • Explore local cafés & shops",
      "Highlands Excursion • Full-day trip to the Scottish Highlands • Loch Ness cruise • Scenic photo stops along Glencoe",
      "Culture & Charm • National Museum of Scotland • Arthur's Seat hike or whisky tasting tour • Evening ghost walk or fine dining",
      "Departure • Breakfast • Free time for souvenirs • Transfer to airport with fond memories of Scotland",
    ],
  },
  {
    id: 22,
    title: "Mystical Egypt",
    locations: "Cairo, Aswan, Luxor",
    image: "/Mystical Egypt.jpg",
    gradient: "from-amber-500 to-yellow-500",
    highlights: [
      "Arrival in Cairo • Transfer to hotel • Evening free or optional Nile dinner cruise",
      "Cairo Sightseeing • Visit the Pyramids of Giza, Sphinx, and Egyptian Museum • Explore Khan el-Khalili Bazaar",
      "Cairo → Aswan / Nile Cruise Begins • Fly to Aswan • Visit Philae Temple & High Dam • Check-in to cruise • Sail toward Kom Ombo",
      "Kom Ombo → Edfu → Luxor • Visit Kom Ombo & Edfu Temples • Sail to Luxor • Enjoy evening on board",
      "Luxor Sightseeing → Cairo • Explore Valley of the Kings, Hatshepsut Temple & Karnak Temple • Fly back to Cairo",
      "Departure • Breakfast • Transfer to airport • Depart with timeless memories of Egypt",
    ],
  },
  {
    id: 23,
    title: "Andaman Escape",
    locations: "Port Blair, Havelock, Neil Island",
    image: "/slider2.jpg",
    gradient: "from-teal-500 to-cyan-500",
    highlights: [
      "Arrival in Port Blair • Transfer to hotel • Visit Cellular Jail • Witness Light & Sound Show at evening",
      "Havelock Island • Transfer by ferry • Visit Radhanagar Beach (Asia's best beach) • Leisure evening by the sea",
      "Havelock Adventures • Optional Scuba Diving / Snorkeling • Relax at Kalapathar Beach • Candlelight dinner setup",
      "Neil Island • Transfer to Neil • Visit Natural Bridge, Bharatpur & Laxmanpur Beaches • Overnight at Neil",
      "Return to Port Blair • Morning ferry back • Free time for shopping at Aberdeen Bazaar • Evening at leisure",
      "Departure • Breakfast • Transfer to airport with tropical memories",
    ],
  },
  {
    id: 24,
    title: "Gateway to the Northeast – Guwahati",
    locations: "Guwahati, Shillong, Cherrapunji",
    image: "/Gateway to the Northeast – Guwahati.jpg",
    gradient: "from-green-500 to-emerald-500",
    highlights: [
      "Arrival in Guwahati • Transfer to hotel • Visit Kamakhya Temple • Sunset cruise on the Brahmaputra River",
      "Excursion to Shillong (100 km / 3 hrs) • Drive to Shillong • En route stop at Umiam Lake • Explore Police Bazaar & Ward's Lake",
      "Cherrapunji Excursion • Day trip to Nohkalikai Falls, Mawsmai Caves, and Seven Sisters Falls • Return to Shillong",
      "Shillong → Guwahati • Drive back to Guwahati • Visit Assam State Museum or Navagraha Temple • Evening shopping at Fancy Bazaar",
      "Departure • Breakfast • Airport transfer with memories of the misty hills",
    ],
  },
  {
    id: 25,
    title: "Kashmir Paradise",
    locations: "Srinagar, Sonmarg, Gulmarg, Pahalgam",
    image: "/Kashmir Paradise.jpg",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Arrival in Srinagar • Transfer to houseboat/hotel • Enjoy a Shikara ride on Dal Lake • Dinner & overnight stay",
      "Srinagar → Sonmarg Excursion (80 km) • Day trip to Sonmarg – the Meadow of Gold • Optional pony ride to Thajiwas Glacier • Return to Srinagar",
      "Srinagar → Gulmarg (50 km) • Drive to Gulmarg • Take the Gondola ride to Phase 1 or 2 • Enjoy snow activities • Overnight in Gulmarg",
      "Gulmarg → Pahalgam (140 km) • Scenic drive to Pahalgam – Valley of Shepherds • En route visit Avantipur ruins & saffron fields • Leisure evening by the river",
      "Pahalgam → Srinagar • Return to Srinagar • Visit Mughal Gardens (Nishat & Shalimar) and Shankaracharya Temple • Last-minute shopping",
      "Departure • Breakfast • Transfer to airport with beautiful memories of Kashmir",
    ],
  },
  {
    id: 26,
    title: "Serene Sri Lanka",
    locations: "Colombo, Kandy, Nuwara Eliya, Bentota, Galle",
    image: "/Serene Sri Lanka.jpg",
    gradient: "from-emerald-500 to-teal-500",
    highlights: [
      "Arrival in Colombo → Kandy • Arrive in Colombo • Drive to Kandy via Pinnawala Elephant Orphanage • Visit Temple of the Tooth Relic • Overnight in Kandy",
      "Kandy → Nuwara Eliya • Scenic drive through tea plantations • Visit a Tea Factory & Ramboda Falls • Explore Gregory Lake • Overnight in Nuwara Eliya",
      "Nuwara Eliya → Bentota • Drive to Bentota • Relax on Bentota Beach • Optional Madu River boat ride • Overnight stay",
      "Bentota → Galle → Colombo • Visit Galle Fort, Turtle Hatchery, and Hikkaduwa Beach • Drive to Colombo • Evening shopping",
      "Colombo City Tour • Explore Independence Square, Gangaramaya Temple, and Galle Face Green • Enjoy local cuisine • Overnight in Colombo",
      "Departure • Breakfast • Transfer to airport with island memories",
    ],
  },
];

const PopularPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  // Duplicate packages for seamless infinite scroll
  const duplicatedPackages = [...popularPackages, ...popularPackages];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const pauseAnimation = () => {
    setIsAnimationPaused(true);
    // Reset transform immediately to sync scroll position with visual position
    if (innerContainerRef.current && scrollContainerRef.current) {
      // Get current transform value
      const computedStyle = window.getComputedStyle(innerContainerRef.current);
      const transform = computedStyle.transform;

      if (transform && transform !== "none") {
        try {
          const matrix = new DOMMatrix(transform);
          const translateX = matrix.e;

          // Adjust scroll position to account for the transform offset
          if (translateX < 0) {
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollLeft = Math.max(
              0,
              currentScroll + Math.abs(translateX)
            );
          }
        } catch (e) {
          // Fallback if DOMMatrix is not available
          console.warn("Could not parse transform:", e);
        }
      }

      // Remove transform
      innerContainerRef.current.style.transform = "none";
      innerContainerRef.current.style.animation = "none";
    }

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    // Resume animation after 5 seconds
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimationPaused(false);
      if (innerContainerRef.current) {
        innerContainerRef.current.style.transform = "";
        innerContainerRef.current.style.animation = "";
      }
    }, 5000);
  };

  const scrollLeft = (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!scrollContainerRef.current) return;

    // Pause animation first
    pauseAnimation();

    // Wait a tiny bit for transform to reset
    setTimeout(() => {
      if (!scrollContainerRef.current) return;

      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 280 : 320;
      const gap = 16;
      const scrollAmount = cardWidth + gap;

      // Get current scroll position
      const currentScroll = scrollContainerRef.current.scrollLeft;

      // Calculate new scroll position
      const newScroll = Math.max(0, currentScroll - scrollAmount);

      // Perform the scroll
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }, 50);
  };

  const scrollRight = (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!scrollContainerRef.current) return;

    // Pause animation first
    pauseAnimation();

    // Wait a tiny bit for transform to reset
    setTimeout(() => {
      if (!scrollContainerRef.current) return;

      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 280 : 320;
      const gap = 16;
      const scrollAmount = cardWidth + gap;

      // Get current scroll position
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;

      // Calculate new scroll position
      const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);

      // Perform the scroll
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 overflow-visible">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <span className="text-violet-600 font-semibold text-lg">
                Featured Destinations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed pb-2 overflow-visible">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked journeys to the world's most breathtaking destinations
            </p>
          </div>

          {/* Infinite Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-amber-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-amber-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-amber-600" />
            </button>

            {/* Subtle fade on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-50/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-orange-50/80 to-transparent z-20 pointer-events-none"></div>

            <div
              className="overflow-x-auto overflow-y-hidden scrollbar-hide"
              ref={scrollContainerRef}
            >
              <div
                ref={innerContainerRef}
                className={`flex gap-4 ${
                  isAnimationPaused ? "" : "animate-scroll"
                }`}
                style={{
                  width: "fit-content",
                }}
              >
                {duplicatedPackages.map((pkg, index) => (
                  <div
                    key={`${pkg.id}-${index}`}
                    onClick={() => handleCardClick(pkg)}
                    className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-amber-200 transform hover:-translate-y-1 cursor-pointer shrink-0 w-[280px] md:w-[320px]"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Badge on top right */}
                      {pkg.withFlights && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-500 text-white shadow-lg text-xs">
                            <Plane className="w-3 h-3 mr-1" />
                            Flights
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {pkg.title}
                      </h3>

                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" />
                          <span className="truncate max-w-[120px] text-xs">
                            {pkg.locations.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">
                          Click for details
                        </span>
                        <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedPackage.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                      {selectedPackage.locations}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6 pb-6">
                {/* Package Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";
                    }}
                  />
                </div>

                {/* Departure Cities */}
                {selectedPackage.departureCities && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Departure Cities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackage.departureCities.map((city, idx) => (
                        <Badge
                          key={idx}
                          className="bg-blue-600 text-white text-xs"
                        >
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Includes */}
                {selectedPackage.includes && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackage.includes.map((item, idx) => (
                        <Badge
                          key={idx}
                          className="bg-amber-600 text-white text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xl">Highlights</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 shadow-lg"
                  onClick={() => {
                    const phoneNumber = "919549134848";
                    const message = `Hello! I'm interested in ${selectedPackage.title}. Please provide pricing and more details.`;
                    openWhatsApp(phoneNumber, message);
                  }}
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-scroll.animation-paused {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 100s linear infinite;
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PopularPackages;
