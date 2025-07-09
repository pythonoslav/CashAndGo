import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Vector from "../../assets/vector_button.svg";
import InstructionsKasikorn from "./InstructionsKasikorn";
import InstructionsBangkokBank from "./InstructionsBangkokBank";
import InstructionsKrungThai from "./InstructionsKrungThai"
import InstructionsOnlineTransfer from "./InstructionsOnlineTransfer";
import { useLanguage } from "../../helpers/LanguageContext";


const FAQ = () => {

    const [ openIndex, setOpenIndex ] = useState(null)
    const { language } = useLanguage();
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
                    maxWidth: "1400px",
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
                                    {language === 'ru' ? "Как снять валюту в банкомате " : "How to withdraw cash from a "}  
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#76B942",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Kasikorn {language !== 'ru' ? " ATM" : ""}
                                    
                                </Typography>
                            </Box>
                            <IconButton
                                sx={{

                                    backgroundColor: "#0055D4",
                                    color: "#fff",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    paddingTop: "5px",
                                    "&:hover": {
                                        backgroundColor: "#0033A0",
                                    },
                                    position: "absolute", 
                                    right: "10px",
                                    bottom: "20px",
                                }}
                            >
                                <img
                                    src={Vector}
                                    alt="Через банкомат"
                                    style={{ width: "18px", height: "18px" }}
                                />
                            </IconButton>
                        </Button>
                        {openIndex === 0 && (
                            <InstructionsKasikorn />
                        )}
                    </Box>

                    {/* FAQ Item 2 */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1350px", // Ограничение ширины
                            marginLeft: "auto", // Центрирование
                            marginRight: "auto", // Центрирование
                        }}
                    >
                        <Button
                            onClick={() => handleToggle(1)}
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
                                    {language === 'ru' ? "Как снять валюту в банкомате " : "How to withdraw cash from a "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#085ac4",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Bangkok Bank {language !== 'ru' ? " ATM" : ""}
                                </Typography>
                            </Box>
                            <IconButton
                                sx={{

                                    backgroundColor: "#0055D4",
                                    color: "#fff",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    paddingTop: "5px",
                                    "&:hover": {
                                        backgroundColor: "#0033A0",
                                    },
                                    position: "absolute", // Абсолютное позиционирование
                                    right: "10px", // Расположить кнопку в 10px от правого края
                                    bottom: "20px",
                                }}
                            >
                                <img
                                    src={Vector}
                                    alt="Через банкомат"
                                    style={{ width: "18px", height: "18px" }}
                                />
                            </IconButton>
                        </Button>
                        {openIndex === 1 && (
                            <InstructionsBangkokBank />
                        )}
                    </Box>
                    {/* FAQ Item 3 */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1350px", // Ограничение ширины
                            marginLeft: "auto", // Центрирование
                            marginRight: "auto", // Центрирование
                        }}
                    >
                        <Button
                            onClick={() => handleToggle(2)}
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
                                    {language === 'ru' ? "Как снять валюту в банкомате " : "How to withdraw cash from a "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#0bb4fe",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Krunghtai {language !== 'ru' ? " ATM" : ""}
                                </Typography>
                            </Box>
                            <IconButton
                                sx={{
                                    backgroundColor: "#0055D4",
                                    color: "#fff",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    paddingTop: "5px",
                                    "&:hover": {
                                        backgroundColor: "#0033A0",
                                    },
                                    position: "absolute", // Абсолютное позиционирование
                                    right: "10px", // Расположить кнопку в 10px от правого края
                                    bottom: "20px",
                                }}
                            >
                                <img
                                    src={Vector}
                                    alt="Через банкомат"
                                    style={{ width: "18px", height: "18px" }}
                                />
                            </IconButton>
                        </Button>
                        {openIndex === 2 && (
                            <InstructionsKrungThai />
                        )}
                    </Box>
                    {/* FAQ Item 4 */}
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
                            onClick={() => handleToggle(3)}
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
                                    {language === 'ru' ? "Как совершить обмен через " : "How to exchange currency via"}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#f87000",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    {language === 'ru' ? "онлайн перевод" : "online transfer"}
                                    
                                </Typography>
                            </Box>
                            <IconButton
                                sx={{

                                    backgroundColor: "#0055D4",
                                    color: "#fff",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    paddingTop: "5px",
                                    "&:hover": {
                                        backgroundColor: "#0033A0",
                                    },
                                    position: "absolute", // Абсолютное позиционирование
                                    right: "10px", // Расположить кнопку в 10px от правого края
                                    bottom: "20px",
                                }}
                            >
                                <img
                                    src={Vector}
                                    alt="Через банкомат"
                                    style={{ width: "18px", height: "18px" }}
                                />
                            </IconButton>
                        </Button>
                        {openIndex === 3 && (
                            <InstructionsOnlineTransfer />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
