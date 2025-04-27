"use client";

import React from "react";

//@ts-ignore
import Faq from "react-faq-component";

import { data } from "../../data/faq";

export default function FAQSection() {
    return (
        <section id="faq" className="relative overflow-hidden py-24">
            <div className="container mx-auto">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="mt-8 text-5xl !text-[#262B3A]">
                            Ответы на <br /> частые вопросы
                        </h2>
                    </div>

                    <div className="max-w-[1000px]">
                        <Faq data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
}
