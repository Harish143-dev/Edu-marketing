import { XCircle, X, Flag, TrendingDown } from "lucide-react";

const PainPointsMarquee = () => {
  const painPoints = [
    { icon: XCircle, text: "No Admission" },
    { icon: X, text: "Invalid Leads" },
    { icon: Flag, text: "Lost to Competitors" },
    { icon: TrendingDown, text: "High Marketing Spend" },
  ];

  // Duplicate many times for seamless infinite loop
  const items = [...painPoints, ...painPoints, ...painPoints, ...painPoints, ...painPoints, ...painPoints, ...painPoints, ...painPoints];

  return (
    <div className="relative -mt-12 -mb-12 overflow-visible z-40">
      {/* Black background at the same angle */}
      <div 
        className="absolute inset-0 bg-ink-black"
        style={{ transform: 'rotate(-3deg) scaleX(1.4)', top: '-8px', bottom: '-8px' }}
      ></div>
      
      {/* Yellow stripe with marquee */}
      <div 
        className="relative bg-mustard border-y-4 border-ink-black py-5 overflow-hidden"
        style={{ transform: 'rotate(-3deg) scaleX(1.3)' }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {items.map((point, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 mx-8 font-display font-bold text-ink-black text-lg md:text-xl uppercase tracking-wide"
            >
              <point.icon size={22} className="text-ink-black flex-shrink-0" strokeWidth={2.5} />
              {point.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainPointsMarquee;
