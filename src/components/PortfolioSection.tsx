import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portfolioHunkyDory from "@/assets/portfolio-hunky-dory.png";
import portfolioSchoolBranding from "@/assets/portfolio-school-branding.jpg";
import portfolioWhatsappMarketing from "@/assets/whatsapp.jpg";
import portfolioGraduationCelebration from "@/assets/portfolio-graduation-celebration.jpg";
import portfolioWebExperience from "@/assets/vfx.jpg";
import portfolioMetaAds from "@/assets/Preschool_Instagram_Mockup.jpg";
import portfolioGoogleBusiness from "@/assets/portfolio-google-business.png";
import portfolioCounselor from "@/assets/CallCenter.jpg";
import portfolioSocial from "@/assets/crm.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const PortfolioSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const portfolioItems = [
    { image: portfolioHunkyDory, span: "" },
    { image: portfolioGraduationCelebration, span: "col-span-2 row-span-2" },
    { image: portfolioSocial, span: "" },
    { image: portfolioWhatsappMarketing, span: "" },
    { image: portfolioWebExperience, span: "" },
    { image: portfolioCounselor, span: "" },
    { image: portfolioWebsite, span: "" },
    { image: portfolioMetaAds, span: "" },
    { image: portfolioGoogleBusiness, span: "" },
  ];

  return (
    <section
      className="bg-cream py-16 md:py-24 border-b-4 border-ink-black relative overflow-hidden"
      id="portfolio"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl text-ink-black leading-none">
            Your work is <br />
            our portfolio.
          </h2>
          <div className="hidden md:block">
            <button className="bg-ink-black text-cream font-display font-bold text-lg px-8 py-3 rounded-full border-2 border-cream shadow-brutal-white hover:shadow-[2px_2px_0px_0px_hsl(0_0%_100%)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
              See All Projects
            </button>
          </div>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-[180px] md:auto-rows-[280px] transition-all duration-700 delay-200 ${
            gridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-xl md:rounded-[2rem] border-3 md:border-4 border-ink-black overflow-hidden shadow-brutal bg-ink-black hover:-translate-y-1 transition-transform duration-300 ${item.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-6 text-center">
          <button className="bg-ink-black text-cream font-display font-bold text-base px-6 py-3 rounded-full border-2 border-cream shadow-brutal-white">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
