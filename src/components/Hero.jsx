import { ArrowRight, Play, Sparkles, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "../ThemeContext";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("App.jsx");
  const orbRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    let animationFrameId;

    function handleMouseMove(e) {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        if (orbRef.current) {
          orbRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(16, 185, 129, 0.15), transparent 40%)`;
        }
      });
    }

    // Passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentFloatingCard = floatingCards[activeTab];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div
        ref={orbRef}
        className="absolute inset-0 opacity-20 dark:opacity-20 transition-opacity duration-500"
      />

      {/* Orbs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-300/30 dark:bg-emerald-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-[400px] h-64 sm:h-[400px] bg-green-300/20 dark:bg-green-500/5 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-20">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300">
                CodeFlow AI 2.0 Released
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in slide-in-from-bottom duration-700 delay-100 fade-in tracking-tight leading-[1.1]">
              <span className="text-zinc-900 dark:text-zinc-100 block mb-2">
                Write Code
              </span>
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 dark:from-emerald-300 dark:via-emerald-400 dark:to-green-500 bg-clip-text text-transparent block mb-2">
                Naturally
              </span>
              <span className="text-zinc-600 dark:text-zinc-300 block">
                Deploy Faster.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 animate-in slide-in-from-bottom duration-700 delay-200 fade-in leading-relaxed">
              Accelerate your workflow with an intelligent coding assistant that integrates seamlessly. Write, test, and ship natural code in record time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300 fade-in">
              <button className="group w-full sm:w-auto px-8 py-4 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 rounded-xl font-semibold text-white dark:text-emerald-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center justify-center space-x-2">
                <span>Start Building Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-xl font-semibold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-emerald-500/30 flex items-center justify-center space-x-3 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-center w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current text-zinc-500 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </div>
                <span>View Demo</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 animate-in fade-in duration-700 delay-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="user" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#050505]" />
                ))}
              </div>
              <p className="text-sm text-zinc-500 font-medium">Joined by 10k+ developers</p>
            </div>
          </div>
          
          {/* Editor Window */}
          <div className="flex-1 w-full max-w-2xl relative z-10 animate-in zoom-in duration-700 delay-300 fade-in">
            <div className="relative bg-white/60 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-2xl p-1 shadow-2xl shadow-zinc-200/50 dark:shadow-2xl border border-zinc-200 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 dark:from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
              
              <div className="bg-white dark:bg-[#050505] rounded-xl overflow-hidden relative shadow-sm">
                {/* macOS Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>workspace</span>
                  </div>
                  <div className="w-10"></div> {/* Spacer for symmetry */}
                </div>

                <div className="p-4 relative">
                  {/* File Tabs */}
                  <div className="flex space-x-1 mb-4 border-b border-zinc-100 dark:border-white/5 pb-2 overflow-x-auto scrollbar-hide">
                    {["App.jsx", "Hero.jsx", "Navbar.jsx"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                          activeTab === tab
                            ? "bg-zinc-100 dark:bg-zinc-800/80 text-emerald-600 dark:text-emerald-400"
                            : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Code Block */}
                  <div className="relative h-[250px] sm:h-[320px] overflow-auto scrollbar-hide rounded-lg">
                    <SyntaxHighlighter
                      language="javascript"
                      style={theme === "light" ? atomOneLight : atomOneDark}
                      customStyle={{
                        margin: 0,
                        background: "transparent",
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                      }}
                      wrapLines={true}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>


            </div>
            
            {/* Soft shadow backing */}
            <div className="absolute -inset-4 bg-emerald-500/10 dark:bg-emerald-500/10 blur-2xl -z-10 rounded-3xl opacity-50"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
