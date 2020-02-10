import { useState, useEffect } from "react";

interface ICombined {
  imdb_id: string;
  id: string;
  // poster_path: string;
  // backdrop_path: string;
  // overview: string;
  // credits: { cast: any[] };
  credits: { cast: any[] };
  Actors: string;
  // videos: { results: any[] };
  // images: { backdrops: any[]; posters: any[] };
}
type Hook = (tmdb_url: string) => [ICombined, boolean, string | null];
// interface ICombinedFetch {
//   data: any[];
//   isLoading: boolean;
//   error: string;
// }

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
    console.log("fetch Both Urls ");

    setIsLoading(true);
    let combined = {};
    try {
      const json = await fetchData(tmdb_url);

      console.log("first fetch ");
      console.log({ json });

      const imdb_id = json.external_ids.imdb_id;

      console.log({ imdb_id });

      if (imdb_id) {
        const omdb_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdb_id}&plot=full`;

        try {
          const json2 = await fetchData(omdb_url);

          console.log("Second fetch ");
          console.log({ json });

          combined = { ...json, ...json2 };
          //   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
          //   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");

          //   console.log({ json2 });
          //   console.log({ combined });

          //   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
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
