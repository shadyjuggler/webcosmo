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
            <main className="main" id="main">
                <div className="relative">
                    <div className="graident-main rounded-2xl pt-8 pb-16 overflow-hidden">
                        <div className="container mx-auto relative">
                            <Navbar />
                            <div className="mt-8">
                                <ReturnBack />

                                <div className="mt-8">
                                    <h1 className="text-6xl">
                                        Кейсы, которые сами <br /> говорят за
                                        себя
                                    </h1>
                                </div>

                                <div className="mt-32">
                                    <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 text-white">
                                        Подробнее{" "}
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
                                className="absolute -bottom-1/2 -rotate-150 -scale-y-100 left-1/3 max-w-[600px] pointer-events-none"
                                src={helix}
                                alt="helix"
                            />
                        </div>
                    </div>
                    <div className="absolute right-[100px] -translate-y-1/2">
                        <Message
                            title="Веб-разрабочик"
                            message="Сотрудничество с этим агентством — это всегда качественный и креативный результат."
                        />
                    </div>
                </div>

                <div className={`mt-32 flex flex-wrap justify-center gap-8 max-w-[1500px] mx-auto`}>
                    {Array(num)
                        .fill(0)
                        .map((card, i) => {
                            console.log(card)
                            return (
                                <div key={i} className={`max-w-[720px] ${i % 2 === 1 ? "translate-y-10" : ""} ${num - 1 === i ? "translate-y-10" : ""}`}>
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
