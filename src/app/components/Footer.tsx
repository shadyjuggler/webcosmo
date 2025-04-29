import Image from "next/image";
import logo from "../assets/logo.svg";

import arrow from "../assets/footer-arrow.png";
import tg from "../assets/footer-tg.png";
import email from "../assets/footer-email'.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="graident-main rounded-2xl md:pt-24 py-12 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-24 ">
            <div className="flex flex-col-reverse xl:flex-row relative pt-18 md:pt-24 xl:pt-0">
                <div className="basis-1/5 flex flex-col items-center md:items-start">
                    <Image className="absolute top-0 xl:static" src={logo} alt="logo" />

                    <div className="mt-8 xl:mt-12 max-w-[150px] md:max-w-full md:flex grid grid-cols-2 justify-items-center flex-row xl:flex-col gap-4">
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/#features">О нас</Link>
                        </p>
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/#solutions">Услуги</Link>
                        </p>
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/#examples">Кейсы</Link>
                        </p>
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/#reviews">Отзывы</Link>
                        </p>
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/#team">Команда</Link>
                        </p>
                        <p className="text-white transition-all font-medium hover:opacity-80">
                            <Link href="/blogs">Блог</Link>
                        </p>
                    </div>
                </div>
                <div className="basis-4/5 flex flex-col md:flex-row gap-4">
                    <div className="relative flex flex-col rounded-xl p-4 lg:p-8 bg-white/20 w-full md:w-1/3 h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[300px] scale-50 lg:scale-75 xl:scale-90 2xl:scale-100 -right-[25px] md:-right-[50px] 2xl:right-0 translate-x-[50px] top-0 -translate-y-[100px] md:-translate-y-[140px] lg:-translate-y-[150px]"
                                src={arrow}
                                alt="arrow"
                            />
                        </div>
                        <a href="@thewebcosmo" target="_blank" className="hover:opacity-90 transition-all xl:mt-auto md:mt-8 mt-12 text-base lg:text-lg 2xl:text-2xl text-white">@thewebcosmo</a>
                    </div>
                    <div className="lg:mt-8 relative flex flex-col rounded-xl p-4 lg:p-8 bg-white/20 w-full md:w-1/3 h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[300px] scale-50 lg:scale-75 xl:scale-90 2xl:scale-100 -right-[25px] md:-right-[50px] 2xl:right-0 translate-x-[50px] top-0 -translate-y-[100px] md:-translate-y-[130px] lg:-translate-y-[120px]"
                                src={tg}
                                alt="arrow"
                            />
                        </div>
                        <a href="t.me/thewebcosmo" target="_blank" className="hover:opacity-90 transition-all xl:mt-auto md:mt-8 mt-12 text-base lg:text-lg 2xl:text-2xl text-white">t.me/thewebcosmo</a>
                    </div>
                    <div className="lg:mt-16 relative flex flex-col rounded-xl p-4 lg:p-8 bg-white/20 w-full md:w-1/3 h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[250px] scale-50 lg:scale-75 xl:scale-90 2xl:scale-100 -right-[35px] 2xl:right-0 -translate-y-[60px] translate-x-[10px] top-0 md:-translate-y-[100px]"
                                src={email}
                                alt="arrow"
                            />
                        </div>
                        <a href="t.me/thewebcosmo" target="_blank" className="hover:opacity-90 transition-all xl:mt-auto md:mt-8 mt-12 text-base lg:text-lg 2xl:text-2xl text-white">thewebcosmo@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 lg:mt-16 xl:mt-32 border-t-1 border-white/20 flex justify-between pt-4 md:flex-row flex-col gap-6 md:gap-0">
                <div className="flex gap-2 justify-center ">
                    <p className="text-sm  text-white/60">2025</p>
                    <p className="text-sm  text-white/60">Все права защищены</p>
                </div>
                <div className="flex gap-8 justify-center">
                    <p className="hidden xl:block text-sm  text-white/60">
                        ©все права защищены
                    </p>
                    <p className="text-sm  text-white/60">
                        Политика конфендициальности обработки персональных
                        данных
                    </p>
                </div>
            </div>
        </footer>
    );
}
