import Image from "next/image";

import { Tab } from "./UI/Tab";

import helix from "../assets/helix.png";

export const Achievements: React.FC<{
    titleBluePart: string;
    titleBlackPart: string;
    tab: string;
    imgUrl: string;
    content: { title: string; text: string }[];
}> = ({ titleBluePart, titleBlackPart, tab, imgUrl, content }) => {
    return (
        <section id="maingoals" className="mt-7 pb-80 pt-8 md:py-24">
            <div className="container mx-auto">
                <div className="flex justify-center items-start gap-8 md:gap-0 md:items-center flex-col md:flex-row">
                    <Tab name={tab} />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl !text-[#262B3A] md:mx-auto">
                        <span>{titleBluePart}</span> {titleBlackPart}
                    </h2>
                </div>

                <div className="mt-10 md:mt-20 flex gap-8 relative">
                    <div className="max-w-full md:max-w-[450px] xl:max-w-[620px] flex flex-col gap-4 w-full z-30">
                        {content.map(
                            (item: { title: string; text: string }) => {
                                return (
                                    <div
                                        key={Math.random()}
                                        className="achivements-card rounded-xl flex flex-col  transition-all w-ful py-8 px-8"
                                    >
                                        <div className="flex items-start md:items-center gap-2 md:flex-row flex-col">
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
                                            <p className="mt-8 pl-2 md:pl-0 md:mt-0 text-xl text-[#262B3A] font-semibold">
                                                {item.title}
                                            </p>
                                        </div>
                                        <p className="pl-2 mt-4 text-sm text-[#262B3A]/80 max-w-[300px]">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <Image
                        className="absolute max-w-[200px] lg:max-w-[300px] z-20 xl:max-w-[500px] right-[-40px] md:right-[-25px] lg:right-[-50px] xl:right-[-100px] 2xl:-right-[80px] -bottom-[200px] md:bottom-1/4 xl:-bottom-1/4 rotate-160 md:rotate-60"
                        src={helix}
                        alt="helix"
                    ></Image>
                    <Image
                        style={{ translate: "170px" }}
                        className="absolute max-w-[400px] lg:max-w-[600px] z-30 xl:max-w-[800px] 2xl:max-w-[900px] right-1/2  md:!translate-x-0 md:right-[50px] 2xl:right-[150px] -bottom-[370px] md:bottom-auto md:top-10 lg:-top-20"
                        src={imgUrl}
                        alt="helix"
                    ></Image>

                    <div className="hidden lg:block absolute pointer-events-none -bottom-4/5 right-0 blur-[300px] z-10 w-[700px] h-[700px] bg-[#7069f4] rounded-full "></div>
                </div>
            </div>
        </section>
    );
};
