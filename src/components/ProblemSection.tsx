import { AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-cream pt-24 pb-16 md:pt-32 md:pb-32 border-b-4 border-ink-black relative overflow-hidden" 
      id="our-process"
    >
      {/* Angled top edge with ink-black to match hero bottom */}
      <div 
        className="absolute -top-8 left-0 right-0 h-24 bg-ink-black z-0"
        style={{ transform: 'rotate(-3deg) scaleX(1.3)' }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className={`bg-mustard rounded-[1.5rem] md:rounded-[3rem] border-4 border-ink-black p-5 md:p-12 lg:p-16 shadow-[8px_8px_0px_0px_hsl(var(--ink-black))] md:shadow-[12px_12px_0px_0px_hsl(var(--ink-black))] relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Doodle elements */}
          <div className="absolute -top-6 md:-top-10 left-4 md:left-16 -rotate-12 animate-wiggle">
            <div className="bg-card p-2.5 md:p-4 rounded-full border-4 border-ink-black shadow-lg">
              <AlertTriangle className="text-chilli-red" size={28} />
            </div>
          </div>
          
          {/* Colorful circle doodles - behind content */}
          <div className="absolute -top-3 right-8 md:right-20 w-4 h-4 md:w-6 md:h-6 rounded-full bg-electric-teal border-2 border-ink-black animate-bounce z-0"></div>
          <div className="absolute top-1/4 -right-2 md:-right-4 w-3 h-3 md:w-5 md:h-5 rounded-full bg-chilli-red border-2 border-ink-black animate-pulse z-0"></div>
          <div className="absolute bottom-8 -left-2 md:-left-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-royal-blue border-2 border-ink-black animate-float z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch pt-2 md:pt-4">
            {/* Left Column - Headline */}
            <div className={`flex items-center transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-ink-black leading-[1.1]">
                Stop Handing Your Admissions to the School Next Door.
              </h2>
            </div>
            
            {/* Right Column - Content */}
            <div className={`lg:border-l-4 lg:border-ink-black lg:pl-10 xl:pl-12 flex flex-col justify-center gap-5 md:gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <p className="font-body text-base md:text-lg font-bold text-ink-black leading-relaxed">
                Every competitor fights for the same bite. When global brands enter, standing out becomes nearly impossible.
              </p>
              <div className="relative bg-ink-black rounded-xl md:rounded-2xl p-5 md:p-6 border-4 border-chilli-red shadow-[4px_4px_0px_0px_hsl(var(--chilli-red))] md:shadow-[6px_6px_0px_0px_hsl(var(--chilli-red))]">
                <div className="absolute -top-3 left-4 md:left-6 bg-chilli-red text-cream px-3 md:px-5 py-1 md:py-1.5 rounded-full font-display font-black text-xs md:text-sm uppercase tracking-wide border-2 border-ink-black animate-pulse">
                  The Real Problem
                </div>
                <p className="font-body text-base md:text-lg font-bold text-cream leading-relaxed pt-3 md:pt-4">
                  This is a <span className="text-electric-teal">growth-system problem</span>. Without strategy, you waste money on low-quality leads that never convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
