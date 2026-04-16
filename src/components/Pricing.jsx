import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for individuals and side-projects",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Community support",
      "API access",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Custom integrations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited API access",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative glass-card rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.mostPopular
                  ? "border-emerald-500/30 dark:border-emerald-500/40 shadow-[0_4px_40px_rgba(16,185,129,0.1)] transform lg:-translate-y-4 bg-emerald-50/50 dark:bg-emerald-500/[0.02]"
                  : "border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10"
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-4 w-full left-0 flex justify-center z-10">
                  <div className="flex items-center space-x-1.5 px-4 py-1.5 bg-emerald-500 rounded-full text-[13px] font-semibold text-white dark:text-emerald-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm h-10">
                  {plan.description}
                </p>
                <div className="flex items-baseline mt-6">
                  <span className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500 ml-2 font-medium">
                    /mo
                  </span>
                </div>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent mb-8"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureKey) => (
                  <li
                    key={featureKey}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mt-0.5 border border-emerald-200 dark:border-emerald-500/20">
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  plan.mostPopular
                    ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-emerald-950 hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                    : "bg-white dark:bg-white/5 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-medium">
            Need a custom enterprise plan?{" "}
            <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 border-b border-emerald-600/30 dark:border-emerald-400/30 pb-0.5 ml-1 transition-colors">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
