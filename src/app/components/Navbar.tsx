"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useState } from "react";

import { Dropdown, DropdownItem } from "flowbite-react";
import Form from "./Form";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(true);

    return (
        <nav className="flex items-center justify-between z-50 relative">
            <div className="">
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </div>
            <div
                className={`${menu ? "flex" : "hidden"} flex w-full top-10 p-4 md:p-0 rounded-xl md:rounded-none right-0 absolute md:static gap-2 bg-white/90 md:bg-transparent flex-col justify-end md:flex-row items-end md:items-center`}
            >
                <div className="flex flex-col md:flex-row md:hidden xl:flex gap-1 bg-white-10 rounded-sm p-1 ">
                    <Link
                        href="/#features"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        О нас
                    </Link>
                    <Link
                        href="/#solutions"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        Услуги
                    </Link>
                    <Link
                        href="/#examples"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        Кейсы
                    </Link>
                    <Link
                        href="/#reviews"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        Отзывы
                    </Link>
                    <Link
                        href="/#team"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        Команда
                    </Link>
                    <Link
                        href="/blogs"
                        className="nav-link !text-black md:!text-white text-right"
                    >
                        Блог
                    </Link>
                </div>
                <button className="btn btn-transparent text-right md:text-center px-4 md:px-4.5 text-sm 2xl:text-base py-2.5 md:py-3.5 text-black md:!text-white">
                    +7 (495) 229-01-61
                </button>
                <div className="hidden md:flex relative text-sm 2xl:text-base justify-end">
                    <Dropdown
                        className="btn btn-dd py-2.5 md:py-3.5 btn-transparent text-black md:!text-white"
                        label="RUS"
                    >
                        <DropdownItem>RU</DropdownItem>
                        <DropdownItem>LV</DropdownItem>
                        <DropdownItem>EN</DropdownItem>
                    </Dropdown>
                </div>

                <div className="flex md:hidden">
                    <button className="nav-link !text-black md:!text-white text-right">
                        RUS
                    </button>
                    <button className="nav-link !text-black md:!text-white text-right">
                        LV
                    </button>
                    <button className="nav-link !text-black md:!text-white text-right">
                        EN
                    </button>
                </div>

                <button
                    onClick={() => setShow(true)}
                    className="max-w-[250px] btn btn-black px-4.5 py-3 md:py-3.5 flex items-center gap-2 text-sm 2xl:text-base"
                >
                    <span className="w-5 h-5 bg-white-10 rounded-full flex justify-center items-center">
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Связаться с нами
                </button>
            </div>

            <div
                id="burger"
                onClick={() => setMenu(!menu)}
                className="flex md:hidden absolute -right-7 -top-5 w-12 h-12 items-start justify-end bg-[#e6e9ee] rounded-bl-xl"
            >
                <button className="flex z-40 bg-white rounded-xl w-10 h-10 cursor-pointer items-center justify-center">
                    <svg
                        width="15.553223"
                        height="12.478760"
                        viewBox="0 0 15.5532 12.4788"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <rect
                            id="Rectangle 140"
                            width="15.553191"
                            height="1.500000"
                            fill="#1462D6"
                            fill-opacity="1.000000"
                        />
                        <rect
                            id="Rectangle 142"
                            y="10.978760"
                            width="15.553191"
                            height="1.500000"
                            fill="#1462D6"
                            fill-opacity="1.000000"
                        />
                        <rect
                            id="Rectangle 141"
                            x="4.574219"
                            y="5.489380"
                            width="10.978724"
                            height="1.500000"
                            fill="#1462D6"
                            fill-opacity="1.000000"
                        />
                    </svg>
                </button>
            </div>

            {show ? (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex justify-end"
                    style={{ zIndex: "100" }}
                >
                    <div className="bg-[#eff1f5] flex items-center justify-center w-1/3 px-8 relative">
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-10 right-10 cursor-pointer border border-black/50 rounded-xl w-12 h-12 flex items-center justify-center hover:bg-black/10 transition-all"
                        >
                            <svg
                                width="14.000000"
                                height="14.000000"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <desc>Created with Pixso.</desc>
                                <defs>
                                    <clipPath id="clip238_2988">
                                        <rect
                                            id="close-tab-svgrepo-com 1"
                                            rx="0.000000"
                                            width="13.000000"
                                            height="13.000000"
                                            transform="translate(0.500000 0.500000)"
                                            fill="white"
                                            fill-opacity="0"
                                        />
                                    </clipPath>
                                </defs>
                                <rect
                                    id="close-tab-svgrepo-com 1"
                                    rx="0.000000"
                                    width="13.000000"
                                    height="13.000000"
                                    transform="translate(0.500000 0.500000)"
                                    fill="#FFFFFF"
                                    fill-opacity="0"
                                />
                                <g clip-path="url(#clip238_2988)">
                                    <path
                                        id="rect1006"
                                        d="M3.28 2.04L11.94 10.71L10.71 11.94L2.05 3.28L3.28 2.04Z"
                                        fill="#262B3A"
                                        fill-opacity="1.000000"
                                        fill-rule="evenodd"
                                    />
                                    <path
                                        id="rect1006-5"
                                        d="M2.04 10.71L10.71 2.05L11.94 3.28L3.28 11.94L2.04 10.71Z"
                                        fill="#262B3A"
                                        fill-opacity="1.000000"
                                        fill-rule="evenodd"
                                    />
                                </g>
                            </svg>
                        </button>
                        <Form isModal={true} />
                    </div>
                </div>
            ) : (
                ""
            )}
        </nav>
    );
}
