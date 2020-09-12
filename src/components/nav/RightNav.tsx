import React, { ReactElement } from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";

interface Props {
  open: boolean;
}

interface StyledProps {
  open: boolean;
}

const StyledUl = styled.ul<StyledProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    /* padding: 08px 10px; */
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 1;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

function RightNav({ open }: Props): ReactElement {
  return (
    <StyledUl open={open} style={{ color: "white" }}>
      <li>Home</li>
      <li>About Us</li>
      {/* <li>Contact Us</li> */}
      {/* <li>Sign In</li> */}
      {/* <li>Sign Up</li> */}
      <li>
        <SearchBox />
      </li>
    </StyledUl>
  );
}

export default RightNav;
