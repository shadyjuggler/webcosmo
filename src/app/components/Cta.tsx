import { Tab } from "./UI/Tab";
import Image from "next/image";
import glass from "../assets/glass.svg";
import Form from "./Form";
import sphere from "../assets/sphere.png";

export const CTA: React.FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <div className="absolute left-auto -right-10 md:right-auto max-w-[200px] md:max-w-full md:left-1/2 -top-[75px] md:-top-[0px] z-40">
                <Image src={glass} alt="glass" />
            </div>
            <section
                id="cta"
                className="bg-white mask-side-file-top relative overflow-hidden rounded-b-2xl px-4 2xl:px-0"
            >
                <div className="circle z-20  md:!-translate-y-0 md:!-top-1/2 md:!-translate-x-0 md:!left-1/5 bg-amber-600`"></div>
                <Image
                style={{translate: "54% 0%"}}
                    className="max-w-[300px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] absolute -bottom-30 right-1/2 md:!translate-x-0 md:-right-50"
                    src={sphere}
                    alt="abc"
                ></Image>
                <div className="container  mx-auto pt-16 pb-48 md:py-25 lg:py-30 xl:py-40">
                    <div className="flex z-40 relative flex-col justify-center items-center md:items-start">
                        <Tab name="Заявка" />
                        <h2
                            className="mt-8 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl !text-[#262B3A] text-center md:text-left"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h2>
                    </div>
                    <p className="mt-8  z-40 relative text-[#1D2230] max-w-[580px] text-center md:text-left">
                        Расскажите, какая задача стоит перед Вами прямо сейчас,
                        а мы предложим подробный план ее решения и реализуем
                        задуманное.
                    </p>

                    <div className="mt-16 max-w-[800px] flex ">
                        <Form isModal={false}></Form>
                    </div>
                </div>
            </section>
        </>
    );
};
