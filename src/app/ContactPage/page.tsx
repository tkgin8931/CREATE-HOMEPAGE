import ContactForm from "./components/ContactForm";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import EventCalendar from "./components/EventCalender";
import ClubInfoCard from "./components/Info";

export default function ContactPage() {

    return (
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="pt-24">
                        <ClubInfoCard />
                        <EventCalendar />
                        <ContactForm />
                    </main>
                    <Footer />
                </div>
    )
}