import React, { Suspense, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useURL } from "../../hooks/useURL";
import useCombineFetch from "../../hooks/useCombineFetch";
import Credits from "./Credits";
import ImagesSlide from "./ImagesSlide";
import MovieVideos from "./MovieVideos";
import BasicDetails from "./BasicDetails";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props
  extends RouteComponentProps<{ id: string; kind: string; title: string }> {}

const MovieDetails: React.FC<Props> = ({ match }) => {
  // console.log({ match });
  // const history = useHistory<any>();

  const { id, kind, title } = match.params;
  // const id = match.params.id;
  // const kind = match.params.kind;
  // const title = match.params;
  // let localStorageName: string = `local-movie${id}`;
  // console.log({ localStorageName });

  // const [localMovie, setLocalMovie] = useLocalStorage(
  //   "local-movie",
  //   history.location.state && history.location.state.movie
  // );
  // const [localMovie, setLocalMovie] = useLocalStorage(
  //   localStorageName,
  //   history.location.state && history.location.state.movie
  // );

  // console.log({ history });
  // console.log({ localMovie });

  // const { url } = useURL(localMovie.isMovie, localMovie.id);
  const { url } = useURL(kind, id);

  const [combinedFetch] = useCombineFetch(url);

  const [storageValue, setStorageValue] = useLocalStorage(
    "movie-detail",
    // JSON.stringify(combinedFetch)
    combinedFetch
  );

  useEffect(() => {
    // if (history.location.state) {
    //   const movie = JSON.parse(history.location.state.movie);
    //   setLocalMovie(movie);
    // }
    // return () => localStorage.removeItem("local-movie");
    // return () => localStorage.removeItem(localStorageName);
  }, []);

  useEffect(() => {
    setStorageValue(combinedFetch);

    return () => {
      localStorage.removeItem("movie-detail");
    };
  }, [combinedFetch]);

  // console.log({ combinedFetch });
  // console.log({ storageValue });
  // if (storageValue.videos) {
  //   console.log("the videos in storage values", storageValue.videos);
  // }

  // let trailers: Element;
  let trailers: any;
  let images: any;
  if (storageValue) {
    if (!storageValue?.videos || storageValue?.videos?.results.length === 0) {
      trailers = <h3>No Videos Found! </h3>;
    } else {
      trailers = storageValue.videos.results.map(
        (video: any, index: number) => (
          <MovieVideos video={video} key={index} index={index} />
        )
      );
    }

    if (!storageValue?.images || !storageValue?.images?.backdrops) {
      images = <h3>No Images Found </h3>;
    } else {
      images = <ImagesSlide images={storageValue.images} />;
    }
  }

  return (
    <div
      // style={{ width: "100% !important" }}
      // className="movie-details-container mt-5 p-5 container-fluid"
      // className="movie-details-container mt-sm-5 px-sm-5 pb-5"
      className="movie-details-container  px-sm-5 pb-5"
    >
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Movie Details
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12  text-center border border-red">
                    <p className="h1 my-3 movie-detail__title">
                      {/* {movie.title}{" "} */}
                      {/* {localMovie.title}{" "} */}
                      {title}{" "}
                    </p>
                  </div>
                </div>
                {/* <p className="h1">Title: {title} </p> */}
              </div>

              {/* <BasicDetails combinedFetch={combinedFetch} movie={movie} /> */}
              {/* <BasicDetails combinedFetch={storageValue} movie={localMovie} /> */}
              <BasicDetails combinedFetch={storageValue} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Media (Images and Videos)
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            {images}

            {// combinedFetch &&
            // combinedFetch.videos &&
            storageValue?.videos?.results && (
              <div className="container">
                <p className="trailer-available">Available Trailers:</p>{" "}
              </div>
            )}
            {trailers}
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Credits: The Cast....
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              {storageValue && Object.keys(storageValue).length === 0 && (
                <h1>No Actors Found</h1>
              )}
              {storageValue.Actors === "N/A" && <h1>No Actors Found</h1>}
              {storageValue && storageValue.credits && (
                // {combinedFetch && combinedFetch.credits && combinedFetch.credits.cast && (
                <div className="container mt-4">
                  <Credits
                    cast={storageValue.credits.cast}
                    actors={storageValue.Actors}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
