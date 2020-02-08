export interface PopularMovie {
  isMovie: boolean;
  popularity: number;
  vote_count: number;
  poster_path: string;

  id: number;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  name?: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date?: string;
  Genres: string;
}
