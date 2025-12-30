import { Search, Lightbulb, MousePointerClick, Palette, GraduationCap, Puzzle, Compass, Users, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "Growth Audit",
    description: "Identify gaps. Frame a strategy.",
    bg: "bg-chilli-red",
    iconColor: "text-ink-black",
    textColor: "text-ink-black",
    descColor: "text-ink-black/80",
    shadow: "shadow-brutal",
  },
  {
    icon: Lightbulb,
    title: "Strategic Marketing",
    description: "Revamp your website. Target the right audience.",
    bg: "bg-orange-punch",
    iconColor: "text-ink-black",
    textColor: "text-ink-black",
    descColor: "text-ink-black/80",
    shadow: "shadow-brutal",
  },
  {
    icon: MousePointerClick,
    title: "Performance Advertising",
    description: "High-impact campaigns on Google, Meta & YouTube.",
    bg: "bg-mustard",
    iconColor: "text-ink-black",
    textColor: "text-ink-black",
    descColor: "text-ink-black/80",
    shadow: "shadow-brutal",
  },
  {
    icon: Palette,
    title: "Creative Assets",
    description: "Pro photos, cinematic videos & sales collateral.",
    bg: "bg-royal-blue",
    iconColor: "text-ink-black",
    textColor: "text-ink-black",
    descColor: "text-ink-black/80",
    shadow: "shadow-brutal",
  },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="bg-hot-pink py-16 md:py-24 border-b-4 border-ink-black relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(hsl(var(--cream) / 0.4) 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}></div>

      {/* Decorative Doodles - behind content */}
      <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-mustard border-3 border-ink-black animate-bounce z-0"></div>
      <div className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-electric-teal border-2 border-ink-black animate-float z-0"></div>
      <div className="absolute bottom-16 left-16 w-5 h-5 rounded-full bg-royal-blue border-2 border-ink-black animate-pulse z-0"></div>
      <div className="absolute bottom-1/3 right-8 w-4 h-4 rounded-full bg-cream border-2 border-ink-black animate-bounce z-0"></div>
      <div className="absolute top-1/2 left-4 z-0">
        <Sparkles className="text-cream/40 animate-pulse" size={20} />
      </div>
      <div className="absolute bottom-20 right-16 z-0">
        <ArrowRight className="text-ink-black/30 animate-bounce-x" size={24} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-4xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl text-ink-black leading-tight mb-4 md:mb-6">
            Quality leads. <br />Full-proof systems. <br />
            <span className="text-cream">Proven enrollment.</span>
          </h2>
          <p className="font-body text-base md:text-xl text-ink-black font-bold px-2">
            We build predictable funnels—from first click to final enrollment.
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} rounded-xl md:rounded-[2rem] p-4 md:p-8 border-3 md:border-4 border-ink-black ${service.shadow} hover:-translate-y-2 hover:rotate-1 transition-all duration-300 group ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <service.icon className={`${service.iconColor} mb-2 md:mb-4 group-hover:scale-110 transition-transform`} size={32} />
              <h3 className={`font-display font-black text-sm md:text-2xl ${service.textColor} mb-1 md:mb-2`}>{service.title}</h3>
              <p className={`font-body text-xs md:text-base ${service.descColor} font-semibold`}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-3 md:mt-6">
          <div className={`bg-royal-blue rounded-xl md:rounded-[2rem] p-4 md:p-8 border-3 md:border-4 border-ink-black shadow-brutal hover:-translate-y-2 hover:-rotate-1 transition-all duration-300 group ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <GraduationCap className="text-ink-black mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-display font-black text-sm md:text-2xl text-ink-black mb-1 md:mb-2">Sales Training</h3>
            <p className="font-body text-xs md:text-base text-ink-black/80 font-semibold">
              Train your team to close effectively.
            </p>
          </div>

          <div className={`bg-mustard rounded-xl md:rounded-[2rem] p-4 md:p-8 border-3 md:border-4 border-ink-black shadow-brutal hover:-translate-y-2 hover:rotate-1 transition-all duration-300 group ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
            <Puzzle className="text-ink-black mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-display font-black text-sm md:text-2xl text-ink-black mb-1 md:mb-2">Tech Integration</h3>
            <p className="font-body text-xs md:text-base text-ink-black/80 font-semibold">CRM, IVR & WhatsApp automation.</p>
          </div>

          <div className={`bg-orange-punch rounded-xl md:rounded-[2rem] p-4 md:p-8 border-3 md:border-4 border-ink-black shadow-brutal hover:-translate-y-2 hover:-rotate-1 transition-all duration-300 group ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <Compass className="text-ink-black mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-display font-black text-sm md:text-2xl text-ink-black mb-1 md:mb-2">Tour Experience</h3>
            <p className="font-body text-xs md:text-base text-ink-black/80 font-semibold">Persuasive campus tours for parents.</p>
          </div>

          <div className={`bg-chilli-red rounded-xl md:rounded-[2rem] p-4 md:p-8 border-3 md:border-4 border-ink-black shadow-brutal hover:-translate-y-2 hover:rotate-1 transition-all duration-300 group ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
            <Users className="text-ink-black mb-2 md:mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-display font-black text-sm md:text-2xl text-ink-black mb-1 md:mb-2">Parent Engagement</h3>
            <p className="font-body text-xs md:text-base text-ink-black/80 font-semibold">
              Storytelling & community connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
