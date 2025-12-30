import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import eyelevelLogo from "@/assets/eyelevel-logo.svg";

const NavPill = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href}
    onClick={onClick}
    className="relative px-5 py-2 font-display font-bold text-base text-ink-black bg-cream rounded-full border-2 border-cream shadow-[3px_3px_0px_0px_hsl(var(--cream))] hover:shadow-[1px_1px_0px_0px_hsl(var(--cream))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 hover:bg-mustard active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-10 left-0 w-full z-50 transition-all duration-500 ease-out bg-ink-black ${
      isScrolled 
        ? "border-b-2 border-cream/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
        : "border-b-4 border-cream/30"
    }`}>
      <div className="px-4 md:px-12 max-w-[1440px] mx-auto h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center h-full cursor-pointer">
          <img src={eyelevelLogo} alt="EyeLevel Growth Studio" className="h-10 md:h-14" />
        </a>

        {/* Desktop Nav Links - Pill buttons */}
        <div className="hidden lg:flex items-center justify-center h-full">
          <div className="flex items-center gap-3">
            <NavPill href="#our-process">Our Process</NavPill>
            <NavPill href="#solutions">Solutions</NavPill>
            <NavPill href="#the-studio">The Studio</NavPill>
            <NavPill href="#why-us">Why Us</NavPill>
            <NavPill href="#portfolio">Portfolio</NavPill>
          </div>
        </div>

        {/* CTA Button with 3D effect */}
        <a 
          href="https://calendar.app.google/bsJateyseSpkWwc39" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center h-full"
        >
          <span className="bg-chilli-red text-cream px-6 md:px-8 py-2.5 md:py-3 rounded-full font-display font-black text-sm md:text-base uppercase tracking-wide border-2 border-ink-black shadow-[4px_4px_0px_0px_hsl(var(--ink-black))] hover:shadow-[2px_2px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 hover:bg-orange-punch active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
            Pick a Time
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center justify-center p-2 text-ink-black bg-cream border-2 border-cream rounded-full shadow-[2px_2px_0px_0px_hsl(var(--cream))] hover:shadow-[1px_1px_0px_0px_hsl(var(--cream))] hover:translate-x-[1px] hover:translate-y-[1px] transition-all" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-ink-black border-t-2 border-cream/30 py-6 px-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            <NavPill href="#our-process" onClick={() => setIsOpen(false)}>Our Process</NavPill>
            <NavPill href="#solutions" onClick={() => setIsOpen(false)}>Solutions</NavPill>
            <NavPill href="#the-studio" onClick={() => setIsOpen(false)}>The Studio</NavPill>
            <NavPill href="#why-us" onClick={() => setIsOpen(false)}>Why Us</NavPill>
            <NavPill href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavPill>
            <a 
              href="https://calendar.app.google/bsJateyseSpkWwc39" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 block text-center bg-chilli-red text-cream px-6 py-3 rounded-full font-display font-black text-base uppercase border-2 border-ink-black shadow-[3px_3px_0px_0px_hsl(var(--ink-black))] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            >
              Pick a Time
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
