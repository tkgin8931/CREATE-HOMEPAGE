//const accessToken=process.env.API_TOKEN;
import { blogpost } from "./blogpost";

export async function getarticles() {
    try {
        const baseUrl = process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : process.env.NEXT_PUBLIC_BASE_URL || ""; // Fallback to empty string if not defined
        const res = await fetch(`${baseUrl}/api/qiita`, {
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
