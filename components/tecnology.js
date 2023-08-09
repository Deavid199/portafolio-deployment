import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLaravel, FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../styles/tecnology.module.css';

const Tecnology = () => {

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Tecnologías</h2>
            <div className={styles.tecnologia}>
                {domLoaded && (
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                        grabCursor={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="Html5"><FaHtml5 /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="Css3"><FaCss3Alt /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="Javascript"><FaJs /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="React"><FaReact /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="Laravel"><FaLaravel /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="Mysql"><DiMysql /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.tarjeta}>
                                <p className={styles.paragraph}>
                                    <span className={styles.tooltip} mensaje="NodeJS"><FaNode /></span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </div>
    )
}

export default Tecnology