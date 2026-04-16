import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4 group cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-emerald-400/10 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors">
                <span className="text-emerald-500 dark:text-emerald-400 font-bold text-lg">C</span>
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                <span className="text-zinc-900 dark:text-zinc-100">Code</span>
                <span className="text-emerald-600 dark:text-emerald-400">Flow</span>
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="sm:col-span-3 lg:col-span-4 mt-8 sm:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-zinc-200 dark:border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
              © 2025 CodeFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
