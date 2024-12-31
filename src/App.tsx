import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Timeline from "./pages/Timeline";
import Vision from "./pages/Vision";
import Goal from "./pages/Goal";
import Ministry from "./pages/Ministry";
import Work from "./pages/Work";
import Mission from "./pages/Mission";
import Praise from "./pages/Praise";
import About from "./pages/About";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/work" element={<Work />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/praise" element={<Praise />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;