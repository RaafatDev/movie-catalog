import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import usePrepareMoviesArr from "../../hooks/usePrepareMoviesArr";
import Suggestion from "./Suggestion";

interface Props {}

const MainNav: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedArr, setSortedArr] = usePrepareMoviesArr([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = React.useRef<any>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchMovie = async (searchTerm: string) => {
    const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

    const response = await fetch(search_url);
    const data = await response.json();

    return data;
  };

  function handleClick(e: any) {
    const clickedElement = e.target;

    const clickedSearchBox = clickedElement.closest(".search-box");
    const clickedSuggestions = clickedElement.closest(".suggestions");
    const clickedTitle = clickedElement.closest(
      ".suggestions__item__info__title"
    );

    if (clickedTitle) {
      // console.log("title was clieckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      setShowSuggestions(false);
      // console.log(searchRef.current.value);

      searchRef.current.value = "";
      return;
    }

    if (!clickedSearchBox && !clickedSuggestions) {
      console.log("nothing important was clicked ");
      setShowSuggestions(false);

      // return;
    }

    if (clickedSearchBox) {
      // this id is important to get the movie and show it in a single page
      // const id = clickedTeaser.dataset.id;
      console.log("the Search box was clicked ");

      // const single = new SingleMovie(moviesArr);
      // single.displaySingleMovie(id);
    }
    if (clickedSuggestions) {
      // this id is important to get the movie and show it in a single page

      console.log("the suggestions List was Clicked !!!!");

      // const id = clickedSlider.dataset.id;

      // const single = new SingleMovie(sliderMoviesArr);
      // single.displaySingleMovie(id);
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick);

    // return () => window.removeEventListener("click", clickHandler);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  useEffect(() => {
    if (debouncedSearchTerm) {
      searchMovie(debouncedSearchTerm).then((results: any) => {
        setSortedArr(results);
      });
    } else {
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
                <button className="btn btn-primary btn-block border">
                  View All
                </button>
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
