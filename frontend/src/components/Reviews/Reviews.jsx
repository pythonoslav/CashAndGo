import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { ReactComponent as ReviewsTitle } from '../Reviews/ReviewsTitle.svg';
import { ReactComponent as ReviewsTitle_en } from '../Reviews/Reviews_en.svg';

// Импорт локальных изображений аватаров
import avatarKseniya from './assets/kseniya.jpg';
import avatarMaxBakhvalov from './assets/maxBakhvalov.jpg';
//import avatarDefault from './assets/default.jpg'; // Изображение по умолчанию
import avatarShanti from './assets/shanti.jpg';
import avatarAnna from './assets/annaTaranova.jpg';
import avatarAn from './assets/an.jpg';
import avatarNoName from './assets/~_avatar.jpg';
import avatarIvan from './assets/ivanBondar.jpg';
import avatarKit from './assets/kitBelor.jpg';
import avatarAndrei from './assets/andrei.jpg';
import avatarTatiana from './assets/tatiana.jpg';
import avatarVera from './assets/veraSuvorova.jpg';
import avatarMasha from './assets/masha.jpg';
import avatarArtem from './assets/artem.jpg';
import avatarAndreyShep from './assets/andreyShep.jpg';
import { useLanguage } from "../../helpers/LanguageContext";


const reviews = [
  {
    name: "Alexa",
    text: "Обменяли безналичные рубли на наличные баты через курьера. Молодой человек 🚖 подъехал менее чем через час, наличные уже в руках. Перевели ₽ по номеру телефона, получили баты. Всё четко. Довольные, отдых продолжается 🥰 Курс приятный (сравнивал с другими вариантами). Спасибо",
  },
  {
    name: "Kseniya",
    text: "Обмен прошел успешно и по приятному курсу. Большое спасибо! Возникла проблема с тем что банкомат затупил не выдал деньги, Дмитрий обратился в поддержку, взял все риски на себя и выдал деньги через другой банкомат. Так что даже в сложных ситуациях ребята не бросят и найдут решение",
    path_avatar: avatarKseniya,
  },
  {
    name: "Юрий",
    text: "Спасибо! Всё прошло быстро и без единой проблемы! Хороший курс, рекомендую! Буду и дальше обращаться",
  },
  {
    name: "Алексей",
    text: "10к бат по приемлемому курсу, отправил деньги, человек отправил код, снял налик в жёлтом банке 🎋",
  },
  {
    name: "Max Bakhvalov",
    text: "Я из РФ пополняю вообще, удобно, курс такой же чем я через 3 пня колена сам бы пополнял через эти биржи все. Ровный сервис)))",
    path_avatar: avatarMaxBakhvalov,
  },
  {
    name: "~",
    text: "Вчера впервые менял рубли на баты: прошло быстро, курс хороший, помогли разобраться с банкоматом, остался доволен, обращусь ещё. Всем рекомендую!!👍",
    path_avatar: avatarNoName,

  },
  {
    name: "Shanti People",
    text: "Все четко. Меняйте по хорошему курсу, на данный момент самый адекватный. А на сэкономленные купите себе кофе с булочкой в Старбакс)",
    path_avatar: avatarShanti,
  },
  {
    name: "Анна Таранова",
    text: "Получали баты через банкомат, все отлично, курс хороший, надежный менеджер 👌",
    path_avatar: avatarAnna,
  },
  {
    name: "An",
    text: "Произвел два обмена, все четко и быстро, админ постоянно на связи, удобно и с подробной инструкцией, и самое главное это отличный курс, большое спасибо 👍👍👍",
    path_avatar: avatarAn,
  },
  {
    name: "Rasul",
    text: "Меняю уже в третий раз. Всё хорошо, без проблем и по лучшему курсу. Спасибо!",
  },
  {
    name: "Иван Бондарь",
    text: "Только что обменял 5000 Батт Оперативно! Пушка гонка 🏎",
    path_avatar: avatarIvan,
  },
  {
    name: "Kit Belor",
    text: "Уже год меняю здесь 😎 Всегда быстро, выгодно, с пониманием 😅",
    path_avatar: avatarKit,
  },
  {
    name: "Andrei",
    text: "Обращаюсь не в первый раз, как всегда выгодный курс и быстрый обмен. Спасибо!",
    path_avatar: avatarAndrei,
  },
  {
    name: "Татьяна 🎭",
    text: "Благодарю вас, что выручаете с обменом 🥰 всегда остаюсь довольна сервисом, рекомендую вас как надежного и проверенного обменника с выгодным курсом 👍 желаю вам процветания и иметь больше клиентов!",
    path_avatar: avatarTatiana,
  },
  {
    name: "Vera Suvorova",
    text: "Курс огонь, Дмитрий огонь, не в первый раз меняем и все четко, уже и друзьям советовали, у них тоже не было никогда проблем 🤙 спасибо",
    path_avatar: avatarVera,
  },
  {
    name: "masha",
    text: "Дважды обменивала через этот сервис, все проходит отлично, быстро и оперативно отвечают 🫶. Приятная минимальная сумма для обмена, можно удобно снять через банкомат без наличия карты)",
    path_avatar: avatarMasha,
  },
  {
    name: "Artem",
    text: "Отличный обмен, можно доверять",
    path_avatar: avatarArtem,
  },
  {
    name: "Андрей Шеповалов",
    text: "Ребятки, 2 года уже живу на Пхукете, суммарно раз 10 менял у этих ребят через умы и каждый раз всё гладко. Ну и самый выгодный курс на острове. Можете хоть обыскаться, но выгоднее не найдете нигде. Всем пис ✌️",
    path_avatar: avatarAndreyShep,
  },
  {
    name: "Victoria",
    text: "Регулярно меняю уже почти 2 года, все каждый раз приходит гладко, курс выгодный, различные банки 🙏",

  },
  {
    name: "Oli",
    text: "Добрый день, в первый день приехали в Бангкок, обменяли просто за 10мин у банкомата. Все быстро и надежно :) рекомендую !!",

  }
];

