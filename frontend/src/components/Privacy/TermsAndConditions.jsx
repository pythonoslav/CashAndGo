import React from "react";
import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
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
        Условия и положения
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        1. Введение
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Добро пожаловать на сайт компании Cash and Go! Используя наш веб-сайт и сервисы, 
        вы принимаете условия, изложенные в данном документе. 
        Рекомендуем внимательно ознакомиться с ними перед началом использования наших услуг.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        2. Описание услуг
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы предоставляем услуги по обмену валют, позволяя пользователям обменивать 
        различные валюты по актуальным курсам, представленным на нашем сайте. 
        Все операции должны соответствовать требованиям действующего законодательства и 
        нормативных актов соответствующих юрисдикций.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        3. Обязанности пользователя
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        При использовании наших услуг вы обязуетесь предоставлять достоверные и актуальные данные. 
        Запрещается использование сайта для незаконных действий или нарушений установленных условий и правил.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        4. Ограничение ответственности
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Компания Cash and Go не несет ответственности за возможные убытки или ущерб, 
        возникающие в результате использования или невозможности использования наших услуг. 
        Мы не гарантируем абсолютную точность и актуальность представленных валютных курсов и 
        оставляем за собой право изменять их без предварительного уведомления.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        5. Конфиденциальность данных
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы обрабатываем персональные данные в соответствии с нашей Политикой конфиденциальности. 
        Используя наш сайт, вы даете согласие на сбор и обработку информации согласно установленным в ней правилам.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        6. Изменение условий
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы можем вносить изменения в настоящие Условия в любое время. 
        Обновленные условия вступают в силу сразу после публикации на сайте. 
        Рекомендуем регулярно проверять данный раздел для ознакомления с возможными изменениями.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        7. Прекращение доступа
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Мы оставляем за собой право заблокировать или приостановить доступ к нашим услугам 
        без предварительного уведомления в случае нарушения пользователем данных Условий 
        или по другим основаниям.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        8. Применимое право
      </Typography>
      <Typography variant="body1">
        Настоящие Условия регулируются законодательством Королевства Таиланд, где зарегистрирована компания Cash and Go. 
        Все споры, связанные с данным соглашением, подлежат рассмотрению в компетентных судах данной юрисдикции.
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
