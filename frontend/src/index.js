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
        // Базовые стили для html
        html: {
          width: "100%",       // Вместо 100vw
          maxWidth: "100%",    // Вместо 100vw
          overflowX: "hidden",
          fontSize: "16px",
          "-webkit-text-size-adjust": "100%", // Предотвращаем авто-увеличение на iOS
        },

        // Стили для body
        body: {
          margin: 0,
          padding: 0,
          width: "100%",       // Вместо 100vw
          minHeight: "100vh",  // Можно использовать 100dvh, но осторожно с моб. браузерами
          maxWidth: "100%",    // Вместо 100vw
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },

        // Стили для #root
        "#root": {
          width: "100%",       // Вместо 100vw
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        },

        // Фиксируем Retina Mac только на >=768px + Retina
        "@media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)": {
          body: {
            // Уменьшаем масштаб, если нужно исправить рендер на Mac Retina
            transform: "scale(0.9)",
            transformOrigin: "top left",
          },
        },

        // Фикс для 21:9
        "@media screen and (min-aspect-ratio: 21/9)": {
          body: {
            overflowX: "hidden",
          },
          img: {
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
          },
          video: {
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          },
          ".container": {
            maxWidth: "100%",
            width: "100%",
            overflowX: "hidden",
          },
        },

        a: { textDecoration: "none", color: "inherit" },
        ul: { margin: 0, padding: 0, listStyle: "none" },
        ol: { margin: 0, padding: 0, listStyle: "none" },
        button: { fontFamily: "'Inter', sans-serif", cursor: "pointer" },

        // Стили скроллбара
        "::-webkit-scrollbar": { width: "8px" },
        "::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
        "::-webkit-scrollbar-thumb": { background: "#888", borderRadius: "10px" },
        "::-webkit-scrollbar-thumb:hover": { background: "#555" },

        // Фиксы для Leaflet
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
