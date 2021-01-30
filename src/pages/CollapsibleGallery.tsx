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

const $Button = styled.div<IButtonProps>`
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

const $Content = styled.div<IContentProps>`
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
    label: any;
    children: React.ReactNode;
}

const Collapsible: React.FC<Props> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(true);
    // const [heightUint, setHeightUnit] = useState(0)

    const [showButton, setShowButton] = useState(false);
    // const [showButton, setShowButton] = useState(true);
    const [initialHeight, setInitialHeight] = useState(110);
    // const [initialHeight2, setInitialHeight2] = useState({ containerHeight: 0, childImage: 0, counter: 0 });

    const parentRef = useRef<HTMLDivElement>(null);
    // const imageContainerRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(!isOpen);

        parentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    let counter = 0;
    const handleImageLoad = () => {
        counter += 1;
        // console.log("the counter: ", counter);
        const imageList = parentRef.current?.querySelectorAll("img");

        if (counter === imageList?.length) {
            const galleryContainerHeight = imageList[0].parentElement?.parentElement?.scrollHeight;

            const imageWrapperHeight = imageList[0]?.parentElement?.scrollHeight;

            const rows = galleryContainerHeight && imageWrapperHeight && Math.round(galleryContainerHeight / imageWrapperHeight);
            // const rows = galleryContainerHeight && imageWrapperHeight && galleryContainerHeight / imageWrapperHeight;

            console.log("the rows new: ", typeof rows);
            // console.log("the rows new: ",);

            if (rows && rows <= 2) {
                setShowButton(false);
                setIsOpen(true);

                // galleryContainerHeight && setInitialHeight(galleryContainerHeight);
            }
            if (rows && rows > 2) {
                const ini_height = imageWrapperHeight && imageWrapperHeight * 1.5;

                ini_height && setInitialHeight(ini_height);
                setShowButton(true);
            }
        }
    };
    return (
        <div className="collapsible">
            <$Content
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
                        // return React.cloneElement(child, { color: "red" });
                        // return React.cloneElement(child, { setInitialHeight2: setInitialHeight2 });
                        // return React.cloneElement(child, { setInitialHeight2, initialHeight2, imageContainerRef, handleImageLoad });
                        return React.cloneElement(child, { handleImageLoad });
                    })}
                </div>
            </$Content>

            <$Button onClick={handleClick} showButton={showButton}>
                {label}
            </$Button>
        </div>
    );
};

export default Collapsible;
