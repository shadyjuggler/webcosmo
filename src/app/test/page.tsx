import { CTA } from "../components/Cta";
import Examples from "../components/Examples";
import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Solutions from "../components/Solutions";
import Team from "../components/Team";
import Articles from "../components/UsefullArticles";


export default function TestPage() {
    return (
        <>
            <main className="main overflow-hidden" id="main">
                <div className="relative bg-[#EFF1F5] rounded-xl z-20">
                    <Features />
                    <Solutions />
                    <Examples />
                    <Reviews />
                </div>
            </main>

            <div className=" z-10" style={{ marginTop: "-260px" }}>
                <Team />
            </div>

            <main
                className="px-5 bg-[#e6e9ee] z-10 overflow-hidden"
                style={{ marginTop: "-260px" }}
            >
                <div className="relative">
                    <CTA
                        title={
                            " <p><span>Давайте сделаем</span> <br /> что-нибудь классное :)</p>"
                        }
                    />
                </div>

                <div className=" bg-[#eff1f5] rounded-b-2xl relative">
                    <FAQSection />
                    <Articles />
                </div>

                <div className="mt-8 pb-4">
                    <Footer />
                </div>
            </main>
        </>
    );
}
