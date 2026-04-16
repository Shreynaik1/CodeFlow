import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-emerald-400/10 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold text-lg">C</span>
              <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-zinc-900 dark:text-zinc-100">Code</span>
              <span className="text-emerald-600 dark:text-emerald-400">Flow</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
            >
              Testimonials
            </a>
            
            <div className="h-4 w-px bg-zinc-200 dark:bg-white/10 mx-2"></div>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className="px-5 py-2 text-sm font-medium text-white dark:text-emerald-950 bg-emerald-600 dark:bg-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-300 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              Login
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none"
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              {mobileMenuIsOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-t border-zinc-200 dark:border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-base font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-base font-medium"
            >
              Testimonials
            </a>
            <button className="w-full mt-4 px-5 py-3 text-base font-medium text-white dark:text-emerald-950 bg-emerald-600 dark:bg-emerald-400 rounded-lg">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
