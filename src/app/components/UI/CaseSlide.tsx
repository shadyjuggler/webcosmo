import Image, { StaticImageData } from "next/image";

import bg from "../../assets/slide-bg.png";

export const CaseSlide: React.FC<{
    title?: string;
    descr?: string;
    techstack?: string[];
    imgUrl?: string | StaticImageData;
}> = ({ techstack, imgUrl }) => {
    return (
        <div className="slide relative">
            <div className="flex flex-col pb-8 max-w-[314px] w-full">
                <p className="xl:text-xl 2x:text-2xl font-semibold text-[#1D2230]">
                    Разработка Web3 платформы Fungypack
                </p>
                <p className="mt-4 text-[#1D2230]">
                    Проект Fungypack – это пример Web3-разработки, которая
                    сочетает в себе блокчейн, NFT, механики
                </p>

                <div className="xl:mt-12 2xl:mt-auto flex flex-wrap gap-2">
                    {techstack?.map((tech, i) => (
                        <p
                            key={i}
                            className="py-2 px-2.5 rounded-sm bg-[#EFF1F5] text-[#1D2230]"
                        >
                            {tech}
                        </p>
                    ))}
                </div>
            </div>

            <div className="relative w-full 2xl:max-w-[446px] flex items-end">
                <Image className="h-full" src={bg} alt="bg" />
                <div className="absolute left-0 top-0">
                    <Image src={imgUrl ? imgUrl : "none"} alt="image" />
                </div>
            </div>

            <div className="absolute top-0 right-0 xl:w-17 2xl:w-20 xl:h-17 2xl:h-20 bg-[#eff1f5]">
                <button className="case-next xl:w-14 2xl:w-17 xl:h-14 2xl:h-17 absolute top-0 right-0 btn btn-white aspect-square flex justify-center items-center !rounded-xl">
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

                <div
                    id="slider_corner_1"
                    className="reversed-corner w-3 h-3 left-0 bottom-0"
                ></div>
            </div>

            <div
                id="slider_corner_2"
                className="reversed-corner w-3 h-3 right-0 xl:top-17 2xl:top-20"
            ></div>
            <div
                id="slider_corner_3"
                className="reversed-corner w-3 h-3 xl:right-17 2xl:right-20 top-0"
            ></div>
        </div>
    );
};
