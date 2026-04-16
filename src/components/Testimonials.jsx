const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day. It feels extremely natural and intuitive.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before. A completely seamless experience.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member. Truly premium.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 sm:gap-16 lg:gap-24">
          {/* Left side - Header */}
          <div className="lg:w-5/12 w-full text-center lg:text-left sticky top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              What developers are <span className="text-emerald-600 dark:text-emerald-400">saying</span> about us
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Thousands of teams rely on our platform to build faster, test smarter, and deploy with complete confidence.
            </p>
          </div>

          {/* Right side - testimonials */}
          <div className="lg:w-7/12 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="glass-card rounded-3xl p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group border border-zinc-200 dark:border-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start space-x-4 sm:space-x-6 relative z-10">
                    <div className="flex-shrink-0 pt-2">
                      <div className="text-4xl sm:text-5xl font-serif font-bold text-emerald-500/30 leading-none">
                        "
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className="text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
                        {testimonial.content}
                      </p>
                      
                      <div className="flex items-center space-x-4 border-t border-zinc-200 dark:border-white/5 pt-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-zinc-200 dark:border-white/10"
                        />
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base sm:text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
