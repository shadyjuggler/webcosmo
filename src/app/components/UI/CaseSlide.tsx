import Image, { StaticImageData } from "next/image";

import bg from "../../assets/slide-bg.png";

export const CaseSlide: React.FC<{
    title?: string;
    descr?: string;
    techstack?: string[];
    imgUrl?: string | StaticImageData;
}> = ({ title, descr, techstack, imgUrl }) => {
    return (
        <div className="slide">
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
        </div>
    );
};
