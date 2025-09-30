const links=[
    {name:"筑波大学宇宙技術プロジェクトSTEP",url:"https://tsukuba-step.jimdofree.com/"},
    {name:"東海大学ロケットプロジェクトTSRP",url:"https://tsrp.shn.u-tokai.ac.jp/jp/"},
    {name:"CORE",url:"https://core-rocket-official.netlify.app/"},
    {name:"F.T.E",url:"https://fte-tohoku.tech/"},
    {name:"ASSP",url:"https://asspkoho.wixsite.com/asspofficial"},
    {name:"RaSK",url:"https://rask-blog.fc2.net/"},
    {name:"Nociws",url:"https://nociws.jp/"},
    {name:"九州大学PLANET-Q",url:"https://planet-q.jimdofree.com/"},
]
export default function SougoLinks() {
    return(
        <section className="mb-12">
            <h2 className="text-2xl text-white font-mono font-bold mb-6">相互リンク</h2>
            <p className="text-white font-mono mb-4">​希望のある企業及び団体様との相互リンクを受け付けております。検討いただける方はお問い合わせ、メール、TwitterのDM等にて連絡をお願いします。</p>
            <h2 className="text-2xl text-white font-mono font-bold mb-6">学生ロケット団体</h2>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-2xl">{link.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
