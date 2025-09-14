const accessToken=process.env.API_TOKEN;
import json from "./articles.json"
import { blogpost } from "./blogpost"
function jsontoblogposts(data:any):blogpost[]{
    const posts:blogpost[]=[];
    var a=0;
    data.forEach((item:any) => {
        const post:blogpost={
            id:a,
            title:item.title,
            excerpt:getPreview(item.body,50)+"...",
            date:item.date||"2024-01-01",
            readTime:Math.floor(item.body.length/200)+" min read",
            category:item.category||"Technology",
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
export  async function getarticles( ) {
    try{
    // const res=await fetch("https://qiita.com/api/v2/items?query=ESP32-S3&per_page=6",{
    //     headers:{
    //         barier: `Bearer ${accessToken}`,
    //     },
    //     next:{revalidate:24*60*60},
    
    // }
    // );
    // if(!res.ok){
    //     throw new Error('Failed to fetch articles');
    // }
    // const rjson=await res.json();
    // console.log(rjson);
    // return jsontoblogposts(rjson);
    const data=jsontoblogposts(json);
    return data;
    }catch(error){
        console.error(error);
    return 0;
    }
  }
