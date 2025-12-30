import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        "chilli-red": "hsl(var(--chilli-red))",
        "orange-punch": "hsl(var(--orange-punch))",
        "mustard": "hsl(var(--mustard))",
        "electric-teal": "hsl(var(--electric-teal))",
        "cream": "hsl(var(--cream))",
        "ink-black": "hsl(var(--ink-black))",
        // Optional accents
        "hot-pink": "hsl(var(--hot-pink))",
        "lime-spark": "hsl(var(--lime-spark))",
        "royal-blue": "hsl(var(--royal-blue))",
        "neon-green": "hsl(var(--neon-green))",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        lg: "1.5rem",
        md: "1rem",
        sm: "0.5rem",
        xl: "2.5rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--electric-teal) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--electric-teal) / 0.6)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "reveal-left": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-right": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "pop-in": "pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "bounce-x": "bounce-x 1s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "slide-in-bottom": "slide-in-bottom 0.8s ease-out forwards",
        "scale-up": "scale-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-scale": "reveal-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-left": "reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-right": "reveal-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blur-in": "blur-in 1s ease-out forwards",
        "bounce-subtle": "bounce-subtle 1.5s ease-in-out infinite",
      },
      boxShadow: {
        brutal: "6px 6px 0px 0px hsl(var(--ink-black))",
        "brutal-sm": "4px 4px 0px 0px hsl(var(--ink-black))",
        "brutal-lg": "8px 8px 0px 0px hsl(var(--ink-black))",
        "brutal-white": "4px 4px 0px 0px hsl(0 0% 100%)",
        "brutal-teal": "6px 6px 0px 0px hsl(var(--electric-teal))",
        "brutal-red": "6px 6px 0px 0px hsl(var(--chilli-red))",
        "brutal-mustard": "6px 6px 0px 0px hsl(var(--mustard))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
