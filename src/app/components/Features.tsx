"use client";
import Image from "next/image";

import light from "../assets/light.png";
import eye from "../assets/eye.png";
import ok from "../assets/ok.png";
import thunder from "../assets/thunder.png";

import CircleButton from "./UI/CircleButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { Tab } from "./UI/Tab";

export default function Features() {
    return (
        <section id="features" className="mt-7 py-12 lg:py-24">
            <div className="container mx-auto">
                <div className="flex justify-center items-start gap-4 md:gap-8 lg:gap-0 lg:items-center flex-col lg:flex-row">
                    <Tab name="О нас" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A] lg:mx-auto">
                        Что делает <span>нас уникальными?</span>
                    </h2>
                </div>

                <div className="mt-12 md:mt-20">
                    <div className="flex gap-4">
                        <Swiper
                            id="features_slider"
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={{
                                prevEl: ".features-prev",
                                nextEl: ".features-next",
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1096: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1278: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="card justify-between">
                                    <div className=" card-image">
                                        <Image src={light} alt="light"></Image>
                                    </div>

                                    <div className="card-text">
                                        <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold xl:max-w-[200px] 2xl:max-w-[250px]">
                                            Глубокое понимание бизнеса
                                        </p>
                                        <p
                                            className="card-hidden-text"
                                            style={{
                                                color: "#1D2230",
                                                maxWidth: "230px",
                                            }}
                                        >
                                            Наша цель не просто создать сайт или
                                            приложение, а помочь вашему бизнесу
                                            вырасти.
                                        </p>
                                    </div>
                                    <div className="mt-auto flex justify-end">
                                        <div className="hidden xl:block xl:w-10 2xl:w-12 xl:h-10 2xl:h-12">
                                            <CircleButton />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                {" "}
                                <div className="card justify-between">
                                    <div className=" card-image">
                                        <Image src={ok} alt="light"></Image>
                                    </div>

                                    <div className="card-text">
                                        <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold xl:max-w-[200px] 2xl:max-w-[250px]">
                                            Индивидуальный подход
                                        </p>
                                        <p
                                            className="card-hidden-text"
                                            style={{
                                                color: "#1D2230",
                                                maxWidth: "230px",
                                            }}
                                        >
                                            Наша цель не просто создать сайт или
                                            приложение, а помочь вашему бизнесу
                                            вырасти.
                                        </p>
                                    </div>
                                    <div className="mt-auto flex justify-end">
                                        <div className="hidden xl:block xl:w-10 2xl:w-12 xl:h-10 2xl:h-12">
                                            <CircleButton />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card justify-between">
                                    <div className=" card-image">
                                        <Image src={eye} alt="light"></Image>
                                    </div>

                                    <div className="card-text">
                                        <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold xl:max-w-[200px] 2xl:max-w-[250px]">
                                            Прозрачность работы
                                        </p>
                                        <p
                                            className="card-hidden-text"
                                            style={{
                                                color: "#1D2230",
                                                maxWidth: "230px",
                                            }}
                                        >
                                            Наша цель не просто создать сайт или
                                            приложение, а помочь вашему бизнесу
                                            вырасти.
                                        </p>
                                    </div>
                                    <div className="mt-auto flex justify-end">
                                        <div className="hidden xl:block xl:w-10 2xl:w-12 xl:h-10 2xl:h-12">
                                            <CircleButton />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card justify-between">
                                    <div className=" card-image">
                                        <Image
                                            src={thunder}
                                            alt="light"
                                        ></Image>
                                    </div>

                                    <div className="card-text">
                                        <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold xl:max-w-[200px] 2xl:max-w-[250px]">
                                            Ориентация на результат
                                        </p>
                                        <p
                                            className="card-hidden-text"
                                            style={{
                                                color: "#1D2230",
                                                maxWidth: "230px",
                                            }}
                                        >
                                            Наша цель не просто создать сайт или
                                            приложение, а помочь вашему бизнесу
                                            вырасти.
                                        </p>
                                    </div>
                                    <div className="mt-auto flex justify-end">
                                        <div className="hidden xl:block xl:w-10 2xl:w-12 xl:h-10 2xl:h-12">
                                            <CircleButton />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="mt-8 block xl:hidden">
                        <div className="flex gap-2">
                            <button className="features-prev w-12 h-12 md:w-14 md:h-14 btn btn-white aspect-square flex justify-center items-center">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                                    />
                                </svg>
                            </button>
                            <button className="features-next w-12 h-12 md:w-14 md:h-14 btn btn-white aspect-square flex justify-center items-center">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
