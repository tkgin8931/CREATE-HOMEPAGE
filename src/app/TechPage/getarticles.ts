//const accessToken=process.env.API_TOKEN;
import { blogpost } from "./blogpost";
import {headers} from 'next/headers';
export async function getarticles() {
    try {
        const hds = await headers();
        const host =  hds.get("host"); // ex: "myapp.vercel.app" or "localhost:3000"
        const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
        const baseUrl = `${protocol}://${host}`;

        console.log("BaseURL:", baseUrl);
        console.log("Request URL:", `${baseUrl}/api/qiita`);

        const res = await fetch(`${baseUrl}/api/qiita`, {
            headers: {
                "Content-Type": "application/json"
            },
            next: { revalidate:  10 },// 1分ごとに再検証
            //cache: "no-store", // キャッシュを無効化
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch articles. Status: ${res.status}, StatusText: ${res.statusText}, BaseURL: ${baseUrl}, URL: ${res.url}`); // 詳細なエラーメッセージを追加
        }
        console.log("Fetch response:", res);
        console.log("Content-Type:", res.headers.get("content-type"));
        
        // レスポンスのテキスト内容を確認
        const responseText = await res.text();
        console.log("Response text (first 500 chars):", responseText.substring(0, 500));
        
        // HTMLかJSONかを判定
        if (res.headers.get("content-type")?.includes("text/html")) {
            console.error("Received HTML instead of JSON. Full HTML response:", responseText);
            throw new Error("API returned HTML instead of JSON");
        }
        
        // JSONをパース
        let rjson;
        try {
            rjson = JSON.parse(responseText);
        } catch (parseError) {
            console.error("JSON parse error:", parseError);
            console.error("Response text:", responseText);
            throw new Error("Failed to parse JSON response");
        }
        
        console.log("Fetch JSON:", rjson);
        return rjson as blogpost[];
    } catch (error) {
        console.error("Error in getarticles:", error);
        return [];
    }
}
