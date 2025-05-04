"use client";
import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import Image from "next/image";

import smallarrow from "../assets/small-arrow.svg";
import { Message } from "../components/UI/Message";
import helix from "../assets/helix.png";
import Footer from "../components/Footer";
import { CaseSlide } from "../components/UI/CaseSlide";

import phone from "../assets/phone.png";

import { cases } from "../data/cases";
import { useState } from "react";

import arrow from "../assets/small-arrow.svg";
import { useLang } from "../context/LangContext";
import languages from "../data/lang";

export default function BlogsPage() {
    const [pagination, setPagination] = useState(4);
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].casesPage;

    // @ts-ignore
    const content = cases[lang].map((item, i) => {
        return (
            <div
                key={i}
                className={`max-w-[400px] md:max-w-[650px] lg:max-w-[680px] 2xl:max-w-[780px] ${
                    i % 2 === 1 ? "md:translate-y-10" : ""
                    // @ts-ignore
                } ${cases[lang].length - 1 === i ? "md:translate-y-10" : ""}`}
            >
                <CaseSlide
                    title={item.title}
                    descr={item.text}
                    link={item.link}
                    techstack={item.techstack}
                    imgUrl={item.imgUrl}
                />
            </div>
        );
    });

    return (
        <>
            <main className="main cases" id="main">
                <div className="relative">
                    <div className="graident-main rounded-b-2xl rounded-tr-md rounded-tl-2xl md:rounded-2xl px-4 md:px-6 xl:px-8 pt-8 pb-60 md:pb-16 overflow-hidden">
                        <div className="container mx-auto relative">
                            <Navbar />
                            <div className="mt-8">
                                <div className="block">
                                    <ReturnBack />
                                </div>

                                <div className="mt-4 md:mt-8">
                                    <h1 className="text-4xl md:text-5xl 2xl:text-6xl max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]">
                                        {tr.heading}
                                    </h1>
                                </div>

                                <div className="mt-8 md:mt-32">
                                    <button className="relative w-full md:w-fit z-40 btn btn-transparent md:!bg-white/10 btn-arrow py-1 pl-3 md:pl-4 pr-1 text-white">
                                        <p className="mx-auto md:mx-0">
                                            {tr.cta}
                                        </p>

                                        <span className="ml-auto md:ml-0">
                                            <Image
                                                src={smallarrow}
                                                alt="smallarrow"
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <Image
                                className="absolute -bottom-[360px] md:-bottom-1/2 -rotate-150 -scale-y-100 left-auto -right-[130px] sm:-right-[100px] md:right-0 xl:right-auto xl:left-[600px] 2xl:left-[800px] max-w-[400px] md:max-w-[500px] xl:max-w-[600px] pointer-events-none"
                                src={helix}
                                alt="helix"
                            />
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
                    <div
                        style={{ translate: "50% 20%" }}
                        className="absolute scale-95 sm:scale-100 md:scale-100 bottom-0 md:bottom-auto right-1/2 md:right-[100px] md:!-translate-y-1/2 max-w-[370px] w-full md:max-w-[430px] lg:max-w-[482px] xl:max-w-[522px] 2xl:max-w-[562px]"
                    >
                        <Message
                            title={tr.messageTitle}
                            message={tr.messageText}
                        />
                    </div>
                </div>

                <div
                    className={`mt-16 md:mt-32 flex flex-wrap justify-center gap-3 gap-y-4 max-w-[1680px] mx-auto px-4 md:px-0`}
                >
                    {content.slice(0, pagination)}
                </div>

                <div className="mt-16 md:mt-32 flex justify-center">
                    <button
                        onClick={() => {
                            // @ts-ignore
                            if (!(pagination >= cases[lang].length)) {
                                setPagination(pagination + 4);
                            }
                        }}
                        className="w-[96%] !bg-white sm:!bg-[#1462d6] !text-[#1462d6] sm:!text-white sm:w-fit flex btn btn-blue btn-arrow !py-1 !pl-7 !pr-1.5 !gap-5"
                    >
                        <p className="mx-auto md:mx-0">{tr.loadMore}</p>
                        <span className="!bg-[#1462d6]">
                            <Image src={arrow} alt="smallarrow" />
                        </span>
                    </button>
                </div>

                <div className="mt-32">
                    <Footer />
                </div>
            </main>
        </>
    );
}
