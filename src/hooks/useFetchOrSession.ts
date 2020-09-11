import { useState, useEffect } from "react";
import { ICombined } from "../model/combined";
import { basePosterUrl } from "../urls_and_keys";

type Hook = (
  tmdb_url: string,
  key: string
) => [ICombined, boolean, string | null];

const useFetchOrSession: Hook = (tmdb_url: string, key: string) => {
  const [data, setData] = useState<ICombined>({} as ICombined);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    // console.log("json", json);

    return json;
  };

  const nestedFetch = async () => {
    // console.log("nestedFetchchchchchchchch is called ");

    setIsLoading(true);
    let combined: any = {};
    try {
      const tmdb_data = await fetchData(tmdb_url);
      // const tmdb_data = await fetchData("www.omdbapi.com");
      const imdb_id = tmdb_data.external_ids.imdb_id;
      // console.log("nested Fetch", imdb_id);

      if (imdb_id) {
        const omdb_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdb_id}&plot=full`;

        try {
          const omdb_data = await fetchData(omdb_url);
          combined = { ...tmdb_data, ...omdb_data };

          sortCombinedData(combined);
        } catch (error) {
          console.log("error");
        }
      } else {
        // if there is no imdb => then we can't fetch the data from OMDB api
        combined = { ...tmdb_data };
        sortCombinedData(combined);
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const sortCombinedData = (combined: any) => {
    // console.log("combined ", combined);

    const sortedCombined = {
      imdb_id: combined.imdb_id,
      id: combined.id,
      title: combined.title ? combined.title : combined.name,
      number_of_episodes: combined.number_of_episodes,
      number_of_seasons: combined.number_of_seasons,
      release_date: combined.release_date
        ? combined.release_date
        : combined.first_air_date,
      poster_path: combined.poster_path
        ? `${basePosterUrl}w780${combined.poster_path}`
        : `${process.env.PUBLIC_URL}/img/no_image.png`,
      backdrop_path: combined.backdrop_path
        ? `${basePosterUrl}w780${combined.backdrop_path}`
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
      Runtime: combined.Runtime,
    };
    // todo: restore the data in the local-session after the refactoring and restructuring the code
    // sessionStorage.setItem(key, JSON.stringify(sortedCombined));
    setData(sortedCombined);
  };

  useEffect(() => {
    // make the test fail to not store >> temporary till the restructure !
    // todo: make the localCheck work again after the refactoring and restructuring the code
    // const localCheck = sessionStorage.getItem(key);
    const localCheck = false;

    if (localCheck) {
      // if (false) {
      console.log("there is local Storage search-bar-arr", key);
      // sendData();
      setData(JSON.parse(localCheck));
      setIsLoading(false);
    }
    if (!localCheck) {
      // console.log("1111");
      console.log("noooooo local for search-bar-arr", localCheck);
      nestedFetch();
    }
  }, [tmdb_url]);

  return [data, isLoading, error];
};

export default useFetchOrSession;
