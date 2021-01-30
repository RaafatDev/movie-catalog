import React from "react";
import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";

import { QUERY_MOVIE_DETAIL } from "../graphql/queries";
import { useQuery } from "@apollo/client";

import Collapsible from "./Collapsible";

import TestImageGalleryTest from "./TestImageGalleryTest";
import CollapsibleGallery from "./CollapsibleGallery";

// import * as theme from "../styled-components/theme";

import { Layout, BasicDetails, Credits, MovieVideos } from "../components";
// import ImageGallery from "./ImageGallery";
import { size, screen_smaller_than } from "../styled-components/mediaQueries";
import { getImagePath } from "../util/helperFunctions";

const $title = styled.div`
    padding: 1rem 0.7rem;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1;

    @media ${screen_smaller_than.sm} {
        /* background-color: red; */
        font-size: 2.25rem;
    }

    /* @media ${screen_smaller_than.xs} {
    } */

    @media ${screen_smaller_than.xxs} {
        /* background-color: green; */
        /* font-size: 1rem; */
        font-size: 1.5rem;
    }
`;

const $msgWrapper = styled.div`
    height: 100px;
    width: 100%;
    background-color: #343a40;
    color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 125%;
    }
`;

interface IBackgroundContainer {
    imageSrc: string;
}

const $backgroundContainer = styled.div<IBackgroundContainer>`
    background: url(${(props) => props.imageSrc});
    background-size: cover;
    background-attachment: fixed;
`;

const $Container = styled.div`
    color: ${(props) => props.theme.primaryLightTextColor};
    width: 80%;
    margin: auto;
    background-color: ${(props) => props.theme.primaryColor};

    @media ${screen_smaller_than.sm} {
        width: 90%;
    }
    @media ${screen_smaller_than.xs} {
        width: 100%;
    }
`;

const $Section = styled.section`
    min-height: 90vh;
    width: 100%;

    h4 {
        padding: 50px 10px 0px 10px;
    }
`;
const $VideoContainer = styled.div`
    margin: 60px 0;
    @media (min-width: ${size.md}) {
        margin: 50px;
    }
`;
const $CreditsContainer = styled.div``;

interface Props extends RouteComponentProps<{ id: string; kind: string; title: string }> {}

const MovieDetails: React.FC<Props> = ({ match }) => {
    //
    const { id, kind, title } = match.params;
    const isMovie = kind === "film" ? true : false;

    const { loading, error, data } = useQuery(QUERY_MOVIE_DETAIL, {
        variables: { id: id, isMovie: isMovie },
    });

    if (loading) return <div style={{ color: "white", fontSize: "50px" }}>Loading ... </div>;

    if (error) return <div>Error, something went wrong!</div>;

    const movieDetails = {
        ...data.movieDetail.OMDB_MovieDetail,
        ...data.movieDetail.TMDB_MovieDetail,
    };

    if (loading) return <h1>Loading ... </h1>;
    if (error) return <h1>Error: it seems like something went wrong, please try again later </h1>;

    const notAvailableMessage = (sectionName: string) => {
        return (
            <$msgWrapper>
                <p>
                    No related <strong>{sectionName}</strong> were found {":("}
                </p>
            </$msgWrapper>
        );
    };

    const trailers =
        movieDetails?.videos?.length > 0 &&
        movieDetails.videos?.map((video: any, index: number) => <MovieVideos video={video} key={index} index={index} />);

    // const backgroundContainerImage = movieDetails.poster_path !== "no_image" ? movieDetails.poster_path : movieDetails.backdrop_path;

    // const getImagePath = (firstOption: string, secondOption: string) => {
    //     return firstOption !== "no_image"
    //         ? firstOption
    //         : // ######
    //         secondOption !== "no_image"
    //         ? secondOption
    //         : `${process.env.PUBLIC_URL}/img/no_image.png`;
    // };

    // const backgroundContainerImage = getImagePath(movieDetails.poster_path, movieDetails.backdrop_path);
    const backgroundContainerImage = getImagePath(movieDetails.backdrop_path, movieDetails.poster_path);

    return (
        <Layout>
            <$backgroundContainer imageSrc={backgroundContainerImage}>
                <$Container>
                    <$title>{title.split("-").join(" ")} </$title>

                    <$Section>{<BasicDetails combinedFetch={movieDetails} />}</$Section>

                    {/* $$$$$$$$$$$$$4 */}
                    {/* $$$$$$$$$$$$$4 */}
                    {/* $$$$$$$$$$$$$4 */}

                    <$Section>
                        <h4>The Media: Images and Videos</h4>

                        {movieDetails?.images?.backdrops.length > 0 ? (
                            <CollapsibleGallery label="View All Image">
                                <TestImageGalleryTest images={movieDetails.images} />
                            </CollapsibleGallery>
                        ) : (
                            notAvailableMessage("Images")
                        )}

                        {movieDetails?.videos?.length > 0 ? (
                            <$VideoContainer>
                                <Collapsible label="see more" initialHeight={150}>
                                    {trailers}
                                </Collapsible>
                            </$VideoContainer>
                        ) : (
                            notAvailableMessage("Videos")
                        )}
                    </$Section>
                    <$Section>
                        <h4>Credits: The Cast</h4>
                        <$CreditsContainer>
                            {movieDetails && Object.keys(movieDetails).length === 0 && <h1>No Actors Found</h1>}
                            {movieDetails.Actors === "N/A" && <p>unfortunately, we couldn't find information related to the Actors {`:(`} </p>}
                            {/* ############## */}
                            {/* ############## */}
                            {movieDetails?.credits?.length > 0 ? (
                                <Collapsible label="see more" initialHeight={300}>
                                    <Credits
                                        // cast={movieDetails.credits.cast}
                                        cast={movieDetails.credits}
                                        actors={movieDetails.Actors}
                                    />
                                </Collapsible>
                            ) : (
                                notAvailableMessage("Cast information")
                            )}
                        </$CreditsContainer>
                    </$Section>
                </$Container>
            </$backgroundContainer>
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

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12  text-center border border-red">
                                            <p className="h1 my-3 movie-detail__title">{title.split("-").join(" ")} </p>
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
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            {/* {images} */}

                            {movieDetails?.videos?.results?.length > 0 && (
                                <div className="container">
                                    <p className="trailer-available">Available Trailers:</p>{" "}
                                </div>
                            )}
                            {/* {trailers} */}
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
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                {movieDetails && Object.keys(movieDetails).length === 0 && <h1>No Actors Found</h1>}
                                {movieDetails.Actors === "N/A" && <p>unfortunately, we couldn't find information related to the Actors {`:(`} </p>}
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
