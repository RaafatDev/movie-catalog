import { useState, useEffect } from "react";
import { ICombined } from "../model/combined";

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
    let combined = {};
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

          const omdb_data = {
            Actors: json2.Actors
          };

          combined = { ...json, ...json2 };
          // combined = { ...tmdb_data, ...omdb_data };
        } catch (error) {}
      }
      // setData(( prevState : any ) => {...prevState,  ...combined });
      setData(combined as ICombined);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBoth();
  }, [tmdb_url]);

  return [data, isLoading, error];
};

export default useCombineFetch;
