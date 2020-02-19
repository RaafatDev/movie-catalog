export interface ICombined {
  imdb_id: string;
  id: string;
  // poster_path: string;
  // backdrop_path: string;
  // overview: string;
  // credits: { cast: any[] };
  credits: { cast: any[] };
  budget: number;
  videos: { results: any[] };
  images: { backdrops: any[]; posters: any[] };
  //
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  imdbRating: string;
  Production: string;
}
