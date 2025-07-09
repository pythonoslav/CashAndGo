import { Box, Typography } from "@mui/material";


import step1 from "../FAQComponent/assets/KrungThaiStep/step1.svg";
import step2 from "../FAQComponent/assets/KrungThaiStep/step2.svg";
import step3 from "../FAQComponent/assets/KrungThaiStep/step3.svg";
import step4 from "../FAQComponent/assets/KrungThaiStep/step4.svg";
import { useLanguage } from "../../helpers/LanguageContext";


const InstructionsKrungThai = () => {

    const { language } = useLanguage()
    return (
        <Box
            sx={{
                maxWidth: "90%", 
                margin: "0 auto",
                borderRadius: "50px", 
                padding: "25px", 
                backgroundColor: '#ffff'
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
                {language === 'ru' ? "После того, как в чате с менеджером вы договорились об обмене:" : "After confirming the exchange details with our manager in chat "}
                <Typography
                    component="span"
                    sx={{
                        fontWeight: "normal", 
                        color: "#333", 
                        fontSize: "16px", 
                    }}
                >
                    {language === 'ru' ? "уточнили курс, утвердили сумму и произвели оплату в рублях или USDT, можно смело снимать ваши деньги с банкомата" : " — agreeing on the rate, amount, and making the payment — you can safely withdraw your cash from the ATM."}
                    
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
                        1. {language === 'ru' ? "Нажмите " : "Press "} <strong>«Cardless ATM</strong>{language === 'ru' ? "на банкомате" : "on the ATM screen."} 
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
                        2. {language === 'ru' ? "Нажмите " : "Press "} <strong>«Cardless ATM»</strong>{language === 'ru' ? "на втором окне  После оплаты наш менеджер отправит в чат фото, " : "Our manager will send you a photo in chat "} <strong>{language === 'ru' ? "где будет 6-значный код, номер телефона и сумму бат к выдаче" : "containing a 6-digit code, your phone number, and the withdrawal amount."}</strong>
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
                        alt="Шаг 3"
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "8px",
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        3. {language === 'ru' ? "Введите номер телефона из сообщения в чате и нажмите " : "Enter your phone number from the message in chat and press  "} <strong>«Confirm»</strong>
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
                        4. {language === 'ru' ? "Введите 6-значный код из сообщения в чате, нажмите" : " Enter the 6-digit code from the message in chat, press "} <strong>«Confirm»</strong> {language === 'ru' ? " и заберите деньги" : ", and collect your cash."}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InstructionsKrungThai;