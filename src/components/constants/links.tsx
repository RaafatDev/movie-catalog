// for action movies
// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
// for action and drama
// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28,18

import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About-us",
    url: "/ueber-und/",
  },
  {
    id: 3,
    text: "Leistungen",
    url: "/leistungen/",
  },
  {
    id: 4,
    text: "Schulungen & Seminare",
    url: "/schulungen-seminare/",
  },
  {
    id: 5,
    text: "Kontakt",
    url: "/kontakt/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text} </Link>
    </li>
  );
});

// interface Props {}

interface Props {
  styleClass: string;
}
const Links: React.FC<Props> = ({ styleClass }) => {
  // export default ({ styleClass }) => {
  return (
    <ul className={`pageLinks ${styleClass ? styleClass : ""}`}>{tempLinks}</ul>
  );
};

export default Links;
