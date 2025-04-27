
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import RetreatsPage from "./pages/retreats";
import RetreatDetail from "./pages/retreats/retreat-detail";
import ArticlesPage from "./pages/articles";
import ArticleDetail from "./pages/articles/article-detail";
import MeditationPage from "./pages/meditation";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import TeamPage from "./pages/team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/retreats" element={<RetreatsPage />} />
            <Route path="/retreats/:retreatId" element={<RetreatDetail />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<ArticleDetail />} />
            <Route path="/meditation" element={<MeditationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
