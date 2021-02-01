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
    initialHeight: number;
    children: any;
}

const Collapsible: React.FC<Props> = ({ label, initialHeight, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const parentRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(!isOpen);

        parentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        if (parentRef.current) {
            const containerHeight = parentRef.current.scrollHeight;
            if (containerHeight > initialHeight) {
                setShowButton(true);
            }
        }
    }, []);

    return (
        <div className="collapsible">
            <SContent
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
            </SContent>
            {/* <$Button onClick={() => setIsOpen(!isOpen)} showButton={showButton}> */}
            <SButton onClick={handleClick} showButton={showButton}>
                {label}
            </SButton>
            {/* {children} */}
        </div>
    );
};

export default Collapsible;
