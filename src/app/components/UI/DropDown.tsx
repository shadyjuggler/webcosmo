"use client";

import React, { useState, useRef, useEffect } from "react";

type Option = string;

type DropdownProps = {
    options: Option[];
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
};

const DropDown: React.FC<DropdownProps> = ({
    options,
    onChange,
    label,
    placeholder = "abc",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        onChange(option);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative " ref={dropdownRef}>
            {label && (
                <label className="block mb-1 text-sm font-medium">
                    {label}
                </label>
            )}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="btn border-1 md:border-0 !text-[#262B3A] md:!text-white !border-slate-200 md:!border-white/10  btn-transparent flex gap-4 items-center py-3 md:py-4 px-5"
            >
                {selected || placeholder}

                <div className="hidden md:block">
                    <svg
                        width="10.666748"
                        height="6.666656"
                        viewBox="0 0 10.6667 6.66666"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Vector"
                            d="M10.66 1.33L5.33 6.66L0 1.33L1.33 0L5.33 4L9.33 0L10.66 1.33Z"
                            fill="#FFFFFF"
                            fill-opacity="1.000000"
                            fill-rule="evenodd"
                        />
                    </svg>
                </div>

                <div className="block md:hidden">
                    <svg
                        width="10.666748"
                        height="6.666656"
                        viewBox="0 0 10.6667 6.66666"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Vector"
                            d="M10.66 1.33L5.33 6.66L0 1.33L1.33 0L5.33 4L9.33 0L10.66 1.33Z"
                            fill="#262B3A"
                            fill-opacity="1.000000"
                            fill-rule="evenodd"
                        />
                    </svg>
                </div>
            </button>

            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 !bg-white  rounded-md max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDown;
