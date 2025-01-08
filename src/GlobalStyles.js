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
    color: #fff; /* Белый текст */
    overflow-x: hidden; /* Убираем горизонтальный скролл */
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
