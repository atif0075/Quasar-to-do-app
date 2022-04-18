module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-dark': "#1e2023",
        'light-gray': "#eeeeee",
        'light': "#eef2f5",
        green: "#3aa675",
        red: "#ec5975",
        white: "#ffffff",
        blacks: "#141417",
        primary: "#1a5cff"
      }
    },
  },
  plugins: [],
}
