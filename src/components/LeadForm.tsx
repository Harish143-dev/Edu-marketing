import { useState } from "react";

const LeadForm = () => {
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
    <div className="bg-cream p-5 md:p-8 rounded-xl md:rounded-[2rem] border-4 border-ink-black shadow-brutal-lg relative mt-4 w-full max-w-md">
      <div className="absolute -top-5 -right-4 md:-top-6 md:-right-6 rotate-6 hidden sm:block animate-wiggle">
        <div className="bg-mustard text-ink-black font-display font-black text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg border-2 border-ink-black uppercase shadow-brutal-sm hover:scale-110 transition-transform cursor-pointer">
          Start Here!
        </div>
      </div>

      <h3 className="font-display font-extrabold text-lg md:text-2xl text-ink-black mb-3 md:mb-4 uppercase text-center">
        Get Free Growth Audit
      </h3>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" onSubmit={handleSubmit}>
        <input
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors placeholder:text-muted-foreground text-sm md:text-base"
          placeholder="Name of Institution"
          type="text"
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          required
        />
        <input
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors placeholder:text-muted-foreground text-sm md:text-base"
          placeholder="Contact Person"
          type="text"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          required
        />
        <select
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors text-sm md:text-base"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
        >
          <option value="">Type of Institution</option>
          <option value="preschool">Preschool</option>
          <option value="school">School</option>
          <option value="college">College</option>
          <option value="university">University</option>
        </select>
        <select
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors text-sm md:text-base"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          required
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="uae">UAE</option>
          <option value="singapore">Singapore</option>
          <option value="australia">Australia</option>
          <option value="other">Other</option>
        </select>
        <div className="flex gap-2 md:col-span-2">
          <select
            className="w-24 md:w-28 bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-2 md:px-3 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors text-sm md:text-base"
            value={formData.countryCode}
            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>{c.code}</option>
            ))}
          </select>
          <input
            className="flex-1 bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors placeholder:text-muted-foreground text-sm md:text-base"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <input
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors md:col-span-2 placeholder:text-muted-foreground text-sm md:text-base"
          placeholder="Email ID"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          className="w-full bg-cream border-2 border-ink-black rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 font-body font-bold text-ink-black focus:ring-0 focus:border-chilli-red transition-colors md:col-span-2 placeholder:text-muted-foreground text-sm md:text-base"
          placeholder="Message (Optional)"
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          className="md:col-span-2 bg-chilli-red text-cream font-display font-black text-base md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-ink-black shadow-[4px_4px_0px_0px_hsl(var(--ink-black))] hover:shadow-[2px_2px_0px_0px_hsl(var(--ink-black))] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 w-full hover:bg-orange-punch uppercase"
          type="submit"
        >
          Claim Now
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
