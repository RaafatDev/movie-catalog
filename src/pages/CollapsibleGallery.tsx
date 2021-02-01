import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// import "./styles.css";
// https://www.youtube.com/watch?v=4F8EYGao9pc
//
// interface StyledButtonProps {
//   fullHeight: any;
// }
interface IButtonProps {
    showButton: boolean;
}

const SButton = styled.div<IButtonProps>`
    display: ${({ showButton }) => (showButton ? "block" : "none")};

    background: ${(props) => props.theme.accentColor};
    border: none;
    cursor: pointer;
    font: unset;
    padding: 0.5rem;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 0.5rem;

    text-align: center;
    font-weight: 700;
    /* color: red; */
`;

interface IContentProps {
    initialHeight: number;
    isOpen: any;
    fullHeight: any;
}

/* ${({ isOpen }) =>
    isOpen &&
    css`
      height: 200px;
    `} */

const SContent = styled.div<IContentProps>`
    overflow: hidden;
    transition: height ease 0.3s;

    height: ${({ isOpen, fullHeight, initialHeight }) => (isOpen ? `${fullHeight.current.scrollHeight}px` : initialHeight + "px")};

    .content {
        border: 1px solid #afafaf;
        padding: 0.5rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
`;

interface Props {
    label: string;
    initialRowsDisplayed: number;
    children: React.ReactNode;
}

const Collapsible: React.FC<Props> = ({ label, children, initialRowsDisplayed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [initialHeight, setInitialHeight] = useState(110);

    const parentRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        console.log("clicked1!!!!");
        setIsOpen(!isOpen);

        parentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    let fnCalledCounter = 0; // functioned called-count for => ( onLoad && onError combined )
    const handleImageLoad = () => {
        const imageList = parentRef.current?.querySelectorAll("img");

        fnCalledCounter += 1;
        if (fnCalledCounter === imageList?.length) {
            //
            if (imageList && imageList?.length > 1) {
                //
                const rows = new Set(); // number of the unique values represents the row-number

                for (let i = 0; i < imageList.length; i++) {
                    const image = imageList[i];
                    // const imageLeft = image.getBoundingClientRect().left;
                    const imageTop = image.getBoundingClientRect().top;
                    rows.add(imageTop);
                }

                if (rows.size > 2) {
                    const containerHeight = parentRef.current?.scrollHeight;
                    const rowHeight = containerHeight && containerHeight / rows.size;

                    const initialHeight = rowHeight && rowHeight * initialRowsDisplayed;

                    initialHeight && setInitialHeight(initialHeight);
                    setShowButton(true);
                } else {
                    // rows.size =< 2
                    setShowButton(false);
                    setIsOpen(true);
                }
            } else {
                // imageList === 1 || imageList < 1
                setShowButton(false);
                setIsOpen(true);
                // to see how the collapsible is performing for the gallery with one image
                // test with the movie name: >> Jeena Isi Ka Naam Hai
            }
        }
    };
    return (
        <div className="collapsible">
            <SContent
                initialHeight={initialHeight}
                ref={parentRef}
                // fullHeight={parentRef.current?.scrollHeight}
                fullHeight={parentRef}
                isOpen={isOpen}
                // style={
                //   isOpen
                //     ? { height: parentRef.current.scrollHeight + "px" }
                //     : { height: "0px" }
                // }
            >
                {/* <div className="content">{children}</div> */}
                <div className="content">
                    {React.Children.map(children, (child: any, i: any) => {
                        //
                        return React.cloneElement(child, { handleImageLoad });
                    })}
                </div>
            </SContent>

            <SButton onClick={handleClick} showButton={showButton}>
                {label}
            </SButton>
        </div>
    );
};

export default Collapsible;
