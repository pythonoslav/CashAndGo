import { Box, Typography } from "@mui/material";
import step1 from "../FAQComponent/assets/BangkokBankStep/step1.svg";
import step2 from "../FAQComponent/assets/BangkokBankStep/step2.svg";
import step3 from "../FAQComponent/assets/BangkokBankStep/step3.svg";
import step4 from "../FAQComponent/assets/BangkokBankStep/step4.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const InstructionsBangkokBank = () => {
  const {language} = useLanguage();
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
      {/* Заголовок */}
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
        {language === "ru" ? "После того, как в чате с менеджером вы договорились об обмене: " : "After confirming the exchange details with our manager in chat"}
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

      {/* Грид из 4 шагов в 2 колонки на всех экранах */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // ВСЕГДА 2 колонки
          gap: 2, // Отступ между ячейками
        }}
      >
        {/* Шаг 1 */}
        <Box sx={{ textAlign: "left" }}>
          <img
            src={step1}
            alt="Шаг 1"
            style={{
              width: "100%",   // Ширина 100% ячейки
              height: "auto",  // Сохраняем пропорции
              borderRadius: "8px",
              marginBottom: "6px",
            }}
          />
          <Typography sx={{ fontSize: "13px", color: "#333" }}>
            1. {language === 'ru' ? "Нажмите " : "Press "}<strong>Cardless withdrawal»</strong>{language === 'ru' ? " на банкомате" : " on the ATM screen."}

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
            2. {language === 'ru' ? "Нажмите " : "Press "} <strong>«Bangkok bank mobile banking»</strong>{language === 'ru' ? " на банкомате" : "on the ATM."}
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
            3. {language === 'ru' ? "На экране появится QR-код," : "A QR code will appear on the screen."} <strong>{language === 'ru' ? "сфотографируйте его и пришлите в чат с менеджером" : "Take a photo and send it to our manager in chat."}</strong>
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
            4. {language === 'ru' ? "Мы отсканируем QR-код, напишем вам об этом, после чего нажмите " : "We will scan the QR code and confirm the transaction. Once you receive confirmation, press"}
            <strong>«Confirm»</strong>{language === 'ru' ? " и заберите деньги" : " on the ATM and collect your cash."}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionsBangkokBank;
