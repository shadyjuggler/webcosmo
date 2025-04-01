import Image from "next/image";

import arrow from "../../assets/arrow-down.svg"

export default function CircleButton() {
    return (
        <button className="rounded-full w-full h-full flex justify-center items-center bg-white border border-slate-200 cursor-pointer">
            <Image src={arrow} alt="arrow"></Image>
        </button>
    );
}
