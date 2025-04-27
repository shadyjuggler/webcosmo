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
        <section id="examples" className="py-24 overflow-hidden relative">
            <div className="relative container mx-auto z-10">
                <div className="flex justify-center items-center">
                    <div className="flex w-2/3">
                        <Tab name="Кейсы" />
                        <h2 className="text-5xl !text-[#262B3A] mx-auto">
                            Наши проекты
                        </h2>
                    </div>
                    <div className="-translate-y-10">
                        <Message title="Веб-разрабочик" message="Сотрудничество с этим агентством — это всегда качественный и креативный результат." />
                    </div>
                </div>

                <div className="mt-16 flex gap-1 justify-between ">
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

                <div className="mt-16">
                    <Swiper
                        className="!overflow-visible"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            prevEl: ".case-prev",
                            nextEl: ".case-next",
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
                            className="case-prev btn btn-white h-full aspect-square flex justify-center items-center"
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
                            className="case-next btn btn-white h-full aspect-square flex justify-center items-center"
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
                    <button className="btn btn-blue btn-arrow py-1">
                        Смотреть еще{" "}
                        <span>
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="absolute -bottom-1/3 right-0 z-0 pointer-events-none">
                <Image src={blur} alt="blur"/>
            </div>
        </section>
    );
}
