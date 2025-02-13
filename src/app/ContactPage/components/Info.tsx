import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, Calendar, Info } from "lucide-react"

export default function ClubInfoCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">活動情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 mt-0.5 text-muted-foreground" />
          <div>
            <h3 className="font-semibold">サークル概要</h3>
            <p className="text-sm text-muted-foreground">
              ものつくり初心者歓迎!!
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Calendar className="w-5 h-5 mt-0.5 text-muted-foreground" />
          <div>
            <h3 className="font-semibold">活動内容</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside">
              <li>毎週金曜日: 全体ミーティング(17:30~)</li>
              
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Users className="w-5 h-5 mt-0.5 text-muted-foreground" />
          <div>
            <h3 className="font-semibold">入部方法</h3>
            <p className="text-sm text-muted-foreground">
               入部フォームから受け付けております
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 mt-0.5 text-muted-foreground" />
          <div>
            <h3 className="font-semibold">連絡先</h3>
            <p className="text-sm text-muted-foreground">
              Email: create.rocket@gmail.com
            </p>
          </div>
        </div>

        {/* <Button className="w-full mt-4">入部申し込み</Button> */}
      </CardContent>
    </Card>
  )
}

