"use client";

import { Tab } from "./UI/Tab";
import Image from "next/image";
import glass from "../assets/glass.svg";
import sphere from "../assets/sphere.png";
import Form from "./Form";

import { useLang } from "../context/LangContext";
import languages from "../data/lang/index";

export const CTA: React.FC<{ title: string }> = ({ title }) => {
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].cta;

    return (
        <>
            <div className="absolute left-auto hidden md:block -right-10 md:right-auto w-full max-w-[200px] md:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[550px] md:left-1/2 -top-[75px] md:-top-[0px] z-40">
                <Image src={glass} alt="glass" />
            </div>
            <section
                id="cta"
                className=" mask-side-file-top relative overflow-hidden rounded-b-2xl px-4 2xl:px-0"
            >
                <div style={{filter: "blur(250px)", opacity: "0.5"}} className="circle hidden md:block z-20 md:!-translate-y-0 md:!-top-1/2 md:!-translate-x-0 md:!left-[200px] "></div>
                <Image
                    style={{ translate: "54% 0%" }}
                    className="max-w-[300px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] absolute -bottom-35 right-1/2 md:!translate-x-0 md:-right-50"
                    src={sphere}
                    alt="abc"
                />
                <div className="container mx-auto pt-16 pb-40 2xl:pb-48 md:py-25 lg:pt-30 xl:pt-40">
                    <div className="flex z-40 relative flex-col justify-center items-center md:items-start">
                        <Tab name={tr.tab} />
                        <h2
                            className="mt-8 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A] text-center md:text-left"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h2>
                    </div>
                    <p className="mt-8 opacity-60 z-40 relative text-[rgb(29, 34, 48)] max-w-[580px] text-center md:text-left">
                        {tr.description}
                    </p>

                    <div className="mt-16 max-w-[800px] flex">
                        <Form isModal={false} />
                    </div>
                </div>
            </section>
        </>
    );
};
