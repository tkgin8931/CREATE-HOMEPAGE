export interface blogpost {
  id:number;
  title:string;
  excerpt:string;
  date:string;
  readTime:string;
  category:string;
  image:string;
  featured?:boolean;
  url?:string;
}