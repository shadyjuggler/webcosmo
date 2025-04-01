import Image from "next/image";

import Navbar from "./Navbar";

import banner1 from "../assets/banner-1-bg.svg";
import rocket from "../assets/rocket.svg";
import banner2 from "../assets/banner-bg-2.svg";
import arrow from "../assets/arrow.svg";
import banner3 from "../assets/banner-3-bg.svg";
import flag from "../assets/flag.svg";
import gear from "../assets/gear.svg";

export default function Header() {
    return (
        <header
            id="main_header"
            className="relative rounded-xl graident-main py-5 px-8 overflow-hidden flex"
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
                        className="absolute w-full left-0 top-40 flex flex-col justify-start items-end scale-90"
                        style={{ maxWidth: "372px", height: "330px" }}
                    >
                        <Image
                            className="absolute bottom-0"
                            src={banner2}
                            alt="banner-2"
                        />
                        <Image
                            className="absolute bottom-0"
                            src={arrow}
                            alt="arrow"
                        />
                        <div className="z-20 flex flex-col gap-8 py-5 pr-12">
                            <p className="text-3xl text-white text-left font-semibold max-w-36">
                                +6
                            </p>
                            <p className="text-white text-right max-w-36">
                                лет в digital <br /> разработке
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute w-full left-80 top-25 flex flex-col justify-end items-start scale-80 2xl:scale-135 z-30"
                        style={{ maxWidth: "400px", height: "535px" }}
                    >
                        <Image
                            className="absolute bottom-0"
                            src={banner3}
                            alt="banner-3"
                        />
                        <Image
                            className="absolute bottom-0"
                            src={flag}
                            alt="flag"
                        />

                        <div className="z-20 flex flex-col gap-12 py-4 pl-5">
                            <p className="text-2xl text-white text-left font-semibold max-w-36">
                                100+
                            </p>
                            <p
                                className=" text-white text-right max-w-36"
                                style={{ fontSize: "12px" }}
                            >
                                Работ выполнено <br /> за последний год
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-auto flex justify-end z-20">
                        <div className="w-full">
                            <p className="text-white">Готовы к масштабированию? Давайте обсудим ваш проект и запустим его вместе!</p>
                            <button className="btn mt-12 btn-transparent text-white py-2.5 px-4.5">Обсудить задачу</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 bottom-0 bg-white w-1/2 h-30 rounded-tr-xl"></div>
            
            <div className="absolute left-1/2 top-45 z-10 -translate-x-1/2">
                <Image src={gear} alt={gear}/>
            </div>

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
