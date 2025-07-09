import { Box, IconButton, Typography } from "@mui/material";
import { useLanguage } from "../../helpers/LanguageContext";

const InstructionsOnlineTransfer = () => {
    const { language } = useLanguage()
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
                {language === 'ru' ? "После того, как в чате с менеджером вы договорились об обмене: ":"After confirming the exchange details with our manager in chat "}
                <Typography
                    component="span"
                    sx={{
                        fontWeight: "normal", 
                        color: "#333", 
                        fontSize: "16px",
                    }}
                >
                    {language === 'ru' ? "уточнили курс, утвердили сумму и произвели оплату в рублях или USDT, можно смело снимать ваши деньги с банкомата":" — agreeing on the rate and amount"}
                    
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
                    {language === 'ru' ? "Сообщите название банка и ФИО, указанные в счете, с которого Вы будете отправлять перевод":"Provide the bank name and full name as listed on the account from which you will be sending the transfer."}
                        
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
                    {language === 'ru' ? "Мы пришлем Вам актуальные реквизиты и комментарий, который нужно будет указать при переводе":"We will send you the payment details along with a comment that must be included in the transfer."}
                        
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
                            {language === "ru" ? "Если вы не успеваете совершить перевод - сообщите об этом нам, и мы подберем для вас новые реквизиты":"If you are unable to complete the transfer in time, let us know, and we will provide new details. "}
                           
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
                        {language === "ru" ? "После того, как вы получили реквизиты, перевод нужно совершить в течение 10-15 минут":"Once you receive the payment details, complete the transfer within 10-15 minutes."}
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
                        {language === "ru" ? "На каждый обмен действуют новые реквизиты, не переводите деньги самостоятельно, пока мы не подтвердим, куда совершать перевод":" Each exchange uses unique payment details. Do not send money until we confirm the correct details."}                  
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
                        {language === "ru" ? "После оплаты пришлите нам полный чек в формате PDF":"After making the payment, send us a full receipt in PDF format."}
                        
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
                    {language === "ru" ? "Мы проверим платеж, и в течение 5-10 минут вы можете снимать деньги через банкомат":"We will verify your payment, and within 5-10 minutes, you can withdraw your cash from the ATM."}
                        
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
                        {language === 'ru' ? "Будьте внимательны и всегда уточняйте реквизиты перед оплатой - мы  ":"Please double-check the payment details before making a transfer. We are "}<Typography component="span" sx={{ color: "black", fontWeight: '700', fontSize: '22px' }}>{language === 'ru' ? "НЕ НЕСЕМ":"NOT"}</Typography>{language === 'ru' ? " ответственности за неправильно совершенный перевод": " responsible for incorrectly made transfers."}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InstructionsOnlineTransfer;
