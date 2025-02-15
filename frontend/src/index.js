import React from "react";
import ReactDOM from "react-dom/client"; // Новый импорт для React 18
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// Создаем тему с глобальными стилями
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
          overflowX: "hidden",
          fontSize: "16px",
          "-webkit-text-size-adjust": "100%", // Исправляем текст в Safari
        },

        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          minHeight: "100dvh", // Исправление проблем с vh в Safari
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          "-webkit-font-smoothing": "antialiased", // Улучшение шрифтов в macOS
          "-moz-osx-font-smoothing": "grayscale",
        },

        "#root": {
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "column",
        },

        // **Fix Retina scaling (Mac)**
        "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)": {
          body: {
            transform: "scale(0.85)",
            transformOrigin: "top left",
          },
        },

        // **Fix aspect ratio in Chrome 21:9 + уменьшение на 10%**
        "@media screen and (min-aspect-ratio: 21/9)": {
          body: {
            transform: "scale(0.9)", // Уменьшаем контент на 10%
            transformOrigin: "top center",
          },
          img: {
            maxWidth: "90%", // Делаем чуть меньше ширину
            height: "auto",
            aspectRatio: "16/9",
            objectFit: "contain",
          },
          video: {
            maxWidth: "90%",
            height: "auto",
            aspectRatio: "16/9",
            objectFit: "cover",
          },
          ".container": {
            maxWidth: "85vw", // Немного сужаем контейнер
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
