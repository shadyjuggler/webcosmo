"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Tab } from "./UI/Tab";
import Image from "next/image";
import arrow from "../assets/small-arrow.svg";

import { ArticleSlide } from "./UI/ArticleSlide";
import Link from "next/link";

export default function Articles() {
    return (
        <section id="articles" className="py-24 overflow-hidden relative">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <Tab name="Блог" />
                        <h2 className="mt-8 text-5xl !text-[#262B3A]">
                            Полезные IT статьи
                        </h2>
                    </div>

                    <div className="flex ">
                        <div className="flex gap-2 items-end">
                            <button className="article-prev w-14 h-14 btn btn-white aspect-square flex justify-center items-center">
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
                            <button className="article-next w-14 h-14 btn btn-white aspect-square flex justify-center items-center">
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
                <div className="mt-16">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            prevEl: ".article-prev",
                            nextEl: ".article-next",
                        }}
                    >
                        {
                            Array(6).fill(0).map(card => {
                                console.log(card)
                                return <SwiperSlide key={Math.random()}>
                                    <ArticleSlide title="WebCosmo - ваш партнер в разработке"/>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link href="/blogs" className="btn btn-bluewhite btn-arrow py-1">
                        Смотреть еще{" "}
                        <span>
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
