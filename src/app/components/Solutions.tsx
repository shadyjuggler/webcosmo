import { Tab } from "./UI/Tab";
import Image from "next/image";
import ok from "../assets/ok.svg";
import arrow from "../assets/small-arrow.svg";
import helix from "../assets/helix.png";

export default function Solutions() {
    return (
        <section
            id="solutions"
            className="rounded-b-xl rounded-tl-xl bg-[#EFF1F5] "
        >
            <div className="relative graident-main pb-24 rounded-xl pt-35 overflow-hidden">
                <div
                    className="absolute right-0 top-0 bg-[#EFF1F5] h-20"
                    style={{ width: "calc(100% - 250px - 112px)" }}
                >
                    <div className="absolute -translate-x-full top-0 w-0 h-0 border-b-[80px] border-b-transparent border-r-[112px] border-r-[#EFF1F5]"></div>
                </div>

                <div
                    id="soluction_corner-1"
                    className="reversed-corner w-3 h-3 top-0 left-[250px]"
                ></div>

                <div
                    id="soluction_corner-2"
                    className="reversed-corner w-3 h-3 top-[80px] right-0"
                ></div>

                <div className="z-40 absolute top-30 xl:-right-35 2xl:-right-25 w-[420px]">
                    <Image src={helix} alt="helix"/>
                </div>

                <div className="container mx-auto">
                    <Tab name="Услуги" />

                    <h2 className="mt-16 text-5xl tex-left">
                        Создаем решения для роста бизнеса
                    </h2>

                    <div className="mt-20 grid grid-cols-3 gap-4">
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                Веб-разработка
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Лендинги и корпоративные сайты
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Интернет-магазины</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Веб-приложения</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Full-stack разработка</p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                Боты и Веб-Апп
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Чат-боты</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Мини-приложения в Telegram
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Боты для продаж и лидогенерации
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Автоматизация процессов</p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                Веб-разработка
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Web3-сайты</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Интеграция блокчейна</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Разработка смарт-контрактов
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">NFT-проекты</p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                UI/UX-дизайн и брендинг
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Лендинги и корпоративные сайты
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Прототипирование и дизайн интерфейсов
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Дизайн лендингов и веб-приложений
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                Работа под ключ
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">Анализ и стратегия</p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Дизайн и прототипирование
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Разработка и тестирование
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-2xl font-semibold ">
                                Мобильные Приложения
                            </p>
                            <div
                                className="mt-6 bg-white w-full opacity-20"
                                style={{ height: "1px" }}
                            ></div>
                            <ul className="mt-4 flex flex-col gap-2">
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Кроссплатформенные приложения
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Гибридные приложения – PWA и WebView
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <Image src={ok} alt="ok" />
                                    <p className="">
                                        Мобильные интерфейсы для ботов
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
