import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/Dialogs";
import { destinations } from "../utils/searchData";
import {
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
  X,
  Camera,
  Utensils,
  Hotel,
  Plane,
} from "lucide-react";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPriceForm, setShowPriceForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formStep, setFormStep] = useState(1); // 1: departure city, 2: dates, 3: hotel, 4: phone
  const [priceFormData, setPriceFormData] = useState({
    departureCity: "",
    travelDate: "",
    hotelCategory: "",
    phoneNumber: "",
  });
  const [showExploreForm, setShowExploreForm] = useState(false);
  const [exploreFormStep, setExploreFormStep] = useState(1); // 1: destination, 2: city, 3: date, 4: hotel, 5: phone
  const [exploreFormData, setExploreFormData] = useState({
    destination: "",
    departureCity: "",
    travelDate: "",
    hotelCategory: "",
    phoneNumber: "",
  });

  const basicPackages = [
    {
      id: 1,
      title: "DUBAI 4 NIGHTS",
      type: "City Tour",
      duration: "4 Nights | 5 Days",
      price: 0,
      originalPrice: 0,
      discount: null,
      image: "/DUBAI 4 NIGHTS.jpg",
      description:
        "Experience the best of Dubai with iconic landmarks, desert adventures, and cultural attractions",
      features: [
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
      rating: 4.8,
      reviews: 124,
      popular: true,
    },
    {
      id: 2,
      title: "VIETNAM DISCOVERY",
      type: "Adventure",
      duration: "6 Nights | 7 Days",
      price: 45000,
      originalPrice: 55000,
      discount: "18%",
      image: "/Vietnam.png",
      description:
        "Explore Ho Chi Minh City, Da Nang, and Hanoi with cultural tours, ancient towns, and Halong Bay cruise",
      features: [
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
      rating: 4.9,
      reviews: 89,
      popular: true,
    },
    {
      id: 3,
      title: "THAILAND GETAWAY",
      type: "Beach",
      duration: "5 Nights | 6 Days",
      price: 51000,
      originalPrice: 60000,
      discount: "15%",
      image: "/Thailand.png",
      description:
        "Relax in 4-star hotels in Pattaya & Bangkok with exciting tours, shows, and cultural experiences",
      features: [
        "4-star hotels in Pattaya & Bangkok with daily breakfast",
        "Private transfers throughout",
        "Coral Island Tour with water activities",
        "Nong Nooch Village Show with authentic Thai culture & lunch",
        "Alcazar Show – dazzling performances of Thai culture, music, and dance",
        "Chao Phraya Dinner Cruise with stunning river views and live entertainment",
        "Safari World & Marine Park with wildlife shows and lunch",
      ],
      rating: 4.7,
      reviews: 156,
      popular: true,
      withFlights: true,
    },
    {
      id: 4,
      title: "SINGAPORE & MALAYSIA",
      type: "City Tour",
      duration: "6 Nights | 7 Days",
      price: 0,
      originalPrice: 0,
      discount: null,
      image: "/Singapore & Malaysia.png",
      description:
        "Return Economy Class Airfare with comprehensive tours of Singapore and Malaysia's best attractions",
      features: [
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
      rating: 4.8,
      reviews: 102,
      popular: true,
      withFlights: true,
    },
    {
      id: 5,
      title: "Maldives Honeymoon",
      type: "Beach",
      duration: "5 Nights | 6 Days",
      price: 125000,
      originalPrice: 145000,
      discount: "14%",
      image: "/Maldives Honeymoon.jpg",
      description:
        "Romantic beachfront experience with water activities, island hopping, and luxury resort stays",
      features: [
        "Arrival at Malé • Transfer by speedboat/seaplane • Check-in • Romantic beachfront dinner",
        "Leisure & Spa Day • Water activities • Candlelight dinner by the beach",
        "Island Hopping • Snorkeling • Sandbank picnic • Sunset cruise",
        "Water Sports adventure • Jet Ski / Parasailing • Floating dinner setup",
        "Relaxation & Resort exploration • Couple's massage • Farewell dinner",
        "Breakfast • Transfer to airport • Depart with memories of paradise",
      ],
      rating: 4.9,
      reviews: 156,
      popular: true,
    },
    {
      id: 6,
      title: "Greece Getaway",
      type: "City Tour",
      duration: "5 Nights | 6 Days",
      price: 80000,
      originalPrice: 95000,
      discount: "16%",
      image: "/Greece Getaway.jpg",
      description:
        "Explore Athens, Santorini, and Mykonos with ancient history, stunning sunsets, and island charm",
      features: [
        "Athens Arrival • Check-in • Evening at leisure in Plaka • Dinner with Acropolis view",
        "Athens Sightseeing • Explore Acropolis, Parthenon & Temple of Zeus • Stroll through Syntagma Square • Optional rooftop dinner",
        "Athens → Santorini • Morning ferry/flight to Santorini • Check-in • Sunset at Oia • Romantic dinner by the caldera",
        "Santorini Exploration • Volcano & Hot Springs Cruise • Red Beach & Wine tasting • Evening free for shopping or spa",
        "Santorini → Mykonos • Transfer to Mykonos • Visit Little Venice & Windmills • Beach time & nightlife experience",
        "Departure • Breakfast • Transfer to airport • Fly back with memories of the Aegean",
      ],
      rating: 4.8,
      reviews: 134,
      popular: true,
    },
    {
      id: 7,
      title: "Enchanting Edinburgh",
      type: "City Tour",
      duration: "4 Nights | 5 Days",
      price: 130000,
      originalPrice: 150000,
      discount: "13%",
      image: "/Enchanting Edinburgh.jpg",
      description:
        "Discover Scotland's capital with historic castles, highlands excursions, and rich culture",
      features: [
        "Arrival in Edinburgh • Transfer to hotel • Evening stroll along Princes Street • Welcome dinner with castle views",
        "Discover the Royal Mile • Visit Edinburgh Castle • St. Giles' Cathedral • Holyrood Palace • Explore local cafés & shops",
        "Highlands Excursion • Full-day trip to the Scottish Highlands • Loch Ness cruise • Scenic photo stops along Glencoe",
        "Culture & Charm • National Museum of Scotland • Arthur's Seat hike or whisky tasting tour • Evening ghost walk or fine dining",
        "Departure • Breakfast • Free time for souvenirs • Transfer to airport with fond memories of Scotland",
      ],
      rating: 4.7,
      reviews: 98,
      popular: false,
    },
    {
      id: 8,
      title: "Mystical Egypt",
      type: "Adventure",
      duration: "5 Nights | 6 Days",
      price: 62000,
      originalPrice: 75000,
      discount: "17%",
      image: "/Mystical Egypt.jpg",
      description:
        "Journey through ancient wonders with Pyramids, Nile cruise, and historic temples",
      features: [
        "Arrival in Cairo • Transfer to hotel • Evening free or optional Nile dinner cruise",
        "Cairo Sightseeing • Visit the Pyramids of Giza, Sphinx, and Egyptian Museum • Explore Khan el-Khalili Bazaar",
        "Cairo → Aswan / Nile Cruise Begins • Fly to Aswan • Visit Philae Temple & High Dam • Check-in to cruise • Sail toward Kom Ombo",
        "Kom Ombo → Edfu → Luxor • Visit Kom Ombo & Edfu Temples • Sail to Luxor • Enjoy evening on board",
        "Luxor Sightseeing → Cairo • Explore Valley of the Kings, Hatshepsut Temple & Karnak Temple • Fly back to Cairo",
        "Departure • Breakfast • Transfer to airport • Depart with timeless memories of Egypt",
      ],
      rating: 4.8,
      reviews: 112,
      popular: true,
    },
    {
      id: 9,
      title: "Andaman Escape",
      type: "Beach",
      duration: "5 Nights | 6 Days",
      price: 30000,
      originalPrice: 38000,
      discount: "21%",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description:
        "Tropical paradise with pristine beaches, water sports, and island hopping adventures",
      features: [
        "Arrival in Port Blair • Transfer to hotel • Visit Cellular Jail • Witness Light & Sound Show at evening",
        "Havelock Island • Transfer by ferry • Visit Radhanagar Beach (Asia's best beach) • Leisure evening by the sea",
        "Havelock Adventures • Optional Scuba Diving / Snorkeling • Relax at Kalapathar Beach • Candlelight dinner setup",
        "Neil Island • Transfer to Neil • Visit Natural Bridge, Bharatpur & Laxmanpur Beaches • Overnight at Neil",
        "Return to Port Blair • Morning ferry back • Free time for shopping at Aberdeen Bazaar • Evening at leisure",
        "Departure • Breakfast • Transfer to airport with tropical memories",
      ],
      rating: 4.9,
      reviews: 187,
      popular: true,
    },
    {
      id: 10,
      title: "Gateway to the Northeast – Guwahati",
      type: "Adventure",
      duration: "4 Nights | 5 Days",
      price: 18923,
      originalPrice: 25000,
      discount: "24%",
      image: "/Gateway to the Northeast – Guwahati.jpg",
      description:
        "Explore the misty hills of Northeast India with Shillong, Cherrapunji, and Brahmaputra experiences",
      features: [
        "Arrival in Guwahati • Transfer to hotel • Visit Kamakhya Temple • Sunset cruise on the Brahmaputra River",
        "Excursion to Shillong (100 km / 3 hrs) • Drive to Shillong • En route stop at Umiam Lake • Explore Police Bazaar & Ward's Lake",
        "Cherrapunji Excursion • Day trip to Nohkalikai Falls, Mawsmai Caves, and Seven Sisters Falls • Return to Shillong",
        "Shillong → Guwahati • Drive back to Guwahati • Visit Assam State Museum or Navagraha Temple • Evening shopping at Fancy Bazaar",
        "Departure • Breakfast • Airport transfer with memories of the misty hills",
      ],
      rating: 4.6,
      reviews: 76,
      popular: false,
    },
    {
      id: 11,
      title: "Kashmir Paradise",
      type: "Adventure",
      duration: "5 Nights | 6 Days",
      price: 45000,
      originalPrice: 55000,
      discount: "18%",
      image: "/Kashmir Paradise.jpg",
      description:
        "Experience the beauty of Kashmir with houseboats, snow activities, and scenic valleys",
      features: [
        "Arrival in Srinagar • Transfer to houseboat/hotel • Enjoy a Shikara ride on Dal Lake • Dinner & overnight stay",
        "Srinagar → Sonmarg Excursion (80 km) • Day trip to Sonmarg – the Meadow of Gold • Optional pony ride to Thajiwas Glacier • Return to Srinagar",
        "Srinagar → Gulmarg (50 km) • Drive to Gulmarg • Take the Gondola ride to Phase 1 or 2 • Enjoy snow activities • Overnight in Gulmarg",
        "Gulmarg → Pahalgam (140 km) • Scenic drive to Pahalgam – Valley of Shepherds • En route visit Avantipur ruins & saffron fields • Leisure evening by the river",
        "Pahalgam → Srinagar • Return to Srinagar • Visit Mughal Gardens (Nishat & Shalimar) and Shankaracharya Temple • Last-minute shopping",
        "Departure • Breakfast • Transfer to airport with beautiful memories of Kashmir",
      ],
      rating: 4.8,
      reviews: 145,
      popular: true,
    },
    {
      id: 12,
      title: "Serene Sri Lanka",
      type: "Adventure",
      duration: "5 Nights | 6 Days",
      price: 51000,
      originalPrice: 62000,
      discount: "18%",
      image: "/Serene Sri Lanka.jpg",
      description:
        "Discover the pearl of the Indian Ocean with tea plantations, beaches, and cultural heritage",
      features: [
        "Arrival in Colombo → Kandy • Arrive in Colombo • Drive to Kandy via Pinnawala Elephant Orphanage • Visit Temple of the Tooth Relic • Overnight in Kandy",
        "Kandy → Nuwara Eliya • Scenic drive through tea plantations • Visit a Tea Factory & Ramboda Falls • Explore Gregory Lake • Overnight in Nuwara Eliya",
        "Nuwara Eliya → Bentota • Drive to Bentota • Relax on Bentota Beach • Optional Madu River boat ride • Overnight stay",
        "Bentota → Galle → Colombo • Visit Galle Fort, Turtle Hatchery, and Hikkaduwa Beach • Drive to Colombo • Evening shopping",
        "Colombo City Tour • Explore Independence Square, Gangaramaya Temple, and Galle Face Green • Enjoy local cuisine • Overnight in Colombo",
        "Departure • Breakfast • Transfer to airport with island memories",
      ],
      rating: 4.7,
      reviews: 128,
      popular: true,
    },
  ];

  const readyMadeItineraries = [
    {
      id: 1,
      title: "Bali Romance Getaway",
      duration: "6 Nights 7 Days",
      price: 145000,
      originalPrice: 165000,
      discount: "12%",
      image: "/bali.webp",
      description:
        "Water sports, Nusa Penida West, temple sunsets, jungle swing, Phinisi dinner cruise and more.",
      itinerary: [
        {
          title: "Arrival in Bali",
          description:
            "Touch down in paradise and transfer to your resort. Relax and unwind after your journey, soaking in the tropical vibes.",
        },
        {
          title: "Water Adventures & Romantic Beach Dinner",
          description:
            "Dive into an exciting day of water sports - Banana Boat, Fly Fish, and Jet Ski. In the evening, witness a magical sunset at Uluwatu Temple, followed by a romantic candlelight dinner at Jimbaran Beach with Indian cuisine, roses, and wine.",
        },
        {
          title: "Nusa Penida West Island Tour (Private)",
          description:
            "Embark on a private trip to Nusa Penida West, visiting the island's most stunning spots - Kelingking Beach, Angel's Billabong, Broken Bay, and Bubu Beach. Enjoy complimentary snorkeling (time permitting) and a local lunch.",
        },
        {
          title: "Temple Trails & Sunset Serenity",
          description:
            "Discover the serene Ulun Danu Beratan Temple, followed by a breathtaking sunset at Tanah Lot Temple - a perfect blend of culture and romance.",
        },
        {
          title: "Highlands & Jungle Adventures",
          description:
            "Experience the natural beauty of Kintamani and a visit to a coffee plantation. Then, embrace your adventurous side with the Bali Jungle Swing - featuring unlimited swings and iconic nests. A complimentary local lunch is included.",
        },
        {
          title: "Phinisi Sunset Dinner Cruise",
          description:
            "Sail into the evening aboard a luxurious Phinisi cruise. Enjoy live entertainment, dinner, and panoramic sunset views over the ocean.",
        },
        {
          title: "Leisure Day",
          description:
            "Spend the day your way - explore local markets, indulge in a spa session, or simply relax by the pool.",
        },
        {
          title: "Departure",
          description:
            "Check out from your resort and transfer with unforgettable Bali memories.",
        },
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
      title: "Dubai 4 Nights – Ultimate Experience",
      duration: "4 Nights 5 Days",
      price: 125000,
      originalPrice: 145000,
      discount: "14%",
      image: "/Dubai.png",
      description:
        "Marina Dhow Cruise, Dubai City Tour, Burj Khalifa, Dubai Frame, Desert Safari, Global Village, and Miracle Garden.",
      itinerary: [
        {
          title: "Arrival & Marina Dhow Cruise",
          description:
            "Arrive and transfer to your hotel. In the evening, enjoy a magical Marina Dhow Cruise with buffet dinner and live entertainment as you sail through Dubai's stunning waterfront.",
        },
        {
          title: "Dubai City Discovery",
          description:
            "Explore Dubai's rich heritage on a half-day city tour - visit heritage sites, wander through Gold & Spice Souks, see the iconic Palm Jumeirah, and capture stunning photos at Dubai Frame, Burj Al Arab & Museum of the Future.",
        },
        {
          title: "Burj Khalifa & Dubai Mall",
          description:
            "Ascend to the Top of Burj Khalifa (124th Floor) for breathtaking panoramic city views. Explore Dubai Mall and witness the mesmerizing Fountain show, then visit Dubai Frame for cultural exhibits and stunning vistas.",
        },
        {
          title: "Desert Safari Adventure",
          description:
            "Experience the thrill of dune bashing, enjoy camel rides and sandboarding. As evening falls, savor a delicious BBQ dinner under the stars with traditional shows and entertainment.",
        },
        {
          title: "Global Village & Miracle Garden",
          description:
            "Discover the cultural extravaganza at Global Village with shopping and food from 70+ countries. Then visit Dubai Miracle Garden - the world's largest flower garden featuring unique floral designs and stunning displays.",
        },
      ],
      includes: [
        "All sightseeing transfers",
        "Marina Dhow Cruise with buffet dinner",
        "Entry tickets to all attractions",
        "Desert Safari with BBQ dinner",
        "Professional guides where applicable",
      ],
      rating: 4.8,
      reviews: 96,
      popular: true,
    },
    {
      id: 8,
      title: "Dubai + Abu Dhabi Highlights",
      duration: "6 Days",
      price: 175000,
      originalPrice: 199000,
      discount: "12%",
      image: "/dubai.webp",
      description:
        "Desert Safari, Burj Khalifa, Sky Views, Dubai Frame, Miracle Garden, Global Village, Abu Dhabi city tour.",
      itinerary: [
        {
          title: "Arrival & Desert Safari",
          description:
            "Arrive and transfer to your hotel. In the evening, embark on an exciting Desert Safari adventure with BBQ dinner and traditional entertainment.",
        },
        {
          title: "Burj Khalifa & Sky Views",
          description:
            "Visit the Top of Burj Khalifa (124th Floor) for stunning city views, experience the thrilling Glass Slide at Sky Views, and explore Dubai Frame for panoramic vistas and cultural exhibits.",
        },
        {
          title: "Miracle Garden & Global Village",
          description:
            "Discover the world's largest flower garden at Dubai Miracle Garden, then explore Global Village - a cultural extravaganza with shopping and food from around the world.",
        },
        {
          title: "Abu Dhabi City Tour",
          description:
            "Transfer to Abu Dhabi and explore the city's highlights including the magnificent BAPS Temple. Discover the capital's rich culture and stunning architecture.",
        },
        {
          title: "Yas Island Adventure",
          description:
            "Spend a full day at Yas Island with access to 2 parks - enjoy thrilling rides, water attractions, and endless entertainment for the whole family.",
        },
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
      image: "/singapore.webp",
      description:
        "Night Safari, Bird Paradise, S.E.A. Aquarium, Wings of Time, Universal Studios, Sands SkyPark & Gardens by the Bay.",
      itinerary: [
        {
          title: "Night Safari & Bird Paradise",
          description:
            "Experience the magic of Singapore's Night Safari with complimentary shows and tram rides. Explore Bird Paradise and witness exotic birds in their natural habitat.",
        },
        {
          title: "Experiential Singapore Tour",
          description:
            "Discover Singapore's hidden gems with a licensed guide. Explore local neighborhoods, cultural sites, and experience the authentic side of this vibrant city.",
        },
        {
          title: "S.E.A. Aquarium",
          description:
            "Dive into the underwater world at S.E.A. Aquarium. Explore marine life from around the globe in one of the world's largest aquariums.",
        },
        {
          title: "Wings of Time",
          description:
            "Witness the spectacular Wings of Time show - a mesmerizing display of lights, water, and fire that tells a timeless story.",
        },
        {
          title: "Universal Studios",
          description:
            "Enjoy a full day of thrills and entertainment at Universal Studios Singapore. Experience world-class rides, shows, and attractions across 7 themed areas.",
        },
        {
          title: "Sands SkyPark & Gardens by the Bay",
          description:
            "Take in panoramic views from Sands SkyPark, then explore Gardens by the Bay - marvel at the Cloud Forest and Flower Dome, featuring stunning floral displays and climate-controlled environments.",
        },
      ],
      includes: ["9 tour transfers per plan", "Licensed guide where noted"],
      rating: 4.9,
      reviews: 128,
      popular: true,
    },
    {
      id: 10,
      title: "Singapore & Malaysia – 6 Nights 7 Days",
      duration: "6 Nights 7 Days",
      price: 95000,
      originalPrice: 115000,
      discount: "17%",
      image: "/Singapore & Malaysia.png",
      description:
        "Return economy class airfare, 06 nights' accommodation, daily breakfast, city tours, Gardens by the Bay, Universal Studios, Sentosa Island, Kuala Lumpur, Genting Highlands, and more.",
      itinerary: [
        {
          title: "Arrival in Singapore",
          description:
            "Arrive and transfer to your hotel. Settle in and prepare for an amazing adventure ahead.",
        },
        {
          title: "Singapore City Discovery",
          description:
            "Explore Singapore's vibrant neighborhoods - Little India, see the iconic Merlion Statue, wander through Chinatown, visit Sri Mariamman Temple and Esplanade. Then discover Gardens by the Bay with Cloud Forest, Flower Dome, and Light & Sound Show. End with a scenic River Cruise along Singapore River.",
        },
        {
          title: "Marina Bay & Sentosa Island",
          description:
            "Take in breathtaking views from Marina Bay Sands Sky Park Observation Deck. Then head to Sentosa Island for a cable car ride, visit Madame Tussauds 5-in-1, and witness the spectacular Wings of Time show.",
        },
        {
          title: "Universal Studios Adventure",
          description:
            "Spend a full day at Universal Studios Singapore exploring 7 themed areas with thrilling rides and world-class entertainment. Then transfer to Malaysia for the next leg of your journey.",
        },
        {
          title: "Putrajaya & Kuala Lumpur",
          description:
            "Discover Putrajaya's stunning architecture with photo stops at National Mosque, Putra Bridge, and official government buildings. Then explore Kuala Lumpur - visit the National Mosque, King's Palace, Sultan Abdul Samad Building, Merdeka Square, and Menara KL Tower.",
        },
        {
          title: "Batu Caves & Genting Highlands",
          description:
            "Visit the iconic Batu Caves with its colorful steps and temple. Then journey to Genting Highlands via cable car, enjoy the Skyway Ride, and experience the cool mountain air and entertainment.",
        },
      ],
      includes: [
        "06 nights' accommodation in Singapore and Malaysia",
        "All sightseeing and transfers on shared transport",
        "Daily Continental Breakfast",
        "City Tour in Singapore with all mentioned attractions",
        "Gardens by the Bay (Cloud Forest, Flower Dome, Light & Sound Show)",
        "River Cruise (Bum Boat Ride along Singapore River)",
        "Marina Bay Sands Sky Park Observation Deck",
        "Sentosa Island Tour (Cable Car, Madame Tussauds 5-in-1, Wings of Time)",
        "Full Day at Universal Studios Singapore",
        "Putrajaya orientation tour with photo-stop",
        "Kuala Lumpur City Tour",
        "Batu Caves and Genting Highlands Tour",
        "Travel Insurance for passengers up to 69 years",
        "All entry fees and attraction tickets",
      ],
      rating: 4.8,
      reviews: 102,
      popular: true,
    },
    {
      id: 4,
      title: "Thailand – Bangkok & Pattaya",
      duration: "5 Nights 6 Days",
      price: 51000,
      originalPrice: 60000,
      discount: "15%",
      image: "/thieland.webp",
      description:
        "Relax in 4-star hotels in Pattaya & Bangkok with daily breakfast. Coral Island tour, Nong Nooch Village, Alcazar Show, Chao Phraya Dinner Cruise, and Safari World & Marine Park.",
      itinerary: [
        {
          title: "Arrival & Transfer to Pattaya",
          description:
            "Arrive and transfer to your 4-star hotel in Pattaya. Relax and enjoy the beautiful beachside location with daily breakfast included.",
        },
        {
          title: "Coral Island & Thai Culture",
          description:
            "Embark on an exciting Coral Island Tour with water activities. Then explore authentic Thai culture at Nong Nooch Village Show featuring traditional performances, followed by a delicious local lunch.",
        },
        {
          title: "Alcazar Show",
          description:
            "Experience the dazzling Alcazar Show - a spectacular display of Thai culture, music, and dance featuring world-class performances and stunning costumes.",
        },
        {
          title: "Bangkok & Romantic Dinner Cruise",
          description:
            "Transfer to Bangkok and check into your 4-star hotel. In the evening, enjoy a romantic Chao Phraya Dinner Cruise with stunning river views, delicious cuisine, and live entertainment.",
        },
        {
          title: "Safari World & Marine Park",
          description:
            "Spend a fun-filled day at Safari World & Marine Park. Witness amazing wildlife, enjoy thrilling shows, and explore marine life. A delicious lunch is included.",
        },
      ],
      includes: [
        "4-star hotel accommodation in Pattaya & Bangkok with daily breakfast",
        "Private transfers as per itinerary",
        "Coral Island Tour with Nong Nooch Village Show & lunch",
        "Alcazar Show tickets",
        "Chao Phraya Dinner Cruise",
        "Safari World & Marine Park entry with lunch",
      ],
      rating: 4.7,
      reviews: 74,
      popular: true,
    },
    {
      id: 5,
      title: "Malaysia – KL & Genting Highlights",
      duration: "6 Days",
      price: 110000,
      originalPrice: 129000,
      discount: "15%",
      image: "/mal.webp",
      description:
        "KL city tour, KL Tower deck, Genting cable car + Batu Caves, Putrajaya cruise, Legoland day, Themepark + Waterpark + Sealife.",
      itinerary: [
        {
          title: "Arrival in Kuala Lumpur",
          description:
            "Arrive and transfer to your hotel. Settle in and prepare for an exciting Malaysian adventure.",
        },
        {
          title: "Kuala Lumpur City Tour",
          description:
            "Explore Kuala Lumpur's iconic landmarks on a private city tour. Visit the KL Tower Observation Deck for panoramic city views and discover the city's rich culture and history.",
        },
        {
          title: "Genting Highlands & Batu Caves",
          description:
            "Journey to Genting Highlands via cable car, enjoying stunning mountain views. En route, visit the famous Batu Caves with its colorful steps and temple. Spend the day exploring the cool mountain resort.",
        },
        {
          title: "Putrajaya Cruise",
          description:
            "Discover Putrajaya's stunning architecture and beautiful lakes on a sharing cruise. Experience the modern administrative capital with its impressive buildings and green spaces.",
        },
        {
          title: "Legoland Adventure",
          description:
            "Spend a full day at Legoland Malaysia - enjoy thrilling rides, explore themed areas, and experience endless fun for all ages. Private transfers included.",
        },
        {
          title: "Theme Park & Water Park",
          description:
            "Enjoy a full day of fun with access to Theme Park, Water Park, and Sealife combo - perfect for families seeking adventure and entertainment.",
        },
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
      image: "/Vietnam - 6 Nights 7 Days Discovery.jpg",
      description:
        "Grandworld, VinWonders + VinSafari, 4-Island Hopping with lunch + cable car + Aquatopia.",
      itinerary: [
        {
          title: "Arrival in Phu Quoc",
          description:
            "Arrive and transfer to North Phu Quoc. Check into your resort and begin your island paradise experience.",
        },
        {
          title: "Grandworld Phu Quoc",
          description:
            "Explore Grandworld Phu Quoc - a vibrant entertainment complex featuring cultural shows, shopping, and dining experiences showcasing Vietnamese culture.",
        },
        {
          title: "VinWonders & VinSafari",
          description:
            "Spend the day at VinWonders theme park and VinSafari - enjoy thrilling rides, explore wildlife, and experience world-class entertainment in one amazing combo.",
        },
        {
          title: "4 Island Hopping Adventure",
          description:
            "Embark on an exciting 4-island hopping tour by speedboat. Enjoy snorkeling, visit stunning beaches, ride the cable car, explore Aquatopia, and savor a delicious lunch on board.",
        },
        {
          title: "Shopping & Leisure",
          description:
            "Enjoy flexible time for shopping, exploring local markets, and dining at your favorite restaurants. Private transfers available for your convenience.",
        },
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
      image: "/veietnam2.webp",
      description:
        "HCMC + Cu Chi, Phu Quoc highlights, Danang & Hoi An, Ba Na Hills, Hanoi city & Halong Bay day cruise.",
      itinerary: [
        {
          title: "Arrival in Ho Chi Minh City",
          description:
            "Arrive and transfer to your hotel. Begin your Vietnamese adventure in the vibrant city of Ho Chi Minh.",
        },
        {
          title: "Cu Chi Tunnels & City Tour",
          description:
            "Explore the historic Cu Chi Tunnels - an incredible network of underground tunnels used during the war. Then discover Ho Chi Minh City's iconic landmarks and rich history.",
        },
        {
          title: "Phu Quoc Island",
          description:
            "Transfer to Phu Quoc Island and check into your resort. Explore Grand World Phu Quoc - a cultural and entertainment complex showcasing Vietnamese traditions.",
        },
        {
          title: "VinWonders & VinSafari",
          description:
            "Experience the best of Phu Quoc at VinWonders theme park and VinSafari. Enjoy thrilling rides, wildlife encounters, and world-class entertainment.",
        },
        {
          title: "4 Island Hopping",
          description:
            "Embark on an island-hopping adventure by speedboat. Enjoy snorkeling, visit pristine beaches, ride the cable car, explore Aquatopia, and savor a delicious lunch.",
        },
        {
          title: "Danang & Hoi An",
          description:
            "Transfer to Danang and explore the charming ancient town of Hoi An. Experience a unique Coconut Forest Basket Boat ride and enjoy a magical Lantern Boat cruise along the river.",
        },
        {
          title: "Ba Na Hills",
          description:
            "Journey to Ba Na Hills via cable car. Walk across the iconic Golden Bridge supported by colossal hands, explore Fantasy Park, visit the French Village, and enjoy stunning mountain views.",
        },
        {
          title: "Hanoi City",
          description:
            "Transfer to Hanoi and explore Vietnam's capital. Discover the city's rich history, visit ancient temples, and experience the vibrant local culture on a half-day city tour.",
        },
        {
          title: "Halong Bay Cruise",
          description:
            "Experience the breathtaking beauty of Halong Bay on a deluxe day cruise. Enjoy kayaking through limestone karsts, savor a delicious lunch, and witness a stunning sunset party on the water.",
        },
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
    {
      id: 9,
      title: "Vietnam – 6 Nights 7 Days Discovery",
      duration: "6 Nights 7 Days",
      price: 45000,
      originalPrice: 55000,
      discount: "18%",
      image: "/vietnam.webp",
      description:
        "Explore Ho Chi Minh City, Cu Chi Tunnels, Mekong Delta, Da Nang, Ba Na Hills, Hoi An Ancient Town, Hanoi, and Halong Bay.",
      itinerary: [
        {
          title: "Arrival & Ho Chi Minh City",
          description:
            "Arrive and transfer to your hotel. Begin your exploration with a Ho Chi Minh City Tour, discovering the vibrant streets, historic landmarks, and rich culture of Vietnam's largest city.",
        },
        {
          title: "Cu Chi Tunnels",
          description:
            "Explore the historic Cu Chi Tunnels - an incredible underground network that played a crucial role during the Vietnam War. Learn about the resilience and ingenuity of the Vietnamese people.",
        },
        {
          title: "Mekong Delta Adventure",
          description:
            "Journey to the Mekong Delta and experience authentic Vietnamese life. Visit Vinh Trang Pagoda, take a boat ride to Unicorn Island, explore local bee farms and fruit orchards, and enjoy a peaceful rowboat ride through water coconut trees. A delicious local lunch is included.",
        },
        {
          title: "Ba Na Hills & Golden Bridge",
          description:
            "Transfer to Da Nang and ascend to Ba Na Hills via cable car. Walk across the iconic Golden Bridge supported by colossal hands, visit Linh Ung Pagoda with its 27m Buddha statue, and explore the beautiful Le Jardin gardens. Lunch included.",
        },
        {
          title: "Hoi An Ancient Town",
          description:
            "Discover the charming ancient town of Hoi An - a UNESCO World Heritage site. Visit Phuc Kien Assembly Hall, Tan Ky Ancient House, and the Japanese Covered Bridge. In the evening, participate in the magical Lantern Release Ceremony along the Hoai River.",
        },
        {
          title: "Hanoi City Discovery",
          description:
            "Transfer to Hanoi and explore Vietnam's capital city. Visit the Temple of Literature, discover the historic Hoa Lo Prison Museum (Hanoi Hilton), and experience the city's rich culture and history. Guided tour with lunch included.",
        },
        {
          title: "Halong Bay Cruise",
          description:
            "Experience the breathtaking beauty of Halong Bay on a scenic day cruise. Explore iconic islets like Surprising Cave and Pelican Grotto, visit stunning grottos, and enjoy swimming or relaxing on the sundeck. A delicious lunch is included.",
        },
      ],
      includes: [
        "Single Entry Vietnam E-Visa",
        "All transfers (Private Basis)",
        "All sightseeing tours on shared basis as mentioned",
        "Professional guides where applicable",
        "Lunch where specified",
        "Entry tickets to all attractions",
      ],
      rating: 4.8,
      reviews: 89,
      popular: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "basic", name: "Basic Packages" },
    { id: "itineraries", name: "Ready-made Itineraries" },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <img
            src="/banner1.webp"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-violet-500 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Travel Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Discover handcrafted itineraries designed just for you. Your
            journey, perfectly planned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg"
              onClick={() => {
                const phoneNumber = "919549134848";
                const message =
                  "Hello! I'm interested in exploring your travel packages.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Explore Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg"
              onClick={() => {
                window.location.href = "tel:+919549134848";
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-gradient-to-r from-violet-100 via-pink-100 to-orange-100 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
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
        <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Basic Packages
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover amazing travel experiences with our curated tour
                  packages.{" "}
                  <span className="font-semibold text-violet-600">
                    From city tours to beach getaways and mountain adventures.
                  </span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {basicPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-amber-200 flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.src = "/slider1.webp";
                        }}
                      />
                      {pkg.popular && (
                        <Badge className="absolute top-4 right-4 bg-red-500 text-white z-10">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        {pkg.discount && (
                          <Badge className="bg-green-500 text-white">
                            {pkg.discount} OFF
                          </Badge>
                        )}
                        {pkg.withFlights && (
                          <Badge className="bg-blue-500 text-white">
                            <Plane className="w-3 h-3 mr-1" />
                            With Flights
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            className={
                              pkg.type === "City Tour"
                                ? "bg-blue-500 text-white"
                                : pkg.type === "Adventure"
                                ? "bg-green-500 text-white"
                                : "bg-cyan-500 text-white"
                            }
                          >
                            {pkg.type === "City Tour" ? (
                              <MapPin className="w-3 h-3 mr-1" />
                            ) : pkg.type === "Adventure" ? (
                              <Award className="w-3 h-3 mr-1" />
                            ) : (
                              <Camera className="w-3 h-3 mr-1" />
                            )}
                            {pkg.type}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            {pkg.rating} ({pkg.reviews})
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {pkg.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{pkg.description}</p>
                      </div>

                      <div className="mb-4 flex-grow">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Highlights:
                        </h4>
                        <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
                          {pkg.features.map((feature, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </div>
                          <div className="text-right">
                            {pkg.price > 0 ? (
                              <>
                                {pkg.originalPrice > 0 && (
                                  <p className="text-sm text-gray-500 line-through">
                                    {formatPrice(pkg.originalPrice)}
                                  </p>
                                )}
                                <p className="text-lg font-bold text-violet-600">
                                  Starting from {formatPrice(pkg.price)}
                                </p>
                              </>
                            ) : (
                              <p className="text-lg font-bold text-violet-600">
                                Contact for Pricing
                              </p>
                            )}
                          </div>
                        </div>
                        <Button
                          className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                          onClick={() => {
                            const phoneNumber = "919549134848";
                            const message = `Hello! I'm interested in ${pkg.title}. Please provide pricing and more details.`;
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                              message
                            )}`;
                            window.open(whatsappUrl, "_blank");
                          }}
                        >
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explore More Destinations Button */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600 hover:from-violet-700 hover:via-pink-700 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setShowExploreForm(true);
                    setExploreFormStep(1);
                    setExploreFormData({
                      destination: "",
                      departureCity: "",
                      travelDate: "",
                      hotelCategory: "",
                      phoneNumber: "",
                    });
                  }}
                >
                  Explore More Destinations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ready-made Itineraries Section */}
      {(selectedCategory === "all" || selectedCategory === "itineraries") && (
        <section className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready-made Itineraries
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete travel experiences designed just for you.{" "}
                  <span className="font-semibold text-violet-600">
                    Your journey, customized to your dreams.
                  </span>
                </p>
                <p className="text-lg text-violet-600 font-semibold italic mt-4">
                  ✨ Every itinerary is personalized for each traveler
                </p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {readyMadeItineraries.map((itinerary) => (
                  <div
                    key={itinerary.id}
                    className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-amber-200"
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
                            e.target.src = "/slider1.webp";
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {itinerary.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {itinerary.description}
                            </p>
                            <p className="text-sm text-violet-600 font-semibold italic mb-4">
                              ✨ Customized itinerary designed just for you
                            </p>
                          </div>
                          {itinerary.popular && (
                            <Badge className="bg-red-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 text-xl">
                            Your Journey:
                          </h4>
                          <div className="space-y-4">
                            {Array.isArray(itinerary.itinerary) &&
                            itinerary.itinerary[0]?.title
                              ? // New format with title and description
                                itinerary.itinerary.map((item, index) => (
                                  <div
                                    key={index}
                                    className="bg-gradient-to-r from-violet-50 via-pink-50 to-orange-50 rounded-xl p-4 border-l-4 border-violet-600"
                                  >
                                    <h5 className="font-bold text-gray-900 mb-2 text-lg">
                                      {item.title}
                                    </h5>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                ))
                              : // Old format - convert to new format
                                itinerary.itinerary
                                  .map((day, index) => {
                                    // Remove Day labels and flight references
                                    const cleanDay = day
                                      .replace(/^(Day \d+|D\d+):\s*/i, "")
                                      .replace(
                                        /→\s*Airport|Airport\s*→|Airport transfer|Airport Drop|Departure|Arrival at.*Airport/gi,
                                        ""
                                      )
                                      .replace(
                                        /→\s*Hotel|Hotel\s*check-in/gi,
                                        "Transfer to hotel"
                                      )
                                      .trim();

                                    if (
                                      !cleanDay ||
                                      cleanDay
                                        .toLowerCase()
                                        .includes("airport") ||
                                      cleanDay.toLowerCase().includes("flight")
                                    ) {
                                      return null;
                                    }

                                    return (
                                      <div
                                        key={index}
                                        className="bg-gradient-to-r from-violet-50 via-pink-50 to-orange-50 rounded-xl p-4 border-l-4 border-violet-600"
                                      >
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                          {cleanDay}
                                        </p>
                                      </div>
                                    );
                                  })
                                  .filter(Boolean)}
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Includes:
                          </h4>
                          <ul className="space-y-1">
                            {itinerary.includes
                              .filter(
                                (item) =>
                                  !item.toLowerCase().includes("airfare") &&
                                  !item.toLowerCase().includes("flight")
                              )
                              .map((item, index) => (
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

                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <Clock className="w-4 h-4 mr-1" />
                              {itinerary.duration}
                              <Star className="w-4 h-4 text-yellow-400 fill-current ml-4 mr-1" />
                              {itinerary.rating} ({itinerary.reviews} reviews)
                            </div>
                            <p className="text-sm text-violet-600 font-semibold italic">
                              Your journey, designed just for you
                            </p>
                          </div>
                          <Button
                            className="bg-violet-600 hover:bg-violet-700 text-white px-6"
                            onClick={() => {
                              setSelectedPackage(itinerary);
                              setShowPriceForm(true);
                              setFormStep(1);
                              setPriceFormData({
                                departureCity: "",
                                travelDate: "",
                                hotelCategory: "",
                                phoneNumber: "",
                              });
                            }}
                          >
                            View Price
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 via-pink-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Take Off Now?</h2>
            <p className="text-xl mb-8 text-white/90">
              Book your perfect travel experience today and create memories that
              last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100"
                onClick={() => {
                  window.location.href = "tel:+919549134848";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 9549134848
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-violet-600"
                onClick={() => {
                  const phoneNumber = "919549134848";
                  const message =
                    "Hello! I'm interested in your travel packages. Please provide more information.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Connect via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Form Dialog */}
      <Dialog open={showPriceForm} onOpenChange={setShowPriceForm}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedPackage?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {formStep === 1 && "Select your departure city"}
              {formStep === 2 && "Choose your travel dates"}
              {formStep === 3 && "Select hotel category"}
              {formStep === 4 &&
                "Enter your phone number to connect via WhatsApp"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {formStep === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Departure City
                </label>
                <select
                  value={priceFormData.departureCity}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      departureCity: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="">Select departure city</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                </select>
                <Button
                  className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={() => {
                    if (priceFormData.departureCity) setFormStep(2);
                  }}
                  disabled={!priceFormData.departureCity}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {formStep === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Dates
                </label>
                <Input
                  type="date"
                  value={priceFormData.travelDate}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      travelDate: e.target.value,
                    })
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (priceFormData.travelDate) setFormStep(3);
                    }}
                    disabled={!priceFormData.travelDate}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hotel Category
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["3★", "4★", "5★"].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        setPriceFormData({
                          ...priceFormData,
                          hotelCategory: star,
                        })
                      }
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        priceFormData.hotelCategory === star
                          ? "border-violet-600 bg-violet-50 text-violet-600 font-bold"
                          : "border-gray-300 hover:border-violet-300"
                      }`}
                    >
                      {star}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (priceFormData.hotelCategory) setFormStep(4);
                    }}
                    disabled={!priceFormData.hotelCategory}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {formStep === 4 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={priceFormData.phoneNumber}
                  onChange={(e) =>
                    setPriceFormData({
                      ...priceFormData,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setFormStep(3)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      if (priceFormData.phoneNumber) {
                        const phoneNumber = "919549134848";
                        const message = `Hello! I'm interested in ${selectedPackage?.title}.\n\nDetails:\n- Departure City: ${priceFormData.departureCity}\n- Travel Date: ${priceFormData.travelDate}\n- Hotel Category: ${priceFormData.hotelCategory}\n- Phone: ${priceFormData.phoneNumber}\n\nPlease provide pricing and details.`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                        setShowPriceForm(false);
                        setFormStep(1);
                        setPriceFormData({
                          departureCity: "",
                          travelDate: "",
                          hotelCategory: "",
                          phoneNumber: "",
                        });
                      }
                    }}
                    disabled={!priceFormData.phoneNumber}
                  >
                    Connect via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Explore More Destinations Dialog */}
      <Dialog open={showExploreForm} onOpenChange={setShowExploreForm}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Explore More Destinations
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {exploreFormStep === 1 && "Select your destination"}
              {exploreFormStep === 2 && "Select your departure city"}
              {exploreFormStep === 3 && "Choose your travel dates"}
              {exploreFormStep === 4 && "Select hotel category"}
              {exploreFormStep === 5 &&
                "Enter your phone number to connect via WhatsApp"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {exploreFormStep === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Destination
                </label>
                <select
                  value={exploreFormData.destination}
                  onChange={(e) =>
                    setExploreFormData({
                      ...exploreFormData,
                      destination: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="">Select destination</option>
                  {destinations.map((dest) => (
                    <option key={dest.name} value={dest.name}>
                      {dest.name}, {dest.country}
                    </option>
                  ))}
                </select>
                <Button
                  className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={() => {
                    if (exploreFormData.destination) setExploreFormStep(2);
                  }}
                  disabled={!exploreFormData.destination}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {exploreFormStep === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Departure City
                </label>
                <select
                  value={exploreFormData.departureCity}
                  onChange={(e) =>
                    setExploreFormData({
                      ...exploreFormData,
                      departureCity: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="">Select departure city</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                </select>
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setExploreFormStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (exploreFormData.departureCity) setExploreFormStep(3);
                    }}
                    disabled={!exploreFormData.departureCity}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {exploreFormStep === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Dates
                </label>
                <Input
                  type="date"
                  value={exploreFormData.travelDate}
                  onChange={(e) =>
                    setExploreFormData({
                      ...exploreFormData,
                      travelDate: e.target.value,
                    })
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setExploreFormStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (exploreFormData.travelDate) setExploreFormStep(4);
                    }}
                    disabled={!exploreFormData.travelDate}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {exploreFormStep === 4 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hotel Category
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["3★", "4★", "5★"].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        setExploreFormData({
                          ...exploreFormData,
                          hotelCategory: star,
                        })
                      }
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        exploreFormData.hotelCategory === star
                          ? "border-violet-600 bg-violet-50 text-violet-600 font-bold"
                          : "border-gray-300 hover:border-violet-300"
                      }`}
                    >
                      {star}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setExploreFormStep(3)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() => {
                      if (exploreFormData.hotelCategory) setExploreFormStep(5);
                    }}
                    disabled={!exploreFormData.hotelCategory}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {exploreFormStep === 5 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={exploreFormData.phoneNumber}
                  onChange={(e) =>
                    setExploreFormData({
                      ...exploreFormData,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full"
                />
                <div className="flex gap-2 mt-4 text-white">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setExploreFormStep(4)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      if (exploreFormData.phoneNumber) {
                        const phoneNumber = "919549134848";
                        const message = `Hello! I'm interested in exploring ${exploreFormData.destination}.\n\nDetails:\n- Destination: ${exploreFormData.destination}\n- Departure City: ${exploreFormData.departureCity}\n- Travel Date: ${exploreFormData.travelDate}\n- Hotel Category: ${exploreFormData.hotelCategory}\n- Phone: ${exploreFormData.phoneNumber}\n\nPlease provide pricing and package details.`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                        setShowExploreForm(false);
                        setExploreFormStep(1);
                        setExploreFormData({
                          destination: "",
                          departureCity: "",
                          travelDate: "",
                          hotelCategory: "",
                          phoneNumber: "",
                        });
                      }
                    }}
                    disabled={!exploreFormData.phoneNumber}
                  >
                    Connect via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
