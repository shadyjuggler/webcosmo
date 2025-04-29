import Image from "next/image";

import Navbar from "./Navbar";

import banner1 from "../assets/banner-1-bg.svg";
import rocket from "../assets/rocket.svg";
import arrow from "../assets/arrow.png";
import flag from "../assets/flag.png";
import gear from "../assets/gear.gif";

import trophyMob from "../assets/trophy-mob.png";

export default function Header() {
    return (
        <header
            id="main_header"
            className="relative rounded-xl graident-main py-5 pb-8 px-4 2xl:px-8 overflow-hidden flex min-h-[850px] md:min-h-[780px] xl:min-h-[880px]"
        >
            <div className="container mx-auto flex flex-col">
                <Navbar></Navbar>
             
                <div className="mt-16 relative flex flex-col flex-1">
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl max-w-[300px] sm:max-w-[500px] md:max-w-full">
                        Создаем уникальные <br /> цифровые решения
                    </h1>
                    <div
                        className="absolute w-full top-15 md:top-30 xl:top-10 -right-20 md:right-0 xl:right-10 2xl:-right-8 flex flex-col justify-end h-[250px] xl:h-[400px] items-start md:items-end max-w-[350px] xl:max-w-[400px] 2xl:max-w-[500px]"
                    >
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
                            <p className=" text-white text-left md:text-right font-semibold text-xl 2xl:text-3xl">
                                1
                            </p>
                            <p className="text-white text-left md:text-right max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                Топ 1 агентство <br /> в веб-разработке
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full -left-[0px] 2xl:left-[3%] bottom-55 hidden md:flex flex-col items-end min-w-[270px]"
                        style={{ maxWidth: "24%"}}
                    >
                        <Image
                            src={arrow}
                            alt="arrow"
                        />
                        <div className="absolute top-5 right-5 z-20 flex flex-col justify-between w-1/3 h-1/3">
                            <p className="text-xl 2xl:text-3xl text-white text-left font-semibold max-w-36">
                                +6
                            </p>
                            <p className="text-white max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                лет в digital <br /> разработке
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full bottom-45 sm:bottom-50 md:bottom-0 left-0 md:left-[8%] 2xl:left-[15%] flex flex-col justify-end items-end md:items-start z-30 min-w-[280px] xl:min-w-[380px]"
                        style={{ maxWidth: "33%"}}
                    >
                        <Image
                            className="w-full h-auto rotate-y-180 md:rotate-y-0"
                            src={flag}
                            alt="flag"
                        />

                        <div className="absolute bottom-4 xl:bottom-5 right-3 md:right-auto md:left-3 xl:left-5 z-20 flex flex-col justify-between gap-2 xl:gap-10 2xl:gap-0 2xl:h-2/5">
                            <p className="text-xl 2xl:text-3xl text-white text-right md:text-left font-semibold max-w-36 ">
                                100+
                            </p>
                            <p className=" text-white text-right max-w-36 text-[12px] xl:text-sm 2xl:text-base">
                                Работ выполнено <br /> за последний год
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto flex justify-end z-20">
                        <div
                            className="relative max-w-full md:max-w-[47%] md:bg-blur w-full flex justify-start items-center md:bg-white-10 rounded-xl md:p-8 xl:p-12"
                        >
                            <div className="flex flex-col">
                                <p className="text-white md:max-w-md text-base">
                                   <span className=" font-semibold"> Готовы к масштабированию?</span> Давайте обсудим
                                    ваш проект и запустим его вместе!
                                </p>
                                <button className="btn mt-4 sm:mt-8 btn-transparent text-white py-4.5 md:py-2.5 px-4.5 w-full md:w-60">
                                    Обсудить задачу
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute max-w-[350px] w-full md:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[630px] left-1/2 top-55 2xl:top-45 z-10 -translate-x-1/2 opacity-25"
            >
                <Image src={gear} alt={"gear"} />
            </div>

            <div className="hidden md:block absolute left-0 bottom-0 bg-white w-1/2 h-30 rounded-tr-xl z-20"></div>

            <div
                id="header_corner_1"
                className="block reversed-corner w-3 h-3 left-auto right-0 md:right-auto md:left-1/2 bottom-auto top-12  rotate-180 md:rotate-0 md:top-auto md:bottom-0"
            ></div>
            <div
                id="header_corner_2"
                className="block reversed-corner w-3 h-3 left-auto right-11 md:right-auto md:left-0 rotate-180 md:rotate-0 top-0 md:top-auto md:bottom-30"
            ></div>
        </header>
    );
}
