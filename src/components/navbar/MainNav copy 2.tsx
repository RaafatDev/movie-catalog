import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Suggestion from "./Suggestion";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SEARCH_LIST } from "../../graphql/queries";
import LoadingSuggestions from "./Loading";

interface Props {}

const MainNav: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = React.useRef<any>(null);
  //* ##################
  const SEARCH_DEBOUNCE_TIMEOUT = 500;

  const { loading, data } = useDebouncedQuery(
    searchTerm,
    SEARCH_DEBOUNCE_TIMEOUT
  );

  function handleClick(e: any) {
    const clickedElement = e.target;

    const clickedButton = clickedElement.closest(".suggestions__button");
    const clickedSearchBox = clickedElement.closest(".search-box");
    const clickedSuggestions = clickedElement.closest(".suggestions");
    const clickedTitle = clickedElement.closest(
      ".suggestions__item__info__title"
    );

    if (clickedTitle) {
      setShowSuggestions(false);
      searchRef.current.value = "";

      return;
    }

    if (clickedButton) {
      setShowSuggestions(false);
      searchRef.current.value = "";
    }

    if (!clickedSearchBox && !clickedSuggestions) {
      setShowSuggestions(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

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
          <form className="form-inline my-2 my-md-0 search-form form-group">
            <input
              ref={searchRef}
              onChange={(e) => {
                e.target.value === ""
                  ? setShowSuggestions(false)
                  : setShowSuggestions(true);

                setSearchTerm(e.target.value);
              }}
              className="form-control w-100 search-box"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />

            <div
              className="suggestions rounded"
              onClick={() => setShowSuggestions(true)}
            >
              {showSuggestions && loading && <LoadingSuggestions />}

              {showSuggestions &&
                data &&
                data.searchMovieList &&
                data.searchMovieList
                  .slice(0, 5)
                  .map((movie: any, index: number) => (
                    <Suggestion movie={movie} key={index} />
                  ))}

              {showSuggestions &&
                data &&
                data.searchMovieList &&
                data.searchMovieList.length !== 0 && (
                  <Link
                    to={{
                      pathname: `/search/keyword=${searchRef.current.value
                        .split(" ")
                        .join("-")}`,
                      state: {
                        searchedMovies: JSON.stringify(data.searchMovieList),
                        keyword: searchRef.current.value,
                      },
                    }}
                  >
                    <button className="suggestions__button btn btn-primary btn-block border">
                      View All
                    </button>
                  </Link>
                )}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;

// Hook
function useDebounce(value: any, delay: any) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

const useDebouncedQuery = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const queriedData = useQuery(QUERY_SEARCH_LIST, {
    variables: { searchTerm: debouncedValue },
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value.split(" ").join("+"));
    }, [delay]);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return queriedData;
};
