import { Brain, ShieldCheck, Handshake, Star, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Brain,
    title: "Senior-Led Strategy",
    description: "High-level leadership & data-backed roadmaps.",
    bg: "bg-chilli-red",
    hoverBorder: "hover:border-chilli-red",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Clarity",
    description: "Fixed timelines. Weekly updates. Clean approvals.",
    bg: "bg-electric-teal",
    hoverBorder: "hover:border-electric-teal",
  },
  {
    icon: Handshake,
    title: "Ownership",
    description: "Your work is our portfolio—because it is.",
    bg: "bg-mustard",
    hoverBorder: "hover:border-mustard",
  },
];

const ExpertiseSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="bg-lime-spark py-16 md:py-24 border-b-4 border-ink-black relative" id="why-us">
      

      {/* Decorative Doodles - behind content */}
      <div className="absolute top-12 left-10 w-5 h-5 rounded-full bg-chilli-red border-2 border-ink-black animate-bounce z-0"></div>
      <div className="absolute top-1/4 right-8 w-4 h-4 rounded-full bg-electric-teal border-2 border-ink-black animate-float z-0"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-mustard border-2 border-ink-black animate-pulse z-0"></div>
      <div className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-royal-blue border-2 border-ink-black animate-bounce z-0"></div>
      
      {/* Decorative Icons - behind content */}
      <div className="absolute top-20 right-1/4 animate-wiggle hidden md:block z-0">
        <Star className="text-ink-black/20" size={32} />
      </div>
      <div className="absolute bottom-24 left-1/4 animate-float hidden md:block z-0">
        <Sparkles className="text-ink-black/20" size={28} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl text-ink-black mb-4 md:mb-6">
            Global expertise. <br />
            <span className="text-chilli-red">Parent psychology.</span>
          </h2>
          <p className="font-body text-base md:text-xl text-ink-black/80 font-medium max-w-3xl mx-auto px-2">
            Co-founder <span className="text-ink-black font-black">Akmal Rahman Billekar</span> brings 15+ years of global marketing experience across UK, US, India & Dubai—deeply understanding parent psychology and international admissions.
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-cream p-6 md:p-8 rounded-xl md:rounded-[2rem] border-4 border-ink-black shadow-brutal transition-all text-center group hover:-translate-y-2 hover:rotate-1 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`size-16 md:size-20 mx-auto ${feature.bg} rounded-full flex items-center justify-center border-4 border-ink-black mb-4 md:mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                <feature.icon className={feature.bg === "bg-chilli-red" ? "text-cream" : "text-ink-black"} size={28} />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-ink-black mb-2 md:mb-4">{feature.title}</h3>
              <p className="font-body text-sm md:text-base text-ink-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
