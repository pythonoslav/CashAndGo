import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import InstructionsKasikorn from "./InstructionsKasikorn";
import InstructionsBangkokBank from "./InstructionsBangkokBank";
import InstructionsKrungThai from "./InstructionsKrungThai"
import InstructionsOnlineTransfer from "./InstructionsOnlineTransfer";


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
                                    Как снять валюту в банкомате{" "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#085ac4",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Bangkok Bank
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "24px", color: "#333" }}>▼</Typography>
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
                                    Как снять валюту в банкомате{" "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#0bb4fe",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Krunghtai
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "24px", color: "#333" }}>▼</Typography>
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
                                    Как совершить обмен через{" "}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#f87000",
                                        fontWeight: "900",
                                        fontSize: "32px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    онлайн перевод
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "24px", color: "#333" }}>▼</Typography>
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
