export interface ICombined {
  imdb_id: string;
  id: string;
  // poster_path: string;
  // backdrop_path: string;
  // overview: string;
  // credits: { cast: any[] };
  credits: { cast: any[] };
  Actors: string;
  budget: string;
  videos: { results: any[] };
  images: { backdrops: any[]; posters: any[] };
}
