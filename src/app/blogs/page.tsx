import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import arrow from "../assets/footer-arrow.png";
import Image from "next/image";
import Footer from "../components/Footer";
import { ArticleSlide } from "../components/UI/ArticleSlide";

import blogs from "../assets/blogs.png";

import smallarrow from "../assets/small-arrow.svg";

export default function BlogsPage() {
    return (
        <>
            <main className="main" id="main">
                <div className="graident-main rounded-2xl pt-8 pb-16">
                    <div className="container mx-auto">
                        <Navbar />
                        <div className="mt-8">
                            <ReturnBack />

                            <div className="mt-8">
                                <h1 className="text-6xl">
                                    Полезные статьи
                                    <span className="!text-white flex items-center">
                                        <Image
                                            className="-translate-x-5 scale-150 max-w-[100px]"
                                            src={arrow}
                                            alt="arrow"
                                        />{" "}
                                        по дизайну и разработке
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-32 bg-[#eff1f5] rounded-2xl relative">
                    <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-full bg-white py-12 rounded-2xl px-16 max-w-[1600px] mx-auto -translate-y-10 flex justify-between">
                        <div className="flex gap-1 max-w-[900px] w-full">
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">
                                    Все статьи
                                </p>
                            </div>
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">
                                    Аналитика
                                </p>
                            </div>
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">UX/UI</p>
                            </div>
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">
                                    Веб-разработка
                                </p>
                            </div>
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">
                                    Полезное
                                </p>
                            </div>
                            <div className="px-4 w-fit flex gap-2 rounded-xl py-3 items-center border-1 border-black/10 transition-all">
                                <p className="font-medium text-center">
                                    Про кейсы
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end relative w-[250px]">
                            <Image
                                className="pointer-events-none absolute right-0 bottom-0 max-w-[200%]"
                                src={blogs}
                                alt="image"
                            />

                            <p className="z-20 absolute bottom-32 text-sm text-right right-4 text-white ">
                                Еще больше кейсов у нас в Telegram канале
                            </p>

                            <button className="z-20 bottom-4 right-4 absolute btn btn-transparent btn-arrow !p-0 !border-0">
                                <span>
                                    <Image src={smallarrow} alt="smallarrow" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wraps gap-8 justify-between w-full max-w-[1600px] mx-auto">
                        {Array(3)
                            .fill(0)
                            .map((card) => {
                                console.log(card);
                                return (
                                    <ArticleSlide
                                        key={Math.random()}
                                        title="WebCosmo - ваш партнер в разработке"
                                        tech={["Веб-разработка", "Аналитика"]}
                                    />
                                );
                            })}
                    </div>

                    <div className="mt-24">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    );
}
