"use client"

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Sponsors from "./components/SponsorsList";
import FundSupport from "./components/Fund-Spport";
import Particles from "./components/background";


export default function TechPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between relative bg-black"> 
            {/* LightRaysを絶対背景に */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                 <Particles
                    particleColors={['#ffffff', '#ffffff']}
                     particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <Header />
            <main className="pt-32 flex flex-col items-center justify-center py-8 relative z-10" style={{ background: 'transparent' }}>
  <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 mx-auto">
    <div className="w-full max-w-2xl md:max-w-none md:w-[900px] lg:w-[1100px] xl:w-[1200px] rounded-2xl shadow-lg p-8 md:p-12 bg-black/80">
      {/* クラウドファンディング達成メッセージ */}
      <section className="mb-10">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">クラウドファンディング目標達成！</h2>
        <p className="text-center text-lg text-white font-semibold mb-2">ご支援ありがとうございました！！</p>
        <p className="text-center text-base mb-4 text-white/70">
          11/2より開始したクラウドファンディングですが、12月15日23:00を持ちまして終了いたしました！！
        </p>
        <div className="bg-gray-900/80 rounded-lg p-4 mb-4">
          <p className="font-bold mb-2 text-blue-300">ご支援者様（50音順）</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-white/90">
            <li>A. Shimizu 様</li>
            <li>兒玉学 様</li>
            <li>ダイキン工業株式会社 様</li>
            <li>滝 久雄 様</li>
            <li>中村翔太 様</li>
            <li>Pablo 様</li>
            <li>みらい創造インベストメンツ 金子 様</li>
            <li>宮本 恒弘 様</li>
            <li>ryo 様</li>
            <li>わだたけし 様</li>
          </ul>
          <p className="mt-4 text-center text-base font-bold text-green-300">
            ...をはじめとする合計で117人もの方から<br />
            <span className="text-2xl text-yellow-300">3,660,000円</span>ものご支援を頂戴いたしました！！
          </p>
        </div>
        <p className="text-white  text-lg text-center mb-2">
          ご支援ご協力いただいた多くの皆様に心より感謝申し上げます！！
        </p>
        <p className="text-center text-lg text-white mb-2">
          皆様のご支援を受け、C-83Lが離陸するその日まで、我々CREATEはさらなる努力を続けます！
        </p>
        <p className="text-center text-lg text-white mb-2">
          ここまで、CREATEを支援していただいた皆様、ありがとうございました！
        </p>
        <p className="text-center text-lg text-white mb-4">
          そして、どうかこれからも応援のほど、よろしくお願いいたします！
        </p>
        <div className="text-center mb-6">
          <a
            href="https://readyfor.jp/projects/150087/announcements/354896" // 支援サイトURLを適宜変更してください
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition"
          >
            支援サイトはこちらから！
          </a>
        </div>
      </section>
      {/* プロジェクト概要 */}
      {/* <section className="mb-10">
        <h3 className="text-xl font-bold text-blue-300 mb-2">現在、CREATEでは新機体「C-83L」を開発中です。</h3>
        <p className="mb-2">
          その開発資金につきまして、より広い方々から援助をいただくべく、この度クラウドファンディングを開始いたしました。
        </p>
        <div className="bg-gray-800/80 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-lg text-white mb-2">プロジェクトの概要</h4>
          <ul className="list-disc list-inside text-white/90 mb-2">
            <li>縦型開放機構+リーフィング機構<br /><span className="text-xs text-gray-300">培ってきた技術の融合！</span></li>
            <li>バルブシステム<br /><span className="text-xs text-gray-300">長年受け継がれてきた技術！</span></li>
            <li>新型自作エンジン「L-5i」<br /><span className="text-xs text-gray-300">サークル史上最大！</span></li>
          </ul>
          <p className="text-sm text-white/80">
            従来のものを組み合わせたり、発展させたりした技術を使用します。このロケットには、先輩方から受け継がれた技術はもちろん、情熱と努力が詰まっています。
          </p>
        </div>
        <h4 className="font-bold text-lg text-white mb-2">私たちの目標</h4>
        <p className="mb-2 text-white/80">
          このプロジェクトの成功は、単に私たちの最後の機体が打ちあがるだけでなく、後輩たちに技術をこれまでより発展した形で引き継ぐことにもつながります。
        </p>
        <p className="mb-2 text-white/80">
          やがては、次世代の宇宙探査や衛星技術の発展につながる重要な一歩となるのです。
        </p>
      </section> */}
      {/* 既存のコンテンツ */}
      <Sponsors />
      <FundSupport />
    </div>
  </div>
</main>
            <Footer />
        </div>
    )
}