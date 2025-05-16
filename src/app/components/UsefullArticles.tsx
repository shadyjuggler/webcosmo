"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Tab } from "./UI/Tab";
import Image from "next/image";
import arrow from "../assets/small-arrow.svg";

import { ArticleSlide } from "./UI/ArticleSlide";
import Link from "next/link";

import { blogs } from "../data/blogs";

import { useLang } from "../context/LangContext";
import languages from "../data/lang";

export default function Articles() {
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].articles;

     // @ts-ignore
    const content = blogs[lang].map((item) => {
        return (
            <SwiperSlide key={Math.random()}>
                <ArticleSlide
                    title={item.title}
                    imgUrl={item.imgUrl}
                    link={item.link}
                    tech={item.techstack}
                />
            </SwiperSlide>
        );
    });

    return (
        <section
            id="articles"
            className="pt-12 pt-32 pb-16 lg:py-24 relative"
        >
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <Tab name={tr.tab} />
                        <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A]">
                            {tr.title}
                        </h2>
                    </div>

                    <div className="flex absolute bottom-40 md:static">
                        <div className="flex gap-2 items-end">
                            <button className="article-prev w-15 h-15 btn btn-white aspect-square flex justify-center items-center">
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
                            <button className="article-next w-15 h-15 btn btn-white aspect-square flex justify-center items-center">
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
                <div className="mt-8 md:mt-16">
                    <Swiper
                        id="article_slider"
                        modules={[Navigation]}
                        spaceBetween={23}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".article-prev",
                            nextEl: ".article-next",
                        }}
                        breakpoints={{
                            868: {
                                slidesPerView: 2,
                            },
                            1278: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {content}
                    </Swiper>
                </div>
                <div className="mt-32 md:mt-8 flex justify-start md:justify-center">
                    <Link
                        href="/blogs"
                        className="w-fit btn btn-bluewhite btn-arrow !py-1 !pl-7 !pr-1.5 !gap-5"
                    >
                        {tr.more}
                        <span>
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
