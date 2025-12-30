import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsBg from "@/assets/students-bg.jpg";

const CTASection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const [formData, setFormData] = useState({
    institution: "",
    contact: "",
    type: "",
    country: "",
    countryCode: "+91",
    phone: "",
    email: "",
    message: "",
  });

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ institution: "", contact: "", type: "", country: "", countryCode: "+91", phone: "", email: "", message: "" });
    window.open("/thank-you", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${studentsBg})` }}
      ></div>
      
      {/* Dark overlay with slight transparency */}
      <div className="absolute inset-0 bg-ink-black/85"></div>
      

      {/* Colorful doodle circles - behind content */}
      <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-mustard border-2 border-ink-black animate-float z-0"></div>
      <div className="absolute top-1/3 right-8 w-4 h-4 rounded-full bg-electric-teal border-2 border-ink-black animate-bounce z-0"></div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 rounded-full bg-chilli-red border-2 border-ink-black animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-4 h-4 rounded-full bg-royal-blue border-2 border-ink-black animate-float z-0"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Transparent Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 md:mb-12 bg-cream/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-cream/20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl text-cream mb-4 md:mb-6">
            Ready to fill every seat?
          </h2>
          <p className="font-body text-base md:text-xl font-bold text-cream/80">
            Let's build your growth engine together.
          </p>
        </div>

        <div 
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`bg-ink-black/60 backdrop-blur-md p-5 md:p-12 rounded-[1.5rem] md:rounded-[3rem] border-4 border-cream/30 shadow-brutal-teal relative transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
        >
          <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 animate-wiggle">
            <div className="bg-chilli-red text-cream font-display font-black text-sm md:text-lg px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-ink-black uppercase shadow-brutal-sm">
              Get Free Growth Audit
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2" onSubmit={handleSubmit}>
            <input
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all placeholder:text-cream/50 text-sm md:text-base hover:bg-cream/15"
              placeholder="Name of Institution"
              type="text"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              required
            />
            <input
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all placeholder:text-cream/50 text-sm md:text-base hover:bg-cream/15"
              placeholder="Contact Person"
              type="text"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
            <select
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all text-sm md:text-base hover:bg-cream/15"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="" className="bg-ink-black text-cream">Type of Institution</option>
              <option value="preschool" className="bg-ink-black text-cream">Preschool</option>
              <option value="school" className="bg-ink-black text-cream">School</option>
              <option value="college" className="bg-ink-black text-cream">College</option>
              <option value="university" className="bg-ink-black text-cream">University</option>
            </select>
            <select
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all text-sm md:text-base hover:bg-cream/15"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              required
            >
              <option value="" className="bg-ink-black text-cream">Select Country</option>
              <option value="india" className="bg-ink-black text-cream">India</option>
              <option value="usa" className="bg-ink-black text-cream">USA</option>
              <option value="uk" className="bg-ink-black text-cream">UK</option>
              <option value="uae" className="bg-ink-black text-cream">UAE</option>
              <option value="singapore" className="bg-ink-black text-cream">Singapore</option>
              <option value="australia" className="bg-ink-black text-cream">Australia</option>
              <option value="other" className="bg-ink-black text-cream">Other</option>
            </select>
            <div className="flex gap-2 md:col-span-2">
              <select
                className="w-24 md:w-28 bg-cream/10 border-2 border-cream/30 rounded-xl px-2 md:px-3 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all text-sm md:text-base hover:bg-cream/15"
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className="bg-ink-black text-cream">{c.code}</option>
                ))}
              </select>
              <input
                className="flex-1 bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all placeholder:text-cream/50 text-sm md:text-base hover:bg-cream/15"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <input
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all md:col-span-2 placeholder:text-cream/50 text-sm md:text-base hover:bg-cream/15"
              placeholder="Email ID"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              className="w-full bg-cream/10 border-2 border-cream/30 rounded-xl px-4 py-3 md:py-4 font-body font-bold text-cream focus:ring-0 focus:border-electric-teal transition-all md:col-span-2 placeholder:text-cream/50 text-sm md:text-base hover:bg-cream/15"
              placeholder="Message (Optional)"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              className="md:col-span-2 bg-chilli-red text-cream font-display font-black text-lg md:text-2xl px-6 md:px-8 py-4 md:py-5 rounded-full border-2 border-ink-black shadow-[5px_5px_0px_0px_hsl(var(--ink-black))] hover:shadow-[2px_2px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-150 uppercase w-full hover:bg-orange-punch"
              type="submit"
            >
              Claim Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
