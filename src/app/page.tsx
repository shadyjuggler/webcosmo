import Image from "next/image";

import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <div className="p-4 bg-white rounded-xl">
                <Header />
            </div>
        </>
    );
}
