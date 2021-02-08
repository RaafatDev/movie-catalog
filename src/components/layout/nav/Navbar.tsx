import React from "react";
import { Hamburger } from "./Hamburger";
import styled, { css } from "styled-components";
import { Links } from "./Links";

import { screen_smaller_than } from "../../../styled-components/mediaQueries";

const SLogo = styled.div`
    background-color: red;
    width: 8.8125rem;
    height: 1.375rem;
`;

const SButton = styled.button`
    padding: 0.875rem 2.1875rem;
    /* background: linear-gradient(to right, $limeGreen, $brightCyan); */
    background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    border: none;

    /* color: $white; */
    color: white;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 700;
    outline: none;

    transition: opacity 300ms ease-in-out;

    &:hover {
        opacity: 0.75;
    }

    @media ${screen_smaller_than.md} {
        display: none;
    }
    /*     
    @include breakpoint-down(medium) {
        display: none;
    } */
`;

const SNav = styled.nav`
    display: flex;
    position: relative;
    /* background-color: $white; */
    background-color: #343a40;
    /* background-color: green; */
    align-items: center;
    justify-content: space-between;
    padding: 1.065rem 1.5rem;
    /* padding: $container-padding; */
`;

interface IMobileNav {
    isOpen: boolean;
}
const SMobileNav = styled.div<IMobileNav>`
    /* background-color: $white; */
    background-color: white;

    position: absolute;
    z-index: 10;
    /* width: calc(100% - calc(#{$container-x-axis} * 2)); */
    width: calc(100% - calc(1.5rem * 2));
    left: 50%;
    transform: translate(-50%);

    margin-top: 1.5rem;
    padding: 1.625rem;

    border-radius: 5px;
    animation: fade-in 300ms ease-in-out forwards;

    ul {
        list-style-type: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
    li {
        list-style: none;
        text-decoration: none;
    }
    a {
        display: block;

        padding: 0.625rem;
        text-align: center;
        /* color: $darkBlue; */
        color: red;
    }

    ${({ isOpen }) => !isOpen && "display: none"}
`;

const SLinks = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        margin: 0;
    }

    li {
        list-style: none;
        text-decoration: none;
        /* font-size: $font-sm; */
        font-size: 0.875rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }

        a {
            /* color: $grayishBlue; */
            color: hsl(233, 8%, 62%);
            transition: color 300ms ease-in-out;
        }

        &:hover a {
            /* color: $darkBlue; */
            color: blue;
        }

        position: relative;
        &::after {
            content: "";
            display: block;
            position: absolute;

            /* background: linear-gradient(to right, $limeGreen, $brightCyan); */
            background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));

            height: 5px;
            right: 0;
            left: 0;
            bottom: -30px;

            opacity: 0;
            transition: 300ms ease-in-out;
        }

        &:hover {
            &::after {
                opacity: 1;
            }
        }
    }

    @media ${screen_smaller_than.md} {
        display: none;
    }
`;

interface IOverlay {
    isOpen: boolean;
}
const SOverLay = styled.div<IOverlay>`
    ${({ isOpen }) => isOpen && css``}
    position: fixed;
    /* z-index: 10; */

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* background-color: red; */
    background-image: linear-gradient(hsl(233, 26%, 24%), transparent);
    /* background-image: linear-gradient(white, transparent); */

    animation: fade-in 300ms ease-in-out forwards;
`;

const SHeader = styled.header`
    /* .header { */
    // general styles
    font-size: 1.125rem;
    a,
    a:visited,
    a:hover {
        text-decoration: none;
    }

    // end general styles

    /* &__mobile_nav_hidden {
        display: none;
    } */
    /* } */

    // Visibility
    /* .hide_for_mobile {
        // hide for tablet and mobile devices
        @include breakpoint-down(medium) {
            display: none;
        }
    } */

    /* .hide_for_desktop {
        // hide for desktop viewport widths
        @include breakpoint-up(large) {
            display: none;
        }
    } */
`;

interface Props {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const MOBILE_NAV = "mobile-nav";

    // const mobileNavClasses = isOpen ? style.header__mobile_nav : style.header__mobile_nav_hidden;

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isOpen]);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const navItemClicked = (e.target as HTMLElement).parentElement?.parentElement?.classList.contains(MOBILE_NAV);

        if (navItemClicked) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <SHeader>
            {isOpen && <SOverLay isOpen={isOpen}></SOverLay>}
            <SNav>
                <SLogo>Logo </SLogo>

                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

                <SLinks>{<Links styleClass={undefined} />}</SLinks>

                <SButton>Call to Action</SButton>
            </SNav>

            <SMobileNav isOpen={isOpen} onClick={handleClick}>
                {/* <div className={mobileNavClasses} onClick={handleClick}> */}
                {<Links styleClass={MOBILE_NAV} />}
            </SMobileNav>
        </SHeader>
    );
};

export default Navbar;
