import { Tab } from "./UI/Tab";
import Image from "next/image";
import spheres from "../assets/spheres.png";
import conus from "../assets/conus.png";
import { CTA } from "./Cta";

export const WhatWeDid: React.FC<{
    content: { title: string; text: string }[];
}> = ({ content }) => {
    return (
        <section id="tech" className="rounded-2xl z-30  relative">
            <div className="relative pt-20 lg:pt-40 mask-side-file-top graident-main rounded-2xl overflow-hidden">
                <div className="z-10 absolute top-20 lg:top-30 -right-[50px] md:-right-[150px] w-[200px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[820px]">
                    <Image src={spheres} alt="helix" />
                </div>

                <div className="container mx-auto">
                    <div className="ml-3 md:ml-0">
                        <Tab name="Результат" />
                    </div>

                    <h2 className="ml-3 md:ml-0 mt-4 md:mt-8 lg:mt-16 text-3xl md:text-4xl lg:text-5xl tex-left relative z-30">
                        Что мы сделали для клиента?
                    </h2>

                    <div className="mt-12 lg:mt-16 flex flex-wrap gap-3 2xl:gap-3 z-20 relative justify-center">
                        {content.map((item, i: number) => {
                            return (
                                <div
                                    key={Math.random()}
                                    className={`rounded-2xl bg-white/10 flex flex-col justify-center items-center max-w-[310px] 2xl:max-w-[400px] px-6 w-full min-h-[350px] 2xl:min-h-[400px] ${
                                        i % 2 === 1 ? "md:translate-y-5" : ""
                                    }`}
                                    style={{ backdropFilter: "blur(20px)" }}
                                >
                                    <div className="rounded-md bg-white/10 w-14 h-14 border-1 border-white/10 flex items-center justify-center">
                                        <svg
                                            width="30.000000"
                                            height="30.000000"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <desc>Created with Pixso.</desc>
                                            <defs>
                                                <clipPath id="clip153_409">
                                                    <rect
                                                        id="tick-svgrepo-com (8) 4"
                                                        rx="0.000000"
                                                        width="29.000000"
                                                        height="29.000000"
                                                        transform="translate(0.500000 0.500000)"
                                                        fill="white"
                                                        fill-opacity="0"
                                                    />
                                                </clipPath>
                                            </defs>
                                            <rect
                                                id="tick-svgrepo-com (8) 4"
                                                rx="0.000000"
                                                width="29.000000"
                                                height="29.000000"
                                                transform="translate(0.500000 0.500000)"
                                                fill="#FFFFFF"
                                                fill-opacity="0"
                                            />
                                            <g clip-path="url(#clip153_409)">
                                                <path
                                                    id="Vector"
                                                    d="M22.26 11.14L20.46 9.33L12.75 17.04L9.53 13.83L7.73 15.64L12.75 20.66L22.26 11.14Z"
                                                    fill="#FFFFFF"
                                                    fill-opacity="1.000000"
                                                    fill-rule="nonzero"
                                                />
                                            </g>
                                        </svg>
                                    </div>

                                    <p className="mt-6 text-white text-2xl font-semibold max-w-[280px] text-center">
                                        {item.title}
                                    </p>

                                    <p className="mt-4 text-white/80 text-center text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}

                        <Image
                            className="hidden xl:block absolute max-w-[150px] -bottom-[100px] rotate-90 left-1/3"
                            src={spheres}
                            alt="helix"
                        />
                        <Image
                            className="hidden md:block absolute max-w-[150px] -top-[50px] lg:-top-[100px] right-1/3"
                            src={conus}
                            alt="helix"
                        />
                    </div>
                </div>

                <div className="mt-20 md:mt-40 relative z-30">
                    <CTA
                        title={
                            "<p>Готовы внедрять Web3 <br/> в ваш бизнес?</p>"
                        }
                    />
                </div>
            </div>
        </section>
    );
};
