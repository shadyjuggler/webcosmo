import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="main" id="main">
                    {children}
                </main>
            </body>
        </html>
    );
}
