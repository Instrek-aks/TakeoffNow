import { Toaster } from "./components/ui/Toaster";
import { Toaster as Sonner } from "./components/ui/Sonner";
import { TooltipProvider } from "./components/ui/ToolTip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Index from "./pages/Index";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import Destination from "./pages/Destination";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/destination/:name" element={<Destination />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
