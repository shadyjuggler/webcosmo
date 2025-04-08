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
        <section id="reviews" className="py-24 relative">
            <div className="relative container mx-auto">
                <div className="absolute top-0 right-1/5 -translate-y-3/4 max-w-[350px]">
                    <Image src={donut} alt="donut" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <Tab name="Отзывы" />
                    <h2 className="mt-8 text-5xl !text-[#262B3A]">
                        Реальные результаты: <br />{" "}
                        <span>Отзывы наших клиентов</span>
                    </h2>
                </div>
                <div className="mt-16">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                            prevEl: ".review-prev",
                            nextEl: ".review-next",
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

            <div className="flex gap-4">
                <button className="review-prev"></button>
                <button className="review-next"></button>
            </div>
        </section>
    );
}
