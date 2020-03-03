import { useState, useEffect } from "react";
import { ICombined } from "../model/combined";
import { basePosterUrl } from "../urls_and_keys";

type Hook = (tmdb_url: string) => [ICombined, boolean, string | null];

const useCombineFetch: Hook = (tmdb_url: string) => {
  //   const [state, setState] = useState();
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
    // let combined: ICombined;
    try {
      const json = await fetchData(tmdb_url);

      const tmdb_data = {
        imdb_id: json.imdb_id,
        id: json.id,
        // poster_path: string;
        // backdrop_path: string;
        // overview: string;
        // credits: { cast: any[] };
        cast: json.credits.cast,
        // Actors: string;
        budget: json.budget,
        videos: json.videos.results,
        images: json.images.backdrops,
        posters: json.images.posters
      };
      const imdb_id = json.external_ids.imdb_id;

      if (imdb_id) {
        const omdb_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdb_id}&plot=full`;

        try {
          const json2 = await fetchData(omdb_url);

          // const omdb_data = {
          //   Actors: json2.Actors
          // };

          combined = { ...json, ...json2 };

          // const sortedObject = sortInfo(combined);
          sortInfo(combined);
          // combined {
          // setData(sortedObject as ICombined);

          // }
          // console.log("here combined ", combined);

          // combined = { ...tmdb_data, ...omdb_data };
        } catch (error) {}
      }
      // setData(( prevState : any ) => {...prevState,  ...combined });
      // setData(combined as ICombined);
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
          `${basePosterUrl}w300${combined.poster_path}`
        : `${process.env.PUBLIC_URL}/img/no_image.png`,
      backdrop_path: combined.backdrop_path
        ? // ? `${basePosterUrl}w1280${movie.backdrop_path}`
          `${basePosterUrl}w780${combined.backdrop_path}`
        : `${process.env.PUBLIC_URL}/img/no_image.png`,
      // title: string;
      // name?: string;
      // release_date: string;
      // poster_path: string;
      // backdrop_path: string;
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
    // return sorted;
  };

  useEffect(() => {
    fetchBoth();
  }, [tmdb_url]);

  return [data, isLoading, error];
};

export default useCombineFetch;
