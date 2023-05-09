module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        //primary: a dark grey for text and accents
        primary: "#3C3C3C",
        //secondary: a light grey for background
        secondary: "#F2F2F2",
        //accent: a warm yellow for buttons and highlights
        accent: "#FFCE00",
        //cta: a teal green for call-to-action buttons
        cta: "#127681",
        //cta-hover: hover color for call-to-action-buttons
        ["cta-hover"]: "#3AC3A3",
        //edges: a very light grey for borders and dividers
        edges: "#F8F8F8"
      },
      minWidth: {
        'btn-sm': "5rem"
      }
    },
   
  },
  plugins: [],
}
