import Image from "next/image";
import ok from "../assets/ok.png";

import { Tab } from "./UI/Tab";

export const MainGoals: React.FC<{ content: any }> = ({ content }) => {
    return (
        <section id="maingoals" className="mt-7 py-8 lg:py-24">
            <div className="container mx-auto">
                <div className="flex items-start justify-center gap-4 md:gap-0 md:items-center flex-col md:flex-row">
                    <Tab name="Задачи" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl !text-[#262B3A] md:mx-auto">
                        <span>Основные задачи</span> проекта
                    </h2>
                </div>

                <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-4 2xl:gap-8">
                    {content.map((item: any) => {
                        return (
                            <div key={Math.random()} className="relative w-full max-w-[400px] 2xl:max-w-[480px] ">
                                <div className="rounded-xl bg-white flex justify-center items-center mask-goal min-h-[300px] xl:min-h-[325px] 2xl:min-h-[350px] flex-col">
                                    <p className="mt-12 text-xl text-[#262B3A] font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="max-w-[420px] mt-4 text-[#262B3A]/60 text-center text-sm">
                                        {item.text}
                                    </p>
                                </div>
                                <Image
                                    className="w-30 absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2"
                                    src={ok}
                                    alt="ok"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
