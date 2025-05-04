import Image from "next/image";

import msg from "../../assets/message.png";

export const Message: React.FC<{title: string, message: string}> = ({title, message}) => {

    return (
        <div className="relative w-full max-w-[380px] md:max-w-[562px] flex justify-end items-end">
            <Image src={msg} alt="message"></Image>
            <div className="absolute scale-50 md:scale-100 top-8 md:top-12 2xl:top-14 right-5">
                <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.575788 15L0 12.0652C2.8937 11.7236 4.34056 10.3571 4.34056 7.96584V7.45342H1.59449V0H8.7697V6.28882C8.7697 9.27019 8.0758 11.4441 6.688 12.8106C5.32973 14.2081 3.29233 14.9379 0.575788 15Z"
                        fill="#1462D6"
                    />
                    <path
                        d="M12.8061 15L12.2303 12.0652C15.124 11.7236 16.5709 10.3571 16.5709 7.96584V7.45342H13.8248V0H21V6.28882C21 9.27019 20.3061 11.4441 18.9183 12.8106C17.56 14.2081 15.5226 14.9379 12.8061 15Z"
                        fill="#1462D6"
                    />
                </svg>
            </div>

            <div className="absolute z-20 max-w-[260px] md:max-w-[325px] lg:max-w-[350px] xl:max-w-[375px] py-4 lg:py-6 mx-4 md:mx-0 xl:mx-2 2xl:mx-4">
                <p className="text-[11px] md:text-[12px] lg:text-sm 2xl:text-base font-semibold text-[#262B3A]">{title}</p>
                <p className="lg:mt-1 text-[11px] md:text-[12px] lg:text-sm 2xl:text-base text-[#1D2230]">{message} </p>
            </div>
        </div>
    );
};
