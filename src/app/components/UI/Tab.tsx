export const Tab: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className="relative w-fit">
            <span className="absolute z-10 rounded-sm h-1/3 top-0 left-1/2 -translate-1/2 -translate-y-1/2 w-20 bg-white opacity-50"></span>
            <div className="z-20 relative bg-white rounded-md w-28 md:w-32 lg:w-36 py-2.5 lg:py-3.5 text-[#1462D6] flex items-center justify-center">
                <span className="absolute z-30 bottom-0 h-0.5 w-5 left-1/2 -translate-1/2 bg-[#1462D6]"></span>
                <p className="text-center text-sm lg:text-base font-medium">{name}</p>
            </div>
        </div>
    );
};
