import { CheckCircle } from "lucide-react";
import eyelevelLogo from "@/assets/eyelevel-white-logo.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-ink-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Effects */}
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-chilli-red rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-mustard rounded-full blur-[120px] opacity-30"></div>
      

      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Logo */}
        <img 
          src={eyelevelLogo} 
          alt="EyeLevel Growth Studio" 
          className="h-24 md:h-32 mx-auto mb-12" 
        />

        {/* Success Icon */}
        <div className="bg-electric-teal size-24 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-ink-black shadow-brutal animate-pop-in">
          <CheckCircle className="text-ink-black" size={48} />
        </div>

        {/* Thank You Message */}
        <h1 className="font-display font-black text-5xl md:text-7xl text-cream mb-6 animate-fade-in-up">
          Thank You!
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-cream/90 font-bold leading-relaxed mb-8">
          Thank you for your inquiry. Our team will get back to you soon.
        </p>

        <div className="bg-mustard text-ink-black font-display font-bold text-lg px-6 py-3 rounded-full border-2 border-ink-black inline-block animate-wiggle">
          We're excited to work with you!
        </div>

        {/* Back to Home */}
        <div className="mt-12">
          <a 
            href="/" 
            className="bg-chilli-red text-cream font-display font-bold text-lg px-8 py-4 rounded-xl border-2 border-ink-black shadow-brutal-sm hover:shadow-[2px_2px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
