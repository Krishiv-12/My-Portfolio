const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
  extend: {
    scrollBehavior: ['responsive'],
     transitionProperty: {
      width: "width",
    },
  },
},
};

export default config;
