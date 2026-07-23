import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SocialSidebar from './components/layout/SocialSidebar';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTopOnNavigate() {
  const { pathname, state, hash } = useLocation();

  useEffect(() => {
    const locState = state as { scrollTo?: string } | null;
    if (!locState?.scrollTo && !hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state, hash]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyecto/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTopOnNavigate />
      <ScrollProgress />
      <Navbar />
      <SocialSidebar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
