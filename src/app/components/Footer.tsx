import Image from "next/image";
import logo from "../assets/logo.svg";

import arrow from "../assets/footer-arrow.png";
import tg from "../assets/footer-tg.png";
import email from "../assets/footer-email'.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="graident-main rounded-2xl pt-24 pb-20 px-24">
            <div className="flex">
                <div className="basis-1/5 flex flex-col">
                    <Image src={logo} alt="logo" />

                    <div className="mt-12 flex flex-col gap-4">
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
                <div className="basis-4/5 flex gap-4">
                    <div className="relative flex flex-col rounded-xl p-8 bg-white/20 max-w-[420px] w-full h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[300px] right-0 translate-x-[50px] top-0 -translate-y-[150px]"
                                src={arrow}
                                alt="arrow"
                            />
                        </div>
                        <a href="@thewebcosmo" target="_blank" className="hover:opacity-90 transition-all mt-auto text-2xl text-white">@thewebcosmo</a>
                    </div>
                    <div className="mt-8 relative flex flex-col rounded-xl p-8 bg-white/20 max-w-[420px] w-full h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[300px] right-0 translate-x-[50px] top-0 -translate-y-[120px]"
                                src={tg}
                                alt="arrow"
                            />
                        </div>
                        <a href="t.me/thewebcosmo" target="_blank" className="hover:opacity-90 transition-all mt-auto text-2xl text-white">t.me/thewebcosmo</a>
                    </div>
                    <div className="mt-16 relative flex flex-col rounded-xl p-8 bg-white/20 max-w-[420px] w-full h-full max-h-[270px]">
                        <div className="flex justify-between ">
                            <p className="text-white/60">Инстаграм</p>
                            <Image
                                className="absolute max-w-[250px] right-0 translate-x-[10px] top-0 -translate-y-[100px]"
                                src={email}
                                alt="arrow"
                            />
                        </div>
                        <a href="t.me/thewebcosmo" target="_blank" className="hover:opacity-90 transition-all mt-auto text-2xl text-white">thewebcosmo@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="mt-32 border-t-1 border-white/20 flex justify-between pt-4">
                <div className="flex gap-2">
                    <p className="text-sm  text-white/60">2025</p>
                    <p className="text-sm  text-white/60">Все права защищены</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-sm  text-white/60">
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
