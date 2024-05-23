// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import { Box } from '@mui/material';
// import { Autoplay, Navigation } from 'swiper/modules';
import { grey } from '@mui/material/colors';
const SimpleCarousel = () => {


    return (
        <Box sx={{ bgcolor: grey[50], width: '100%', height: '50px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* <Swiper
                className="swiper-container"
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <Typography style={{ textAlign: 'center' }}>購物滿 NT$1000 或以上即享免運</Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <Typography style={{ textAlign: 'center' }}>🌟 會員限定優惠 🌟 買 2 件或以上享 8 折 </Typography>
                </SwiperSlide>
            </Swiper> */}
        </Box>
    );
};

export default SimpleCarousel;
