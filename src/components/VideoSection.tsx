import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VideoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-mustard py-12 md:py-20 border-b-4 border-ink-black relative overflow-hidden"
    >
      

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className={`font-display font-black text-3xl sm:text-5xl md:text-7xl text-ink-black mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Serious attention. <span className="text-chilli-red">No confusion.</span>
        </h2>

        <div className={`relative w-full max-w-5xl mx-auto aspect-video bg-ink-black rounded-xl md:rounded-[2rem] border-4 border-ink-black shadow-brutal-lg overflow-hidden group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACWBi2ul-D7oFVNYkrl9A57ux230jQSCyh9FcFsuPqUEtHo5o6nC-aNrYwUISsNAa6_MxaEqIuhyS5xCQBq_kLLwlYjQmNB0wn_uFHJ_enSswnGlE0go0DPFFifYHZrqgHpolUa3QZN8hV6zCX0QRB4kKsKJGDzKWG99jEPDcUUkeIGRI6bQRtywT-mpWSEh_IR_fivaaxOBVOY6HasZpNgeG7A0YIrDpKWHNRX5se5LxRVBcaITazuz_9C-jS_0VaZOshSWSALNs')" }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-16 md:size-24 rounded-full bg-chilli-red/90 backdrop-blur-sm border-4 border-cream flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <Play className="text-cream ml-1 md:ml-2" size={32} fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-ink-black/80 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-cream/30 backdrop-blur-md">
            <span className="text-cream font-mono font-bold uppercase tracking-widest text-xs md:text-sm">Cinematic Reel 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
