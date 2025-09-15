import json from "./articles.json"
//const accessToken=process.env.API_TOKEN;
export  async function GET( ) {
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
        //
        // return new Response(JSON.stringify(rjson), { status: 200 ,
        //     headers: {
        // "Content-Type": "application/json"
        //     }
        //     });
        return new Response(JSON.stringify(json), { status: 200 ,
            headers: {
    "Content-Type": "application/json"
        }
        });
        }catch(error){
            console.error(error);
        return 0;
        }
  }
