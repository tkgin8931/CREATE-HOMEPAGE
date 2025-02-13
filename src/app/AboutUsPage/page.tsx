import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import OverView from "./components/OverView";
import History from "./components/History";
import Teams from "./components/Teams";

export default function TechPage() {
    return (
        <div>
            <Header />
            <OverView />
            <History />
            {/* <Teams /> */}
            <Footer />
        </div>
    )
}