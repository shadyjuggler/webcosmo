import Navbar from "../components/Navbar";
import { ReturnBack } from "../components/UI/ReturnBack";

import Image from "next/image";

import Footer from "../components/Footer";

import iphone from "../assets/phone.png"
import aboutclient from "../assets/about-client.png";
import figure from "../assets/figure.png";

import { MainGoals } from "../components/MainGoals";
import Technologies from "../components/Technologies";

import fe from "../assets/fe.png";
import solana from "../assets/solana.png";
import Functionality from "../components/Functionality";

import shop from "../assets/shop-icon.svg";
import imgIcon from "../assets/img-icon.svg";
import cross from "../assets/cross-icon.svg";
import { Achievements } from "../components/Achievements";
import {WhatWeDid} from "../components/WhatWeDid";

export default function BlogsPage() {

    return (
        <>
            <main className="main" id="main">
                <div className="relative overflow-hidden">
                    <div className="graident-main mask-case rounded-2xl pt-8 pb-16 overflow-hidden">
                        <div className="container mx-auto relative">
                            <div className="relative z-50">
                                <Navbar />
                            </div>
                            <div className="mt-8 ">
                                <ReturnBack />

                                <div className="mt-8">
                                    <h1 className="text-6xl">
                                        Fungypack <br />
                                        – инновационная <br /> платформа NFT
                                    </h1>
                                </div>

                                <Image
                                    className="absolute max-w-[650px] left-1/3 bottom-[0px]"
                                    src={figure}
                                    alt="phone"
                                />
                                <Image
                                    className="relative mt-20 max-w-[900px] z-40"
                                    src={aboutclient}
                                    alt="phone"
                                />
                            </div>
                        </div>
                        <Image
                            className="absolute -top-[100px] -right-[300px] max-w-[1500px] z-20 pointer-events-none"
                            src={iphone}
                            alt="phone"
                        />
                    </div>
                </div>

                <MainGoals
                    content={[
                        {
                            title: "Реферальная система",
                            text: "Разработка реферальной системы для привлечения новых пользователей.",
                        },
                        {
                            title: "Механизм стейкинга",
                            text: "Внедрение механизма стейкинга, начисления бонусов и взаимодействия с NFT без вывода из кошелька",
                        },
                        {
                            title: "NFT-маркетплейс",
                            text: "Создание NFT-маркетплейса с возможностью покупки, продажи и взаимодействия с коллекциями.",
                        },
                        {
                            title: "Solana blockchain",
                            text: "Интеграция Solana blockchain для безопасного хранения и обработки NFT.",
                        },
                        {
                            title: "Интерактивное веб-приложение",
                            text: "Разработка интерактивного веб-приложения с удобным пользовательским интерфейсом",
                        },
                        {
                            title: "Мультиблокчейн-экосистема",
                            text: "Оптимизация платформы для мультиблокчейн-экосистемы с возможностью будущего расширения на Bitcoin и EVM-совместимые сети",
                        },
                    ]}
                />

                <Technologies
                    content={[
                        {
                            title: "Фронтенд:",
                            list: [
                                "React + Redux + TypeScript – построение динамичного UI с гибкими возможностями.",
                                "SASS – стилизация и адаптивный дизайн",
                            ],
                            img: fe,
                        },
                        {
                            title: "Бэкенд и база данных:",
                            list: [
                                "Firebase – реализация надежной и быстрой системы хранения данных.",
                                "Solana.js – интеграция с блокчейном, работа со смарт-контрактами и NFT",
                            ],
                            img: solana,
                        },
                    ]}
                />

                <Functionality
                    content={[
                        {
                            icon: imgIcon,
                            title: "NFT-Хранилище (Backpack)",
                            text: 'Пользователи могут "упаковывать" свои NFT в Fungypack, тем самым увеличивая их ценность.',
                        },
                        {
                            icon: cross,
                            title: "Генерация очков (FungyPoints)",
                            text: "NFT начинают приносить очки после упаковки, повышая их полезность.",
                        },
                        {
                            icon: shop,
                            title: "Маркетплейс",
                            text: "Покупка, продажа и обмен NFT внутри платформы",
                        },
                        {
                            icon: cross,
                            title: "Маркетплейс",
                            text: "Покупка, продажа и обмен NFT внутри платформы",
                        },
                        {
                            icon: cross,
                            title: "Маркетплейс",
                            text: "Покупка, продажа и обмен NFT внутри платформы",
                        },
                    ]}
                />

                <Achievements
                    content={[
                        {
                            title: "Генерация очков (FungyPoints)",
                            text: "NFT начинают приносить очки после упаковки, повышая их полезность.",
                        },
                        {
                            title: "Генерация очков (FungyPoints)",
                            text: "NFT начинают приносить очки после упаковки, повышая их полезность.",
                        },
                        {
                            title: "Генерация очков (FungyPoints)",
                            text: "NFT начинают приносить очки после упаковки, повышая их полезность.",
                        },
                    ]}
                />

                <WhatWeDid
                    content={[
                        {
                            title: "Полный цикл разработки",
                            text: "Полный цикл разработки",
                        },
                        {
                            title: "Оптимизированный UI/UX-дизайн",
                            text: "Оптимизированный UI/UX-дизайн, соответствующий концепции Web3",
                        },
                        {
                            title: "Полный цикл разработки",
                            text: "Полный цикл разработки – от идеи до развертывания на mainnet",
                        },
                        {
                            title: "Оптимизированный UI/UX-дизайн",
                            text: "Оптимизированный UI/UX-дизайн, соответствующий концепции Web3",
                        },
                    ]}
                />

                <div className="mt-32">
                    <Footer />
                </div>
            </main>
        </>
    );
}
