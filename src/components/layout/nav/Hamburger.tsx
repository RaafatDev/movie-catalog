import * as React from "react";
import styled, { css } from "styled-components";
// import style from "./Hamburger.module.scss";
import { screen_bigger_than, screen_smaller_than } from "../../../styled-components/mediaQueries";

interface IHamburger {
    isOpen: boolean;
}

const SHamburger = styled.div<IHamburger>`
    cursor: pointer;

    > span {
        display: block;
        height: 5px;
        /* height: 3px; */
        width: 26px;
        /* background-color: ${(props) => props.theme.darkBlue}; */
        background-color: white;
        transition: all 300ms ease-in-out;
        transform-origin: 2px 2px;
        cursor: pointer;

        &:not(:last-child) {
            margin-bottom: 3px;
        }
    }

    // animate the span when close or open
    ${({ isOpen }) =>
        isOpen &&
        css`
            > span:first-child {
                transform: rotate(45deg);
            }

            > span:nth-child(2) {
                opacity: 0;
            }

            > span:last-child {
                transform: rotate(-45deg);
            }
        `}

    @media ${screen_bigger_than.md} {
        display: none;
    }

    /* background-color: white; */
`;

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hamburger = ({ isOpen, setIsOpen }: Props) => {
    return (
        <SHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
        </SHamburger>
    );
};
