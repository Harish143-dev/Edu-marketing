import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const LargeTextSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [letterAnimations, setLetterAnimations] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    if (isVisible) {
      // Stagger letter animations
      letterAnimations.forEach((_, index) => {
        setTimeout(() => {
          setLetterAnimations(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 100);
      });
    }
  }, [isVisible]);

  const letters = ['G', 'R', 'O', 'W', '.'];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-ink-black py-24 md:py-40 lg:py-56 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-chilli-red/20 via-transparent to-electric-teal/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-mustard rounded-full blur-[400px] opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Slush-style large text with letter clipping */}
        <div className="text-center">
          <div className={`flex justify-center items-baseline overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`font-display font-black text-[4rem] sm:text-[7rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] leading-[0.8] tracking-tighter text-cream uppercase inline-block transition-all duration-700`}
                style={{
                  transform: letterAnimations[index] ? 'translateY(0) rotate(0deg)' : 'translateY(100%) rotate(15deg)',
                  opacity: letterAnimations[index] ? 1 : 0,
                  transitionDelay: `${index * 80}ms`,
                  transitionTimingFunction: 'var(--elastic-ease-out)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Second line with outline style */}
          <div className={`flex justify-center items-baseline overflow-hidden mt-[-2rem] md:mt-[-4rem] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {['L', 'E', 'A', 'D', '.'].map((letter, index) => (
              <span
                key={index}
                className="font-display font-black text-[4rem] sm:text-[7rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] leading-[0.8] tracking-tighter uppercase inline-block transition-all duration-700"
                style={{
                  WebkitTextStroke: '3px hsl(var(--electric-teal))',
                  color: 'transparent',
                  transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(100%) rotate(-15deg)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${300 + index * 80}ms`,
                  transitionTimingFunction: 'var(--elastic-ease-out)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Third line with gradient */}
          <div className={`flex justify-center items-baseline overflow-hidden mt-[-2rem] md:mt-[-4rem] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {['W', 'I', 'N', '.'].map((letter, index) => (
              <span
                key={index}
                className="font-display font-black text-[4rem] sm:text-[7rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] leading-[0.8] tracking-tighter uppercase inline-block bg-gradient-to-r from-chilli-red via-orange-punch to-mustard bg-clip-text text-transparent transition-all duration-700"
                style={{
                  transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(100%) rotate(15deg)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${600 + index * 80}ms`,
                  transitionTimingFunction: 'var(--elastic-ease-out)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* CTA with 3D button effect */}
        <div className={`text-center mt-12 md:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="font-body text-lg md:text-2xl lg:text-3xl text-cream/60 font-medium max-w-3xl mx-auto mb-10">
            Transform your institution into an admissions powerhouse
          </p>
          
          <a 
            href="https://calendar.app.google/bsJateyseSpkWwc39"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-chilli-red text-cream font-display font-black text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-full border-2 border-ink-black shadow-[5px_5px_0px_0px_hsl(var(--cream))] hover:shadow-[2px_2px_0px_0px_hsl(var(--cream))] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-150 uppercase group hover:bg-orange-punch"
          >
            Start Growing
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </a>
        </div>

        {/* Marquee banner */}
        <div className={`mt-20 md:mt-32 overflow-hidden transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="font-display text-2xl md:text-4xl lg:text-5xl text-cream/20 uppercase font-black mx-8 flex items-center gap-4">
                Enrollment Success
                <span className="w-3 h-3 bg-chilli-red rounded-full"></span>
                Digital Marketing
                <span className="w-3 h-3 bg-electric-teal rounded-full"></span>
                School Growth
                <span className="w-3 h-3 bg-mustard rounded-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeTextSection;