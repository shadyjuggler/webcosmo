"use client";

import { Tab } from "./UI/Tab";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

//@ts-ignore
export default function Functionality({ titleBluePart, titleBlackPart,titleBlackPart2, tab, content }) {
    const slides = content.map((item: any) => {
        return (
            <SwiperSlide key={Math.random()}>
                <div className="functionality-slide min-h-[280px] md:min-h-[340px] rounded-2xl bg-white p-8 flex flex-col z-10 relative hover:translate-y-5 transition-all functionality-card cursor-pointer pointer-events-none md:pointer-events-auto">
                    <div className="icon rounded-xl w-14 md:w-17 h-14 md:h-17 flex justify-center items-center bg-[#262B3A] hover:bg-[#1462D6] transition-all">
                        <Image
                            className="max-w-7 md:max-w-10"
                            src={item.icon}
                            alt="icon"
                        />
                    </div>

                    <p className="mt-auto text-lg md:text-2xl relative z-40 font-semibold text-[#262B3A]">
                        {item.title}
                    </p>
                    <p className="mt-4 text-sm relative z-40 text-[#262B3A]/80 max-w-[350px]">
                        {item.text}
                    </p>

                    <div
                        className="slide-bg bg-[#8D6CFE] transition-all opacity-0 absolute z-30 -bottom-1/2 -right-1/4 rounded-full h-90 w-90"
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
        <section id="functionality" className="mt-7 py-12 lg:py-24">
            <div className="container mx-auto">
                <div className="flex justify-center items-start md:items-center gap-4 md:gap-0 md:flex-row flex-col">
                    <Tab name={tab} />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A] md:mx-auto">
                        {titleBlackPart} <br /> <span>{titleBluePart}</span> {titleBlackPart2}
                    </h2>
                </div>

                <div className="mt-8 md:mt-20">
                    <Swiper
                        id="func-slider"
                        className="!overflow-visible"
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".func-prev",
                            nextEl: ".func-next",
                        }}
                        breakpoints={{
                            880: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {slides}
                    </Swiper>
                </div>

                <div className="mt-4 md:mt-6 flex justify-between">
                    <div className="flex gap-2">
                        <button className="func-prev  w-14 md:w-16 h-14 md:h-16 btn btn-white aspect-square flex justify-center items-center">
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
                        <button className="func-next w-14 md:w-16 h-14 md:h-16 btn btn-white aspect-square flex justify-center items-center">
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
