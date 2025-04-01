import Image from "next/image";

import light from "../assets/light.png";
import eye from "../assets/eye.png";
import ok from "../assets/ok.png";
import thunder from "../assets/thunder.png";

import CircleButton from "./UI/CircleButton";

export default function Features() {
    return (
        <section id="features" className="mt-7 py-24 rounded-xl bg-[#EFF1F5]">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <h2 className="text-5xl !text-[#262B3A]">
                        Что делает <span>нас уникальными?</span>
                    </h2>
                </div>

                <div className="mt-20">
                    <div className="flex gap-4">
                        <div className="card justify-between">
                            <div className="w-18 card-image">
                                <Image src={light} alt="light"></Image>
                            </div>

                            <div className="card-text">
                                <p
                                    className="text-2xl font-semibold"
                                    style={{ maxWidth: "240px" }}
                                >
                                    Глубокое понимание бизнеса
                                </p>
                                <p className="card-hidden-text" style={{color: "#1D2230", maxWidth: "230px"}}>
                                    Наша цель не просто создать сайт или
                                    приложение, а помочь вашему бизнесу вырасти.
                                </p>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <div className="w-16 h-16">
                                    <CircleButton />
                                </div>
                            </div>
                        </div>
                        <div className="card justify-between">
                            <div className="w-18 card-image">
                                <Image src={ok} alt="light"></Image>
                            </div>

                            <div className="card-text">
                                <p
                                    className="text-2xl font-semibold"
                                    style={{ maxWidth: "240px" }}
                                >
                                    Индивидуальный подход
                                </p>
                                <p className="card-hidden-text" style={{color: "#1D2230", maxWidth: "230px"}}>
                                    Наша цель не просто создать сайт или
                                    приложение, а помочь вашему бизнесу вырасти.
                                </p>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <div className="w-16 h-16">
                                    <CircleButton />
                                </div>
                            </div>
                        </div>
                        <div className="card justify-between">
                            <div className="w-18 card-image">
                                <Image src={eye} alt="light"></Image>
                            </div>

                            <div className="card-text">
                                <p
                                    className="text-2xl font-semibold"
                                    style={{ maxWidth: "240px" }}
                                >
                                    Прозрачность работы
                                </p>
                                <p className="card-hidden-text" style={{color: "#1D2230", maxWidth: "230px"}}>
                                    Наша цель не просто создать сайт или
                                    приложение, а помочь вашему бизнесу вырасти.
                                </p>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <div className="w-16 h-16">
                                    <CircleButton />
                                </div>
                            </div>
                        </div>
                        <div className="card justify-between">
                            <div className="w-18 card-image">
                                <Image src={thunder} alt="light"></Image>
                            </div>

                            <div className="card-text">
                                <p
                                    className="text-2xl font-semibold"
                                    style={{ maxWidth: "240px" }}
                                >
                                    Ориентация на результат
                                </p>
                                <p className="card-hidden-text" style={{color: "#1D2230", maxWidth: "230px"}}>
                                    Наша цель не просто создать сайт или
                                    приложение, а помочь вашему бизнесу вырасти.
                                </p>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <div className="w-16 h-16">
                                    <CircleButton />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
