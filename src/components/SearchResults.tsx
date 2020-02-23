import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router";
// import MoviesList from "./movies-list/MoviesList";
import Movie from "./movies-list/Movie";
import { PopularMovie } from "../model/PopularMovie";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props extends RouteComponentProps<{ keyword: string }> {}

const SearchResults: React.FC<Props> = ({ match }) => {
  // console.log({ match });

  const history = useHistory<any>();

  const [movieArr, setMovieArr] = useState([]);

  const [localState, setLocalState] = useLocalStorage(
    "search-result",
    movieArr
  );

  useEffect(() => {
    try {
      const movieArrParsed = JSON.parse(history.location.state.searchedMovies);

      setMovieArr(movieArrParsed);
      setLocalState(movieArrParsed);
    } catch (error) {
      console.log("catch Error SearchResults useEffect!");
    }

    return () => window.localStorage.removeItem("search-result");
    // }, [history.location.state.searchedMovies]);
  }, [history.location.state]);

  console.log({ history });
  console.log({ match });
  console.log(match.params.keyword);

  console.log({ localState });

  return (
    <div>
      <div className="container text-light mt-5">
        {/* {history.location.state && (
          <h1>Result for: {history.location.state.keyword} </h1>
        )} */}
        {match.params && match.params.keyword && (
          <h1>
            Result for: {match.params.keyword.substring(1).toUpperCase()}{" "}
          </h1>
        )}
        {/* <h1>Result for: {history.location.state.keyword} </h1> */}
        <div className="container">
          <div className="row">
            {/* {movieArr && movieArr.map((x: PopularMovie) => ( */}
            {localState &&
              localState.map((x: PopularMovie) => (
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
