import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  { 
    title: "Strategic Advisory", 
    description: "Fractional CMO & GTM roadmaps.",
    bg: "bg-chilli-red",
    textColor: "text-cream",
    descColor: "text-cream/80",
  },
  { 
    title: "Advanced Post-Production", 
    description: "3D, CGI & VFX for brand stories.",
    bg: "bg-electric-teal",
    textColor: "text-ink-black",
    descColor: "text-ink-black/70",
  },
  { 
    title: "Web & App Development", 
    description: "Custom UI/UX & digital products.",
    bg: "bg-mustard",
    textColor: "text-ink-black",
    descColor: "text-ink-black/70",
  },
  { 
    title: "AI & MarTech", 
    description: "Predictive analytics & automation.",
    bg: "bg-orange-punch",
    textColor: "text-ink-black",
    descColor: "text-ink-black/70",
  },
  { 
    title: "OOH Media", 
    description: "Billboard & transit media planning.", 
    span: true,
    bg: "bg-royal-blue",
    textColor: "text-cream",
    descColor: "text-cream/80",
  },
];

const PlaygroundSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="bg-cream py-16 md:py-24 border-b-4 border-ink-black relative" id="the-studio">
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`lg:w-1/3 lg:sticky lg:top-32 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="inline-block bg-chilli-red text-cream px-3 md:px-4 py-1 rounded-full font-mono font-bold text-xs md:text-sm uppercase mb-3 md:mb-4 border-2 border-ink-black animate-pulse">
              The Expertise Behind the Engine
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-ink-black leading-none mb-4 md:mb-6">
              A Modern Growth Studio at your service.
            </h2>
            <p className="font-body text-ink-black/80 text-base md:text-lg font-bold">
              High-end expertise typical agencies lack:
            </p>
          </div>

          <div 
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 w-full"
          >
            {capabilities.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-4 md:p-6 rounded-xl md:rounded-2xl border-3 md:border-4 border-ink-black shadow-brutal-sm hover:-translate-y-1 transition-all duration-300 ${item.span ? "sm:col-span-2" : ""} ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className={`font-display font-bold text-lg md:text-2xl ${item.textColor} mb-1 md:mb-2`}>{item.title}</h3>
                <p className={`font-body ${item.descColor} text-xs md:text-sm font-semibold`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
