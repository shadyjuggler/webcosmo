"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tab } from "./UI/Tab";

import { ReviewSlide } from "./UI/ReviewSlide";

import donut from "../assets/donut.png";

import "swiper/css";
import Image from "next/image";

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="py-16 md:py-24 relative z-20 bg-[#EFF1F5] rounded-b-xl"
        >
            <div className="relative container mx-auto">
                <div className="absolute  top-0 -right-[100px] md:right-1/5 -translate-y-3/4 max-w-[200px] md:max-w-[250px] lg:max-w-[350px]">
                    <Image src={donut} alt="donut" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <Tab name="Отзывы" />
                    <h2 className="mt-8 text-3xl text-center md:text-left md:text-4xl lg:text-5xl !text-[#262B3A]">
                        Реальные результаты: <br />{" "}
                        <span>Отзывы наших клиентов</span>
                    </h2>
                </div>
                <div className="mt-8 md:mt-16">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".review-prev",
                            nextEl: ".review-next",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            950: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ReviewSlide
                                name={"Олеся Ромодина"}
                                job="Руководитель Циан"
                                url={
                                    "https://www.youtube.com/watch?v=pZ-oEuWMszs"
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewSlide
                                name={"Олеся Ромодина"}
                                job="Руководитель Циан"
                                url={
                                    "https://www.youtube.com/watch?v=pZ-oEuWMszs"
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewSlide
                                name={"Олеся Ромодина"}
                                job="Руководитель Циан"
                                url={
                                    "https://www.youtube.com/watch?v=pZ-oEuWMszs"
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewSlide
                                name={"Олеся Ромодина"}
                                job="Руководитель Циан"
                                url={
                                    "https://www.youtube.com/watch?v=pZ-oEuWMszs"
                                }
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="mt-8 flex xl:hidden px-4 gap-4">
                <button className="review-prev w-12 h-12 btn btn-white md:w-14 md:h-14 aspect-square flex justify-center items-center">
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
                <button className="review-next w-12 h-12 btn btn-white md:w-14 md:h-14 aspect-square flex justify-center items-center">
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
        </section>
    );
}
