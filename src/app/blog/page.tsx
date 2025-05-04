import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import arrow from "../assets/footer-arrow.png";
import Image from "next/image";
import Footer from "../components/Footer";

import blogbg from "../assets/blogbg.png";
import conus from "../assets/conus-header.png";

import helixwhite from "../assets/helix-white.png";

export default function BlogPage() {
    return (
        <>
            <main className="main blogpage relative" id="main">
                <div className="relative">
                    <div
                        id="blog-header"
                        className="graident-main mask-case rounded-b-2xl rounded-tr-md rounded-tl-2xl md:rounded-2xl pt-8 pb-70 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32 px-4 md:px-6 xl:px-8 2xl:px-0 overflow-hidden relative"
                    >
                        <div className="absolute -rotate-35 md:rotate-0 top-[60%] scale-150 md:scale-100 md:-top-10 lg:-top-20 -right-[50px] md:-right-20 z-20 pointer-events-none">
                            <Image src={blogbg} alt="bg" />
                        </div>

                        <div className="container mx-auto">
                            <Navbar />
                            <div className="mt-8">
                                <div className="">
                                    <ReturnBack />
                                </div>

                                <div className="mt-4 md:mt-16 lg:mt-24">
                                    <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl md:max-w-[400px] lg:max-w-full  xl:max-w-[700px] ">
                                        Как придумать название статьи?
                                    </h1>
                                </div>

                                <div className="mt-4 lg:mt-10 flex items-center gap-3.5 md:gap-6">
                                    <div className="md:text-base text-white text-sm">
                                        19 апреля, 2024 год
                                    </div>
                                    <p className="md:text-base text-white text-sm">
                                        •
                                    </p>
                                    <div className="text-white">
                                        5 минут чтения
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="header_corner_1"
                            className="block md:hidden reversed-corner w-3 h-3 left-auto right-0 md:right-auto md:left-1/2 bottom-auto top-14  rotate-180 md:rotate-0 md:top-auto md:bottom-0"
                        ></div>
                        <div
                            id="header_corner_2"
                            className="block md:hidden reversed-corner w-3 h-3 left-auto right-13 md:right-auto md:left-0 rotate-180 md:rotate-0 top-0 md:top-auto md:bottom-30"
                        ></div>
                    </div>

                    <Image
                        className="block md:hidden absolute w-[110px] z-30 bottom-0 right-18"
                        src={conus}
                        alt="conus"
                    />
                </div>

                <div className="mt-8 md:mt-12 lg:py-16 p-4 sm:p-8 flex-col-reverse lg:flex-row md:p-10 lg:px-12 2xl:px-22 bg-white rounded-2xl relative flex gap-4 md:gap-8">
                    {/* blog content */}
                    <div className="w-full rounded-2xl border-1 border-slate-200 p-4 sm:p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-20">
                            {/* list */}
                            <div>
                                <p className="font-medium text-xl md:text-2xl">
                                    Что вы можете ожидать от нашего блога?
                                </p>

                                <ul className="pl-2 mt-3">
                                    <li className="text-[#1D2230] opacity-60">
                                        • Обзоры новейших гаджетов и технологий
                                    </li>
                                    <li className="text-[#1D2230] opacity-60">
                                        • Анализ трендов в IT-индустрии
                                    </li>
                                    <li className="text-[#1D2230] opacity-60">
                                        • Советы по использованию технологий в
                                        повседневной жизни
                                    </li>
                                </ul>
                            </div>

                            {/* title */}
                            <div className="mt-8 md:mt-16">
                                <h3 className="text-[#1462D6] text-3xl md:text-4xl 2xl:text-[42px] 2xl:leading-12 font-semibold">
                                    1. Статья, зачем она нужна?
                                </h3>
                            </div>

                            {/* image */}
                            <div className="mt-6 md:mt-12">
                                <div className="rounded-2xl bg-[#F4F4F4] min-h-[280px] sm:min-h-[350px] md:min-h-[400px] xl:min-h-[480px] 2xl:min-h-[635px] h-full">
                                    {/* <img className="w-full h-auto" src="abc" alt="image" /> */}
                                </div>
                            </div>

                            {/* list */}
                            <div className="mt-6 md:mt-12">
                                <p className="font-medium text-xl md:text-2xl">
                                    Что вы можете ожидать от нашего блога?
                                </p>

                                <ul className="pl-2 mt-3">
                                    <li className="text-[#1D2230] opacity-60">
                                        • Обзоры новейших гаджетов и технологий
                                    </li>
                                    <li className="text-[#1D2230] opacity-60">
                                        • Анализ трендов в IT-индустрии
                                    </li>
                                    <li className="text-[#1D2230] opacity-60">
                                        • Советы по использованию технологий в
                                        повседневной жизни
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* herna */}
                        <div
                            style={{
                                filter: "blur(150px)",
                                translate: "30% -30%",
                            }}
                            className="hidden lg:block absolute z-10 -top-0 -right-0 w-[400px] h-[400px] bg-[#8D6CFE] rounded-full"
                        ></div>

                        <Image
                            className="hidden lg:block absolute w-[110px] z-30 -top-5 xl:top-10 -right-5 xl:right-10 2xl:top-15 rotate-90 2xl:right-15"
                            src={conus}
                            alt="conus"
                        />

                        <Image
                            className="hidden lg:block absolute w-[250px] z-30 top-90 xl:top-100  -right-30 xl:-right-25 2xl:top-120 2xl:-right-15"
                            src={helixwhite}
                            alt="conus"
                        />
                    </div>

                    {/* soderzanije */}
                    <div className="lg:max-w-[350px] xl:max-w-[420px] 2xl:max-w-[520px] rounded-2xl w-full h-fit  bg-[#eff1f5] p-4 sm:p-8 md:py-8 2xl:py-12 md:px-6 2xl:px-8">
                        <p className="text-[#262B3A] font-semibold text-2xl pl-1 md:pl-3 2xl:pl-4">
                            Содержание статьи
                        </p>
                        <ul className="flex flex-col mt-6 gap-2">
                            <li className="font-medium p-2 md:p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
                                1. Что такое статья и зачем она нужна?
                            </li>
                            <li className="font-medium p-2 md:p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
                                2. Что такое статья и зачем она нужна?
                            </li>
                            <li className="font-medium p-2 md:p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
                                3. Что такое статья и зачем она нужна?
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <Footer />
                </div>
            </main>
        </>
    );
}
