import { Box, IconButton, Typography } from "@mui/material";

const InstructionsOnlineTransfer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",   // Ограничиваем ширину при необходимости
        margin: "0 auto",
        borderRadius: "15px",
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
          fontSize: "18px",
          textAlign: "left",
        }}
      >
        После того, как в чате с менеджером вы договорились об обмене:{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: "normal",
            color: "#333",
            fontSize: "16px",
          }}
        >
          уточнили курс, утвердили сумму и произвели оплату в рублях или USDT,
          можно смело снимать ваши деньги с банкомата
        </Typography>
      </Typography>

      {/* Список шагов - ВСЕГДА одна колонка */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr", // Одна колонка на всех экранах
          gap: 2,                     // Отступ между шагами
        }}
      >
        {/* Шаг 1 */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", width: "100%" }}>
            Сообщите название банка и ФИО, указанные в счете, с которого Вы будете отправлять перевод
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", mt: 2 }}>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              1
            </IconButton>
          </Box>
        </Box>

        {/* Шаг 2 */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", mb: 1 }}>
            Мы пришлем Вам актуальные реквизиты и комментарий, который нужно будет указать при переводе
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px", color: "#0E1111", fontWeight: 700, flexGrow: 1 }}>
              Если вы не успеваете совершить перевод - сообщите об этом нам, и мы подберем для вас новые реквизиты
            </Typography>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              2
            </IconButton>
          </Box>
        </Box>

        {/* Шаг 3 */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", mb: 1 }}>
            После того, как вы получили реквизиты, перевод нужно совершить в течение 10-15 минут
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px", color: "#0E1111", fontWeight: 700, flexGrow: 1 }}>
              На каждый обмен действуют новые реквизиты, не переводите деньги самостоятельно,
              пока мы не подтвердим, куда совершать перевод
            </Typography>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              3
            </IconButton>
          </Box>
        </Box>

        {/* Шаг 4 */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", width: "100%" }}>
            После оплаты пришлите нам полный чек в формате PDF
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", mt: 2 }}>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              4
            </IconButton>
          </Box>
        </Box>

        {/* Шаг 5 */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", width: "100%" }}>
            Мы проверим платеж, и в течение 5-10 минут вы можете снимать деньги через банкомат
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", mt: 2 }}>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              5
            </IconButton>
          </Box>
        </Box>

        {/* Итоговое предупреждение (шаг 6) */}
        <Box
          sx={{
            textAlign: "left",
            p: 2,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#333", fontWeight: 300 }}>
            Будьте внимательны и всегда уточняйте реквизиты перед оплатой - мы{" "}
            <Typography component="span" sx={{ color: "black", fontWeight: 700, fontSize: "16px" }}>
              НЕ НЕСЕМ
            </Typography>{" "}
            ответственности за неправильно совершенный перевод
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", mt: 2 }}>
            <IconButton
              sx={{
                backgroundColor: "#0055D4",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: 1,
                "&:hover": {
                  backgroundColor: "#0055D4",
                },
              }}
            >
              6
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionsOnlineTransfer;
