import { Box, Typography } from "@mui/material";
import step1 from "../FAQComponent/assets/BangkokBankStep/step1.svg";
import step2 from "../FAQComponent/assets/BangkokBankStep/step2.svg";
import step3 from "../FAQComponent/assets/BangkokBankStep/step3.svg";
import step4 from "../FAQComponent/assets/BangkokBankStep/step4.svg";

const InstructionsBangkokBank = () => {
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
        После того, как в чате с менеджером вы договорились об обмене:{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: "normal",
            color: "#333",
            fontSize: "14px",
          }}
        >
          уточнили курс, утвердили сумму и произвели оплату в рублях или USDT, можно смело снимать ваши деньги с банкомата
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
            1. Нажмите <strong>«Bangkok Bank Mobile Banking»</strong> на банкомате
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
            2. Нажмите <strong>«K PLUS»</strong> на банкомате
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
            3. На экране появится QR-код, сфотографируйте его и пришлите в чат с менеджером
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
            4. Мы отсканируем QR-код, напишем вам об этом, после чего нажмите{" "}
            <strong>«Confirm»</strong> и заберите деньги
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionsBangkokBank;
