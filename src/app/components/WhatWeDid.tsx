import { Tab } from "./UI/Tab";
import Image from "next/image";
import spheres from "../assets/spheres.png";
import conus from "../assets/conus.png";
import { CTA } from "./Cta";

export const WhatWeDid: React.FC<{
    content: { title: string; text: string }[];
}> = ({ content }) => {
    return (
        <section id="tech" className="rounded-2xl  relative">
            <div className="relative pt-40 mask-side-file-top graident-main rounded-xl overflow-hidden">
                <div className="z-10 absolute top-30 -right-[150px] w-[700px]">
                    <Image src={spheres} alt="helix" />
                </div>

                <div className="container mx-auto">
                    <Tab name="Результат" />

                    <h2 className="mt-16 text-5xl tex-left">
                        Что мы сделали для клиента?
                    </h2>

                    <div className="mt-16 flex flex-wrap gap-8 z-20 relative justify-center">
                        {content.map((item, i: number) => {
                            return (
                                <div
                                    key={Math.random()}
                                    className={`rounded-2xl bg-white/10 flex flex-col justify-center items-center max-w-[350px] w-full min-h-[400px] ${
                                        i % 2 === 1 ? "translate-y-5" : ""
                                    }`}
                                    style={{ backdropFilter: "blur(20px)" }}
                                >
                                    <div className="rounded-xl bg-white/10 w-12 h-12 flex items-center justify-center">
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

                                    <p className="mt-4 text-white text-lg font-semibold max-w-[200px] text-center">
                                        {item.title}
                                    </p>

                                    <p className="mt-2 text-white/80 text-center text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}

                        <Image
                            className="absolute max-w-[150px] -bottom-[100px] rotate-90 left-1/3"
                            src={spheres}
                            alt="helix"
                        />
                        <Image
                            className="absolute max-w-[150px] -top-[100px] right-1/3"
                            src={conus}
                            alt="helix"
                        />
                    </div>
                </div>

                <div className="relative">
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
