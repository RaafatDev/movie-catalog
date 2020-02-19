import React, { Suspense } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useURL } from "../../hooks/useURL";
import useCombineFetch from "../../hooks/useCombineFetch";
import Credits from "./Credits";
import ImagesSlide from "./ImagesSlide";
import MovieVideos from "./MovieVideos";
import BasicDetails from "./BasicDetails";

interface Props extends RouteComponentProps<{ id: string }> {}

const MovieDetails: React.FC<Props> = () => {
  // const id = props.match.params.id;
  const history = useHistory<any>();

  const movie = JSON.parse(history.location.state.movie);

  const { url } = useURL(movie.isMovie, movie.id);

  const [combinedFetch] = useCombineFetch(url);

  console.log({ combinedFetch });

  // let trailers: Element;
  let trailers: any;
  let images: any;
  if (combinedFetch) {
    if (!combinedFetch?.videos || combinedFetch?.videos?.results.length === 0) {
      trailers = <h3>No Videos Found! </h3>;
    } else {
      trailers = combinedFetch.videos.results.map((video, index) => (
        <MovieVideos video={video} key={index} index={index} />
      ));
    }

    if (!combinedFetch?.images || !combinedFetch?.images?.backdrops) {
      images = <h3>No Images Found </h3>;
    } else {
      images = <ImagesSlide images={combinedFetch.images} />;
    }
  }

  return (
    <div className="movie-details-container mt-5 p-5 container-fluid">
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
                    <p className="h1 my-3">{movie.title} </p>
                  </div>
                </div>
                {/* <p className="h1">Title: {title} </p> */}
              </div>

              <BasicDetails combinedFetch={combinedFetch} movie={movie} />
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
              {combinedFetch && combinedFetch.Actors === "N/A" && (
                <h1>Noooooo Actors</h1>
              )}
              {combinedFetch && combinedFetch.credits && (
                // {combinedFetch && combinedFetch.credits && combinedFetch.credits.cast && (
                <div className="container mt-4">
                  <Credits
                    cast={combinedFetch.credits.cast}
                    actors={combinedFetch.Actors}
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
