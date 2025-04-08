import Image from "next/image";

import girl from "../../assets/girl.png";

export const ReviewSlide: React.FC<{
    url: string;
    img?: string;
    name: string;
    job: string;
}> = ({ url, name, job, img = girl }) => {
    return (
        <a href={url} target="_blank" className="review-slide">
            <div className="rounded-xl relative">
                <Image src={img} alt="girl" />
                <div className="box absolute bottom-0 right-0 xl:w-17 2xl:w-20 xl:h-17 2xl:h-20">
                    <div
                        id="review_corner_1"
                        className="reversed-corner w-3 h-3 left-0 top-0"
                    ></div>

                    <div
                        id="review_corner_2"
                        className="reversed-corner -translate-y-full w-3 h-3 right-0 xl:btoom-17 2xl:btoom-20"
                    ></div>
                    <div
                        id="review_corner_3"
                        className="reversed-corner w-3 h-3 xl:right-17 2xl:right-20 bottom-0"
                    ></div>
                </div>
            </div>

            <div className="mt-8 px-2">
                <p className="font-semibold text-2xl">{name}</p>
                <p className="mt-2 text-[#262b3a]">{job}</p>
            </div>
        </a>
    );
};
