"use client";

import "swiper/css";
import { Tab } from "./UI/Tab";

import danek from "../assets/danek.png";
import dudin from "../assets/dudin.png";
import sanek from "../assets/sanek.png";
import dima from "../assets/dima.png";
import Image from "next/image";

import gear from "../assets/gear.gif";
import helix from "../assets/helix.png";
import moh from "../assets/moh.png";

export default function Team() {
    return (
        <section
            id="team"
            className="pb-24 graident-main2 relative rounded-b-xl"
        >
            <div className="h-[260px] mb-24"></div>
            <div className="absolute top-1/4 right-0">
                <Image className="max-w-[300px] 2xl:max-w-[400px] opacity-80" src={moh} alt="moh" />
            </div>
            <div className="absolute bottom-1/5 xl:-left-40 2xl:-left-50 rotate-[55deg]">
                <Image className="xl:max-w-[500px] 2xl:max-w-[550px] opacity-80" src={helix} alt="helix" />
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center relative">
                    <div className="absolute left-0 top-0">
                        <Tab name="Команда" />
                    </div>
                    <h2 className="text-5xl !text-white">
                        Наша команда экспертов
                    </h2>
                    <p className="mt-8 text-gray-300 max-w-[750px] text-center">
                        Наше Digital агентство состоит из более чем 20
                        профессионалов, которые создают инновационные решения в
                        области веб-дизайна, разработки и маркетинга.
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap gap-2 gap-y-4">
                    <div className="py-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full">
                        <div className="relative xl:min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={danek}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                Даниил Петров
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">CEO компании</p>
                        </div>
                    </div>
                    <div className="py-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full">
                        <div className="relative xl:min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={dudin}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                Дмитрий Дудин
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                Full Stack разработчик
                            </p>
                        </div>
                    </div>
                    <div className="py-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full">
                        <div className="relative xl:min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={sanek}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                Александр Юрьев
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                Front-end разработчик
                            </p>
                        </div>
                    </div>
                    <div className="py-8 max-w-[300px] 2xl:max-w-[360px] w-full">
                        {/* placeholder */}
                    </div>
                    <div className="py-8 max-w-[300px] 2xl:max-w-[360px] w-full">
                        {/* placeholder */}
                    </div>
                    <div className="py-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full">
                        <div className="relative xl:min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute px-4 bottom-0 left-0"
                                src={dima}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                Дмитрий Петров
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">CEO компании</p>
                        </div>
                    </div>
                    <div className="py-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full">
                        <div className="relative xl:min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={dudin}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                Дмитрий Дудин
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                Full Stack разработчик
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full flex flex-col overflow-hidden relative">
                        <p className=" text-white font-semibold xl:-text-xl 2xl:text-2xl">
                            Связаться с нами
                        </p>

                        <div className="absolute -bottom-10 2xl:bottom-0 xl:-right-20 2xl:-right-10">
                            <Image
                                className="max-w-70  opacity-20"
                                src={gear}
                                alt="gear"
                            />
                        </div>

                        <button className="mt-auto w-12 2xl:w-14 h-12 2xl:h-14 btn btn-white aspect-square flex justify-center items-center !rounded-xl">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[260px]"></div>
        </section>
    );
}
