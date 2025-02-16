import React from "react";
import ReactDOM from "react-dom/client"; // Новый импорт для React 18
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {},
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
          fontSize: "16px",
          "-webkit-text-size-adjust": "100%",
        },

        body: {
          margin: 0,
          padding: 0,
          width: "100vw",
          minHeight: "100dvh",
          maxWidth: "100vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },

        "#root": {
          width: "100vw",
          maxWidth: "100vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        },


        // **Fix aspect ratio in Chrome 21:9**
        "@media screen and (min-aspect-ratio: 21/9)": {
          body: {
            maxWidth: "100vw",
            overflowX: "hidden",
          },
          img: {
            maxWidth: "100%", // Разрешаем растягивание
            height: "auto",
            objectFit: "contain", // Запрещаем странное обрезание
          },
          video: {
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover", // Отключаем aspect-ratio 16:9
          },
          ".container": {
            maxWidth: "100vw",
            width: "100vw", // Разрешаем контейнеру растягиваться
            overflowX: "hidden",
          },
        },

        a: { textDecoration: "none", color: "inherit" },
        ul: { margin: 0, padding: 0, listStyle: "none" },
        ol: { margin: 0, padding: 0, listStyle: "none" },
        button: { fontFamily: "'Inter', sans-serif", cursor: "pointer" },

        // **Scrollbar styling**
        "::-webkit-scrollbar": { width: "8px" },
        "::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
        "::-webkit-scrollbar-thumb": { background: "#888", borderRadius: "10px" },
        "::-webkit-scrollbar-thumb:hover": { background: "#555" },

        // **Fix Leaflet map controls**
        ".leaflet-control-attribution": { display: "none !important" },
        ".leaflet-top.leaflet-left .leaflet-control-zoom": {
          left: "10px !important",
          top: "10px !important",
        },
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
