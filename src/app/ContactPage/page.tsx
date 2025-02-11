import Contact from "../MainPage/components/Contact";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";

export default function ContactPage() {
    return (
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <Contact />
                    <Footer />
                </div>
    )
}