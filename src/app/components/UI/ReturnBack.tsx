"use client";
import { useRouter } from "next/navigation";

import { useLang } from "../../context/LangContext";
import languages from "../../data/lang";

export const ReturnBack: React.FC = () => {
    const router = useRouter();

    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].returnback;

    return (
        <button
            onClick={() => router.back()}
            className="btn btn-transparent !bg-transparent hover:!bg-white/10 items-center w-fit flex gap-1 md:gap-2 lg:gap-4 py-2 lg:py-2.5 px-3.5 lg:px-4 !rounded-4xl"
        >
            <div className="scale-75 md:scale-80 lg:scale-100">
                <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <desc>Created with Pixso.</desc>
                    <defs>
                        <clipPath id="clip102_2827">
                            <rect
                                id="lets-icons:back"
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
                        id="lets-icons:back"
                        rx="0.000000"
                        width="23.000000"
                        height="23.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="#FFFFFF"
                        fill-opacity="0"
                    />
                    <g clip-path="url(#clip102_2827)">
                        <path
                            id="Vector"
                            d="M4 9.99L3.29 10.7L2.58 9.99L3.29 9.29L4 9.99ZM21 17.99C21 18.26 20.89 18.51 20.7 18.7C20.51 18.89 20.26 18.99 20 18.99C19.73 18.99 19.48 18.89 19.29 18.7C19.1 18.51 19 18.26 19 17.99L21 17.99ZM8.29 15.7L3.29 10.7L4.7 9.29L9.7 14.29L8.29 15.7ZM3.29 9.29L8.29 4.29L9.7 5.7L4.7 10.7L3.29 9.29ZM4 8.99L14 8.99L14 10.99L4 10.99L4 8.99ZM21 15.99L21 17.99L19 17.99L19 15.99L21 15.99ZM14 8.99C15.85 8.99 17.63 9.73 18.94 11.05C20.26 12.36 21 14.14 21 15.99L19 15.99C19 14.67 18.47 13.4 17.53 12.46C16.59 11.52 15.32 10.99 14 10.99L14 8.99Z"
                            fill="#FFFFFF"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                        />
                    </g>
                </svg>
            </div>
            <p className="text-white text-sm md:text-base ">{tr}</p>
        </button>
    );
};
