"use client";
import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import Image, { StaticImageData } from "next/image";

import Footer from "../components/Footer";

import iphone from "../assets/iphone.png";
import aboutclient from "../assets/about-client.png";
import figure from "../assets/figure.png";

import { MainGoals } from "../components/MainGoals";
import Technologies from "../components/Technologies";


import Functionality from "../components/Functionality";

import shop from "../assets/shop-icon.svg";
import imgIcon from "../assets/img-icon.svg";
import cross from "../assets/cross-icon.svg";
import { Achievements } from "../components/Achievements";
import { WhatWeDid } from "../components/WhatWeDid";

import { useEffect, useState } from "react";
import casecloud from "../assets/casecloud.png";

import { useLang } from "../context/LangContext";
import languages from "../data/lang";

export default function BlogsPage() {
    const [figureImg, setImg] = useState<StaticImageData | string>("");

    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].caseFungypack;

    useEffect(() => {
        // This code only runs on the client
        if (window.innerWidth >= 768) {
            setImg(aboutclient);
        } else {
            setImg(casecloud);
        }
    }, []);

    return (
        <>
            <main className="main case overflow-hidden" id="main">
                <div className="relative overflow-hidden xl:p-4 md:bg-white rounded-tr-md rounded-tl-2xl md:rounded-2xl">
                    <div
                        id="case-id"
                        className="graident-main mask-case rounded-tr-md rounded-tl-2xl px-4 md:px-6 xl:px-8 2xl:px-0 pt-8 pb-70 md:pb-20 xl:pb-16 overflow-hidden"
                    >
                        <div className="container mx-auto relative">
                            <div className="relative z-50">
                                <Navbar />
                            </div>
                            <div className="mt-8">
                                <div className="">
                                    <ReturnBack />
                                </div>

                                <div className="mt-4 md:mt-8 relative z-40">
                                    <h1 className="text-4xl lg:text-5xl xl:text-[68px] xl:leading-16 max-w-[300px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[750px]">
                                        {tr.title}
                                    </h1>
                                </div>

                                <Image
                                    className="absolute max-w-[100px] md:max-w-[300px] z-40 md:z-10 lg:max-w-[400px] xl:max-w-[550px] 2xl:max-w-[700px] left-[70%] md:left-1/3 2xl:left-2/5 bottom-30 md:bottom-20 xl:bottom-[0px]"
                                    src={figure}
                                    alt="phone"
                                />
                                <div className=" flex justify-center md:justify-start">
                                    <div className="relative">
                                        <Image
                                            className="relative mt-12 md:mt-20 max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] z-30"
                                            src={figureImg}
                                            alt="phone"
                                        />

                                        <p className="text-white text-sm xl:text-base absolute top-16 md:top-24 lg:top-26 left-6 xl:left-8 z-40">
                                            {tr.aboutClient.heading}
                                        </p>
                                        <p className="text-white text-[13px] lg:text-sm xl:text-base absolute bottom-6 md:bottom-5 lg:bottom-8 xl:bottom-10 2xl:bottom-12 left-15    md:left-40 lg:left-45 xl:left-55 2xl:left-65 max-w-[250px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] z-40">
                                            {tr.aboutClient.description}
                                        </p>
                                    </div>
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
                        <Image
                            style={{ translate: "400px 0px" }}
                            className="absolute -bottom-[200px] rotate-45 md:rotate-0 md:bottom-auto md:top-0 lg:-top-[140px] right-1/2 md:!translate-x-0 md:-right-100 lg:-right-120 xl:-right-120 2xl:-right-110 max-w-[800px] md:max-w-[1000px] lg:max-w-[1400px] xl:max-w-[1500px] 2xl:max-w-[1700px] z-40 md:z-20 pointer-events-none"
                            src={iphone}
                            alt="phone"
                        />
                    </div>
                </div>

                <div className="bg-[#EFF1F5] rounded-2xl">
                    <MainGoals
                        titleBlackPart={tr.goals.titleBlackPart}
                        titleBluePart={tr.goals.titleBluePart}
                        tab={tr.goals.tab}
                        content={tr.goals.content}
                    />
                    <Technologies
                        title={tr.tech.title}
                        tab={tr.tech.tab}
                        messageText={tr.tech.messageText}
                        messageTitle={tr.tech.messageTitle}
                        content={[
                            {
                                title: tr.tech.frontend.title,
                                list: tr.tech.frontend.list,
                                img: tr.tech.frontend.img,
                            },
                            {
                                title: tr.tech.backend.title,
                                list: tr.tech.backend.list,
                                img: tr.tech.backend.img,
                            },
                        ]}
                    />
                    <Functionality
                        titleBlackPart={tr.features.titleBlackPart}
                        titleBlackPart2={tr.features.titleBlackPart2}
                        titleBluePart={tr.features.titleBluePart}
                        tab={tr.features.tab}
                        //@ts-ignore
                        content={tr.features.content.map((feature) => ({
                            ...feature,
                            icon:
                                feature.icon === "shop"
                                    ? shop
                                    : feature.icon === "cross"
                                    ? cross
                                    : imgIcon,
                        }))}
                    />
                </div>

                <Achievements
                    titleBlackPart={tr.achievements.titleBlackPart}
                    titleBluePart={tr.achievements.titleBluePart}
                    tab={tr.achievements.tab}
                    imgUrl={tr.achievements.imgUrl}
                    content={tr.achievements.content}
                />
                <WhatWeDid formTitle={tr.whatWeDid.formTitle} title={tr.whatWeDid.title} tab={tr.whatWeDid.tab} content={tr.whatWeDid.content} />

                <div className="mt-16 md:mt-32">
                    <Footer />
                </div>
            </main>
        </>
    );
}
