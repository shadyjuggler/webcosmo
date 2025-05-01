"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

import Dropdown from "./UI/DropDown";
import Form from "./Form";

import smallarrow from "../assets/small-arrow.svg";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(true);

    const nav = ["О нас", "Услуги", "Кейсы", "Отзывы", "Команда", "Блог"];

    useEffect(() => {
        if (window.innerWidth <= 767) {
            setMenu(false);
        }
    }, []);

    const click = () => {
        if (window.innerWidth <= 767) {
            setMenu(false);
        }
    };

    return (
        <nav className="flex items-center justify-between z-50 relative">
            <div className="">
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </div>
            <div
                className={`${
                    menu ? "flex" : "hidden"
                } flex w-full px-5 sm:px-8 md:px-0 top-0 modal-sh pt-4 pb-10 z-50 md:p-0 rounded-xl md:rounded-none right-0 fixed md:static gap-2 bg-white md:bg-transparent flex-col justify-start md:justify-end md:flex-row items-start md:items-center`}
            >
                <div className="order-1 flex mt-16 md:mt-0 flex-col md:flex-row md:hidden xl:flex gap-1 bg-white-10 rounded-sm p-1 ">
                    <Link
                        onClick={() => click()}
                        href="/#features"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        О нас
                    </Link>
                    <Link
                        onClick={() => click()}
                        href="/#solutions"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        Услуги
                    </Link>
                    <Link
                        onClick={() => click()}
                        href="/#examples"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        Кейсы
                    </Link>
                    <Link
                        onClick={() => click()}
                        href="/#reviews"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        Отзывы
                    </Link>
                    <Link
                        onClick={() => click()}
                        href="/#team"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        Команда
                    </Link>
                    <Link
                        onClick={() => click()}
                        href="/blogs"
                        className="nav-link !text-black md:!text-white text-left"
                    >
                        Блог
                    </Link>
                </div>
                <button
                    onClick={() => click()}
                    className="order-3 md:order-2 w-full md:w-fit btn btn-transparent !text-[#262B3A] text-right btn-arrow md:text-center px-4 md:!px-4 text-sm 2xl:text-base py-1.5 border-1 md:border-0 !border-slate-200 md:!border-white/10 md:py-4 md:!text-white"
                >
                    <p className="mx-auto md:mx-0"> +7 (495) 229-01-61</p>
                    <span className="block md:hidden ml-auto">
                        <Image src={smallarrow} alt="smallarrow" />
                    </span>
                </button>
                <div className="order-3 absolute top-2 right-18 md:static flex text-sm 2xl:text-base justify-end">
                    <Dropdown
                        options={["RUS", "LV", "EN"]}
                        onChange={() => console.log()}
                    />
                </div>

                <button
                    onClick={() => {
                        setShow(true);
                        click();
                    }}
                    className="mt-8 md:mt-0 order-2 md:order-4 w-full relative md:max-w-[220px] btn btn-arrow btn-black md:!px-4.5 py-1.5 md:py-4 flex justify-center items-center gap-2 text-sm 2xl:text-base"
                >
                    <div className="hidden md:flex w-5 h-5 bg-white-10 rounded-full justify-center items-center">
                        <div className="block w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <p className="mx-auto md:mx-0">Связаться с нами</p>
                    <span className="block md:hidden ml-auto">
                        <Image src={smallarrow} alt="smallarrow" />
                    </span>
                </button>

                <button
                    onClick={() => setMenu(false)}
                    className="md:hidden flex absolute top-2 right-2 z-40 bg-[#1462d6] rounded-md w-12 h-12 cursor-pointer items-center justify-center"
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
                            <clipPath id="clip46_1793">
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
                        <g clip-path="url(#clip46_1793)">
                            <path
                                id="rect1006"
                                d="M3.28 2.04L11.94 10.71L10.71 11.94L2.05 3.28L3.28 2.04Z"
                                fill="#FFFFFF"
                                fill-opacity="1.000000"
                                fill-rule="evenodd"
                            />
                            <path
                                id="rect1006-5"
                                d="M2.04 10.71L10.71 2.05L11.94 3.28L3.28 11.94L2.04 10.71Z"
                                fill="#FFFFFF"
                                fill-opacity="1.000000"
                                fill-rule="evenodd"
                            />
                        </g>
                    </svg>
                </button>
            </div>

            {/* <div id="nav-bg" className="fixed top-0 left-0 bg-black/20 w-full h-full z-30"></div> */}

            <div
                id="burger"
                onClick={() => setMenu(!menu)}
                className="flex md:hidden absolute -right-7 -top-5 w-14 h-14 items-start justify-end bg-[#e6e9ee] rounded-bl-xl"
            >
                <button className="flex z-40 bg-white rounded-md w-12 h-12 cursor-pointer items-center justify-center">
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
