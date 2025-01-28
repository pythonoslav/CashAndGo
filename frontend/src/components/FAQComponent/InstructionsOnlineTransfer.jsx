import { Box, IconButton, Typography } from "@mui/material";

const InstructionsOnlineTransfer = () => {
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
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: "20px",
                }}
            >
                <Box sx={{ textAlign: "left", padding: "20px", borderRadius: "10px", backgroundColor: "#f5f5f5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: 'center', flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "16px", color: "#333", width: '100%' }}>
                        Сообщите название банка и ФИО, указанные в счете, с которого Вы будете отправлять перевод
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 2 }}>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                fontSize: "16px",
                                fontWeight: "bold",
                                lineHeight: "1",
                                "&:hover": {
                                    backgroundColor: "#0055D4",
                                },
                            }}
                        >
                            1
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#f5f5f5",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography sx={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}>
                        Мы пришлем Вам актуальные реквизиты и комментарий, который нужно будет указать при переводе
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                        }}
                    >
                        <Typography sx={{ fontSize: "12px", color: "#0E1111", fontWeight: "700", flexGrow: 1 }}>
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
                                lineHeight: "1",
                                "&:hover": {
                                    backgroundColor: "#0055D4",
                                },
                            }}
                        >
                            2
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    sx={{
                        textAlign: "left",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#f5f5f5",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography sx={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}>
                        После того, как вы получили реквизиты, перевод нужно совершить в течение 10-15 минут
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                        }}
                    >
                        <Typography sx={{ fontSize: "12px", color: "#0E1111", flexGrow: 1, fontWeight: '700' }}>
                            На каждый обмен действуют новые реквизиты, не переводите деньги самостоятельно, пока мы не подтвердим, куда совершать перевод
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
                                lineHeight: "1",
                                "&:hover": {
                                    backgroundColor: "#0055D4",
                                },
                            }}
                        >
                            3
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "left", padding: "20px", borderRadius: "10px", backgroundColor: "#f5f5f5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: 'center', flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "16px", color: "#333", width: '100%' }}>
                        После оплаты пришлите нам полный чек в формате PDF
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 4.5 }}>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                fontSize: "16px",
                                fontWeight: "bold",
                                lineHeight: "1",
                                "&:hover": {
                                    backgroundColor: "#0055D4",
                                },
                            }}
                        >
                            4
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "left", padding: "20px", borderRadius: "10px", backgroundColor: "#f5f5f5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: 'center', flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "16px", color: "#333", width: '100%' }}>
                    Мы проверим платеж, и в течение 5-10 минут вы можете снимать деньги через банкомат
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 2 }}>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <IconButton
                            sx={{
                                backgroundColor: "#0055D4",
                                color: "#fff",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                fontSize: "16px",
                                fontWeight: "bold",
                                lineHeight: "1",
                                "&:hover": {
                                    backgroundColor: "#0055D4",
                                },
                            }}
                        >
                            5
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "left", borderRadius: "10px" }}>
                    <Typography sx={{ fontSize: "22px", color: "#333", fontWeight: '300' }}>
                        Будьте внимательны и всегда уточняйте реквизиты перед оплатой - мы <Typography component="span" sx={{ color: "black", fontWeight: '700', fontSize: '22px' }}>НЕ НЕСЕМ</Typography> ответственности за неправильно совершенный перевод
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InstructionsOnlineTransfer;
