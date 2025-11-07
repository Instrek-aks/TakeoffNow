import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jacob Jones",
    role: "CEO, Traveller",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 4,
    text: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
  },
  {
    id: 2,
    name: "Floyd Miles",
    role: "CEO, Traveller",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 4,
    text: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "CEO, Traveller",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 4,
    text: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-100/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Those Lovely Words From Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Are You Tired Of The Typical Tourist Destinations And Looking To
            Step Out Of Your Comfort Zonetravel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-muted-foreground/20" />

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 italic mb-6">{testimonial.text}</p>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-orange-500 text-orange-500"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
