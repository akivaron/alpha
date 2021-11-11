import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#181D33",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['"Fira Code"', "Roboto"].join(","),
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});
