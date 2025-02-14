import { Box, Typography } from "@mui/material";


import step1 from "../FAQComponent/assets/KasikornStep/KasikornStep1.png";
import step2 from "../FAQComponent/assets/KasikornStep/KasikornStep2.png";
import step3 from "../FAQComponent/assets/KasikornStep/KasikornStep3.png";
import step4 from "../FAQComponent/assets/KasikornStep/KasikornStep4.png";


const InstructionsKasikorn = () => {
    return (
        <Box
            sx={{
                maxWidth: "90%", // Уменьшили ширину
                margin: "0 auto",
                borderRadius: "15px", // Уменьшили радиус
                padding: "15px", // Уменьшили отступ
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: "bold",
                    color: "#0E1111",
                    marginBottom: "15px", // Уменьшили отступ
                    fontSize: "18px", // Уменьшили размер шрифта
                    textAlign: "left", // Выравнивание по левому краю
                }}
            >
                После того, как в чате с менеджером вы договорились об обмене:{" "}
                <Typography
                    component="span"
                    sx={{
                        fontWeight: "normal", // Можно сделать текст менее выделяющимся
                        color: "#333", // Дополнительный стиль цвета
                        fontSize: "16px", // Немного уменьшить размер текста
                    }}
                >
                    уточнили курс, утвердили сумму и произвели оплату в рублях или USDT, можно смело снимать ваши деньги с банкомата
                </Typography>
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" }, // 1 колонка на малых экранах, 2 колонки на больших
                    gap: "15px", // Уменьшили расстояние между элементами
                }}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <img
                        src={step1}
                        alt="Шаг 1"
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "8px",
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        1. Нажмите <strong>«Cardless withdrawal»</strong> на банкомате
                    </Typography>
                </Box>
                {/* Шаг 2 */}
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <img
                        src={step2}
                        alt="Шаг 2"
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "8px",
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        2. Нажмите <strong>«K PLUS»</strong> на банкомате
                    </Typography>
                </Box>
                {/* Шаг 3 */}
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <img
                        src={step3}
                        alt="Шаг 2"
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "8px",
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        3. На экране появится QR-код, сфотографируйте его и пришлите в чат с менеджером
                    </Typography>
                </Box>
                {/* Шаг 4 */}
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <img
                        src={step4}
                        alt="Шаг 4"
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "8px",
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        4. Мы отсканируем QR-код, напишем вам об этом, после чего нажмите{" "}
                        <strong>«Confirm»</strong> и заберите деньги
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InstructionsKasikorn