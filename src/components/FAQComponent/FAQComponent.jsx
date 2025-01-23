import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import step1 from "../FAQComponent/assets/KasikornStep/KasikornStep1.png";
import step2 from "../FAQComponent/assets/KasikornStep/KasikornStep2.png";
import step3 from "../FAQComponent/assets/KasikornStep/KasikornStep3.JPG";
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
                        textAlign: "center",
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
                        textAlign: "center",
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
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <img
                        src={step3}
                        alt="Шаг 3"
                        style={{
                            width: "80%",
                            height: "auto",
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
                        textAlign: "center",
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





const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50px",
                padding: "20px",
                gap: "20px",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1440px",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    position: "relative",
                    display: "flex",
                    borderRadius: "50px",
                    backgroundColor: "#ffffff",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: "20px",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    {/* FAQ Item 1 */}
                    <Box
                        sx={{
                            marginBottom: "20px",
                            width: "100%",
                            maxWidth: "1350px", // Ограничение ширины
                            marginLeft: "auto", // Центрирование
                            marginRight: "auto", // Центрирование
                        }}
                    >
                        <Button
                            onClick={() => handleToggle(0)}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                                textTransform: "none",
                                fontSize: "16px",
                                borderBottom: "1px solid #F5F5F5",
                                padding: "10px 0",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "900",
                                    fontSize: "32px",
                                    color: "#0E1111",
                                }}
                            >
                                <Typography sx={{ fontWeight: "900", fontSize: "32px", color: "#0E1111" }}>
                                    Как снять валюту в банкомате{" "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#76B942",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Kasikorn
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "24px", color: "#333" }}>▼</Typography>
                        </Button>
                        {openIndex === 0 && (
                            <InstructionsKasikorn />
                        )}
                    </Box>

                    {/* FAQ Item 2 */}
                    <Box sx={{ marginBottom: "20px" }}>
                        <Button
                            onClick={() => handleToggle(1)}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                                textTransform: "none",
                                padding: "10px",
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: "16px",
                                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                                "&:hover": {
                                    backgroundColor: "#f9f9f9",
                                },
                            }}
                        >
                            <Typography sx={{ color: "blue" }}>
                                Как снять валюту в банкомате Bangkok Bank
                            </Typography>
                            <Typography>▼</Typography>
                        </Button>
                        {openIndex === 1 && (
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    marginTop: "5px",
                                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Typography sx={{ fontSize: "14px", color: "#333" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Пример без фото)
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
