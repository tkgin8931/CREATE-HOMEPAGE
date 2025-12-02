import { Link2, Network, ArrowUpRight } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const links = [
    { name: "筑波大学宇宙技術プロジェクトSTEP", url: "https://tsukuba-step.jimdofree.com/", id: "01" },
    { name: "東海大学ロケットプロジェクトTSRP", url: "https://tsrp.shn.u-tokai.ac.jp/jp/", id: "02" },
    { name: "CORE", url: "https://core-rocket-official.netlify.app/", id: "03" },
    { name: "F.T.E", url: "https://fte-tohoku.tech/", id: "04" },
    { name: "ASSP", url: "https://asspkoho.wixsite.com/asspofficial", id: "05" },
    { name: "RaSK", url: "https://rask-blog.fc2.net/", id: "06" },
    { name: "Nociws", url: "https://nociws.jp/", id: "07" },
    { name: "九州大学PLANET-Q", url: "https://planet-q.jimdofree.com/", id: "08" },
]

export default function SougoLinks() {
    const { t } = useLanguage();

    return (
        <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 text-white">
                <h2 className="text-xl font-bold tracking-tight">{t.contactPage.network.title}</h2>
            </div>

            <div className="mb-8">
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    {t.contactPage.network.description}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                {links.map(link => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between bg-black p-6 hover:bg-zinc-900 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-gray-600">{link.id}</span>
                            <span className="text-white font-medium group-hover:text-white transition-colors">{link.name}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    </a>
                ))}
            </div>
        </section>
    )
}
