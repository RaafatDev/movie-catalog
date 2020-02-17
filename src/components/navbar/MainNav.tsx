import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import useDebounce from "../../hooks/draft/useDebounce";
// import usePrepareMoviesArr from "../../hooks/usePrepareMoviesArr";
import Suggestion from "./Suggestion";
import useDebouncedSearch from "../../hooks/useDebouncedSearch";

interface Props {}

const MainNav: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = React.useRef<any>(null);
  const sortedArr = useDebouncedSearch(searchTerm, 500);
  // const sortedArr = useDebouncedSearch(searchTerm, 700);

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
      // console.log("button clicked !!!!!!!");
      setShowSuggestions(false);
      searchRef.current.value = "";
    }

    if (!clickedSearchBox && !clickedSuggestions) {
      console.log("nothing important was clicked ");
      setShowSuggestions(false);

      // return;
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
            {/* <div> */}
            <input
              ref={searchRef}
              onChange={e => {
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
              {showSuggestions &&
                sortedArr &&
                sortedArr.slice(0, 5).map((movie: any, index: number) => (
                  <Suggestion
                    movie={movie}
                    key={index}
                    // setShowSuggestions={setShowSuggestions}
                  />
                ))}

              {showSuggestions && sortedArr.length !== 0 && (
                <Link
                  to={{
                    pathname: `/search?keyword=${searchRef.current.value
                      .split(" ")
                      .join("-")}`,
                    state: {
                      searchedMovies: JSON.stringify(sortedArr),
                      keyword: searchRef.current.value
                    }
                  }}
                >
                  {/* <Link to={`/search?keyword=${searchRef.current.value}`}> */}
                  <button className="suggestions__button btn btn-primary btn-block border">
                    View All
                  </button>
                </Link>
              )}
            </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
