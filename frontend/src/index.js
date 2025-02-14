import React from "react";
import ReactDOM from "react-dom/client"; // Новый импорт для React 18
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";


// Создаем тему с глобальными стилями
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif", // Устанавливаем шрифт
    h1: {
      margin: 0,
      fontWeight: 700,
    },
    h2: {
      margin: 0,
      fontWeight: 700,
    },
    h3: {
      margin: 0,
      fontWeight: 700,
    },
    p: {
      margin: 0,
      lineHeight: 1.6,
    },
  },
  palette: {

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          zoom: 1,
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "'Inter', sans-serif",
          color: "#fff",
          // background: "url('/background.svg') no-repeat center top",
          backgroundSize: "cover", // Сохраняем пропорции SVG
          minHeight: "100vh",
          overflowX: "hidden",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
        ol: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
        button: {
          fontFamily: "'Inter', sans-serif",
          cursor: "pointer",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        ".leaflet-control-attribution": {
          display: "none !important",
        },
        ".leaflet-top.leaflet-left .leaflet-control-zoom": {
          left: "10px !important",
          top: "10px !important",
        }
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
