// CSS Breakpoint definitions for responsive app
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

// theme object to be imported to styled-components <ThemeProvider> for frequently used styles
const theme = {
  colors: {
    background: "#A1B9CE",
    websiteTitle: "#1B2A41",
    cardBackground: "#fff",
    cardTitle: "#0C1821",
  },
  fontSize: {
    largeCardTitle: "24px",
    smallCardTitle: "20px",
  },
  // define responsive media queries
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
  },
};

export default theme;
