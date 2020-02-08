import { useState, useEffect } from "react";
import { omdb_url_before, omdb_url_after } from "../urls_and_keys";

// export function useFetch(url: string): [any[] | null, boolean, string | null] {
interface ICombine {
  imdb_id: string;
  id: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  videos: { results: any[] };
  images: { backdrops: any[]; posters: any[] };
}
type Hook = (url: string) => [ICombine | null];
// [Token, React.Dispatch<React.SetStateAction<string>>]

interface IStatus {
  id: number;
  isOnline: boolean;
}
// export function useFetchCombined(url: string): Hook {
export function useFetchCombined(url: string) {
  // export function useFetch(url: string): [any{} | null, boolean, string | null] {
  const [data, setData] = useState<ICombine | null>(Object);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("useFetch");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();

        // console.log(
        //   "the movie type $$$$$$$$$$$$$$$$$$",
        //   json.external_ids.imdb_id
        // );

        // const response2 = await fetch(
        //   `${omdb_url_before}${json.external_ids.imdb_id}${omdb_url_after}`
        // );
        const response2 = await fetch(
          `${omdb_url_before}${json.imdb_id}${omdb_url_after}`
        );
        const json2 = await response2.json();

        // setData({ imdb: { ...json }, ...json2 });
        setData({ ...json, ...json2 });
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  // return [data, isLoading, error];
  // return [data, isLoading, error];
  return [data];
}
