import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../helpers/LanguageContext";

const PrivacyPolicy = () => {
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
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: "30px" }}>
        
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. {language === 'ru' ? "Общие положения" : "General Provisions"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru' 
        ? 
        "Данная Политика конфиденциальности регулирует порядок сбора, использования и защиты информации, которую пользователи предоставляют при использовании веб-сайтов, управляемых компанией Cash and Go. Мы стремимся обеспечить защиту ваших персональных данных и прозрачность их обработки." 
        : 
        "This Privacy Policy governs the collection, use, and protection of information that users provide when using websites operated by Cash and Go. We are committed to ensuring the protection of your personal data and maintaining transparency in its processing."}
        
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. {language === 'ru' ? "Сбор данных" : "Data Collection"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru' ? " Мы собираем различные категории информации, включая:" : "Data Collection"}
       
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "Персональные данные:" : "Personal Data:"}</b> {language === 'ru' ? "имя, адрес электронной почты и другая контактная информация, предоставляемая вами при регистрации, подписке на рассылки или отправке сообщений через формы обратной связи." : " Personal Data: Name, email address, and other contact information provided by you during registration, subscription to newsletters, or when submitting messages via contact forms."}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "Автоматически собираемые данные:" : "Automatically Collected Data:"}</b> {language === 'ru' ? "IP-адрес, сведения о браузере, устройстве и операционной системе, также данные о взаимодействии с сайтом, включая посещенные страницы и время пребывания на них." : "IP address, browser, device, and operating system information, as well as data on user interaction with the website, including visited pages and time spent on them."}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "Файлы cookie и аналогичные технологии:" : "Cookies and Similar Technologies:"}</b> {language === 'ru' ? "используются для анализа пользовательской активности и персонализации работы с сайтом. Вы можете изменить настройки использования cookie в параметрах своего браузера." : "Used to analyze user activity and personalize the website experience. You can change cookie settings in your browser preferences."}
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. {language === 'ru' ? "Использование информации" : " Use of Information"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Собранные данные применяются для:" : "The collected data is used for:"}
        
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">{language === 'ru' ? "Обеспечения работы веб-сайта и оказания запрашиваемых вами услуг." : "Ensuring the proper functioning of the website and providing requested services."}</Typography>
        </li>
        <li>
          <Typography variant="body1">{language === 'ru' ? "Улучшения качества веб-сайта и персонализации пользовательского опыта." : "Improving the website’s quality and personalizing user experience."}</Typography>
        </li>
        <li>
          <Typography variant="body1">{language === 'ru' ? "Анализа поведения пользователей и повышения удобства взаимодействия с ресурсом." : "Analyzing user behavior and enhancing website usability."}</Typography>
        </li>
        <li>
          <Typography variant="body1">{language === 'ru' ? "Обеспечения безопасности сайта и предотвращения мошеннических действий." : "Ensuring website security and preventing fraudulent activities."}</Typography>
        </li>
        <li>
          <Typography variant="body1">{language === 'ru' ? "Размещения рекламы и проведения маркетинговых исследований (с вашего согласия)." : "Displaying advertisements and conducting marketing research (with your consent)."}</Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. {language === 'ru' ? "Передача данных третьим лицам" : "Data Sharing with Third Parties"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Мы не передаем ваши личные данные третьим сторонам за исключением следующих случаев:" : "We do not share your personal data with third parties, except in the following cases:"}
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "С вашего согласия: " : "With Your Consent: "}</b> {language === 'ru' ? "если вы предоставили явное разрешение на передачу информации." : " If you have explicitly authorized the transfer of your information."}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "Партнерам и подрядчикам: " : "Partners and Contractors: "}</b> {language === 'ru' ? "предоставляем данные сервисам, участвующим в обработке платежей, анализе трафика и  других операциях, связанных с функционированием сайта. Эти компании обязаны соблюдать меры конфиденциальности." : "We share data with services involved in payment processing, traffic analysis, and other operations related to website functionality. These companies are required to comply with confidentiality measures."}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>{language === 'ru' ? "В соответствии с законодательством: " : "As Required by Law: "}</b> {language === 'ru' ? "если этого требуют нормы права, судебные постановления или государственные органы. " : "If required by legal regulations, court orders, or governmental authorities. "}
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        5. {language === 'ru' ? "Изменения в Политике конфиденциальности" : "Changes to the Privacy Policy"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Мы оставляем за собой право вносить изменения в данную Политику в любое время. Обновления будут опубликованы на текущей странице. Рекомендуем периодически проверять документ на предмет изменений." : "We reserve the right to make changes to this Policy at any time. Updates will be published on this page. We recommend periodically reviewing this document for any changes."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        6. {language === 'ru' ? "Согласие с условиями" : "Acceptance of Terms"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Используя наш веб-сайт, вы выражаете согласие с настоящей Политикой конфиденциальности.  Если вы не согласны с её положениями, пожалуйста, прекратите использование сайта." : "By using our website, you agree to this Privacy Policy. If you do not agree with its provisions, please discontinue the use of the website."} 
        
       
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        7. {language === 'ru' ? "Контактная информация" : "Contact Information"}
      </Typography>
      <Typography variant="body1">
      {language === 'ru' ? "Если у вас возникли вопросы или замечания относительно Политики конфиденциальности, вы можете связаться с нами через доступные каналы связи." : "If you have any questions or concerns regarding this Privacy Policy, you can contact us through the available communication channels."}    
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
