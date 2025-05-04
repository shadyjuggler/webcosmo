"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LangContextType = {
    lang: string;
    setLang: (lang: string) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) throw new Error("useLang must be used within LangProvider");
    return context;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState("RUS");

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};
