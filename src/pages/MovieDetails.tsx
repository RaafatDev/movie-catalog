import React from "react";
import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";

import { QUERY_MOVIE_DETAIL } from "../graphql/queries";
import { useQuery } from "@apollo/client";

import Collapsible from "./Collapsible";

import { Layout, BasicDetails, Credits, MovieVideos } from "../components";
import ImageGallery from "./ImageGallery";

const StyledContainer = styled.div`
  color: white;
  width: 80%;
  margin: auto;
`;

const StyledSection = styled.section`
  min-height: 90vh;
  width: 100%;
  border: 1px solid red;

  h4 {
    padding: 50px 10px 0px 10px;
    /* madding-top: 10px; */
  }
`;

interface Props
  extends RouteComponentProps<{ id: string; kind: string; title: string }> {}

const MovieDetails: React.FC<Props> = ({ match }) => {
  //
  const { id, kind, title } = match.params;
  const isMovie = kind === "film" ? true : false;

  const { loading, error, data } = useQuery(QUERY_MOVIE_DETAIL, {
    variables: { id: id, isMovie: isMovie },
  });

  if (loading)
    return <div style={{ color: "white", fontSize: "50px" }}>Loading ... </div>;

  if (error) return <div>Error, something went wrong!</div>;

  const movieDetails = {
    ...data.movieDetail.OMDB_MovieDetail,
    ...data.movieDetail.TMDB_MovieDetail,
  };

  let trailers: any;
  let images: any;
  if (!movieDetails?.videos || movieDetails?.videos?.length === 0) {
    // trailers = <h3>No Videos Found! </h3>;
    trailers = (
      <div className="container">
        <p className="trailer-available"> No Related Videos Found! </p>{" "}
      </div>
    );
  } else {
    trailers = movieDetails.videos?.map((video: any, index: number) => (
      <MovieVideos video={video} key={index} index={index} />
    ));
  }

  if (!movieDetails?.images || !movieDetails?.images?.backdrops) {
    images = <h3>No Images Found </h3>;
  } else {
    images = <ImageGallery images={movieDetails.images} />;
    // images = <ImagesSlide images={movieDetails.images} />;
  }

  if (loading) return <h1>Loading ... </h1>;
  if (error)
    return (
      <h1>
        Error: it seems like something went wrong, please try again later{" "}
      </h1>
    );
  return (
    <Layout>
      <StyledContainer>
        <p>Basic Details</p>
        <h2>{title.split("-").join(" ")} </h2>

        {/* <StyledSection>
          {<BasicDetails combinedFetch={movieDetails} />}
        </StyledSection> */}
        <StyledSection>
          <h4>The Media: Images and Videos</h4>
          <Collapsible label="View All Image">
            {/*  */}
            {images}
          </Collapsible>
          {movieDetails?.videos?.results?.length > 0 && (
            <div className="container">
              <p className="trailer-available">Available Trailers:</p>{" "}
            </div>
          )}
          {trailers}
        </StyledSection>
      </StyledContainer>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
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

                {loading && <h1>Loading ............</h1>}
                {error && (
                  <h3>
                    {`:(`} <br /> it seems like something went wrong!{" "}
                  </h3>
                )}
                {!loading && <BasicDetails combinedFetch={movieDetails} />}
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

              {movieDetails?.videos?.results?.length > 0 && (
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
                      // cast={movieDetails.credits.cast}
                      cast={movieDetails.credits}
                      actors={movieDetails.Actors}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
