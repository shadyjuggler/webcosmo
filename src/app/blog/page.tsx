import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import arrow from "../assets/footer-arrow.png";
import Image from "next/image";
import Footer from "../components/Footer";
import { ArticleSlide } from "../components/UI/ArticleSlide";

import blogs from "../assets/blogs.png";

import smallarrow from "../assets/small-arrow.svg";

import blogbg from "../assets/blogbg.png";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function BlogPage() {
    return (
        <>
            <main className="main blogpage" id="main">
                <div className="graident-main rounded-b-2xl rounded-tr-lg rounded-tl-2xl md:rounded-2xl pt-8 pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32 px-4 md:px-6 xl:px-8 2xl:px-0 overflow-hidden relative">
                    <div className="absolute -rotate-90 md:rotate-0 top-1/2 scale-150 md:scale-100 md:-top-10 lg:-top-20 -right-[450px] md:-right-20 z-20 pointer-events-none">
                        <Image src={blogbg} alt="bg" />
                    </div>

                    <div className="container mx-auto">
                        <Navbar />
                        <div className="mt-8">
                            <div className="">
                                <ReturnBack />
                            </div>

                            <div className="mt-28 sm:mt-24 md:mt-16 lg:mt-24">
                                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl md:max-w-[400px] lg:max-w-full  xl:max-w-[700px] ">
                                    Как придумать название статьи?
                                </h1>
                            </div>

                            <div className="mt-8 lg:mt-10 flex items-center gap-3.5 md:gap-6">
                                <div className="text-white md:text-base text-sm">
                                    19 апреля, 2024 год
                                </div>
                                <p className="text-3xl text-white md:text-base text-sm">•</p>
                                <div className="text-white">5 минут чтения</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 lg:py-16 p-4 sm:p-8 md:p-10 lg:px-12 2xl:px-22 bg-white rounded-2xl relative flex gap-8">

                    {/* blog content */}
                    <div className="w-full rounded-2xl sm:border-1 border-slate-200 p-4 sm:p-8 md:p-12">
                        {/* list */}
                        <div>
                            <p className="font-medium text-xl md:text-2xl">
                                Что вы можете ожидать от нашего блога?
                            </p>

                            <ul className="mt-3">
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

                            <ul className="mt-3">
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

                    {/* soderzanije */}
                    <div className="hidden lg:block lg:max-w-[350px] xl:max-w-[420px] 2xl:max-w-[520px] rounded-2xl w-full h-fit  bg-[#eff1f5] py-8 2xl:py-12 px-6 2xl:px-8">
                        <p className="text-[#262B3A] font-semibold text-2xl pl-3 2xl:pl-4">
                            Содержание статьи
                        </p>
                        <ul className="flex flex-col mt-6 gap-2">
                            <li className="font-medium p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
                                1. Что такое статья и зачем она нужна?
                            </li>
                            <li className="font-medium p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
                                2. Что такое статья и зачем она нужна?
                            </li>
                            <li className="font-medium p-3 2xl:p-4 cursor-pointer hover:bg-white rounded-lg transition-all">
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
