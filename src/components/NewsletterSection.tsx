import { useState } from "react";
import { Mail, Sparkles, ArrowRight, Zap, Star } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-ink-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-chilli-red rounded-full blur-[180px] opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-electric-teal rounded-full blur-[150px] opacity-15 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-mustard rounded-full blur-[200px] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="text-mustard/60" size={28} />
      </div>
      <div className="absolute bottom-10 right-10 animate-wiggle">
        <Zap className="text-electric-teal/60" size={24} />
      </div>
      <div className="absolute top-1/3 right-20 animate-float hidden lg:block">
        <Star className="text-chilli-red/50" size={20} />
      </div>

      {/* Floating circles */}
      <div className="absolute top-20 right-1/4 w-4 h-4 rounded-full bg-electric-teal border-2 border-cream/30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 rounded-full bg-mustard border-2 border-cream/30 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-chilli-red border-2 border-cream/30 animate-float"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with shimmer effect */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full border border-cream/20 text-cream/80 text-sm font-display font-bold uppercase tracking-wider mb-6">
              <Mail size={16} className="text-electric-teal" />
              Stay Updated
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 md:mb-8 leading-[0.95]">
            <span className="block">Your Inbox</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-teal via-mustard to-chilli-red animate-text-shimmer bg-[length:200%_auto]">
              Got Better
            </span>
          </h2>

          <p className="font-body text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Join 500+ education leaders getting exclusive insights on admissions strategies, 
            lead generation tips, and enrollment growth hacks. Weekly, no spam, pure value.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-cream/10 backdrop-blur-md border-2 border-cream/30 rounded-xl sm:rounded-l-xl sm:rounded-r-none pl-12 pr-4 py-4 md:py-5 font-body font-bold text-cream placeholder:text-cream/40 focus:outline-none focus:border-electric-teal transition-all text-base md:text-lg hover:bg-cream/15"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="group bg-gradient-to-r from-electric-teal to-electric-teal hover:from-mustard hover:to-mustard text-ink-black font-display font-black text-base md:text-lg px-6 md:px-8 py-4 md:py-5 rounded-xl sm:rounded-l-none sm:rounded-r-xl border-2 border-ink-black transition-all duration-300 flex items-center justify-center gap-2 shadow-brutal hover:shadow-[3px_3px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[3px] hover:translate-y-[3px] disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <Sparkles size={20} className="animate-wiggle" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-cream/50 text-sm font-body">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
              Free forever
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric-teal animate-pulse"></div>
              Weekly insights
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mustard animate-pulse"></div>
              Unsubscribe anytime
            </span>
          </div>
        </div>
      </div>

      {/* Animated marquee text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-gradient-to-r from-ink-black via-transparent to-ink-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8 text-cream/10 font-display font-black text-xl md:text-2xl uppercase tracking-widest">
              More Admissions • Better Leads • Growth Engine •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
