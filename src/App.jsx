import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState, lazy, Suspense } from "react";
import { ThemeProvider } from "./ThemeContext";

const Features = lazy(() => import("./components/Features"));
const Pricing = lazy(() => import("./components/Pricing"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Footer = lazy(() => import("./components/Footer"));

function MainApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans transition-colors duration-500">
      <div className="bg-noise mix-blend-overlay dark:mix-blend-overlay opacity-30 dark:opacity-100"></div>
      <div className="relative z-10 w-full">
        <Navbar scrolled={scrolled} />
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-zinc-500">Loading...</div>}>
          <Features />
          <Pricing />
          <Testimonials />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
