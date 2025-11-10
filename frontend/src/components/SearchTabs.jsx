import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/Tabs";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Plane,
  Hotel,
  Utensils,
  Home,
  Activity,
  Car,
} from "lucide-react";

const SearchTabs = () => {
  const tabs = [
    { id: "tour", label: "Tour", icon: Plane },
    { id: "hotel", label: "Hotel", icon: Hotel },
    { id: "restaurant", label: "Restaurant", icon: Utensils },
    { id: "rental", label: "Rental", icon: Home },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "car", label: "Car Rental", icon: Car },
  ];

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-7xl px-4 z-20">
      <Tabs defaultValue="tour" className="w-full">
        <TabsList className="bg-gradient-to-br from-stone-50 to-slate-50 border border-stone-200 rounded-t-xl shadow-lg flex justify-between w-full h-auto p-0 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center space-x-2 px-6 py-4 data-[state=active]:bg-violet-600 data-[state=active]:text-white rounded-t-xl flex-1 min-w-fit"
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="bg-gradient-to-br from-stone-50 to-slate-50 border border-stone-200 rounded-b-xl rounded-tr-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Destinations:
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Where are you going . . ."
                    className="pl-10 h-12 border-input"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Check In:
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="date"
                    defaultValue="2025-10-23"
                    className="pl-10 h-12 border-input"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Check Out:
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="date"
                    defaultValue="2025-10-23"
                    className="pl-10 h-12 border-input"
                  />
                </div>
              </div>

              {/* Guest */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Guest:
                </label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="+ Add Guests"
                      className="pl-10 h-12 border-input"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-500/90 h-12 px-8"
                  >
                    Search <Search className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SearchTabs;
