import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useURL } from "../hooks/useURL";
import useCombineFetch from "../hooks/useCombineFetch";
import Credits from "../components/Credits";
// import MovieImages from "../components/MovieVideos";
import ImagesSlide from "../components/ImagesSlide";
import MovieVideos from "../components/MovieVideos";

interface Props extends RouteComponentProps<{ id: string }> {}

// const MovieDetails: React.FC<Props> = props => {
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
    <div className="m-5 p-5 border">
      {/* <p className="display-4  lead">Title: {title} </p> */}
      <div className="container">
        {/* <p className="h1">Title: {title} </p> */}
        <p className="h1">{title} </p>
      </div>
      {/* <BasicInfo /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <img className="" width="400px" src={poster_path} alt={title} /> */}
            <img className="" width="400px" src={poster_path} alt={title} />
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
      </div>
      {combinedFetch && combinedFetch.credits && (
        // {combinedFetch && combinedFetch.credits && combinedFetch.credits.cast && (
        <div className="container mt-4">
          <Credits
            cast={combinedFetch.credits.cast}
            actors={combinedFetch.Actors}
          />
        </div>
      )}

      {combinedFetch && combinedFetch.images && (
        <div>
          {/* <MovieImages images={combinedFetch.images} /> */}
          <ImagesSlide images={combinedFetch.images} />
        </div>
      )}
      {/* {combinedFetch &&
        combinedFetch.videos &&
        combinedFetch.videos.results.map((video, index) => (
          // <MovieVideos video={video} key={video.name} index={index} />
          <MovieVideos video={video} key={index} index={index} />
        ))} */}

      {/* {combinedFetch && combinedFetch.videos && (
        <div>
          <MovieVideos videos={combinedFetch.videos.results} />
        </div>
      )} */}
    </div>
  );
};

export default MovieDetails;
