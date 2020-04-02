import { useState, useEffect } from "react";
import { ICombined } from "../model/combined";
import { basePosterUrl } from "../urls_and_keys";

type Hook = (tmdb_url: string) => [ICombined, boolean, string | null];

const useCombineFetch: Hook = (tmdb_url: string) => {
  const [data, setData] = useState<ICombined>({} as ICombined);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  };
  const fetchBoth = async () => {
    setIsLoading(true);
    let combined: any = {};
    try {
      const json = await fetchData(tmdb_url);

      const imdb_id = json.external_ids.imdb_id;

      if (imdb_id) {
        const omdb_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdb_id}&plot=full`;

        try {
          const json2 = await fetchData(omdb_url);

          combined = { ...json, ...json2 };

          sortInfo(combined);
        } catch (error) {
          console.log("error");
        }
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const sortInfo = (combined: any) => {
    const sorted = {
      // imdb_id:combined.imdb_id,
      imdb_id: combined.imdb_id,
      id: combined.id,

      //
      title: combined.title ? combined.title : combined.name,
      number_of_episodes: combined.number_of_episodes,
      number_of_seasons: combined.number_of_seasons,

      release_date: combined.release_date
        ? combined.release_date
        : combined.first_air_date,
      // id: JSON.stringify(movie.id),
      poster_path: combined.poster_path
        ? // ? `${basePosterUrl}w1280${movie.poster_path}`
          // `${basePosterUrl}w300${combined.poster_path}`
          `${basePosterUrl}w780${combined.poster_path}`
        : `${process.env.PUBLIC_URL}/img/no_image.png`,
      backdrop_path: combined.backdrop_path
        ? // ? `${basePosterUrl}w1280${movie.backdrop_path}`
          `${basePosterUrl}w780${combined.backdrop_path}`
        : `${process.env.PUBLIC_URL}/img/no_image.png`,
      overview: combined.overview,
      // credits: { cast: any[] };
      credits: combined.credits,
      budget: combined.budget,
      // videos: { results: any[] };
      // videos: combined.videos.results,
      videos: combined.videos,
      // images: { backdrops: any[]; posters: any[] };
      images: combined.images,
      //
      Genre: combined.Genre,
      Director: combined.Director,
      Writer: combined.Writer,
      Actors: combined.Actors,
      Country: combined.Country,
      Awards: combined.Awards,
      // Ratings: { Source: string; Value: string }[];
      Ratings: combined.Ratings,
      imdbRating: combined.imdbRating,
      Production: combined.Production,
      Runtime: combined.Runtime
    };

    setData(sorted);
  };

  useEffect(() => {
    const localCheck = localStorage.getItem("movie-detail");
    if (localCheck) {
      // console.log("there is local Storage search-bar-arr", localCheck);
    }
    if (!localCheck) {
      // console.log("noooooo local for search-bar-arr", localCheck);
    }
    // console.log("only local check ", localCheck);

    fetchBoth();
  }, [tmdb_url]);

  return [data, isLoading, error];
};

export default useCombineFetch;
