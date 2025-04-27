import { Tab } from "./UI/Tab";
import Image from "next/image";
import glass from "../assets/glass.svg";
import Form from "./Form";
import sphere from "../assets/sphere.png";

export const CTA: React.FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <div className="absolute left-1/2 -top-[50px] z-40">
                <Image src={glass} alt="glass" />
            </div>
            <section
                id="cta"
                className="bg-white mask-side-file-top relative overflow-hidden rounded-b-2xl"
            >
                <div className="circle -top-1/2 left-1/5 bg-amber-600`"></div>
                <Image
                    className="max-w-[900px] absolute -bottom-30 -right-50"
                    src={sphere}
                    alt="abc"
                ></Image>
                <div className="container mx-auto py-40">
                    <div className="flex flex-col justify-center items-start">
                        <Tab name="Заявка" />
                        <h2
                            className="mt-8 text-5xl !text-[#262B3A]"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h2>
                    </div>
                    <p className="mt-8 text-[#1D2230] max-w-[580px]">
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
