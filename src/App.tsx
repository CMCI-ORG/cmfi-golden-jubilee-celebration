import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Vision = lazy(() => import("./pages/Vision"));
const Goal = lazy(() => import("./pages/Goal"));
const Ministry = lazy(() => import("./pages/Ministry"));
const Work = lazy(() => import("./pages/Work"));
const Mission = lazy(() => import("./pages/Mission"));
const Praise = lazy(() => import("./pages/Praise"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            }>
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;