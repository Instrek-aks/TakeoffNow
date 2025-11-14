import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { searchDestinations } from "../utils/searchData";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const matches = searchDestinations(searchQuery);
      setResults(matches);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      const matches = searchDestinations(searchQuery);
      setResults(matches);
    }
  };

  const handleDestinationClick = (destinationName) => {
    navigate(`/destination/${encodeURIComponent(destinationName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for destinations (e.g., Dubai, Bali, Singapore, Thailand, Vietnam, Australia, Europe...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full bg-white border-2 border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-300"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Results */}
        {searchQuery && (
          <div className="max-w-6xl mx-auto">
            {results.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((destination) => (
                    <div
                      key={destination.name}
                      onClick={() => handleDestinationClick(destination.name)}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-amber-200 overflow-hidden group"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                              {destination.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {destination.country}
                            </p>
                          </div>
                          <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">
                              {destination.packages.length}
                            </span>{" "}
                            {destination.packages.length === 1
                              ? "package"
                              : "packages"}{" "}
                            available
                          </p>
                        </div>
                        <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                          View Packages
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No destinations found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any destinations matching "{searchQuery}"
                </p>
                <p className="text-sm text-gray-500">
                  Try searching for: Dubai, Bali, Singapore, Thailand, Vietnam,
                  Malaysia, Australia, Europe, Paris, Switzerland, New Zealand
                </p>
              </div>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Search for your dream destination
            </h3>
            <p className="text-gray-600 mb-6">
              Enter a destination name to find available packages
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {[
                "Dubai",
                "Bali",
                "Singapore",
                "Thailand",
                "Vietnam",
                "Malaysia",
                "Australia",
                "Europe",
                "Paris",
                "Switzerland",
              ].map((dest) => (
                <Button
                  key={dest}
                  variant="outline"
                  onClick={() => {
                    setSearchQuery(dest);
                    setSearchParams({ q: dest });
                  }}
                  className="bg-white hover:bg-amber-50 border-amber-300 text-gray-700"
                >
                  {dest}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SearchResults;
