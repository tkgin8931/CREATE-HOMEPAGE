//const accessToken=process.env.API_TOKEN;
import { blogpost } from "./blogpost"

export async function getarticles() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // ベースURLを環境変数から取得
        const res = await fetch(`${baseUrl}/TechPage/api/qiita/`, {
            headers: {
                "Content-Type": "application/json"
            },
            next: { revalidate: 24 * 60 * 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch articles');
        }

        const rjson = await res.json();
        console.log(rjson);
        return rjson as blogpost[];
    } catch (error) {
        console.error(error);
        return [];
    }
}
