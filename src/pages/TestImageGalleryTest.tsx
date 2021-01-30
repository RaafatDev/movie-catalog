import React from "react";
import styled from "styled-components";
const basePosterUrl = "https://image.tmdb.org/t/p/";

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    /* align-content: stretch;
   */
    /* padding: 5px; */
`;

const ImageWrapper = styled.div`
    /* min-width: auto; */
    /* width: 320px; */
    /* height: 240px; */

    /* give the items a portion of the container  */
    padding: 5px;
    flex-basis: 100%;

    @media only screen and (min-width: 640px) {
        flex-basis: 50%;
    }

    @media only screen and (min-width: 960px) {
        flex-basis: 33.333%;
    }
    @media only screen and (min-width: 1280px) {
        flex-basis: 25%;
    }
    /* max-width: 300px; */
    /* margin: 5px; */
`;

interface Props {
    images: {
        backdrops: { file_path: string }[];
        posters: { file_path: string }[];
    };

    handleImageLoad?: any;
}

const ImageGallery = ({ images: { backdrops }, handleImageLoad }: Props) => {
    //   console.log({ backdrops });
    // const imageContainerRef2 = React.useRef<HTMLDivElement>(null);
    // let counter = 0;
    // const handleImageChange = () => {
    //     counter += 1;
    //     if (backdrops.length === counter) {
    //         if (imageContainerRef2.current) {
    //             const containerHeight = imageContainerRef2.current?.scrollHeight;
    //             const childImage = (imageContainerRef2.current.childNodes[0] as HTMLElement).scrollHeight;
    //             if (setInitialHeight2) {
    //                 setInitialHeight2({
    //                     containerHeight,
    //                     childImage,
    //                     counter,
    //                 });
    //             }
    //         }
    //         // console.log("the insiiiiiiiiiiiiiiiiiiiiiiiiii: ", initialHeight2);
    //     }
    // };
    return (
        <StyledContainer>
            {/* <StyledContainer ref={imageContainerRef2}> */}
            {/* <StyledContainer ref={imageContainerRef}> */}
            {backdrops.map((image: any, index) => (
                <ImageWrapper key={index}>
                    <img
                        // onClick={openModal}
                        // onLoad={() => handleImageChange(index)}
                        // onLoad={handleImageChange}
                        onLoad={handleImageLoad}
                        onError={handleImageLoad}
                        src={`${basePosterUrl}w1280${image.file_path}`}
                        // src={index === 5 ? `${basePosterUrl}w1280` : `${basePosterUrl}w1280${image.file_path}`}
                        style={{ width: "100%" }}
                    />
                </ImageWrapper>
            ))}
        </StyledContainer>
    );
};

export default ImageGallery;
