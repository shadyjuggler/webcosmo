"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { CaseSlide } from "./UI/CaseSlide";

import { Tab } from "./UI/Tab";

import { Message } from "./UI/Message";

import arrow from "../assets/small-arrow.svg";

import blur from "../assets/Blur Effect (1).png";

import { useLang } from "../context/LangContext";
import languages from "../data/lang";

import { cases } from "../data/cases";
import Link from "next/link";

export default function Examples() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [category, setCategory] = useState("Web");

    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].examples;

    // @ts-ignore
    const content = cases[lang].map((item) => {
        if (item.category === category) {
            return (
                <SwiperSlide key={Math.random()}>
                    <CaseSlide
                        title={item.title}
                        descr={item.text}
                        link={item.link}
                        techstack={item.techstack}
                        imgUrl={item.imgUrl}
                    />
                </SwiperSlide>
            );
        }
    });

    return (
        <section
            id="examples"
            className="py-16 md:py-24 overflow-hidden relative"
        >
            <div className="relative container mx-auto z-10">
                <div className="flex justify-start md:justify-center items-center relative">
                    <div className="flex md:w-2/3 flex-col lg:flex-row gap-36 md:gap-8 lg:gap-0 w-full items-center">
                        <div className="mr-auto md:mr-0">
                            <Tab name="Кейсы" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl !text-[#262B3A] lg:mx-auto">
                            Наши проекты
                        </h2>
                    </div>
                    <div className="absolute w-full md:w-fit flex justify-center md:block md:static md:-translate-y-10">
                        <Message
                            title={tr.message.title}
                            message={tr.message.content}
                        />
                    </div>
                </div>

                <div className="mt-4 md:mt-8 lg:mt-16 flex gap-1 justify-between overflow-x-scroll scrollbar-none pb-4 xl:pb-0">
                    <div
                        onClick={() => setCategory("Web")}
                        className={`filter-tab ${
                            category === "Web" ? "filter-tab_active" : ""
                        }`}
                    >
                        <p className="font-medium text-center">
                            {tr.categories.Web}
                        </p>
                    </div>
                    <div
                        onClick={() => setCategory("Bots")}
                        className={`filter-tab ${
                            category === "Bots" ? "filter-tab_active" : ""
                        }`}
                    >
                        <p className="font-medium text-center">
                            {tr.categories.Bots}
                        </p>
                    </div>
                    <div
                        onClick={() => setCategory("Web3")}
                        className={`filter-tab ${
                            category === "Web3" ? "filter-tab_active" : ""
                        }`}
                    >
                        <p className="font-medium text-center">
                            {tr.categories.Web3}
                        </p>
                    </div>
                    <div
                        onClick={() => setCategory("UI/UX")}
                        className={`filter-tab ${
                            category === "UI/UX" ? "filter-tab_active" : ""
                        }`}
                    >
                        <p className="font-medium text-center">
                            {tr.categories["UI/UX"]}
                        </p>
                    </div>
                    <div
                        onClick={() => setCategory("Mobile")}
                        className={`filter-tab ${
                            category === "Mobile" ? "filter-tab_active" : ""
                        }`}
                    >
                        <p className="font-medium text-center">
                            {tr.categories.Mobile}
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
                        {content}
                    </Swiper>
                </div>

                <div className="mt-12 flex justify-between flex-col gap-6 md:gap-0 md:flex-row">
                    <div className="flex gap-2">
                        <button
                            ref={prevRef}
                            className="case-prev w-14 h-14 btn btn-white md:w-16 md:h-16 aspect-square flex justify-center items-center"
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
                            className="case-next w-14 h-14 btn btn-white md:w-16 md:h-16 aspect-square flex justify-center items-center"
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

                    <Link
                        href={"/cases"}
                        className="relative w-fit z-40 flex btn btn-blue btn-arrow !py-1 !pl-7 !pr-1.5 !gap-5"
                    >
                        {tr.more}
                        <span>
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="absolute -bottom-[50px] md:-bottom-1/3 right-0 z-0 pointer-events-none">
                <Image src={blur} alt="blur" />
            </div>
        </section>
    );
}
