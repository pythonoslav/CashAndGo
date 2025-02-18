import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
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
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: "30px" }}>
        Политика конфиденциальности
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. Общие положения
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Данная Политика конфиденциальности регулирует порядок сбора, использования и защиты информации, 
        которую пользователи предоставляют при использовании веб-сайтов, управляемых компанией Cash and Go. 
        Мы стремимся обеспечить защиту ваших персональных данных и прозрачность их обработки.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. Сбор данных
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы собираем различные категории информации, включая:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>Персональные данные:</b> имя, адрес электронной почты и другая контактная информация, 
            предоставляемая вами при регистрации, подписке на рассылки или отправке сообщений через формы обратной связи.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>Автоматически собираемые данные:</b> IP-адрес, сведения о браузере, устройстве и операционной системе, 
            а также данные о взаимодействии с сайтом, включая посещенные страницы и время пребывания на них.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>Файлы cookie и аналогичные технологии:</b> используются для анализа пользовательской активности и 
            персонализации работы с сайтом. Вы можете изменить настройки использования cookie в параметрах своего браузера.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. Использование информации
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Собранные данные применяются для:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">Обеспечения работы веб-сайта и оказания запрашиваемых вами услуг.</Typography>
        </li>
        <li>
          <Typography variant="body1">Улучшения качества веб-сайта и персонализации пользовательского опыта.</Typography>
        </li>
        <li>
          <Typography variant="body1">Анализа поведения пользователей и повышения удобства взаимодействия с ресурсом.</Typography>
        </li>
        <li>
          <Typography variant="body1">Обеспечения безопасности сайта и предотвращения мошеннических действий.</Typography>
        </li>
        <li>
          <Typography variant="body1">Размещения рекламы и проведения маркетинговых исследований (с вашего согласия).</Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. Передача данных третьим лицам
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы не передаем ваши личные данные третьим сторонам за исключением следующих случаев:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>С вашего согласия:</b> если вы предоставили явное разрешение на передачу информации.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>Партнерам и подрядчикам:</b> предоставляем данные сервисам, участвующим в обработке платежей, анализе трафика и 
            других операциях, связанных с функционированием сайта. Эти компании обязаны соблюдать меры конфиденциальности.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>В соответствии с законодательством:</b> если этого требуют нормы права, судебные постановления или государственные органы.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        5. Изменения в Политике конфиденциальности
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы оставляем за собой право вносить изменения в данную Политику в любое время. 
        Обновления будут опубликованы на текущей странице. 
        Рекомендуем периодически проверять документ на предмет изменений.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        6. Согласие с условиями
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Используя наш веб-сайт, вы выражаете согласие с настоящей Политикой конфиденциальности. 
        Если вы не согласны с её положениями, пожалуйста, прекратите использование сайта.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        7. Контактная информация
      </Typography>
      <Typography variant="body1">
        Если у вас возникли вопросы или замечания относительно Политики конфиденциальности, 
        вы можете связаться с нами через доступные каналы связи.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
