import { useState, useEffect } from "react";

const useSingleMovieDataSorting = (rowArr: any[]) => {
  const [data, setData] = useState([]);

  const doSomething = () => {
    //
  };

  useEffect(() => {
    if (rowArr) {
      doSomething();
    }
  }, [rowArr]);

  return [data];
};
