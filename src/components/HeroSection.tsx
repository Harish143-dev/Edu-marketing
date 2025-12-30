import LeadForm from "./LeadForm";
import { Sparkles, Star, Zap, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="relative min-h-[90vh] pt-28 md:pt-36 pb-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-teal via-royal-blue to-hot-pink"></div>
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] bg-mustard rounded-full blur-[80px] opacity-40 animate-float"></div>
      <div className="absolute bottom-[15%] right-[5%] w-[200px] h-[200px] bg-chilli-red rounded-full blur-[70px] opacity-35 animate-float-delayed"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cream rounded-full blur-[120px] opacity-15"></div>
      
      {/* Floating Doodle Icons - positioned in empty spaces */}
      <div className="absolute top-[12%] left-[3%] animate-float z-10">
        <div className="bg-mustard p-3 rounded-full border-3 border-ink-black shadow-brutal-sm rotate-12">
          <Sparkles className="text-ink-black" size={24} />
        </div>
      </div>
      <div className="absolute top-[8%] right-[3%] animate-float-delayed z-10">
        <div className="bg-chilli-red p-2.5 rounded-full border-3 border-ink-black shadow-brutal-sm -rotate-12">
          <Star className="text-cream" size={20} />
        </div>
      </div>
      <div className="absolute bottom-[38%] left-[3%] animate-wiggle z-10">
        <div className="bg-electric-teal p-2 rounded-full border-3 border-ink-black shadow-brutal-sm rotate-6">
          <Zap className="text-ink-black" size={18} />
        </div>
      </div>
      <div className="absolute top-[45%] right-[3%] animate-bounce z-10 hidden md:block">
        <div className="bg-cream p-2.5 rounded-full border-3 border-ink-black shadow-brutal-sm -rotate-6">
          <Heart className="text-chilli-red" size={20} />
        </div>
      </div>

      {/* Colorful circle doodles - in corner spaces */}
      <div className="absolute top-[25%] left-[1%] w-4 h-4 rounded-full bg-mustard border-2 border-ink-black animate-pulse z-10"></div>
      <div className="absolute top-[18%] right-[1%] w-3 h-3 rounded-full bg-lime-spark border-2 border-ink-black animate-bounce z-10"></div>
      <div className="absolute bottom-[45%] right-[1%] w-5 h-5 rounded-full bg-orange-punch border-2 border-ink-black animate-float z-10"></div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-ink-black/20"></div>

      <div className="relative z-20 w-full max-w-[1440px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-4 md:py-6">
        {/* Left Content - 3D Hero Text */}
        <div className="flex flex-col gap-4 md:gap-6 relative">
          {/* 3D Text Effect */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] uppercase">
            <span 
              className="block text-cream relative animate-fade-in"
              style={{
                textShadow: `
                  4px 4px 0px hsl(var(--ink-black)),
                  8px 8px 0px hsl(var(--chilli-red)),
                  12px 12px 0px hsl(var(--ink-black) / 0.3)
                `,
              }}
            >
              More
            </span>
            <span 
              className="block text-mustard relative mt-1 animate-fade-in"
              style={{
                textShadow: `
                  4px 4px 0px hsl(var(--ink-black)),
                  8px 8px 0px hsl(var(--orange-punch)),
                  12px 12px 0px hsl(var(--ink-black) / 0.3)
                `,
                animationDelay: '0.1s',
              }}
            >
              Admissions.
            </span>
            <span 
              className="block text-cream relative mt-1 animate-fade-in"
              style={{
                textShadow: `
                  4px 4px 0px hsl(var(--ink-black)),
                  8px 8px 0px hsl(var(--electric-teal)),
                  12px 12px 0px hsl(var(--ink-black) / 0.3)
                `,
                animationDelay: '0.2s',
              }}
            >
              Better Leads.
            </span>
          </h1>

          <p className="font-body text-sm md:text-base lg:text-lg text-cream max-w-md leading-relaxed font-bold drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Complete enrollment systems. Fixed timelines. Zero confusion.
          </p>

          {/* Pill badges */}
          <div className="flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="bg-cream text-ink-black font-display font-bold text-xs px-3 py-1.5 rounded-full shadow-brutal border-2 border-ink-black hover:scale-105 transition-transform cursor-default">
              ✦ Marketing
            </span>
            <span className="bg-chilli-red text-cream font-display font-bold text-xs px-3 py-1.5 rounded-full shadow-brutal border-2 border-ink-black hover:scale-105 transition-transform cursor-default">
              ✦ Branding
            </span>
            <span className="bg-mustard text-ink-black font-display font-bold text-xs px-3 py-1.5 rounded-full shadow-brutal border-2 border-ink-black hover:scale-105 transition-transform cursor-default">
              ✦ Enrollment
            </span>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <LeadForm />
        </div>
      </div>

      {/* Angled bottom edge */}
      <div 
        className="absolute -bottom-8 left-0 right-0 h-24 bg-ink-black z-30"
        style={{ transform: 'rotate(-3deg) scaleX(1.3)' }}
      ></div>
    </main>
  );
};

export default HeroSection;
