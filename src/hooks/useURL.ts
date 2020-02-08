import {
  tmdb_url_before,
  tv_tmdb_url_before,
  tmdb_url_after,
  tv_tmdb_url_after
} from "../urls_and_keys";

export const useURL = (isMovie: boolean, movieId: string) => {
  const url = isMovie
    ? `${tmdb_url_before}${movieId}${tmdb_url_after}`
    : `${tv_tmdb_url_before}${movieId}${tv_tmdb_url_after}`;

  return { url };
};
