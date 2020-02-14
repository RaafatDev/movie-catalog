import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import usePrepareMoviesArr from "../../hooks/usePrepareMoviesArr";
import Suggestion from "./Suggestion";

interface Props {}

const MainNav: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  // const [sortedArr, setSortedArr] = usePrepareMoviesArr(results);
  const [sortedArr, setSortedArr] = usePrepareMoviesArr([]);
  // setSortedArr(results);
  // console.log("sorteeeeeeeeeeeeeeed");
  // console.log({ sortedArr });

  // console.log("sorteeeeeeeeeeeeeeed");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchMovie = async (searchTerm: string) => {
    const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

    // return fetch(search_url).then(response => )
    const response = await fetch(search_url);
    // const data = (await response.json()).results;
    const data = await response.json();

    // console.log("search term with debounce");

    // console.log({ data });
    return data;
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      searchMovie(debouncedSearchTerm).then((results: any) => {
        setIsSearching(false);

        // setResults(results);
        setSortedArr(results);
      });
    } else {
      // setResults([]);
      setSortedArr([]);
    }
  }, [debouncedSearchTerm]);

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Movie Catalog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0 search-form">
            <div>
              <input
                onChange={e => setSearchTerm(e.target.value)}
                onFocus={() => {
                  console.log("Received focus");
                }}
                onBlur={() => {
                  console.log("Lost focus");
                }}
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="suggestions rounded">
                {sortedArr &&
                  sortedArr
                    .slice(0, 5)
                    .map((movie: any, index: number) => (
                      <Suggestion movie={movie} key={index} />
                    ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