// Функция для генерации аватара по инициалам
const stringAvatar = (name) => {
  if (!name) return { children: "U" };
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return { children: nameParts[0][0].toUpperCase() };
  }
  return {
    children: `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`
  };
};

const ReviewsCarousel = () => {
  const swiperRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const { language } = useLanguage();

  useEffect(() => {
    const speed = 0.05; // Скорость прокрутки
    let lastTime = performance.now();

    const animate = (time) => {
      if (swiperRef.current) {
        const elapsed = time - lastTime;
        lastTime = time;

        // Обновляем позицию ленты
        positionRef.current -= elapsed * speed;

        // Изменяем transform у swiper-wrapper
        swiperRef.current.wrapperEl.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

        // Зацикливаем, если ушли слишком далеко влево
        if (positionRef.current < -swiperRef.current.wrapperEl.scrollWidth / 2) {
          positionRef.current = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <Box position="relative" width="100%" maxWidth="1400px" mx="auto" py={4} mb={3}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", mb: "20px", ml: "2rem", width: "220px" }}>
        {language === 'ru' ? <ReviewsTitle sx={{ width: "550px", height: "auto" }} /> : <ReviewsTitle_en sx={{ width: "550px", height: "auto" }} />}
      </Box>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"
        spaceBetween={15}
        allowTouchMove={false}
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
        breakpoints={{
          640: { slidesPerView: 1.8, spaceBetween: 15 },
          1024: { slidesPerView: 4.2, spaceBetween: 20 },
          1440: { slidesPerView: 4.2, spaceBetween: 30 },
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              flexShrink: 0,
              willChange: "transform",
              margin: "10px",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: "270px",
                height: "230px",
                background: "none",
                borderRadius: "12px",
                border: "2px solid #004db4",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                userSelect: "none",
                filter: "drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2))",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  src={review.path_avatar || null}
                  {...(!review.path_avatar && stringAvatar(review.name))}
                  sx={{ width: 50, height: 50, mr: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0E1111" }}>
                  {review.name}
                </Typography>
              </Box>
              <Typography sx={{ mt: 1, fontSize: "14px", lineHeight: "1.4", color: "black" }}>
                {review.text}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f87000",
            color: "#fff",
            borderRadius: "20px",
            padding: "8px 16px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1.05rem",
            "&:hover": {
              backgroundColor: "#f87000",
              opacity: 0.85,
            },
          }}
          onClick={() => {
            window.open("https://t.me/+3BWEMQxeqk0wODNl", "_blank", "noopener,noreferrer");
          }}
        >
          {language === 'ru' ? "Все отзывы" : "All reviews"}
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewsCarousel;