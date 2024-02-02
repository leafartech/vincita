import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper"
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from './Myswiper.module.css'

export default function TestmonialsSwiper() {
    return (
        <div className={styles.swiperDiv}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slider">
                    <img src="./imagesPv/testmonials/1.png" className={styles.first} />
                    <img src="./imagesPv/testmonials/6.png" className={styles.second} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slider">
                    <img src="./imagesPv/testmonials/2.png" className={styles.first} />
                    <img src="./imagesPv/testmonials/7.png" className={styles.second} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slider">
                    <img src="./imagesPv/testmonials/3.png" className={styles.first} />
                    <img src="./imagesPv/testmonials/8.png" className={styles.second} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slider">
                    <img src="./imagesPv/testmonials/4.png" className={styles.first} />
                    <img src="./imagesPv/testmonials/9.png" className={styles.second} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slider">
                    <img src="./imagesPv/testmonials/5.png" className={styles.first} />
                    <img src="./imagesPv/testmonials/10.png" className={styles.second} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}