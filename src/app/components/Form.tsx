import Image from "next/image";
import arrow from "../assets/small-arrow.svg";

//@ts-ignore
export default function Form({ isModal }) {
    return (
        <div className="flex flex-col gap-4 relative z-20 w-full">
            {isModal ? (
                <h2 className="text-3xl !text-[#262B3A] mx-auto">
                    <span> Позвоним в течение 15 минут,</span>
                    обсудим условия и просчитаем стоимость работ
                </h2>
            ) : (
                ""
            )}

            <div className={`${isModal ? "flex-col mt-8" : "flex-row"} flex gap-4`}>
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
                <button className={`btn btn-blue btn-arrow py-1 ${isModal ? "w-full justify-center !py-1.5 !px-8" : ""}`}>
                    Отправить заявку{" "}
                    <span>
                        <Image src={arrow} alt="smallarrow" />
                    </span>
                </button>

                {!isModal ? (
                    <p className="mt-8 text-[rgb(29, 34, 48)] opacity-70">
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
