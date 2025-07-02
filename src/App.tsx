import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PiAuthentify from "./pages/products/pi-authentify";
import PiSense from "./pages/products/pi-sense";
import PiScout from "./pages/products/pi-scout";
import PiSecurechain from "./pages/products/pi-securechain";
import PiVox from "./pages/products/pi-vox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/pi-authentify" element={<PiAuthentify />} />
          <Route path="/products/pi-sense" element={<PiSense />} />
          <Route path="/products/pi-scout" element={<PiScout />} />
          <Route path="/products/pi-securechain" element={<PiSecurechain />} />
          <Route path="/products/pi-vox" element={<PiVox />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
