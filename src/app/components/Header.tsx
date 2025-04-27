import Image from "next/image";

import Navbar from "./Navbar";

import banner1 from "../assets/banner-1-bg.svg";
import rocket from "../assets/rocket.svg";
import arrow from "../assets/arrow.png";
import flag from "../assets/flag.png";
import gear from "../assets/gear.gif";

export default function Header() {
    return (
        <header
            id="main_header"
            className="relative rounded-xl graident-main py-5 pb-8 px-8 overflow-hidden flex"
        >
            <div className="container mx-auto flex flex-col">
                <Navbar></Navbar>
                <div className="mt-16 relative flex flex-col flex-1">
                    <h1 className="text-6xl">
                        Создаем уникальные <br /> цифровые решения
                    </h1>
                    <div
                        className="absolute w-full top-10 -right-16 2xl:-right-8 flex flex-col justify-end items-end scale-80 2xl:scale-90"
                        style={{ maxWidth: "548px", height: "405px" }}
                    >
                        <Image
                            className="absolute z-10 -top-15 -left-5 pointer-events-none"
                            src={rocket}
                            alt="rocket"
                        ></Image>

                        <Image
                            className="absolute top-0 left-0 pointer-events-none"
                            src={banner1}
                            alt="banner_1"
                        ></Image>

                        <div className="z-20 flex flex-col gap-20 py-4 px-8">
                            <p className="text-3xl text-white text-right font-semibold">
                                1
                            </p>
                            <p className="text-white text-right max-w-36">
                                Топ 1 агентство <br /> в веб-разработке
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full left-0 bottom-55 flex flex-col items-end"
                        style={{ maxWidth: "24%", left: "3%" }}
                    >
                        <Image
                            src={arrow}
                            alt="arrow"
                        />
                        <div className="absolute top-5 right-5 z-20 flex flex-col justify-between w-1/3 h-1/3">
                            <p className="text-2xl text-white text-left font-semibold max-w-36">
                                +6
                            </p>
                            <p className="text-white max-w-36">
                                лет в digital <br /> разработке
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full bottom-0 flex flex-col justify-end items-start z-30"
                        style={{ maxWidth: "33%", left: "15%" }}
                    >
                        <Image
                            className="w-full h-auto"
                            src={flag}
                            alt="flag"
                        />

                        <div className="absolute bottom-5 left-5 z-20 flex flex-col justify-between h-2/5">
                            <p className="text-3xl text-white text-left font-semibold max-w-36 ">
                                100+
                            </p>
                            <p className=" text-white text-right max-w-36">
                                Работ выполнено <br /> за последний год
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto flex justify-end z-20">
                        <div
                            className="relative bg-blur w-full flex justify-start items-center bg-white-10 rounded-xl p-12"
                            style={{ maxWidth: "47%" }}
                        >
                            <div className="flex flex-col">
                                <p className="text-white max-w-md">
                                    Готовы к масштабированию? Давайте обсудим
                                    ваш проект и запустим его вместе!
                                </p>
                                <button className="btn mt-8 btn-transparent text-white py-2.5 px-4.5 w-60">
                                    Обсудить задачу
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute left-1/2 top-45 z-10 -translate-x-1/2 opacity-25"
                style={{ maxWidth: "630px" }}
            >
                <Image src={gear} alt={"gear"} />
            </div>

            <div className="absolute left-0 bottom-0 bg-white w-1/2 h-30 rounded-tr-xl z-20"></div>

            <div
                id="header_corner_1"
                className="reversed-corner w-3 h-3 left-1/2 bottom-0"
            ></div>
            <div
                id="header_corner_2"
                className="reversed-corner w-3 h-3 left-0 bottom-30"
            ></div>
        </header>
    );
}
