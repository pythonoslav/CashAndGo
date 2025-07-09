import { Box, Typography } from "@mui/material";
import step1 from "../FAQComponent/assets/KrungThaiStep/step1.svg";
import step2 from "../FAQComponent/assets/KrungThaiStep/step2.svg";
import step3 from "../FAQComponent/assets/KrungThaiStep/step3.svg";
import step4 from "../FAQComponent/assets/KrungThaiStep/step4.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const InstructionsKrungThai = () => {
  const {language} = useLanguage()
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        borderRadius: "16px",
        p: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#0E1111",
          mb: 1,
          fontSize: "16px",
          textAlign: "left",
        }}
      >
        {language === 'ru' ? "После того, как в чате с менеджером вы договорились об обмене:" : "After confirming the exchange details with our manager in chat "}
        <Typography
          component="span"
          sx={{
            fontWeight: "normal",
            color: "#333",
            fontSize: "14px",
          }}
        >
          {language === 'ru' ? "уточнили курс, утвердили сумму и произвели оплату в рублях или USDT, можно смело снимать ваши деньги с банкомата" : " — agreeing on the rate, amount, and making the payment — you can safely withdraw your cash from the ATM."}

        </Typography>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Всегда 2 колонки
          gap: 2, // Отступ между ячейками
        }}
      >
        {/* Шаг 1 */}
        <Box sx={{ textAlign: "left" }}>
          <img
            src={step1}
            alt="Шаг 1"
            style={{
              width: "100%",
              height: "auto", // Сохраняем пропорции
              borderRadius: "8px",
              marginBottom: "6px",
            }}
          />
          <Typography sx={{ fontSize: "13px", color: "#333" }}>
          1. {language === 'ru' ? "Нажмите " : "Press "} <strong>«Cardless ATM</strong>{language === 'ru' ? "на банкомате" : "on the ATM screen."} 
          </Typography>
        </Box>

        {/* Шаг 2 */}
        <Box sx={{ textAlign: "left" }}>
          <img
            src={step2}
            alt="Шаг 2"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "6px",
            }}
          />
          <Typography sx={{ fontSize: "13px", color: "#333" }}>
          2. {language === 'ru' ? "Нажмите " : "Press "} <strong>«Cardless ATM»</strong>{language === 'ru' ? "на втором окне  После оплаты наш менеджер отправит в чат фото, " : "Our manager will send you a photo in chat "} <strong>{language === 'ru' ? "где будет 6-значный код, номер телефона и сумму бат к выдаче" : "containing a 6-digit code, your phone number, and the withdrawal amount."}</strong>
          </Typography>
        </Box>

        {/* Шаг 3 */}
        <Box sx={{ textAlign: "left" }}>
          <img
            src={step3}
            alt="Шаг 3"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "6px",
            }}
          />
          <Typography sx={{ fontSize: "13px", color: "#333" }}>
          3. {language === 'ru' ? "Введите номер телефона из сообщения в чате и нажмите " : "Enter your phone number from the message in chat and press  "} <strong>«Confirm»</strong>
          </Typography>
        </Box>

        {/* Шаг 4 */}
        <Box sx={{ textAlign: "left" }}>
          <img
            src={step4}
            alt="Шаг 4"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "6px",
            }}
          />
          <Typography sx={{ fontSize: "13px", color: "#333" }}>
          4. {language === 'ru' ? "Введите 6-значный код из сообщения в чате, нажмите" : " Enter the 6-digit code from the message in chat, press "} <strong>«Confirm»</strong> {language === 'ru' ? " и заберите деньги" : ", and collect your cash."}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionsKrungThai;
