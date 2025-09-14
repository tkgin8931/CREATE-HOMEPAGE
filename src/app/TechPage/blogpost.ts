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
export interface Welcome {
    rendered_body:         string;
    body:                  string;
    coediting:             boolean;
    comments_count:        number;
    created_at:            String;
    group:                 null;
    id:                    string;
    likes_count:           number;
    private:               boolean;
    reactions_count:       number;
    stocks_count:          number;
    tags:                  Tag[];
    title:                 string;
    updated_at:            string;
    url:                   string;
    user:                  User;
    page_views_count:      null;
    team_membership:       null;
    organization_url_name: string;
    slide:                 boolean;
}

export interface Tag {
    name:     ID;
    versions: ID[];
}
export type ID = string | null;

export interface User {
    description:         string;
    facebook_id:         string;
    followees_count:     number;
    followers_count:     number;
    github_login_name:   string;
    id:                  ID;
    items_count:         number;
    linkedin_id:         string;
    location:            string;
    name:                string;
    organization:        ID;
    permanent_id:        number;
    profile_image_url:   string;
    team_only:           boolean;
    twitter_screen_name: ID;
    website_url:         string;
}