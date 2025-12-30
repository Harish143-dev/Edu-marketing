import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin, Twitter, ArrowUpRight, Sparkles, Heart } from "lucide-react";
import eyelevelLogo from "@/assets/eyelevel-white-logo.png";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/theeyelevelstudio?igsh=azQxYmxuaXQwZWY3", color: "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-yellow-500" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@theeyelevelstudio?si=DHTw86gYTWijtHvr", color: "group-hover:bg-chilli-red" },
  { name: "Facebook", icon: Facebook, url: "https://m.facebook.com/61579639101877/", color: "group-hover:bg-royal-blue" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/theeyelevelstudio/", color: "group-hover:bg-[#0077B5]" },
  { name: "X", icon: Twitter, url: "https://x.com/eye_levelstudio?s=21", color: "group-hover:bg-cream group-hover:text-ink-black" },
];

const footerLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Our Process", href: "#our-process" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-ink-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-chilli-red rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[250px] bg-electric-teal rounded-full blur-[120px] opacity-10"></div>
      </div>

      {/* Marquee banner */}
      <div className="bg-orange-punch border-y-4 border-ink-black py-4 overflow-hidden relative">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-6 flex items-center gap-3">
              <Sparkles size={14} className="text-ink-black" />
              <span className="text-ink-black font-display font-bold text-sm uppercase tracking-widest">
                More Admissions
              </span>
              <span className="w-1 h-1 rounded-full bg-ink-black/50"></span>
              <span className="text-ink-black font-display font-bold text-sm uppercase tracking-widest">
                Better Leads
              </span>
              <span className="w-1 h-1 rounded-full bg-ink-black/50"></span>
              <span className="text-ink-black font-display font-bold text-sm uppercase tracking-widest">
                Growth Engine
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <img 
              src={eyelevelLogo} 
              alt="EyeLevel Growth Studio" 
              className="h-28 md:h-40 mb-6 hover:scale-105 transition-transform duration-300" 
            />
            <p className="font-body text-cream/60 text-base md:text-lg leading-relaxed max-w-md mb-8">
              We help educational institutions fill every seat with strategic marketing, 
              performance ads, and enrollment systems that actually work.
            </p>
            
            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:hello@eyelevelstudio.in"
                className="group flex items-center gap-3 bg-cream/5 hover:bg-cream/10 px-5 py-3 rounded-xl border border-cream/10 hover:border-electric-teal/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-teal/20 flex items-center justify-center group-hover:bg-electric-teal/30 transition-colors">
                  <Mail size={18} className="text-electric-teal" />
                </div>
                <span className="font-body font-bold text-cream group-hover:text-electric-teal transition-colors">
                  hello@eyelevelstudio.in
                </span>
              </a>
              
              <a 
                href="tel:+919789099499"
                className="group flex items-center gap-3 bg-cream/5 hover:bg-cream/10 px-5 py-3 rounded-xl border border-cream/10 hover:border-mustard/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-mustard/20 flex items-center justify-center group-hover:bg-mustard/30 transition-colors">
                  <Phone size={18} className="text-mustard" />
                </div>
                <span className="font-body font-bold text-cream group-hover:text-mustard transition-colors">
                  +91 97890 99499
                </span>
              </a>
              
              <div className="flex items-center gap-3 bg-cream/5 px-5 py-3 rounded-xl border border-cream/10">
                <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center">
                  <MapPin size={18} className="text-cream/60" />
                </div>
                <span className="font-body font-bold text-cream/60">
                  Chennai, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-cream text-lg mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 font-body font-bold text-cream/60 hover:text-cream transition-colors"
                  >
                    <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-electric-teal" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-black text-cream text-lg mb-6 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`group w-14 h-14 rounded-2xl bg-cream/10 flex items-center justify-center border border-cream/10 hover:border-transparent transition-all duration-300 hover:scale-110 ${link.color}`}
                >
                  <link.icon size={22} className="text-cream transition-colors" />
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-chilli-red to-chilli-red hover:from-electric-teal hover:to-electric-teal text-cream hover:text-ink-black font-display font-black text-base px-6 py-4 rounded-xl border-2 border-ink-black shadow-brutal hover:shadow-[3px_3px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300"
            >
              Let's Talk Growth
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-sm font-body">
              © 2026 EyeLevel Growth Studio. All rights reserved.
            </p>
            <p className="text-cream/30 text-sm font-body flex items-center gap-2">
              Made with 
              <Heart size={14} className="text-chilli-red fill-chilli-red animate-pulse" />
              in Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
