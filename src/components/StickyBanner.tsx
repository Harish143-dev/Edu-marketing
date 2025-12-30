import { useState } from "react";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollToForm = () => {
    const heroSection = document.querySelector('main');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const bannerText = "Limited: Free growth audit—few slots left!";

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-orange-punch border-b-2 border-ink-black overflow-hidden">
      {/* Marquee Container */}
      <div className="relative flex items-center py-2 md:py-2.5">

        {/* Scrolling Marquee */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 md:mx-10">
              <span className="font-display font-bold text-ink-black text-xs md:text-sm uppercase tracking-wide">
                {bannerText}
              </span>
              <span className="mx-4 md:mx-6 text-ink-black font-bold">✦</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 md:mx-10">
              <span className="font-display font-bold text-ink-black text-xs md:text-sm uppercase tracking-wide">
                {bannerText}
              </span>
              <span className="mx-4 md:mx-6 text-ink-black font-bold">✦</span>
            </div>
          ))}
        </div>

        {/* CTA button - fixed on right with pop-up animation */}
        <button
          onClick={scrollToForm}
          className="absolute right-2 md:right-4 z-10 bg-ink-black text-cream font-display font-bold text-[10px] md:text-xs px-3 md:px-4 py-1 md:py-1.5 rounded-full border-2 border-ink-black hover:bg-chilli-red transition-all duration-300 hover:scale-110 hover:-translate-y-1 whitespace-nowrap shadow-[2px_2px_0px_0px_hsl(var(--cream))] animate-bounce-subtle"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
