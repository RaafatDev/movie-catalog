import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { screen_smaller_than } from "../styled-components/mediaQueries";
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

    /* @media ${screen_smaller_than.xs} {
        margin-left: calc(0.5rem + 5px);
        margin-right: calc(0.5rem + 5px);
    } */

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
    label: string;
    initialHeight: number;
    children: any;
}

const Collapsible: React.FC<Props> = ({ label, initialHeight, children }) => {
    const INITIAL_HEIGHT = 150;

    const [isOpen, setIsOpen] = useState(false);
    // const [heightUint, setHeightUnit] = useState(0)

    const [showButton, setShowButton] = useState(false);
    // const [showButton, setShowButton] = useState(true);
    // const [initialHeight, setInitialHeight] = useState(INITIAL_HEIGHT);

    const parentRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(!isOpen);

        parentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        if (parentRef.current) {
            const containerHeight = parentRef.current.scrollHeight;
            if (containerHeight > INITIAL_HEIGHT) {
                // to see how the collapsible is performing for the cast
                // test with the movie name: >> Jeena Isi Ka Naam Hai
                setShowButton(true);
            }
        }
    }, []);

    return (
        <div className="collapsible">
            <$Content
                initialHeight={initialHeight}
                ref={parentRef}
                fullHeight={parentRef}
                isOpen={isOpen}
                // style={
                //   isOpen
                //     ? { height: parentRef.current.scrollHeight + "px" }
                //     : { height: "0px" }
                // }
            >
                <div className="content">{children}</div>
            </$Content>
            {/* <$Button onClick={() => setIsOpen(!isOpen)} showButton={showButton}> */}
            <$Button onClick={handleClick} showButton={showButton}>
                {label}
            </$Button>
            {/* {children} */}
        </div>
    );
};

export default Collapsible;
