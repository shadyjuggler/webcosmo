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
                {/* <Image src={glass} alt="glass" /> */}
                <svg
                    viewBox="0 0 548 465"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <desc>Created with Pixso.</desc>
                    <defs>
                        <filter
                            id="filter_238_818_dd"
                            x="0.000000"
                            y="0.000000"
                            width="548.000000"
                            height="465.000000"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                                in="BackgroundImage"
                                stdDeviation="13.3333"
                            />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect_backgroundBlur_1"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect_backgroundBlur_1"
                                result="shape"
                            />
                        </filter>
                    </defs>
                    <g>
                        <path
                            id="Glass Element"
                            d="M0 16L0 257.77C0 266.61 7.16 273.77 16 273.77L191.5 273.77C200.33 273.77 207.5 280.93 207.5 289.77L207.5 449C207.5 457.83 214.66 465 223.5 465L532 465C540.83 465 548 457.83 548 449L548 138.23C548 129.39 540.83 122.23 532 122.23L321.91 122.23C313.08 122.23 305.91 115.07 305.91 106.23L305.91 16C305.91 7.16 298.75 0 289.91 0L16 0C7.16 0 0 7.16 0 16Z"
                            fill="#FFFFFF"
                            fill-opacity="0.250000"
                            fill-rule="nonzero"
                        />
                    </g>
                </svg>
            </div>
            <section
                id="cta"
                className=" mask-side-file-top relative overflow-hidden rounded-b-2xl px-4 2xl:px-0"
            >
                <div
                    style={{ filter: "blur(100px)", opacity: "0.4" }}
                    className="circle hidden md:block z-20 md:!-translate-y-0 md:!-top-1/2 md:!-translate-x-0 md:!left-[150px] "
                ></div>
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
