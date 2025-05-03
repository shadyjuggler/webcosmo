"use client";
import Image from "next/image";
import ok from "../assets/ok.png";

import { Tab } from "./UI/Tab";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const MainGoals: React.FC<{ content: any }> = ({ content }) => {
    return (
        <section id="maingoals" className="mt-7 py-8 lg:py-24">
            <div className="container mx-auto">
                <div className="flex items-start justify-center gap-4 md:gap-0 md:items-center flex-col md:flex-row">
                    <Tab name="Задачи" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl !text-[#262B3A] md:mx-auto">
                        <span>Основные задачи</span> проекта
                    </h2>
                </div>

                <div className="mt-12 md:mt-20 hidden md:flex flex-wrap justify-center gap-4 2xl:gap-8">
                    {content.map((item: any) => {
                        return (
                            <div
                                key={Math.random()}
                                className="relative w-full max-w-[400px] 2xl:max-w-[480px] "
                            >
                                <div className="rounded-xl bg-white flex justify-center items-center mask-goal min-h-[300px] xl:min-h-[325px] 2xl:min-h-[350px] flex-col">
                                    <p className="mt-12 text-xl text-[#262B3A] font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="max-w-[420px] mt-4 text-[#262B3A]/60 text-center text-sm">
                                        {item.text}
                                    </p>
                                </div>
                                <Image
                                    className="w-30 absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2"
                                    src={ok}
                                    alt="ok"
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 block md:hidden">
                    <Swiper
                        id="maingoals_slider"
                        slidesPerView={1}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".maingoals-prev",
                            nextEl: ".maingoals-next",
                        }}
                    >
                        {content.map((item: any) => {
                            return (
                                <SwiperSlide key={item.title}>
                                    <div
                                        key={Math.random()}
                                        className="relative w-full max-w-[400px] 2xl:max-w-[0px] "
                                    >
                                        <div className="rounded-xl bg-white flex justify-center items-center mask-goal min-h-[300px] xl:min-h-[325px] 2xl:min-h-[350px] flex-col">
                                            <p className="mt-12 text-xl text-[#262B3A] font-semibold">
                                                {item.title}
                                            </p>
                                            <p className="max-w-[420px] mt-4 text-[#262B3A]/60 text-center text-sm">
                                                {item.text}
                                            </p>
                                        </div>
                                        <Image
                                            style={{ translate: "-50% -35%" }}
                                            className="w-34 absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2"
                                            src={ok}
                                            alt="ok"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="mt-8">
                        <div className="flex gap-2">
                            <button className="maingoals-prev w-12 h-12 md:w-14 md:h-14 btn btn-white aspect-square flex justify-center items-center">
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
                            <button className="maingoals-next w-12 h-12 md:w-14 md:h-14 btn btn-white aspect-square flex justify-center items-center">
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
};
