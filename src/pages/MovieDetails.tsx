import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useURL } from "../hooks/useURL";
import useCombineFetch from "../hooks/useCombineFetch";
import Credits from "../components/Credits";
// import MovieImages from "../components/MovieVideos";
import ImagesSlide from "../components/ImagesSlide";
import MovieVideos from "../components/MovieVideos";

interface Props extends RouteComponentProps<{ id: string }> {}

const MovieDetails: React.FC<Props> = props => {
  const id = props.match.params.id;
  const history = useHistory<any>();

  const {
    isMovie,
    title,
    release_date,
    id: movieId,
    poster_path,
    // backdrop_path,
    overview,
    Genres
  } = JSON.parse(history.location.state.movie);

  const { url } = useURL(isMovie, movieId);

  const [combinedFetch] = useCombineFetch(url);

  console.log({ combinedFetch });

  return (
    <div className="mt-5 p-5 border container-fluid">
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
              <div className="container">
                {/* <p className="h1">Title: {title} </p> */}
                <p className="h1">{title} </p>
              </div>
              {/* <BasicInfo /> */}
              <div className="container">
                <div className="row">
                  <div className="col">
                    {/* <img className="" width="400px" src={poster_path} alt={title} /> */}
                    <img
                      className=""
                      width="400px"
                      src={poster_path}
                      alt={title}
                    />
                    {/* <img className="" width="400px" src={backdrop_path} alt={title} /> */}
                  </div>
                  <div className="col">
                    <p>Release Date: {release_date} </p>
                    <p>Genres: {Genres}</p>
                    {/* <p>id: {id}</p> */}
                    <p>{combinedFetch.budget} </p>
                    <p>Overview: {overview} </p>
                  </div>
                </div>
              </div>{" "}
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
            {/* <div className="card-body"> */}
            {combinedFetch && combinedFetch.images && (
              <div>
                {/* <MovieImages images={combinedFetch.images} /> */}
                <ImagesSlide images={combinedFetch.images} />
              </div>
            )}

            {combinedFetch &&
            combinedFetch.videos &&
            !combinedFetch.videos.results ? (
              <h3>there is no Trailers to show </h3>
            ) : (
              <>
                {/* {

                combinedFetch.videos.results.length > 0 ? 
                <p className="h3 mt-4">Trailers available: </p> : <h
              } */}
                {combinedFetch &&
                  combinedFetch.videos &&
                  combinedFetch.videos.results.map((video, index) => (
                    <MovieVideos video={video} key={index} index={index} />
                    // <MovieVideos video={video} key={video.key} />
                  ))}
              </>
            )}
            {/* </div> */}
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
