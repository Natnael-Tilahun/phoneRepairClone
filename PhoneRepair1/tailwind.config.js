/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thm_root1_color: `var(--thm-root1-color)`,
        thm_root2_color: `var(--thm-root2-color)`,
        thm_primary_color: `var(--thm-primary-colo)`,
        thm_background: `var(--thm-background)`,
        thm_secondary_background: `var(--thm-secondary-background)`,
        thm_secondary_color: `var(--thm-secondary-color)`,
      },
      fontFamily: {
        sans: [`var(--thm-font)`, "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        littelwider: ".1em",
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
