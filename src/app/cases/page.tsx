import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import Image from "next/image";

import smallarrow from "../assets/small-arrow.svg";
import { Message } from "../components/UI/Message";
import helix from "../assets/helix.png";
import Footer from "../components/Footer";
import { CaseSlide } from "../components/UI/CaseSlide";

import phone from "../assets/phone.png";

export default function BlogsPage() {
    const num = 4;

    return (
        <>
            <main className="main cases" id="main">
                <div className="relative">
                    <div className="graident-main rounded-2xl px-4 md:px-6 xl:px-8 pt-8 pb-16 overflow-hidden">
                        <div className="container mx-auto relative">
                            <Navbar />
                            <div className="mt-8">
                                <div className="hidden md:block">
                                    <ReturnBack />
                                </div>

                                <div className="mt-8">
                                    <h1 className="text-4xl md:text-5xl 2xl:text-6xl">
                                        Кейсы, которые сами <br /> говорят за
                                        себя
                                    </h1>
                                </div>

                                <div className="mt-32">
                                    <button className="relative z-40 btn btn-transparent btn-arrow py-1 pl-3 md:pl-4 pr-1 text-white">
                                        Обсудить задачу{" "}
                                        <span>
                                            <Image
                                                src={smallarrow}
                                                alt="smallarrow"
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <Image
                                className="absolute -bottom-[50px] -rotate-70 sm:-bottom-[200px] md:-bottom-1/2 sm:-rotate-150 -scale-y-100 left-auto -right-[130px] sm:-right-[100px] md:right-0 xl:right-auto xl:left-1/2 2xl:left-1/3 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] pointer-events-none"
                                src={helix}
                                alt="helix"
                            />
                        </div>
                    </div>
                    <div className="absolute right-[100px] hidden md:block -translate-y-1/2 md:max-w-[430px] lg:max-w-[482px] xl:max-w-[522px] 2xl:max-w-[562px]">
                        <Message
                            title="Веб-разрабочик"
                            message="Сотрудничество с этим агентством — это всегда качественный и креативный результат."
                        />
                    </div>
                </div>

                <div
                    className={`mt-8 sm:mt-16 md:mt-32 flex flex-wrap justify-center gap-8 max-w-[1500px] mx-auto px-4 md:px-0`}
                >
                    {Array(num)
                        .fill(0)
                        .map((card, i) => {
                            console.log(card);
                            return (
                                <div
                                    key={i}
                                    className={`max-w-full sm:max-w-[350px] md:max-w-[500px] lg:max-w-[620px] 2xl:max-w-[720px] ${
                                        i % 2 === 1 ? "md:translate-y-10" : ""
                                    } ${num - 1 === i ? "md:translate-y-10" : ""}`}
                                >
                                    <CaseSlide
                                        title="WebCosmo - ваш партнер в разработке"
                                        imgUrl={phone}
                                        descr="Проект Fungypack – это пример Web3-разработки, которая сочетает в себе блокчейн, NFT, механики"
                                        techstack={[
                                            "Разработка",
                                            "UX/UI дизайн",
                                            "Блокчейн-интеграция",
                                        ]}
                                    />
                                </div>
                            );
                        })}
                </div>

                <div className="mt-32">
                    <Footer />
                </div>
            </main>
        </>
    );
}
