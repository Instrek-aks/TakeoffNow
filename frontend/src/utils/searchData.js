// Extract all destinations and packages data for search functionality

// All destinations with their associated packages
export const destinations = [
  {
    name: "Dubai",
    country: "UAE",
    packages: [
      {
        id: "basic-1",
        title: "DUBAI 4 NIGHTS",
        type: "Basic Package",
        duration: "4 Nights | 5 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-2",
        title: "Dubai 4 Nights – Ultimate Experience",
        type: "Ready-made Itinerary",
        duration: "4 Nights 5 Days",
        price: 125000,
        image: "/dubai.webp",
      },
      {
        id: "itinerary-8",
        title: "Dubai + Abu Dhabi Highlights",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 175000,
        image: "/dubai.webp",
      },
      {
        id: "tour-2",
        title: "Dazzling Dubai & Abu Dhabi",
        type: "Tour Package",
        duration: "6 Days",
        price: 299,
        image: "/thieland.webp",
      },
    ],
  },
  {
    name: "Bali",
    country: "Indonesia",
    packages: [
      {
        id: "itinerary-1",
        title: "Bali Romance Getaway",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 145000,
        image: "/bali.webp",
      },
      {
        id: "tour-1",
        title: "Beautiful Bali Escape",
        type: "Tour Package",
        duration: "7 Days",
        price: 320,
        image: "/bali.webp",
      },
      {
        id: "tour-7",
        title: "Exotic Bali Bliss Retreat",
        type: "Tour Package",
        duration: "6 Days",
        price: 340,
        image: "/bali1.webp",
      },
    ],
  },
  {
    name: "Singapore",
    country: "Singapore",
    packages: [
      {
        id: "itinerary-3",
        title: "Singapore Essentials – Attractions Combo",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 160000,
        image: "/singapore.webp",
      },
      {
        id: "itinerary-10",
        title: "Singapore & Malaysia – 6 Nights 7 Days",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 95000,
        image: "/singapore.webp",
      },
      {
        id: "basic-4",
        title: "SINGAPORE & MALAYSIA",
        type: "Basic Package",
        duration: "6 Nights | 7 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      },
      {
        id: "tour-3",
        title: "Sensational Singapore Discovery",
        type: "Tour Package",
        duration: "5 Days",
        price: 349,
        image: "/singapore.webp",
      },
    ],
  },
  {
    name: "Thailand",
    country: "Thailand",
    packages: [
      {
        id: "basic-3",
        title: "THAILAND GETAWAY",
        type: "Basic Package",
        duration: "5 Nights | 6 Days",
        price: 51000,
        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-4",
        title: "Thailand – Bangkok & Pattaya",
        type: "Ready-made Itinerary",
        duration: "5 Nights 6 Days",
        price: 51000,
        image: "/thieland.webp",
      },
      {
        id: "tour-4",
        title: "Thrilling Thailand Getaway",
        type: "Tour Package",
        duration: "5 Days",
        price: 280,
        image: "/vietnam.webp",
      },
    ],
  },
  {
    name: "Vietnam",
    country: "Vietnam",
    packages: [
      {
        id: "basic-2",
        title: "VIETNAM DISCOVERY",
        type: "Basic Package",
        duration: "6 Nights | 7 Days",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-6",
        title: "Vietnam – Phu Quoc Island Plan",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 125000,
        image: "/vietnam.webp",
      },
      {
        id: "itinerary-7",
        title: "Vietnam – Multi-City Discovery",
        type: "Ready-made Itinerary",
        duration: "11 Days",
        price: 215000,
        image: "/veietnam2.webp",
      },
      {
        id: "itinerary-9",
        title: "Vietnam – 6 Nights 7 Days Discovery",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 45000,
        image: "/vietnam.webp",
      },
      {
        id: "tour-6",
        title: "Vibrant Vietnam Experience",
        type: "Tour Package",
        duration: "7 Days",
        price: 290,
        image: "/dubai.webp",
      },
      {
        id: "tour-8",
        title: "Enchanting Vietnam Trails",
        type: "Tour Package",
        duration: "8 Days",
        price: 360,
        image: "/veietnam2.webp",
      },
    ],
  },
  {
    name: "Malaysia",
    country: "Malaysia",
    packages: [
      {
        id: "itinerary-5",
        title: "Malaysia – KL & Genting Highlights",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 110000,
        image: "/mal.webp",
      },
      {
        id: "itinerary-10",
        title: "Singapore & Malaysia – 6 Nights 7 Days",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 95000,
        image: "/singapore.webp",
      },
      {
        id: "basic-4",
        title: "SINGAPORE & MALAYSIA",
        type: "Basic Package",
        duration: "6 Nights | 7 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      },
      {
        id: "tour-5",
        title: "Majestic Malaysia Adventure",
        type: "Tour Package",
        duration: "6 Days",
        price: 280,
        image: "/mal.webp",
      },
    ],
  },
  {
    name: "Australia",
    country: "Australia",
    packages: [
      {
        id: "popular-1",
        title: "Majestic AUSTRALIA ROAD TRIP",
        type: "Popular Package",
        duration: "7 Nights | 8 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
      },
    ],
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    packages: [
      {
        id: "popular-2",
        title: "SWISS PARIS AT A GLANCE",
        type: "Popular Package",
        duration: "6 Nights | 7 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
        locations: "Zurich 3N, Paris 3N",
      },
      {
        id: "popular-4",
        title: "Glimpses of EUROPE",
        type: "Popular Package",
        duration: "8 Nights | 9 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
      },
    ],
  },
  {
    name: "Paris",
    country: "France",
    packages: [
      {
        id: "popular-2",
        title: "SWISS PARIS AT A GLANCE",
        type: "Popular Package",
        duration: "6 Nights | 7 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
        locations: "Zurich 3N, Paris 3N",
      },
      {
        id: "popular-4",
        title: "Glimpses of EUROPE",
        type: "Popular Package",
        duration: "8 Nights | 9 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
      },
    ],
  },
  {
    name: "New Zealand",
    country: "New Zealand",
    packages: [
      {
        id: "popular-3",
        title: "Magnificent NEW ZEALAND",
        type: "Popular Package",
        duration: "9 Nights | 10 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
        locations: "2N Auckland, 2N Rotorua, 3N Queenstown and 2N Christchurch",
      },
    ],
  },
  {
    name: "Europe",
    country: "Europe",
    packages: [
      {
        id: "popular-4",
        title: "Glimpses of EUROPE",
        type: "Popular Package",
        duration: "8 Nights | 9 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
      },
    ],
  },
  {
    name: "Abu Dhabi",
    country: "UAE",
    packages: [
      {
        id: "itinerary-8",
        title: "Dubai + Abu Dhabi Highlights",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 175000,
        image: "/dubai.webp",
      },
      {
        id: "tour-2",
        title: "Dazzling Dubai & Abu Dhabi",
        type: "Tour Package",
        duration: "6 Days",
        price: 299,
        image: "/thieland.webp",
      },
    ],
  },
  {
    name: "Bangkok",
    country: "Thailand",
    packages: [
      {
        id: "basic-3",
        title: "THAILAND GETAWAY",
        type: "Basic Package",
        duration: "5 Nights | 6 Days",
        price: 51000,
        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-4",
        title: "Thailand – Bangkok & Pattaya",
        type: "Ready-made Itinerary",
        duration: "5 Nights 6 Days",
        price: 51000,
        image: "/thieland.webp",
      },
    ],
  },
  {
    name: "Pattaya",
    country: "Thailand",
    packages: [
      {
        id: "basic-3",
        title: "THAILAND GETAWAY",
        type: "Basic Package",
        duration: "5 Nights | 6 Days",
        price: 51000,
        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-4",
        title: "Thailand – Bangkok & Pattaya",
        type: "Ready-made Itinerary",
        duration: "5 Nights 6 Days",
        price: 51000,
        image: "/thieland.webp",
      },
    ],
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    packages: [
      {
        id: "itinerary-5",
        title: "Malaysia – KL & Genting Highlights",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 110000,
        image: "/mal.webp",
      },
      {
        id: "itinerary-10",
        title: "Singapore & Malaysia – 6 Nights 7 Days",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 95000,
        image: "/singapore.webp",
      },
      {
        id: "tour-5",
        title: "Majestic Malaysia Adventure",
        type: "Tour Package",
        duration: "6 Days",
        price: 280,
        image: "/mal.webp",
      },
    ],
  },
  {
    name: "Ho Chi Minh City",
    country: "Vietnam",
    packages: [
      {
        id: "basic-2",
        title: "VIETNAM DISCOVERY",
        type: "Basic Package",
        duration: "6 Nights | 7 Days",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-7",
        title: "Vietnam – Multi-City Discovery",
        type: "Ready-made Itinerary",
        duration: "11 Days",
        price: 215000,
        image: "/veietnam2.webp",
      },
      {
        id: "itinerary-9",
        title: "Vietnam – 6 Nights 7 Days Discovery",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 45000,
        image: "/vietnam.webp",
      },
    ],
  },
  {
    name: "Hanoi",
    country: "Vietnam",
    packages: [
      {
        id: "basic-2",
        title: "VIETNAM DISCOVERY",
        type: "Basic Package",
        duration: "6 Nights | 7 Days",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
      },
      {
        id: "itinerary-7",
        title: "Vietnam – Multi-City Discovery",
        type: "Ready-made Itinerary",
        duration: "11 Days",
        price: 215000,
        image: "/veietnam2.webp",
      },
      {
        id: "itinerary-9",
        title: "Vietnam – 6 Nights 7 Days Discovery",
        type: "Ready-made Itinerary",
        duration: "6 Nights 7 Days",
        price: 45000,
        image: "/vietnam.webp",
      },
      {
        id: "tour-8",
        title: "Enchanting Vietnam Trails",
        type: "Tour Package",
        duration: "8 Days",
        price: 360,
        image: "/veietnam2.webp",
      },
    ],
  },
  {
    name: "Phu Quoc",
    country: "Vietnam",
    packages: [
      {
        id: "itinerary-6",
        title: "Vietnam – Phu Quoc Island Plan",
        type: "Ready-made Itinerary",
        duration: "6 Days",
        price: 125000,
        image: "/vietnam.webp",
      },
      {
        id: "itinerary-7",
        title: "Vietnam – Multi-City Discovery",
        type: "Ready-made Itinerary",
        duration: "11 Days",
        price: 215000,
        image: "/veietnam2.webp",
      },
      {
        id: "tour-6",
        title: "Vibrant Vietnam Experience",
        type: "Tour Package",
        duration: "7 Days",
        price: 290,
        image: "/dubai.webp",
      },
    ],
  },
  {
    name: "Melbourne",
    country: "Australia",
    packages: [
      {
        id: "popular-1",
        title: "Majestic AUSTRALIA ROAD TRIP",
        type: "Popular Package",
        duration: "7 Nights | 8 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
      },
    ],
  },
  {
    name: "Sydney",
    country: "Australia",
    packages: [
      {
        id: "popular-1",
        title: "Majestic AUSTRALIA ROAD TRIP",
        type: "Popular Package",
        duration: "7 Nights | 8 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        locations: "Melbourne 3N, Canberra 2N, Sydney 2N",
      },
    ],
  },
  {
    name: "Zurich",
    country: "Switzerland",
    packages: [
      {
        id: "popular-2",
        title: "SWISS PARIS AT A GLANCE",
        type: "Popular Package",
        duration: "6 Nights | 7 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
        locations: "Zurich 3N, Paris 3N",
      },
      {
        id: "popular-4",
        title: "Glimpses of EUROPE",
        type: "Popular Package",
        duration: "8 Nights | 9 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        locations: "Paris 3N, Amsterdam 1N, Frankfurt 1N, Zurich 3N",
      },
    ],
  },
  {
    name: "Auckland",
    country: "New Zealand",
    packages: [
      {
        id: "popular-3",
        title: "Magnificent NEW ZEALAND",
        type: "Popular Package",
        duration: "9 Nights | 10 Days",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
        locations: "2N Auckland, 2N Rotorua, 3N Queenstown and 2N Christchurch",
      },
    ],
  },
];

// Search function to find matching destinations
export const searchDestinations = (query) => {
  if (!query || query.trim() === "") return [];

  const searchTerm = query.toLowerCase().trim();
  return destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchTerm) ||
      dest.country.toLowerCase().includes(searchTerm)
  );
};

// Get destination by name
export const getDestinationByName = (name) => {
  return destinations.find(
    (dest) => dest.name.toLowerCase() === name.toLowerCase()
  );
};
