import React from "react";
import { Link } from "react-router-dom";
const linksList = [
    {
        // id: 1,
        label: "Home",
        url: "/",
    },
    {
        // id: 2,
        label: "About",
        url: "/about/",
    },
    {
        // id: 3,
        label: "Contact",
        url: "/contact/",
    },
];

const tempLinks = linksList.map((link, index) => {
    return (
        <li key={index}>
            <Link to={link.url}>{link.label}</Link>
        </li>
    );
});

interface Props {
    styleClass: string | undefined;
}

export const Links = ({ styleClass }: Props) => {
    const classes = `page-links ${styleClass ? styleClass : undefined}`;

    return (
        <ul className={classes}>
            {/*  */}
            {tempLinks}
        </ul>
    );
};
