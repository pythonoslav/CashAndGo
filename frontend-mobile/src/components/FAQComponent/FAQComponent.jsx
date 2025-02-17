import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Vector from "../../assets/vector_button.svg";
import InstructionsKasikorn from "./InstructionsKasikorn";
import InstructionsBangkokBank from "./InstructionsBangkokBank";
import InstructionsKrungThai from "./InstructionsKrungThai";
import InstructionsOnlineTransfer from "./InstructionsOnlineTransfer";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 1.5, width: "100%" }}>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 600, // При необходимости можно убрать или изменить
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    p: 1.5,
                }}
            >
                {/* FAQ Item 1 */}
                <Box sx={{ borderBottom: "1px solid #f5f5f5", mb: 1 }}>
                    <Button
                        onClick={() => handleToggle(0)}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            textTransform: "none",
                            p: 0,
                            py: 1,
                        }}
                    >
                        {/* Левый контейнер: две строки */}
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0E1111" }}>
                                Как снять валюту в банкомате
                            </Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#76B942" }}>
                                Kasikorn?
                            </Typography>
                        </Box>

                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "#0033A0",
                                },
                                position: "absolute",
                                right: "10px",
                                bottom: "6px",
                            }}
                        >
                            <img
                                src={Vector}
                                alt="Через банкомат"
                                style={{ width: "14px", height: "14px" }}
                            />
                        </IconButton>
                    </Button>
                    {openIndex === 0 && <InstructionsKasikorn />}
                </Box>

                {/* FAQ Item 2 */}
                <Box sx={{ borderBottom: "1px solid #f5f5f5", mb: 1 }}>
                    <Button
                        onClick={() => handleToggle(1)}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            textTransform: "none",
                            p: 0,
                            py: 1,
                        }}
                    >
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0E1111" }}>
                                Как снять валюту в банкомате
                            </Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#085ac4" }}>
                                Bangkok Bank?
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "#0033A0",
                                },
                                position: "absolute",
                                right: "10px",
                                bottom: "6px",
                            }}
                        >
                            <img
                                src={Vector}
                                alt="Через банкомат"
                                style={{ width: "14px", height: "14px" }}
                            />
                        </IconButton>
                    </Button>
                    {openIndex === 1 && <InstructionsBangkokBank />}
                </Box>

                {/* FAQ Item 3 */}
                <Box sx={{ borderBottom: "1px solid #f5f5f5", mb: 1 }}>
                    <Button
                        onClick={() => handleToggle(2)}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            textTransform: "none",
                            p: 0,
                            py: 1,
                        }}
                    >
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0E1111" }}>
                                Как снять валюту в банкомате
                            </Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0bb4fe" }}>
                                Krunghtai?
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "#0033A0",
                                },
                                position: "absolute",
                                right: "10px",
                                bottom: "6px",
                            }}
                        >
                            <img
                                src={Vector}
                                alt="Через банкомат"
                                style={{ width: "14px", height: "14px" }}
                            />
                        </IconButton>
                    </Button>
                    {openIndex === 2 && <InstructionsKrungThai />}
                </Box>

                {/* FAQ Item 4 */}
                <Box>
                    <Button
                        onClick={() => handleToggle(3)}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            textTransform: "none",
                            p: 0,
                            py: 1,
                        }}
                    >
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0E1111" }}>
                                Как совершить обмен через
                            </Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#f87000" }}>
                                онлайн-перевод?
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                "&:hover": {
                                    backgroundColor: "#0033A0",
                                },
                                position: "absolute",
                                right: "10px",
                                bottom: "6px",
                            }}
                        >
                            <img
                                src={Vector}
                                alt="Через банкомат"
                                style={{ width: "14px", height: "14px" }}
                            />
                        </IconButton>
                    </Button>
                    {openIndex === 3 && <InstructionsOnlineTransfer />}
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
