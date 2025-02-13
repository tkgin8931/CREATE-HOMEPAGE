"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

const teams = [
    { name: "構造班", image:"/cloud.jgp", description:"構造班は機体の設計や製作を担当しています。おそらくモノづくりと聞いたときに皆さんが最もイメージしやすいであろう班です。設計・強度解析はPC上でCAD・CAEソフトを用いて行います。アルミ合金などの材料を、学内のものつくり教育研究支援センターにある工作機械を使って自らの手で加工します。機体だけでなく、活動していくうえで必要となる治具・設備などの加工も行います。また、最近では自作エンジン、自作タンクの加工技術確立にも力を入れています。"},
    { name: "電装班", image:"/cloud.jpg", description:"電装班では機体に搭載する電子機器の設計、製作、プログラミングを担当します。これらの電子機器はロケット飛行中に周囲の気圧や加速度、角速度、GPSの位置情報などを収集します。そして収集した情報から状況を判断し、パラシュートを展開したり無線で位置を発信したりします。パラシュートを開くことでロケットを安全に地面に落下させられるようになりますし、位置情報を送信することによって落下したロケットを発見しやすくなります。ロケットを安全に飛ばすためには不可欠な技術を担当しているのです。"},
    { name: "推進班", image:"/cloud.jpg", description:"推進班は主に自作エンジンの製作と試験、供給系の管理維持などを行っています。設計から製作、運用まで幅広い過程に関われます。ロケットの打上に当たっては直前に酸化剤を充填する必要があります。しかし、打上げ時にロケットの近くにいては大変危険です。そのため推進班は遠隔から酸化剤の供給を行うための装置（GSE）の開発・維持・運用を行います。発射ボタンを押す権利があるのはこの班だけですよ!また、ロケットを打ち上げる前には、本番で正しくエンジン・供給系が動作するかの事前試験を行う必要があります。そのため年数回地上燃焼試験を行います。空気を震わすエンジンの燃焼は大迫力です!さらに、近年では自作エンジンの開発に力を入れています。ロケットの心臓部であるロケットエンジンを製作するには様々な知識が必要で、その過程では多くの問題点もでてきます。しかし、そうした困難を試行錯誤で乗り越え、苦労して完成させた自作エンジンが燃えた時には、言葉にならないような喜びを感じることができます。"},
    { name: "シミュレーション班", image:"/cloud.jpg", description:"シミュレーション班では、主にロケットの空力特性解析や飛行経路シミュレータの開発・運用を行っています。ロケットの空力特性の解析はCFDを、飛行経路は自作シミュレータSpicaを用いて計算しています。製作したロケットがどのように飛行するか、どこに着地するのかなどをシミュレーションすることで、ロケットが安全に飛行しミッションを確実に遂行出来るかを評価しています。つまり、シミュレーション班は本番一発勝負の打上実験を安全かつ確実に成功させるための要なのです!その他にも、過去の飛行データの解析も行います。これにより、ロケットの飛行中の挙動を理解したり、新しいロケットの設計提案に繋げたりします。このようにシミュレーション班は実際のモノこそ扱いませんが、ロケット製作において重要な役割を果たしています。"},
]

export default function Teams() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">CREATEの班</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teams.map((team, index) => (
                        <TeamCard key={index} {...team} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TeamCard({ name, description} : { name: string, description: string}) {
    const [ isHovered, setIsHovered ] = useState(false)
    const [ ref, inView ] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <Link href={`/teams/${name.toLowerCase()}`}>
            <div
              ref={ref}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                inView ? "translate-y-0 opacity-100" :"translate-y-8 opacity-0"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} 
            >
                <Image 
                  src={"/hill.jpg"}
                  alt={name}
                  width={300}
                  height={200}
                  className={`object-cover w-full h-full ${isHovered? "shadow-md" : "shadow-sm"}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-75">
                    <h3 className="mb-2 text-2xl font-bold">{name}</h3>
                    <p className={`transition-all duration-300 ${isHovered ? "opacity-100":"opacity-0"}`}>{description}</p>
                </div>
            </div>
        </Link>
    )
}