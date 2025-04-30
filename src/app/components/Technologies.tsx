import { Tab } from "./UI/Tab";
import Image from "next/image";
import moh from "../assets/moh.png";

//@ts-ignore
export default function Technologies({ content }) {
    return (
        <section id="tech" className="rounded-2xl ">
            <div className="relative mask-side-file-top graident-main px-4 md:px-6 xl:px-8 py-20 md:py-40 rounded-xl overflow-hidden">
                <div className="hidden lg:block z-10 absolute top-30 right-0 w-[400px]">
                    <Image src={moh} alt="helix" />
                </div>

                <div className="container mx-auto">
                    <Tab name="Технологии" />

                    <h2 className="mt-8 lg:mt-16 text-3xl md:text-4xl lg:text-5xl tex-left">
                        Реализация и технологии
                    </h2>

                    <div className="mt-8 md:mt-16 lg:mt-24 flex flex-wrap gap-2 mg:gap-8 justify-center z-20 relative">
                        {content.map((item: any, i: number) => {
                            return (
                                <div
                                    key={Math.random()}
                                    className={`py-12 md:py-8 lg:py-12 px-8 lg:px-12 w-full max-w-[400px] lg:max-w-[425px] xl:max-w-[550px] 2xl:max-w-[650px] mask-side-notches bg-[#8380F6] relative min-h-[425px] xl:min-h-[450px]  ${
                                        i % 2 === 1 ? "translate-y-10" : ""
                                    }`}
                                >
                                    <p className="text-2xl font-semibold text-white">
                                        {item.title}
                                    </p>
                                    <ul className="mt-8 flex flex-col gap-2 text-sm ">
                                        {item.list.map((li: any) => {
                                            return (
                                                <li key={Math.random()} className="flex gap-0.5">
                                                    <svg
                                                        width="23.000000"
                                                        height="23.000000"
                                                        viewBox="0 0 23 23"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <desc>
                                                            Created with Pixso.
                                                        </desc>
                                                        <defs>
                                                            <clipPath id="clip153_354">
                                                                <rect
                                                                    id="tick-svgrepo-com (5) 1"
                                                                    rx="0.000000"
                                                                    width="22.000000"
                                                                    height="22.000000"
                                                                    transform="translate(0.500000 0.500000)"
                                                                    fill="white"
                                                                    fill-opacity="0"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                        <rect
                                                            id="tick-svgrepo-com (5) 1"
                                                            rx="0.000000"
                                                            width="22.000000"
                                                            height="22.000000"
                                                            transform="translate(0.500000 0.500000)"
                                                            fill="#FFFFFF"
                                                            fill-opacity="0"
                                                        />
                                                        <g clip-path="url(#clip153_354)">
                                                            <path
                                                                id="Vector"
                                                                d="M17.07 8.54L15.68 7.16L9.77 13.07L7.31 10.61L5.92 11.99L9.77 15.83L17.07 8.54Z"
                                                                fill="#FFFFFF"
                                                                fill-opacity="1.000000"
                                                                fill-rule="nonzero"
                                                            />
                                                        </g>
                                                    </svg>

                                                    <p className="text-white">
                                                        {li}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <Image
                                        className=" absolute -bottom-1/3 left-1/2 -translate-x-1/2 lg:max-w-[400px] xl:max-w-[450px]"
                                        src={item.img}
                                        alt="img"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
