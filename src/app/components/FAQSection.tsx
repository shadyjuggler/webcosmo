"use client";

import React from "react";
// @ts-ignore
import Faq from "react-faq-component";
import { useLang } from "../context/LangContext";
import languages from "../data/lang";

export default function FAQSection() {
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].faq;

    return (
        <section id="faq" className="relative overflow-hidden py-12 lg:py-24">
            <div className="container mx-auto">
                <div className="flex justify-between flex-col gap-8 lg:flex-row items-start">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl xl:text-6xl !text-[#262B3A]">
                            {tr.title}
                        </h2>
                    </div>

                    <div className="lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                        <Faq data={{ rows: tr.rows }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
