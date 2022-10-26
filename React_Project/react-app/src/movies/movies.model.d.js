export interface movieDTO{
    id:Number;
    title:String;
    poster:string;
}

export interface landingpageDTO{
    inThreaters?:movieDTO[];
    upcomingReleases?:movieDTO[];
}