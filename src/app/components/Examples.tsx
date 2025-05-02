"use client";

import Image from "next/image";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { CaseSlide } from "./UI/CaseSlide";

import { Tab } from "./UI/Tab";

import phone from "../assets/phone.png";

import { Message } from "./UI/Message";

import arrow from "../assets/small-arrow.svg";

import blur from "../assets/Blur Effect (1).png";

export default function Examples() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id="examples" className="py-16 md:py-24 overflow-hidden relative">
            <div className="relative container mx-auto z-10">
                <div className="flex justify-start md:justify-center items-center ">
                    <div className="flex md:w-2/3 flex-col lg:flex-row gap-36 md:gap-8 lg:gap-0 w-full items-center">
                        <Tab name="Кейсы" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl !text-[#262B3A] lg:mx-auto">
                            Наши проекты
                        </h2>
                    </div>
                    <div className="absolute md:static md:-translate-y-10">
                        <Message
                            title="Веб-разрабочик"
                            message="Сотрудничество с этим агентством — это всегда качественный и креативный результат."
                        />
                    </div>
                </div>

                <div className="mt-4 md:mt-8 lg:mt-16 flex gap-1 justify-between overflow-x-scroll pb-4 xl:pb-0">
                    <div className="filter-tab">
                        <p className="font-medium text-center">
                            Веб-разработка, сайты
                        </p>
                    </div>
                    <div className="filter-tab">
                        <p className="font-medium text-center">
                            Боты и Веб-Апп
                        </p>
                    </div>
                    <div className="filter-tab">
                        <p className="font-medium text-center">
                            Web3, dApps, NFTs
                        </p>
                    </div>
                    <div className="filter-tab">
                        <p className="font-medium text-center">
                            UI/UX-дизайн и брендинг
                        </p>
                    </div>
                    <div className="filter-tab">
                        <p className="font-medium text-center">
                            Мобильные приложения
                        </p>
                    </div>
                </div>

                <div className="mt-8 md:mt-16">
                    <Swiper
                        id="examples-slider"
                        className="!overflow-visible"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".case-prev",
                            nextEl: ".case-next",
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <CaseSlide
                                techstack={[
                                    "Разработка",
                                    "UX/UI дизайн",
                                    "Блокчейн-интеграция",
                                ]}
                                imgUrl={phone}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CaseSlide
                                techstack={[
                                    "Разработка",
                                    "UX/UI дизайн",
                                    "Блокчейн-интеграция",
                                ]}
                                imgUrl={phone}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CaseSlide
                                techstack={[
                                    "Разработка",
                                    "UX/UI дизайн",
                                    "Блокчейн-интеграция",
                                ]}
                                imgUrl={phone}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CaseSlide
                                techstack={[
                                    "Разработка",
                                    "UX/UI дизайн",
                                    "Блокчейн-интеграция",
                                ]}
                                imgUrl={phone}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="mt-12 flex justify-between">
                    <div className="flex gap-2">
                        <button
                            ref={prevRef}
                            className="case-prev w-12 h-12 btn btn-white md:w-16 md:h-16 aspect-square flex justify-center items-center"
                        >
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
                        <button
                            ref={nextRef}
                            className="case-next w-12 h-12 btn btn-white md:w-16 md:h-16 aspect-square flex justify-center items-center"
                        >
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
                    <button className="!hidden md:!flex btn btn-blue btn-arrow !py-1 !pl-7 !pr-1.5 !gap-5">
                        Смотреть еще{" "}
                        <span>
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="absolute -bottom-[100px] md:-bottom-1/3 right-0 z-0 pointer-events-none">
                <Image src={blur} alt="blur" />
            </div>
        </section>
    );
}
