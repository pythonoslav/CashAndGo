import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Сброс стандартных стилей */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Устанавливаем фон для всего сайта */
   body {
    font-family: 'Inter', sans-serif;
    color: #fff;
    background: url('/background.svg') no-repeat center;
    background-size: cover; /* Сохраняем пропорции SVG */
    background-position: center top; /* Центрируем по ширине, выравниваем по верху */
    min-height: 100vh;
    overflow-x: hidden;
  }
  /* Дополнительные стили */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyles;
