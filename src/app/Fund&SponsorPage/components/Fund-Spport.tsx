"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function FundSupport() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">支援のお願い</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg mb-6">
                      私たちCREATEでは、ハイブリッドロケットの設計・開発を行っています。
                      東京工業大学基金への参加に際し、CREATEの活動にご賛同いただけました方は、
                      下記のリンクからご支援の程よろしくお願いします。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                            <a 
                              href="https://fundexapp.jp/titech/entry.php?purposeCode=500000&supportCode=504200"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center"
                              >
                                日本語フォーム
                                <ExternalLink className="ml-2 h-4 w-4" /> 
                              </a>
                        </Button>
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                        <a
                            href="https://fundexapp.jp/titech_eng/entry.php?purposeCode=500000&supportCode=504200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                        >
                            English Form
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">詳細情報</h3>
                        <p>本基金による支援基金は、ハイブリッドロケットの機体制作費、打ち上げ実験・イベント参加の際の部員の交通費支援や機体運搬費、次年度への活動継続費に充てさせていただきます。</p>
                        <p>
                          ご協力くださる方は上記の申し込みフォームにてお申し込みいただくか(クレジットカード、インターネットバンキング、コンビニエンスストアのいずれかより選択)、お問い合わせフォームまでご連絡いただければ振込用紙を送らせていただきます。
                          ご寄付の際は寄付目的を「CREATE応援基金」としてください。
                        </p>
                        <p>本基金にご協力くださった方には、</p>
                        <ul className="list-disc list-inside">
                            <li>活動進捗のメール</li>
                            <li>打ち上げ後のお礼・活動報告書の送付</li>
                            <li>希望者全員に対して打ち上げ後の機体の見学</li>
                        </ul>
                        <p>に加え</p>
                        <ul className="list-disc list-inside">
                            <li>学長主催「感謝の集い」へのご招待(寄付者全員)</li>
                            <li>上記に加え、芳名刻印レンガの大学施設内設置(30万円以上、法人は100万円以上)</li>
                            <li>上記に加え、紺綬褒章へのご推薦(500万円以上、法人は1,000万円以上)</li>
                        </ul>
                        <p>をお礼として差し上げております。</p>
                    </div>
                </div>
            </div>
        </section>
    )
}