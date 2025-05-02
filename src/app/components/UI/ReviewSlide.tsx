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
            <div className="rounded-xl relative mask-review-slide">
                <Image className="w-full  min-h-[370px] object-cover" src={img} alt="girl" />
            </div>

            <div className="mt-8 px-2">
                <p className="font-medium text-2xl">{name}</p>
                <p className="mt-2 text-[#262b3a]">{job}</p>
            </div>
        </a>
    );
};
