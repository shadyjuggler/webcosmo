"use client";
import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import arrow from "../assets/footer-arrow.png";
import Image from "next/image";
import Footer from "../components/Footer";
import { ArticleSlide } from "../components/UI/ArticleSlide";

import blogs from "../assets/blogs.png";

import smallarrow from "../assets/small-arrow.svg";

import blogbg from "../assets/blog-mob.png";
import DropDown from "../components/UI/DropDown";

import { blogs as blogsData } from "../data/blogs";
import { useState } from "react";

import { useLang } from "../context/LangContext";
import languages from "../data/lang";

export default function BlogsPage() {
    const [category, setCategory] = useState("Все статьи");


    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].blogs;
    const options = tr.categories;


    // @ts-ignore
    const content = blogsData[lang].map((item) => {
        if (category === tr.categories[0]) {
            return (
                <ArticleSlide
                    key={Math.random()}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    link={item.link}
                    tech={item.techstack}
                />
            );
        } else {
            if (category === item.category) {
                return (
                    <ArticleSlide
                        key={Math.random()}
                        title={item.title}
                        imgUrl={item.imgUrl}
                        link={item.link}
                        tech={item.techstack}
                    />
                );
            }
        }
    });

    return (
        <>
            <main className="main blog" id="main">
                <div className="graident-main rounded-b-2xl rounded-tr-md rounded-tl-2xl md:rounded-2xl pt-8 pb-16 px-4 md:px-6 xl:px-8 2xl:px-0 overflow-hidden relative">
                    <div className="block lg:hidden absolute -bottom-20 sm:-bottom-40 md:-bottom-50 -right-5 sm:-right-25 -rotate-0 sm:-rotate-0 md:rotate-10">
                        <Image src={blogbg} alt="bg" />
                    </div>

                    <div className="container mx-auto">
                        <Navbar />
                        <div className="mt-8">
                            <div className="hidden lg:block">
                                <ReturnBack />
                            </div>

                            <div className="mt-8 lg:mb-0 md:mb-26 mb-70">
                                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl md:max-w-[400px] lg:max-w-full">
                                    {tr.heading}

                                    <span className="!text-white flex items-center">
                                        <Image
                                            className="hidden lg:block cursor-pointer -translate-x-4 2xl:-translate-x-5 scale-150 max-w-[70px] xl:max-w-[80px] 2xl:max-w-[100px]"
                                            src={arrow}
                                            alt="arrow"
                                        />{" "}
                                        {tr.subheading}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div
                        id="header_corner_1"
                        className="block md:hidden reversed-corner w-3 h-3 left-auto right-0 md:right-auto md:left-1/2 bottom-auto top-14  rotate-180 md:rotate-0 md:top-auto md:bottom-0"
                    ></div>
                    <div
                        id="header_corner_2"
                        className="block md:hidden reversed-corner w-3 h-3 left-auto right-13 md:right-auto md:left-0 rotate-180 md:rotate-0 top-0 md:top-auto md:bottom-30"
                    ></div>
                </div>

                <div className="mt-16 pt-16 md:pt-24 lg:pt-32 bg-[#eff1f5] rounded-2xl relative z-40 ">
                    <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-full bg-white py-8 2xl:py-12 rounded-2xl px-8 xl:px-12 2xl:px-16 md:max-w-[1100px] xl:max-w-[1300px] 2xl:max-w-[1600px] mx-auto -translate-y-10 flex justify-between">
                        <div className="hidden md:flex gap-1 max-w-[900px] w-full">
                            {options.map((item: string, i: number) => {
                                return (
                                    <div
                                        key={Math.random()}
                                        onClick={() => setCategory(item)}
                                        className="px-3 xl:px-4 w-fit !min-w-fit flex gap-2 rounded-xl py-3 blog-filter items-center justify-center  cursor-pointer border-1 border-black/10 transition-all"
                                    >
                                        <p className="font-medium text-center text-sm xl:text-base">
                                            {item}
                                        </p>
                                        <span className="">
                                            {i === 0
                                                ? //@ts-ignore
                                                  blogsData[lang].length
                                                : //@ts-ignore
                                                  blogsData[lang].filter(
                                                      //@ts-ignore
                                                      (blog) =>
                                                          blog.category === item
                                                  ).length}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="relative z-40 flex md:hidden w-full justify-center text-sm 2xl:text-base">
                            <DropDown
                                options={options}
                                onChange={() => console.log()}
                            />
                        </div>

                        <div className="flex flex-col items-end absolute -top-7 md:top-6 right-1/2 translate-x-[140px] md:translate-x-0 md:right-8 lg:relative w-[240px] 2xl:w-[250px]">
                            <Image
                                className="pointer-events-none absolute right-0 bottom-0 max-w-[150%] lg:max-w-[200%] xl:max-w-[185%] 2xl:max-w-[200%]"
                                src={blogs}
                                alt="image"
                            />

                            <p className="z-20 absolute bottom-24 max-w-[150px] md:max-w-[200px] lg:max-w-full xl:bottom-26 2xl:bottom-32 text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-sm text-right right-4 text-white ">
                                {tr.telegramNote}
                            </p>

                            <button className="z-20 bottom-4 right-4 absolute btn !bg-white/10  btn-transparent btn-arrow !p-0 !border-0">
                                <span className="!bg-transparent">
                                    <Image src={smallarrow} alt="smallarrow" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="cases-wrapper grid grid-cols-1 md:grid-cols-2 justify-items-center xl:grid-cols-3 gap-8 justify-center w-full max-w-[1600px] mx-auto">
                        {content}
                    </div>

                    <div className="mt-24">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    );
}
