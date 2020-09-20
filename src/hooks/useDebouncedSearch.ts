import { useState, useEffect } from "react";
import usePrepareMoviesArr from "./usePrepareMoviesArr";

// Our hook
export default function useDebouncedSearch(value: any, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [sortedArr, setSortedArr] = usePrepareMoviesArr([]);

  const searchMovie = async (searchTerm: string) => {
    const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

    console.log("the url from useDebouncedSearch: ", search_url);

    const response = await fetch(search_url);
    const data = await response.json();
    // console.log({ data });

    return data;
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      searchMovie(debouncedValue).then((data: any) => {
        setSortedArr(data);
        // console.log("kdkdkd", { data });
      });
    } else {
      setSortedArr([]);
    }
    //   }, [value]);
  }, [debouncedValue]);

  //   return debouncedValue;
  return sortedArr;
}
