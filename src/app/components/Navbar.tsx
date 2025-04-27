"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useState } from "react";

import { Dropdown, DropdownItem } from "flowbite-react";
import Form from "./Form";

export default function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav className="flex items-center justify-between z-50 relative">
            <div className="">
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </div>
            <div className=" flex gap-2">
                <div className="flex gap-1 bg-white-10 rounded-sm p-1 ">
                    <a href="/#features" className="nav-link">
                        О нас
                    </a>
                    <a href="/#solutions" className="nav-link">
                        Услуги
                    </a>
                    <Link href="/#examples" className="nav-link">
                        Кейсы
                    </Link>
                    <Link href="/#reviews" className="nav-link">
                        Отзывы
                    </Link>
                    <Link href="/#team" className="nav-link">
                        Команда
                    </Link>
                    <Link href="/blogs" className="nav-link">
                        Блог
                    </Link>
                </div>
                <button className="btn btn-transparent text-white px-4.5">
                    +7 (495) 229-01-61
                </button>
                <div className=" relative flex">
                    <Dropdown
                        className="btn btn-dd btn-transparent"
                        label="RUS"
                        dismissOnClick={false}
                    >
                        <DropdownItem>EN</DropdownItem>
                        <DropdownItem>LV</DropdownItem>
                    </Dropdown>
                </div>

                <button
                    onClick={() => setShow(true)}
                    className="btn btn-black px-4.5 flex items-center gap-2"
                >
                    <span className="w-5 h-5 bg-white-10 rounded-full flex justify-center items-center">
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Связаться с нами
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
