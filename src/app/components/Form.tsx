import Image from "next/image";
import arrow from "../assets/small-arrow.svg";

//@ts-ignore
export default function Form({ isModal }) {
    return (
        <div className="flex flex-col gap-2 md:gap-4 relative z-20 w-full">
            {isModal ? (
                <h2 className="max-w-[300px] md:max-w-full text-[28px] leading-8 md:leading-9 md:text-3xl !text-[#262B3A]">
                    <span> Позвоним <br className="block md:hidden" /> в течение 15 минут,</span> <br className="hidden md:block" />
                    обсудим условия <p className="hidden md:block">и просчитаем стоимость работ</p>
                </h2>
            ) : (
                ""
            )}

            <div className={`flex-col md:flex-row ${isModal ? "!flex-col mt-8" : ""} flex gap-2 md:gap-4 `}>
                <div className="form-control">
                    <input placeholder="Имя" type="text" className="input" />
                </div>
                <div className="form-control">
                    <input
                        placeholder="Телефон"
                        type="text"
                        className="input"
                    />
                </div>
            </div>
            <div>
                <textarea
                    placeholder="Описание задачи"
                    className="textarea"
                    name=""
                    id=""
                ></textarea>
            </div>
            <div>
                <button className={`btn w-full md:w-fit justify-center md:justify-start btn-blue btn-arrow py-1 ${isModal ? "!w-full !justify-center !py-1.5 md:!px-8" : ""}`}>
                    <p className="mx-auto md:mx-0">Отправить заявку</p>{" "}
                    <span className="ml-auto md:ml-0">
                        <Image src={arrow} alt="smallarrow" />
                    </span>
                </button>

                {!isModal ? (
                    <p className="mt-8 text-[rgb(29, 34, 48)] opacity-70 text-center md:text-left">
                        Нажимая кнопку “Отправить заявку”, я даю согласие на{" "}
                        <a href="#" target="_blank" className="underline">
                            обработку персональных данных
                        </a>
                    </p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
