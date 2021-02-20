import React from "react";
import styled from "styled-components";

const SCastContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
`;

const SCastMemberWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: stretch;

    border: 1px solid #dee2e6;
    max-width: 180px;

    @media only screen and (max-width: 400px) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: 250px) {
        flex-basis: 100%;
    }

    .cast {
        text-align: center;

        .cast__img-container {
            img {
                width: 100%;
                height: 200px;
            }
        }

        .cast__name {
            font-size: 1rem;
            font-weight: 300;
        }
    }
`;

interface ICast {
    character: string;
    name: string;
    profile_path: string;
}
interface Props {
    cast: ICast[];
    actors: string;
    handleImageLoad?: any;
}

const Credits: React.FC<Props> = ({ cast, actors, handleImageLoad }) => {
    return (
        <SCastContainer>
            {cast.map((member: ICast, index: number) => {
                const imgSrc = member.profile_path
                    ? // ? `https://image.tmdb.org/t/p/original${member.profile_path}`
                      // `https://image.tmdb.org/t/p/w92/${member.profile_path}`
                      `https://image.tmdb.org/t/p/w185/${member.profile_path}`
                    : `${process.env.PUBLIC_URL}/img/no_image.png`;
                return (
                    <SCastMemberWrapper key={index}>
                        <div className="cast">
                            <div className="cast__img-container">
                                <img onLoad={handleImageLoad} onError={handleImageLoad} src={imgSrc} alt={member.name} />
                            </div>
                            <div className="cast__character">
                                <span className="cast__name">{member.name} </span>
                                <br />
                                <span>{member.character} </span>
                            </div>
                        </div>
                    </SCastMemberWrapper>
                );
            })}
        </SCastContainer>
    );
};

export default Credits;
