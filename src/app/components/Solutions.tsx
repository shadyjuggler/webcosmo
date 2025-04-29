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
            <div className="relative mask-side-file-top graident-main py-30 xl:py-40 rounded-xl overflow-hidden">

                <div className="z-40 absolute -translate-y-4/5 md:-translate-y-0 top-1/2 md:top-30 -right-15 md:-right-25 lg:-right-35 2xl:-right-25 w-[250px] md:w-[350px] lg:w-[420px]">
                    <Image src={helix} alt="helix"/>
                </div>

                <div className="container mx-auto">
                    <Tab name="Услуги" />

                    <h2 className="z-50 relative mt-8 lg:mt-16 text-3xl md:text-4xl lg:text-5xl tex-left">
                        Создаем решения для роста бизнеса
                    </h2>

                    <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
                                    Подробнее{" "}
                                    <span>
                                        <Image src={arrow} alt="smallarrow" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="solution mask-side-notches">
                            <p className="text-lg md:text-2xl font-semibold ">
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

                            <div className="mt-8 md:mt-4 flex justify-end">
                                <button className="btn btn-transparent btn-arrow w-full justify-center md:w-fit py-1 pl-4 pr-1 ">
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
