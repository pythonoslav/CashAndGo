import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../helpers/LanguageContext";

const TermsAndConditions = () => {
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
        {language === 'ru' ? "Условия и положения" : "Terms and Conditions"}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1.  {language === 'ru' ? "Введение" : "Introduction"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Добро пожаловать на сайт компании Cash and Go! Используя наш веб-сайт и сервисы,  вы принимаете условия, изложенные в данном документе. Рекомендуем внимательно ознакомиться с ними перед началом использования наших услуг." : "Welcome to the website of Cash and Go! By using our website and services, you agree to the terms outlined in this document. We recommend carefully reviewing these terms before using our services."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. {language === 'ru' ? "Описание услуг" : "Description of Services"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru' ? "Мы предоставляем услуги по обмену валют, позволяя пользователям обменивать  различные валюты по актуальным курсам, представленным на нашем сайте. Все операции должны соответствовать требованиям действующего законодательства и нормативных актов соответствующих юрисдикций." : "We provide currency exchange services, allowing users to exchange various currencies at the current rates displayed on our website. All transactions must comply with applicable laws and regulations of the relevant jurisdictions."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. {language === 'ru' ? "Обязанности пользователя" : "User Responsibilities"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "При использовании наших услуг вы обязуетесь предоставлять достоверные и актуальные данные. Запрещается использование сайта для незаконных действий или нарушений установленных условий и правил." : "When using our services, you agree to provide accurate and up-to-date information. It is prohibited to use the website for illegal activities or actions that violate these terms and conditions."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. {language === 'ru' ? "Ограничение ответственности" : "Limitation of Liability"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {language === 'ru' ? "Компания Cash and Go не несет ответственности за возможные убытки или ущерб, возникающие в результате использования или невозможности использования наших услуг.  Мы не гарантируем абсолютную точность и актуальность представленных валютных курсов и оставляем за собой право изменять их без предварительного уведомления." : "Cash and Go is not responsible for any potential losses or damages resulting from the use or inability to use our services. We do not guarantee the absolute accuracy and relevance of the exchange rates presented and reserve the right to modify them without prior notice."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        5. {language === 'ru' ? "Конфиденциальность данных" : "Data Privacy"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Мы обрабатываем персональные данные в соответствии с нашей Политикой конфиденциальности. Используя наш сайт, вы даете согласие на сбор и обработку информации согласно установленным в ней правилам." : "We process personal data in accordance with our Privacy Policy. By using our website, you consent to the collection and processing of information as outlined in that policy."} 
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        6. {language === 'ru' ? "Изменение условий" : "Changes to the Terms"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Мы можем вносить изменения в настоящие Условия в любое время. Обновленные условия вступают в силу сразу после публикации на сайте.  Рекомендуем регулярно проверять данный раздел для ознакомления с возможными изменениями." : "We may update these Terms at any time. The revised terms take effect immediately upon publication on the website. We recommend regularly checking this section to stay informed about any changes."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        7. {language === 'ru' ? "Прекращение доступа" : "Termination of Access"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      {language === 'ru' ? "Мы оставляем за собой право заблокировать или приостановить доступ к нашим услугам без предварительного уведомления в случае нарушения пользователем данных Условий или по другим основаниям." : "We reserve the right to block or suspend access to our services without prior notice in the event of a violation of these Terms or for any other reason."}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        8. {language === 'ru' ? "Применимое право" : "Governing Law"}
      </Typography>
      <Typography variant="body1">
        {language === 'ru' ? "Настоящие Условия регулируются законодательством Королевства Таиланд, где зарегистрирована компания Cash and Go. Все споры, связанные с данным соглашением, подлежат рассмотрению в компетентных судах данной юрисдикции." : "These Terms are governed by the laws of the Kingdom of Thailand, where Cash and Go is registered. Any disputes related to this agreement shall be resolved in the competent courts of this jurisdiction."}
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
