import { Badge } from "../components/ui/Badge";

const destinations = [
  {
    id: 1,
    name: "Paris",
    tours: "05 Tours",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    name: "Australia",
    tours: "08 Tours",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=800&fit=crop",
  },
  {
    id: 3,
    name: "New York",
    tours: "06 Tours",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=800&fit=crop",
  },
  {
    id: 4,
    name: "Spain City",
    tours: "07 Tours",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=800&fit=crop",
  },
];

const Destinations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-violet-600 font-semibold text-lg mb-2"
            style={{ fontStyle: "italic" }}
          >
            Next Adventure Destination
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular Travel Destinations Available Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Are You Tired Of The Typical Tourist Destinations And Looking To
            Step Out Of Your Comfort Zonetravel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-96"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge className="bg-violet-600 text-white border-0 mb-3">
                  {destination.tours}
                </Badge>
                <h3 className="text-2xl font-bold group-hover:text-violet-600 transition-colors">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
