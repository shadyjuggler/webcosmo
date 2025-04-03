import Header from "./components/Header";
import Features from "./components/Features";
import Solutions from "./components/Solutions";

export default function Home() {
    return (
        <>
            <div className="p-4 bg-white rounded-xl">
                <Header />
            </div>
            <div className="bg-[#EFF1F5] rounded-xl">
                <Features />
                <Solutions />
            </div>
        </>
    );
}
