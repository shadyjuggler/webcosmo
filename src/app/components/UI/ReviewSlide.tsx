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
                <Image
                    className="w-full  min-h-[370px] object-cover"
                    src={img}
                    alt="girl"
                />
                <div style={{translate: "-50% -50%"}} className="play opacity-0 absolute rounded-xl overflow-hidden left-1/2 top-1/2 w-16 h-16 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
                    <svg
                        width="24.000000"
                        height="24.000000"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs>
                            <clipPath id="clip3_893">
                                <rect
                                    id="line-md:play-filled"
                                    rx="0.000000"
                                    width="23.000000"
                                    height="23.000000"
                                    transform="translate(0.500000 0.500000)"
                                    fill="white"
                                    fill-opacity="0"
                                />
                            </clipPath>
                        </defs>
                        <rect
                            id="line-md:play-filled"
                            rx="0.000000"
                            width="23.000000"
                            height="23.000000"
                            transform="translate(0.500000 0.500000)"
                            fill="#FFFFFF"
                            fill-opacity="0"
                        />
                        <g clip-path="url(#clip3_893)">
                            <path
                                id="Vector"
                                d="M8 6L18 12L8 18L8 6Z"
                                fill="#FFFFFF"
                                fill-opacity="1.000000"
                                fill-rule="nonzero"
                            />
                            <path
                                id="Vector"
                                d="M18 12L8 18L8 6L18 12Z"
                                stroke="#FFFFFF"
                                stroke-opacity="1.000000"
                                stroke-width="2.000000"
                                stroke-linejoin="round"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="mt-8 px-2">
                <p className="font-medium text-2xl">{name}</p>
                <p className="mt-2 text-[#262b3a]">{job}</p>
            </div>
        </a>
    );
};
