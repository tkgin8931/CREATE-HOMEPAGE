//import json from "../../articles.json"
import { blogpost,Welcome } from "../blogpost"
const accessToken=process.env.API_TOKEN;
function getPreview(md: string, length = 100): string {
  // 空行で分割して最初の段落を取る
  //console
  let first = md;
  // 画像削除
  first = first.replace(/!\[.*?\]\(.*?\)/g, "");
  // リンクはテキストだけ残す
  first = first.replace(/\[(.*?)\]\(.*?\)/g, "$1");
  // コード削除
  first = first.replace(/```[\s\S]*?```/g, "");
  first = first.replace(/`.*?`/g, "");
  // 空白整理
  first = first.replace(/\s+/g, " ").trim();
  // 長さ制限
  return first.length > length ? first.slice(0, length) + "…" : first;
}
function getfirstimage(md: string): string | null {
  const regex = /!\[.*?\]\((.*?)\)/;
  const match = md.match(regex);
  return match ? match[1] : null;
}
function jsontoblogposts(data:Welcome[]):blogpost[]{
    const posts:blogpost[]=[];
    let a=0;
    data.forEach((item:Welcome) => {
        try {
            const post:blogpost={
                id:a,
                title:item.title || "No title",
                excerpt:getPreview(item.body || "",50)+"...",
                date:item.updated_at||"2024-01-01",
                readTime:Math.floor((item.body?.length || 0)/200)+" min read",
                category:item.tags?.[0]?.name||"technology",
                image:getfirstimage(item.body || "")||"/IMG_0853.jpg",
                featured:false,
                url:item.url||"#",
            };
            a=a+1;
            posts.push(post);
        } catch (error) {
            console.error("Error processing item:", item, error);
        }
    }
    );
    return posts;
}
export  async function getqiita() {
    try {
        if (!accessToken) {
            return new Response("API_TOKEN is not defined. Please check your environment variables.", { status: 500 });
        }

        const res = await fetch("https://qiita.com/api/v2/items?query=ESP32-S3&per_page=6", {
            headers: {
                Authorization: `Bearer ${accessToken}`, // 修正: "barier" -> "Authorization"
            },
            cache: "no-store",
        });

        if (!res.ok) {
            const errorDetails = {
                status: res.status,
                statusText: res.statusText,
                url: res.url,
                headers: Object.fromEntries(res.headers.entries()),
            };
            console.error("Fetch error details:", errorDetails);
            return new Response(
                `Failed to fetch articles from Qiita API. Details: ${JSON.stringify(errorDetails)}`,
                { status: res.status }
            );
        }

        const rjson = await res.json();
        //console.log("Qiita API response:", rjson);
        console.log("Qiita API called in route.ts at", new Date().toISOString());//秒数まで表示
        // レスポンスが配列かチェック
        if (!Array.isArray(rjson)) {
            console.error("Unexpected response format:", rjson);
            return new Response("Invalid response format from Qiita API", { status: 500 });
        }
        
        const blogPosts = jsontoblogposts(rjson);
        return new Response(JSON.stringify(blogPosts), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Unexpected error in GET function:", error);
        return new Response("Unexpected error occurred while fetching articles.", { status: 500 });
    }
}

