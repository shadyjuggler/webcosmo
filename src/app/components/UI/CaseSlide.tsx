"use client";
import Image, { StaticImageData } from "next/image";

import bg from "../../assets/slide-bg.png";
import mob from "../../assets/slide-bg-mob.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export const CaseSlide: React.FC<{
    title?: string;
    descr?: string;
    techstack?: string[];
    link: string;
    imgUrl?: string | StaticImageData;
}> = ({ title, descr, techstack, imgUrl, link }) => {
    const [img, setImg] = useState<StaticImageData | string>("");

    useEffect(() => {
        // This code only runs on the client
        if (window.innerWidth >= 768) {
            setImg(bg);
        } else {
            setImg(mob);
        }
    }, []);

    return (
        <div className="relative">
            <div className="slide max-w-[325px] md:max-w-full relative mask-card flex-col-reverse md:flex-row">
                <div className="flex flex-col md:px-0 px-8  pb-8 md:max-w-[314px] w-full">
                    <p className="xl:text-xl 2x:text-2xl max-w-[300px] md:max-w-full font-semibold text-[#1D2230]">
                        {title}
                    </p>
                    <p className="mt-4 text-[#1D2230]">{descr}</p>

                    <div className="mt-4 md:mt-auto lg:mt-12 2xl:mt-auto flex flex-wrap gap-2">
                        {techstack?.map((tech, i) => (
                            <p
                                key={i}
                                className="py-3.5 md:py-2 px-2.5 rounded-sm bg-[#EFF1F5] text-[#1D2230]"
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="relative w-full max-h-[300px] md:max-h-full md:h-full 2xl:max-w-[446px] flex items-end overflow-hidden">
                    <Image className="h-full" src={img} alt="bg" />
                    <div
                        style={{ translate: "-50% -50%" }}
                        className="absolute w-full max-w-[325px] md:max-w-full left-1/2 top-1/2 rotate-0 md:rotate-25"
                    >
                        <Image src={imgUrl ? imgUrl : ""} alt="image" />
                    </div>
                </div>
            </div>
            <Link
                href={link}
                className="w-13 h-13 sm:w-14 md:w-13 sm:h-14 md:h-13 lg:w-12 xl:w-14 lg:h-12 xl:h-14 2xl:w-16 2xl:h-16 absolute top-0 right-0 btn btn-white aspect-square flex justify-center items-center !rounded-lg"
            >
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
            </Link>
        </div>
    );
};
