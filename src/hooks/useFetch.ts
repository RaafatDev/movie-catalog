import { useState, useEffect } from "react";
// import { movieRequestSuccess } from "../appState/movieActions";

// export function useFetch(url: string): [any[] | null, boolean, string | null] {
export function useFetch(url: string) {
  // export function useFetch(url: string): [any{} | null, boolean, string | null] {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("useFetch");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
}
