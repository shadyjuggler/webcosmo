"use client";
import { useState } from "react";

import "./globals.css";

import { LangProvider } from "./context/LangContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [lagn, setLang] = useState("ru");

    return (
        <html lang="en">
            <body>
                <LangProvider>{children}</LangProvider>
            </body>
        </html>
    );
}
