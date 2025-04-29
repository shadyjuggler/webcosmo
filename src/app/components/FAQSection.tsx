"use client";

import React from "react";

//@ts-ignore
import Faq from "react-faq-component";

import { data } from "../data/faq";

export default function FAQSection() {
    return (
        <section id="faq" className="relative overflow-hidden py-12 lg:py-24">
            <div className="container mx-auto">
                <div className="flex justify-between flex-col gap-8 lg:flex-row items-start">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="mt-8 text-5xl !text-[#262B3A]">
                            Ответы на <br /> частые вопросы
                        </h2>
                    </div>

                    <div className="lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                        <Faq data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
}
