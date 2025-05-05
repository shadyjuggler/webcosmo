import Image from "next/image";

import Navbar from "./Navbar";

import banner1 from "../assets/banner-1-bg.svg";
import rocket from "../assets/rocket.svg";
import arrow from "../assets/arrow.png";
import flag from "../assets/flag.png";
import flagMob from "../assets/flag-mob.png";
import gear from "../assets/gear.gif";

import trophyMob from "../assets/trophy-mob.png";

import headerB from "../assets/header-bottom.svg";
// import headerB from "../assets/header-bottom2.png";

import smallarrow from "../assets/small-arrow.svg";

import conus from "../assets/conus-header.png";

import CircleButton from "./UI/CircleButton";
import { useLang } from "../context/LangContext";

import languages from "../data/lang/index";

export default function Header() {
    const { lang } = useLang();

    //@ts-ignore
    const tr = languages[lang].header;

    return (
        <header
            id="main_header"
            className="relative rounded-b-2xl rounded-tl-2xl md:rounded-2xl graident-main py-8 pb-12 px-4 2xl:px-8 flex min-h-[850px] md:min-h-[780px] lg:min-h-[750px] xl:min-h-[800px] 2xl:min-h-[910px]"
        >
            <div className="header-container mx-auto flex flex-col">
                <Navbar></Navbar>
                <div className="mt-12 relative flex flex-col flex-1">
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl z-40 max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1000px]">
                        {tr.title}
                    </h1>
                    <div className="absolute w-full top-15 md:top-30 lg:top-15 xl:top-10 -right-20 md:right-0 lg:right-10 z-40 md:z-20 xl:-right-0 flex flex-col justify-end h-[250px] xl:h-[400px] items-start md:items-end max-w-[350px] xl:max-w-[400px] 2xl:max-w-[500px]">
                        <Image
                            className="hidden md:block absolute z-10 -top-8 xl:-top-15 -left-5 pointer-events-none max-w-[225px] xl:max-w-[270px] 2xl:max-w-[300px]"
                            src={rocket}
                            alt="rocket"
                        ></Image>

                        <Image
                            className="block md:hidden absolute top-0 left-0 pointer-events-none max-w-[260px]"
                            src={trophyMob}
                            alt="rocket"
                        ></Image>

                        <Image
                            className="hidden md:block absolute top-0 left-0 pointer-events-none"
                            src={banner1}
                            alt="banner_1"
                        ></Image>

                        <div className="z-20 flex flex-col gap-2 md:gap-4 xl:gap-8 2xl:gap-10 pb-12 md:pb-3 xl:pb-32 2xl:pb-16 px-4 xl:px-8">
                            <p className=" text-white text-left md:text-right font-medium text-xl 2xl:text-3xl">
                                1
                            </p>
                            <p className="text-white text-left md:text-right max-w-30 2xl:max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                {tr.cloud1}
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full -left-[0px] lg:left-[5%] xl:left-[0%] bottom-40 hidden md:flex flex-col items-end min-w-[270px]"
                        style={{ maxWidth: "24%" }}
                    >
                        <Image src={arrow} alt="arrow" />
                        <div className="absolute top-5 right-5 z-20 flex flex-col justify-between w-1/3 h-1/3">
                            <p className="text-xl 2xl:text-3xl text-white text-left font-medium max-w-36">
                                +6
                            </p>
                            <p className="text-white max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                {tr.cloud2}
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full bottom-45 sm:bottom-48 md:-bottom-10 lg:bottom-0 xl:-bottom-5 2xl:-bottom-10 left-0 md:left-[8%] lg:left-[16%] xl:left-[15%] 2xl:left-[15%] flex flex-col justify-end items-end md:items-start z-30 min-w-[280px] xl:min-w-[380px]"
                        style={{ maxWidth: "33%" }}
                    >
                        <Image
                            className="hidden md:block w-full h-auto rotate-y-180 md:rotate-y-0"
                            src={flag}
                            alt="flag"
                        />

                        <Image
                            className="md:hidden block w-full h-auto"
                            src={flagMob}
                            alt="flag"
                        />

                        <div className="absolute bottom-4 xl:bottom-6 right-5 md:right-auto md:left-3 xl:left-8 z-20 flex flex-col justify-between gap-2 xl:gap-10 2xl:gap-0 2xl:h-[160px]">
                            <p className="text-xl 2xl:text-3xl text-white text-right md:text-left font-medium max-w-36 ">
                                100+
                            </p>
                            <p className=" text-white text-right md:text-left max-w-32 2xl:max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                {tr.cloud3}
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto flex justify-end z-20 relative">
                        <div className="relative z-40 border-t-1 md:border-0 pt-4 md:pt-0 border-white/10 max-w-full md:max-w-[48%] w-full flex justify-start items-center md:rounded-xl md:p-8 xl:py-6 xl:px-12 2xl:p-[2.2vw]">
                            <div className="flex flex-col">
                                <p className="text-white md:max-w-md text-base">
                                    <span className=" font-semibold">
                                        {" "}
                                        {tr.question}
                                    </span>{" "}
                                    {tr.call}
                                </p>
                                <a
                                    href="#cta"
                                    className="mt-6 2xl:mt-10 btn btn-transparent btn-arrow w-full !bg-white md:hover:!bg-white/20 md:!bg-white/10 justify-center md:w-fit py-1 2x:py-1.5 !pl-8 !gap-6 "
                                >
                                    <p className="mx-auto md:mx-0">{tr.task}</p>
                                    <span>
                                        <Image
                                            src={smallarrow}
                                            alt="smallarrow"
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <Image
                            className="hidden lg:block absolute w-[130px] 2xl:w-[150px] z-40 -top-25 2xl:-top-18 right-50 rotate-0"
                            src={conus}
                            alt="conus"
                        />
                        <Image
                            className="hidden lg:block absolute w-[75px] 2xl:w-[100px] z-40 bottom-15 right-20 rotate-70"
                            src={conus}
                            alt="conus"
                        />
                        {/* <Image
                            className="hidden xl:block absolute bottom-0 right-0 lg:w-[80%] xl:w-[60%] 2xl:w-[62%] pointer-events-none"
                            src={headerB}
                            alt="abc"
                        /> */}
                        <div className="hidden xl:block absolute bottom-0 right-0 lg:w-[80%] xl:w-[60%] 2xl:w-[62%] pointer-events-none">
                            <svg
                                viewBox="0 0 1054 364.068"
                                fill="none"
                            >
                                <defs>
                                    <filter
                                        id="filter_0_40_dd"
                                        x="0.000000"
                                        y="0.000000"
                                        width="1054.000000"
                                        height="364.067627"
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
                                        d="M0 16L6.1e-5 201.63C6.1e-5 210.47 7.16 217.63 16 217.63L207.5 217.63C216.33 217.63 223.5 224.8 223.5 233.63L223.5 348.06C223.5 356.9 230.66 364.06 239.5 364.06L1038 364.06C1046.84 364.06 1054 356.9 1054 348.06L1054 128.87C1054 120.02 1046.81 112.85 1037.94 112.87L239.54 115.29C230.69 115.31 223.5 108.14 223.5 99.28L223.5 16C223.5 7.16 216.33 0 207.5 0L16 0C7.16 0 0 7.16 0 16Z"
                                        fill="#FFFFFF"
                                        fill-opacity="0.120000"
                                        fill-rule="evenodd"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* wasup */}

            <div
                style={{ translate: "-50% 0%" }}
                className="absolute max-w-[350px] w-full md:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[630px] left-1/2 top-55 2xl:top-45 z-10 opacity-25"
            >
                <Image src={gear} alt={"gear"} />
            </div>

            <div className="hidden md:block absolute left-0 bottom-0 bg-white w-1/2 h-30 rounded-tr-xl z-20"></div>

            <div className="absolute bottom-4 hidden lg:block lg:left-8 xl:left-12 2xl:left-16 w-16 h-16 z-40">
                <CircleButton />
            </div>

            <div
                id="header_corner_1"
                className="block reversed-corner w-3 h-3 left-auto right-0 md:right-auto md:left-1/2 bottom-auto top-14  rotate-180 md:rotate-0 md:top-auto md:bottom-0"
            ></div>
            <div
                id="header_corner_2"
                className="block reversed-corner w-3 h-3 left-auto right-14 md:right-auto md:left-0 rotate-180 md:rotate-0 top-0 md:top-auto md:bottom-30"
            ></div>
        </header>
    );
}
