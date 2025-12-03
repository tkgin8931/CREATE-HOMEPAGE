import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import MaintenanceView from "./components/MaintenanceView"

export const revalidate = 10800;// 3 hours 

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-20">
        <MaintenanceView />
      </main>

      <Footer />
    </div>
  )
}
