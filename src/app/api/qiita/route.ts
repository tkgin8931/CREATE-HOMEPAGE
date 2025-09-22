//import json from "../../articles.json"
import { blogpost,Welcome } from "./blogpost"
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
        const post:blogpost={
            id:a,
            title:item.title,
            excerpt:getPreview(item.body,50)+"...",
            date:item.updated_at||"2024-01-01",
            readTime:Math.floor(item.body.length/200)+" min read",
            category:item.tags[0].name||"technology",
            image:getfirstimage(item.body)||"/IMG_0853.jpg",
            featured:false,
            url:item.url||"#",
        };
        a=a+1;
        posts.push(post);
    }
    );
    return posts;
}
export  async function GET( ) {
    try{
        const res=await fetch("https://qiita.com/api/v2/items?query=ESP32-S3&per_page=6",{
            headers:{
                barier: `Bearer ${accessToken}`,
            },
            cache: "no-store"
        }
        );
        if(!res.ok){
            throw new Error('Failed to fetch articles from Qiita API in route.ts: ' + res.statusText+ "enviroment valiableのapi keyの始めの5文字は"+accessToken?.slice(0,5) );
        }
        const rjson=await res.json();
        return new Response(JSON.stringify(jsontoblogposts(rjson)), { status: 200 ,
            headers: {
        "Content-Type": "application/json"
            }
            });
    //     return new Response(JSON.stringify(jsontoblogposts(json)), { status: 200 ,
    //         headers: {
    // "Content-Type": "application/json"
    //     }
    //     });
        }catch(error){
            console.error(error);
        return new Response("Error fetching articles", { status: 500 } );
        }
  }

