import Header from "./components/Header";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Examples from "./components/Examples";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import CTA from "./components/Cta";

export default function Home() {
    return (
        <>
            <main className="main" id="main">
                <div className="p-4 bg-white rounded-xl">
                    <Header />
                </div>
                <div className="relative bg-[#EFF1F5] rounded-xl z-20">
                    <Features />
                    <Solutions />
                    <Examples />
                    <Reviews />
                </div>
            </main>

            <div className="-translate-y-[260px] z-10">
                <Team />
            </div>

            <main className="px-5 -translate-y-[260px] z-10">
                <div className="-translate-y-[260px]">
                    <CTA />
                </div>
            </main>
        </>
    );
}
