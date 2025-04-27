import Image from "next/image";

import { Tab } from "./UI/Tab";

import helix from "../assets/helix.png";
import mac from "../assets/mack.png";

export const Achievements: React.FC<{ content: {title: string, text: string}[] }> = ({ content }) => {
    return (
        <section id="maingoals" className="mt-7 py-24">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <Tab name="Задачи" />
                    <h2 className="text-5xl !text-[#262B3A] mx-auto">
                        <span>Результаты</span> и достижения
                    </h2>
                </div>

                <div className="mt-20 flex gap-8 relative">
                    <div className="max-w-[600px] flex flex-col gap-4 w-full">
                        {content.map((item: {title: string, text: string}) => {
                            return (
                                <div key={item.title} className="achivements-card rounded-xl flex flex-col hover:!bg-white transition-all w-ful py-8 px-8">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="44.000000"
                                            height="44.000000"
                                            viewBox="0 0 44 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <desc>Created with Pixso.</desc>
                                            <defs>
                                                <clipPath id="clip153_381">
                                                    <rect
                                                        id="tick-svgrepo-com (8) 2"
                                                        rx="0.000000"
                                                        width="43.000000"
                                                        height="43.000000"
                                                        transform="translate(0.500000 0.500000)"
                                                        fill="white"
                                                        fill-opacity="0"
                                                    />
                                                </clipPath>
                                            </defs>
                                            <rect
                                                id="tick-svgrepo-com (8) 2"
                                                rx="0.000000"
                                                width="43.000000"
                                                height="43.000000"
                                                transform="translate(0.500000 0.500000)"
                                                fill="#FFFFFF"
                                                fill-opacity="0"
                                            />
                                            <g clip-path="url(#clip153_381)">
                                                <path
                                                    id="Vector"
                                                    d="M32.65 16.34L30 13.69L18.7 25L13.99 20.29L11.34 22.94L18.7 30.3L32.65 16.34Z"
                                                    fill="#1462D6"
                                                    fill-opacity="1.000000"
                                                    fill-rule="nonzero"
                                                />
                                            </g>
                                        </svg>
                                        <p className="text-xl text-[#262B3A] font-semibold">
                                            {item.title}
                                        </p>
                                    </div>
                                    <p className="pl-2 mt-4 text-sm text-[#262B3A]/80 max-w-[300px]">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <Image className="absolute max-w-[500px] right-0 -bottom-1/4 rotate-60" src={helix} alt="helix"></Image>
                    <Image className="absolute max-w-[800px] right-[150px] -top-10" src={mac} alt="helix"></Image>
                </div>
            </div>
        </section>
    );
};
