import Image from "next/image";
import logo from "../assets/logo.svg";

import { Dropdown, DropdownItem } from "flowbite-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <div className="">
                <Image src={logo} alt="logo" />
            </div>
            <div className=" flex gap-2">
                <div className="flex gap-1 bg-white-10 rounded-sm p-1 ">
                    <a className="nav-link">О нас</a>
                    <a className="nav-link">Услуги</a>
                    <a className="nav-link">Кейсы</a>
                    <a className="nav-link">Отзывы</a>
                    <a className="nav-link">Команда</a>
                    <a className="nav-link">Блог</a>
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

                <button className="btn btn-black px-4.5 flex items-center gap-2">
                    <span className="w-5 h-5 bg-white-10 rounded-full flex justify-center items-center">
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Связаться с нами
                </button>
            </div>
        </nav>
    );
}
