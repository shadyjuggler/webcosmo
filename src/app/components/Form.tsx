"use client";
import { useState } from 'react';
import Image from "next/image";
import arrow from "../assets/small-arrow.svg";

//@ts-ignore
export default function Form({ isModal }) {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess(true);
                setForm({ name: '', phone: '', message: '' });
            }
        } catch (error) {
            console.error('Email send failed', error);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-2 relative z-20 w-full">
            {isModal && (
                <h2 className="max-w-[300px] md:max-w-full text-[28px] leading-8 md:leading-9 md:text-3xl !text-[#262B3A]">
                    <span>Позвоним <br className="block md:hidden" /> в течение 15 минут,</span> <br className="hidden md:block" />
                    обсудим условия <p className="hidden md:block">и просчитаем стоимость работ</p>
                </h2>
            )}

            <div className={`flex-col md:flex-row ${isModal ? "!flex-col mt-8" : ""} flex gap-2 md:gap-3`}>
                <div className="form-control">
                    <input
                        placeholder="Имя"
                        name="name"
                        type="text"
                        className="input"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        placeholder="Телефон"
                        name="phone"
                        type="text"
                        className="input"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <textarea
                    placeholder="Описание задачи"
                    name="message"
                    className="textarea"
                    value={form.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div>
                <button
                    type="submit"
                    className={`btn w-full md:w-fit justify-center md:justify-start btn-blue btn-arrow py-1 ${isModal ? "!w-full !justify-center !py-1.5 md:!px-8" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Отправка..." : (
                        <>
                            <p className="mx-auto md:mx-0">Отправить заявку</p>
                            <span className="ml-auto md:ml-0">
                                <Image src={arrow} alt="smallarrow" />
                            </span>
                        </>
                    )}
                </button>

                {success && (
                    <p className="mt-4 text-green-600 text-center">Заявка успешно отправлена!</p>
                )}

                {!isModal && (
                    <p className="mt-8 text-[rgb(29, 34, 48)] opacity-70 text-center md:text-left">
                        Нажимая кнопку “Отправить заявку”, я даю согласие на{" "}
                        <a href="#" target="_blank" className="underline">
                            обработку персональных данных
                        </a>
                    </p>
                )}
            </div>
        </form>
    );
}
