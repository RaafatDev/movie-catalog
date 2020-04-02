import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import Movie from "./movies-list/Movie";
import { PopularMovie } from "../model/PopularMovie";
import useDebouncedSearch from "../hooks/useDebouncedSearch";

interface Props extends RouteComponentProps<{ keyword: string }> {}

const SearchResults: React.FC<Props> = ({ match }) => {
  // console.log({ match });
  // console.log(match.params.keyword.substring(1));

  const [movieArr, setMovieArr] = useState([]);
  const searchTerm = match.params.keyword.substring(1);
  const sortedFromDebounced = useDebouncedSearch(searchTerm, 500);
  // console.log({ movieArr });

  // console.log({ sortedFromDebounced });
  // console.log(sortedFromDebounced);
  // useEffect(() => {
  //   if (localStorage.getItem("search-bar-arr")) {
  //     const xArr = localStorage.getItem("search-bar-arr");
  //     // console.log("cddd", xArr);
  //   }
  // }, [sortedFromDebounced]);

  useEffect(() => {
    try {
      const xArr = localStorage.getItem("search-bar-arr");
      // if (xArr === "") {
      if (xArr) {
        // console.log("xArr", xArr);

        // console.log("1");

        const xArrParsed = JSON.parse(xArr);

        if (xArrParsed.length > 0) {
          // console.log("xparsed", xArrParsed);

          setMovieArr(xArrParsed);
          // console.log("here", xArr);
        }
      }
      if (xArr === null) {
        // console.log("2");

        // make a fetch
        setMovieArr(sortedFromDebounced);
        // console.log("fetchhhhhh", sortedFromDebounced);
      }
      // console.log("there", typeof xArr, xArr);
      // console.log({ xArr });
    } catch (error) {
      console.log("error in useEffect, first block!!");
    }

    window.onunload = () => window.localStorage.removeItem("search-bar-arr");
    return () => {
      localStorage.removeItem("search-bar-arr");
    };
  }, [match, sortedFromDebounced]);

  return (
    <div>
      <div className="container text-light mt-5">
        {match.params && match.params.keyword && (
          <h1>
            Result for: {match.params.keyword.substring(1).toUpperCase()}{" "}
          </h1>
        )}
        <div className="container">
          <div className="row">
            {movieArr &&
              movieArr.map((x: PopularMovie) => (
                <div
                  className="col  m-2 p-0 d-flex align-items-stretch"
                  key={x.id}
                >
                  <Movie oneMovie={x} key={x.id} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
