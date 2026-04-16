import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "../ThemeContext";

const features = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices seamlessly.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage with zero configuration.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection explores your execution paths and suggests precise resolutions.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];

export default function Features() {
  const { theme } = useTheme();

  return (
    <section
      id="features"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10" 
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-12 sm:gap-16 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Code Section */}
              <div className="flex-1 w-full relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-300/30 dark:from-emerald-500/20 to-transparent blur-3xl rounded-3xl opacity-50 dark:opacity-30 pointer-events-none" />
                <div className="relative group perspective-1000">
                  <div
                    className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6 overflow-hidden"
                  >
                    {/* Ide Interface */}
                    <div className="bg-white dark:bg-[#050505]/90 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-inner">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-zinc-500 text-xs font-medium">
                          {feature.title.toLowerCase().replace(" ", "-")}.ts
                        </span>
                        <div className="w-8"></div>
                      </div>
                      <div className="p-4">
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
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-tight text-xl">0{key + 1}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
