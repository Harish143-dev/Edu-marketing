import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919789099499"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 drop-shadow-lg" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-ink-black text-cream px-4 py-2 rounded-lg font-display font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-cream/20">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
