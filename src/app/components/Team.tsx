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

import { useLang } from "../context/LangContext";
import languages from "../data/lang/index";
import chel from "../assets/chel.png";
import glass from "../assets/glass.svg";

export default function Team() {
    const { lang } = useLang();
    //@ts-ignore
    const tr = languages[lang].team;

    return (
        <section
            id="team"
            className="pb-24 graident-main2 relative rounded-b-xl overflow-hidden"
        >
            <div className="h-[260px] mb-12 md:mb-24"></div>

            <div className="absolute top-[100px] md:top-1/4 right-0">
                <Image
                    className="max-w-[200px] md:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[400px] opacity-80"
                    src={moh}
                    alt="moh"
                />
            </div>
            <div className="absolute hidden md:block bottom-1/5 -left-50 xl:-left-40 2xl:-left-50 rotate-[55deg]">
                <Image
                    className="max-w-[400px] xl:max-w-[500px] 2xl:max-w-[550px] opacity-80"
                    src={helix}
                    alt="helix"
                />
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-start md:items-center relative">
                    <div className="absolute left-0 top-0">
                        <Tab name={tr.tab} />
                    </div>
                    <h2 className="mt-16 md:mt-0 text-3xl text-left md:text-center md:text-4xl lg:text-5xl 2xl:text-6xl !text-white">
                        {tr.title}
                    </h2>
                    <p className="mt-4 md:mt-8 text-gray-300 max-w-[750px] text-left md:text-center">
                        {tr.subtitle}
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap gap-2 gap-y-4 justify-center">
                    {/* Member 1 */}
                    <div className="py-8 bg-white/10 max-w-[300px] rounded-xl 2xl:max-w-[360px] w-full">
                        <div className="relative min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={danek}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                {tr.members[0].name}
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                {tr.members[0].role}
                            </p>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="py-8 bg-white/10 max-w-[300px] rounded-xl 2xl:max-w-[360px] w-full">
                        <div className="relative min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={dudin}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                {tr.members[1].name}
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                {tr.members[1].role}
                            </p>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="py-8 bg-white/10 max-w-[300px] rounded-xl 2xl:max-w-[360px] w-full">
                        <div className="relative min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={sanek}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                {tr.members[2].name}
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                {tr.members[2].role}
                            </p>
                        </div>
                    </div>

                    {/* Placeholder 1 */}
                    <div className="hidden xl:block py-8 max-w-[300px] 2xl:max-w-[360px] w-full"></div>
                    {/* Placeholder 2 */}
                    <div className="hidden xl:block py-8 max-w-[300px] 2xl:max-w-[360px] w-full"></div>

                    {/* Member 4 */}
                    <div className="py-8 bg-white/10 max-w-[300px] rounded-xl 2xl:max-w-[360px] w-full">
                        <div className="relative min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute px-4 bottom-0 left-0"
                                src={dima}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                {tr.members[3].name}
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                {tr.members[3].role}
                            </p>
                        </div>
                    </div>

                    {/* Member 5 */}
                    <div className="py-8 bg-white/10 max-w-[300px] rounded-xl 2xl:max-w-[360px] w-full">
                        <div className="relative min-h-[200px] 2xl:min-h-[250px]">
                            <Image
                                className="absolute bottom-0 left-0"
                                src={chel}
                                alt="employee"
                            />
                        </div>
                        <div className="px-6">
                            <p className="mt-6 text-white font-semibold xl:-text-xl 2xl:text-2xl">
                                {tr.members[4].name}
                            </p>
                            <div
                                className="mt-2 w-1/5 bg-white/20"
                                style={{ height: "1px" }}
                            ></div>
                            <p className="mt-2 text-gray-300 text-sm 2xl:text-base">
                                {tr.members[4].role}
                            </p>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="py-8 px-8 bg-white/10 max-w-[300px] 2xl:max-w-[360px] w-full hidden md:flex flex-col overflow-hidden relative">
                        <p className="text-white font-semibold xl:-text-xl 2xl:text-2xl">
                            {tr.contactCta}
                        </p>
                        <div className="absolute -bottom-10 2xl:bottom-0 xl:-right-20 2xl:-right-10">
                            <Image
                                className="max-w-70 opacity-20"
                                src={gear}
                                alt="gear"
                            />
                        </div>
                        <a href="#cta" className="mt-auto w-12 2xl:w-14 h-12 2xl:h-14 btn btn-white aspect-square flex justify-center items-center !rounded-xl">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="rotate-180"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-[260px]"></div>
            <div className="absolute left-auto block md:hidden -right-10 md:right-auto w-full max-w-[200px] md:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[550px] md:left-1/2 bottom-60 md:-top-[0px] z-10">
                <Image src={glass} alt="glass" />
            </div>
        </section>
    );
}
