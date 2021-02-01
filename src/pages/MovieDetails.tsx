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

const STitle = styled.div`
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

const SMsgWrapper = styled.div`
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

const SBackgroundContainer = styled.div<IBackgroundContainer>`
    background: url(${(props) => props.imageSrc});
    background-size: cover;
    background-attachment: fixed;
    /* padding-bottom: 70px; */
`;

const SContainer = styled.div`
    color: ${(props) => props.theme.primaryLightTextColor};
    width: 80%;
    margin: auto;
    background-color: ${(props) => props.theme.primaryColor};
    /* padding-bottom: 300px; */

    @media ${screen_smaller_than.sm} {
        width: 90%;
    }
    @media ${screen_smaller_than.xs} {
        width: 100%;
    }
`;

const SSection = styled.section`
    /* min-height: 90vh; */
    /* min-height: 80vh; */
    min-height: 70vh;
    width: 100%;

    h4 {
        padding: 50px 10px 0px 10px;
    }
`;
const SVideoContainer = styled.div`
    margin: 60px 0;
    @media (min-width: ${size.md}) {
        margin: 50px;
    }
`;
const SCreditsContainer = styled.div``;

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

    movieDetails.Actors = "N/A";
    // const movieDetails = [];
    if (loading) return <h1>Loading ... </h1>;
    if (error) return <h1>Error: it seems like something went wrong, please try again later </h1>;

    const notAvailableMessage = (sectionName: string) => {
        return (
            <SMsgWrapper>
                <p>
                    No related <strong>{sectionName}</strong> were found {":("}
                </p>
            </SMsgWrapper>
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

    console.log("the movieDetails: ", movieDetails);
    return (
        <Layout>
            <SBackgroundContainer imageSrc={backgroundContainerImage}>
                <SContainer>
                    <STitle>{title.split("-").join(" ")} </STitle>

                    <SSection>
                        <BasicDetails combinedFetch={movieDetails} />
                    </SSection>

                    <SSection>
                        <h4>The Media: Images and Videos</h4>
                        {movieDetails?.images?.backdrops.length > 0 ? (
                            <CollapsibleGallery label="View All Image" initialRowsDisplayed={1.5}>
                                <TestImageGalleryTest images={movieDetails.images} />
                            </CollapsibleGallery>
                        ) : (
                            notAvailableMessage("Images")
                        )}

                        {movieDetails?.videos?.length > 0 ? (
                            <SVideoContainer>
                                <Collapsible label="see more" initialHeight={150}>
                                    {trailers}
                                </Collapsible>
                            </SVideoContainer>
                        ) : (
                            notAvailableMessage("Videos")
                        )}
                    </SSection>
                    <SSection>
                        <h4>Credits: The Cast</h4>
                        {movieDetails?.credits?.length > 0 ? (
                            <SCreditsContainer>
                                <CollapsibleGallery label="View All Cast" initialRowsDisplayed={1.5}>
                                    <Credits
                                        //
                                        cast={movieDetails.credits}
                                        actors={movieDetails.Actors}
                                    />
                                </CollapsibleGallery>
                            </SCreditsContainer>
                        ) : (
                            notAvailableMessage("Cast information")
                        )}
                    </SSection>
                </SContainer>
            </SBackgroundContainer>
        </Layout>
    );
};

export default MovieDetails;
