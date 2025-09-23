//const accessToken=process.env.API_TOKEN;
import { blogpost } from "./blogpost";

export async function getarticles() {
    try {
        const baseUrl = process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : process.env.NEXT_PUBLIC_BASE_URL || ""; // Fallback to empty string if not defined
        console.log("BaseURL:", baseUrl);
        console.log("Request URL:", `${baseUrl}/api/qiita`);
        const res = await fetch(`${baseUrl}/api/qiita`, {
            headers: {
                "Content-Type": "application/json"
            },
            next: { revalidate: 24 * 60 * 60 },
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch articles. Status: ${res.status}, StatusText: ${res.statusText}, BaseURL: ${baseUrl}, URL: ${res.url}`); // 詳細なエラーメッセージを追加
        }
        console.log("Fetch response:", res);
        const rjson = await res.json();
        console.log("Fetch JSON:", rjson);
        return rjson as blogpost[];
    } catch (error) {
        console.error("Error in getarticles:", error);
        return [];
    }
}
