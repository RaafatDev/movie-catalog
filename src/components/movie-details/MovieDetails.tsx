import React, { useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useURL } from "../../hooks/useURL";
import useCombineFetch from "../../hooks/useCombineFetch";
import useFetchOrSession from "../../hooks/useFetchOrSession";
import Credits from "./Credits";
import ImagesSlide from "./ImagesSlide";
import MovieVideos from "./MovieVideos";
import BasicDetails from "./BasicDetails";
import useLocalStorage from "../../hooks/useLocalStorage";
import useSessionStorage from "../../hooks/useSessionStorage";

interface Props
  extends RouteComponentProps<{ id: string; kind: string; title: string }> {}

const MovieDetails: React.FC<Props> = ({ match }) => {
  //
  const { id, kind, title } = match.params;

  const sessionStorageName: string = "movie-details22";

  const { url } = useURL(kind, id);

  // const [combinedFetch] = useCombineFetch(url);
  // const [combinedFetch2] = useCombineFetch2(url, localStorageCustomName);
  // const [storageValue, isLoading, error] = useCombineFetch2(
  const [movieDetails, isLoading, error] = useFetchOrSession(
    url,
    sessionStorageName
  );

  useEffect(() => {
    return () => {
      // todo: removie the sessionStorageName after the refactoring and restructuring the code
      // sessionStorage.removeItem(sessionStorageName);
    };
  }, []);
  // console.log("movieDetails", movieDetails);

  let trailers: any;
  let images: any;
  if (movieDetails) {
    if (!movieDetails?.videos || movieDetails?.videos?.results.length === 0) {
      // trailers = <h3>No Videos Found! </h3>;
      trailers = (
        <div className="container">
          <p className="trailer-available"> No Related Videos Found! </p>{" "}
        </div>
      );
    } else {
      trailers = movieDetails.videos.results.map(
        (video: any, index: number) => (
          <MovieVideos video={video} key={index} index={index} />
        )
      );
    }

    if (!movieDetails?.images || !movieDetails?.images?.backdrops) {
      images = <h3>No Images Found </h3>;
    } else {
      images = <ImagesSlide images={movieDetails.images} />;
    }
  }

  return (
    <div className="movie-details-container  px-sm-5 pb-5">
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
                      {title.split("-").join(" ")}{" "}
                    </p>
                  </div>
                </div>
              </div>

              {isLoading && <h1>Loading ............</h1>}
              {error && (
                <h3>
                  {`:(`} <br /> it seems like something went wrong!{" "}
                </h3>
              )}
              {!isLoading && <BasicDetails combinedFetch={movieDetails} />}
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

            {movieDetails?.videos?.results.length > 0 && (
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
              {movieDetails && Object.keys(movieDetails).length === 0 && (
                <h1>No Actors Found</h1>
              )}
              {movieDetails.Actors === "N/A" && (
                <p>
                  unfortunately, we couldn't find information related to the
                  Actors {`:(`}{" "}
                </p>
              )}
              {movieDetails && movieDetails.credits && (
                <div className="container mt-4">
                  <Credits
                    cast={movieDetails.credits.cast}
                    actors={movieDetails.Actors}
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
