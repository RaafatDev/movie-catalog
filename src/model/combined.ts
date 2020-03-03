export interface ICombined {
  imdb_id: string;
  id: string;
  //
  title: string;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;

  release_date: string;
  first_air_date?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
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
  Runtime: string;
}
