import React from "react";
import { Box, Typography } from "@mui/material";

const CookiePolicy = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2,fontSize: "30px" }}>
        Политика использования файлов cookies
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Используя сайт Cash and Go, вы даете согласие на применение файлов cookies, 
        которые помогают нам оптимизировать работу сайта и предлагать персонализированный контент.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. Что представляют собой файлы cookies?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Cookies – это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
        при посещении нашего сайта. Они позволяют запоминать ваши предпочтения, 
        а также собирать анонимные данные, необходимые для анализа и улучшения сервиса.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. Какие файлы cookies мы используем?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы применяем несколько видов cookies:
      </Typography>
      <ul>
        <li><Typography variant="body1"><b>Обязательные cookies</b> – необходимы для корректной работы сайта и его ключевых функций.</Typography></li>
        <li><Typography variant="body1"><b>Аналитические cookies</b> – помогают анализировать взаимодействие пользователей с сайтом, что способствует его усовершенствованию.</Typography></li>
        <li><Typography variant="body1"><b>Функциональные cookies</b> – позволяют запоминать настройки и предпочтения пользователей, повышая удобство использования сайта.</Typography></li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. Как управлять файлами cookies?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Вы можете настроить параметры cookies в своем браузере. Доступны функции блокировки или удаления cookies, 
        но это может повлиять на работоспособность и удобство использования сайта.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. Принятие использования cookies
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Продолжая использовать наш сайт, вы соглашаетесь с обработкой cookies в соответствии с данной политикой. 
        Если вы не согласны с этим, рекомендуем изменить настройки браузера или прекратить использование сайта.
      </Typography>

      <Typography variant="body1">
        Если у вас возникли вопросы или требуется дополнительная информация, 
        свяжитесь с нами через форму обратной связи на сайте.
      </Typography>
    </Box>
  );
};

export default CookiePolicy;
