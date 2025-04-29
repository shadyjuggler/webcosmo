"use client";

import { Tab } from "./UI/Tab";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

//@ts-ignore
export default function Functionality({ content }) {
    const slides = content.map((item: any) => {
        return (
            <SwiperSlide key={Math.random()}>
                <div  className="functionality-slide rounded-2xl relative hover:translate-y-5 transition-all functionality-card cursor-pointer">
                    <div className=" bg-white p-8 flex flex-col  z-10 relative min-h-[275px] ">
                        <div className="icon rounded-xl w-12 h-12 flex justify-center items-center bg-[#262B3A] hover:bg-[#1462D6] transition-all">
                            <Image
                                className="max-w-6"
                                src={item.icon}
                                alt="icon"
                            />
                        </div>

                        <p className="mt-20 text-xl font-semibold text-[#262B3A]">
                            {item.title}
                        </p>
                        <p className="mt-4 text-sm text-[#262B3A]/80">
                            {item.text}
                        </p>
                    </div>
                    <div
                        className="slide-bg transition-all opacity-0 absolute z-50 -bottom-1/2 -right-1/4 rounded-full h-90 w-90"
                        style={{
                            background: "rgb(141, 108, 254);",
                            filter: "blur(150px)",
                        }}
                    ></div>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <section id="functionality" className="mt-7 py-24">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <Tab name="Функционал" />
                    <h2 className="text-5xl !text-[#262B3A] mx-auto">
                        Функциональные <br /> <span>возможности</span> платформы
                    </h2>
                </div>

                <div className="mt-20">
                    <Swiper
                        id="func-slider"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            prevEl: ".func-prev",
                            nextEl: ".func-next",
                        }}
                    >
                        {slides}
                    </Swiper>
                </div>

                <div className="mt-6 flex justify-between">
                    <div className="flex gap-2">
                        <button className="func-prev w-12 h-12 btn btn-white aspect-square flex justify-center items-center">
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
                        <button className="func-next w-12 h-12 btn btn-white aspect-square flex justify-center items-center">
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
        </section>
    );
}
