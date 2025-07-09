import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../helpers/LanguageContext";

const CookiePolicy = () => {
  const {language} = useLanguage()
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
        {language === 'ru'? "Политика использования файлов cookies": "Cookies Policy"}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru'? "Используя сайт Cash and Go, вы даете согласие на применение файлов cookies,  которые помогают нам оптимизировать работу сайта и предлагать персонализированный контент.": "By using the Cash and Go website, you consent to the use of cookies, which help us optimize website performance and provide personalized content."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. {language === 'ru'? "Что представляют собой файлы cookies?": "What Are Cookies?"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru'? "Cookies – это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении нашего сайта. Они позволяют запоминать ваши предпочтения, а также собирать анонимные данные, необходимые для анализа и улучшения сервиса.": "Cookies are small text files that are stored on your device when you visit our website. They allow us to remember your preferences and collect anonymous data necessary for analyzing and improving our services."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. {language === 'ru'? "Какие файлы cookies мы используем?": "What Cookies Do We Use?"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru'? "Мы применяем несколько видов cookies: ": "We use several types of cookies: "} 
      </Typography>
      <ul>
        <li><Typography variant="body1"><b>{language === 'ru'? "Обязательные cookies ": "Essential Cookies "} </b>{language === 'ru'? " – необходимы для корректной работы сайта и его ключевых функций.": " Required for the proper functioning of the website and its core features."} </Typography></li>
        <li><Typography variant="body1"><b>{language === 'ru'? "Аналитические cookies ": "Analytical Cookies "}</b> {language === 'ru'? " – помогают анализировать взаимодействие пользователей с сайтом, что способствует его усовершенствованию.": " Help analyze user interactions with the website to enhance its performance."} </Typography></li>
        <li><Typography variant="body1"><b>{language === 'ru'? "Функциональные cookies ": "Functional Cookies "}</b> {language === 'ru'? " – позволяют запоминать настройки и предпочтения пользователей, повышая удобство использования сайта.": " Enable the website to remember user settings and preferences, improving the user experience."}</Typography></li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. {language === 'ru'? "Как управлять файлами cookies?": "How to Manage Cookies?"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru'? "Вы можете настроить параметры cookies в своем браузере. Доступны функции блокировки или удаления cookies, но это может повлиять на работоспособность и удобство использования сайта.": "You can configure your cookie preferences in your browser settings. Options to block or delete cookies are available, but this may affect the functionality and usability of the website."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. {language === 'ru'? "Принятие использования cookies": "Acceptance of Cookies Usage"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru'? "Продолжая использовать наш сайт, вы соглашаетесь с обработкой cookies в соответствии с данной политикой. Если вы не согласны с этим, рекомендуем изменить настройки браузера или прекратить использование сайта.": "By continuing to use our website, you agree to the processing of cookies in accordance with this policy. If you do not agree, we recommend adjusting your browser settings or discontinuing the use of the website."} 
      </Typography>

      <Typography variant="body1">
        {language === 'ru'? "Если у вас возникли вопросы или требуется дополнительная информация, свяжитесь с нами через форму обратной связи на сайте.": "If you have any questions or require further information, please contact us via the feedback form on our website."}
      </Typography>
    </Box>
  );
};

export default CookiePolicy;
