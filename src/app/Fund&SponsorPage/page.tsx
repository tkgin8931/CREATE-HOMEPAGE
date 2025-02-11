"use client"

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Sponsors from "./components/SponsorsList";
import FundSupport from "./components/Fund-Spport";

export default function TechPage() {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Header />
            <main className="flex-grow pt-8">
                <Sponsors />
                <FundSupport />
            </main>
            <Footer />
        </div>
    )
}