import Image from "next/image";

export const ReviewSlide: React.FC<{
    img?: string;
    name: string;
    job: string;
}> = ({ name, img = "" }) => {
    return (
        <div className="p-2 bg-white/10 max-w-[410px] w-full">
            <div>
                <Image className="min-h-[300px]" src={img} alt="employee"/>
            </div>
            <p className="text-white font-semibold text-2xl">{name}</p>
            <div className="mt-2 w-full bg-white/50 h-0.5"></div>
            <p className="mt-2 text-gray-300">{name}</p>
        </div>
    );
};
