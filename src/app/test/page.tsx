import { CTA } from "../components/Cta";
import Examples from "../components/Examples";
import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Solutions from "../components/Solutions";
import Team from "../components/Team";
import Articles from "../components/UsefullArticles";

export default function TestPage() {
    return (
        <>
            <main className="main overflow-hidden" id="main">
                <div className="xl:p-4 md:bg-white rounded-xl">
                    <Header />
                </div>
            </main>
        </>
    );
}
