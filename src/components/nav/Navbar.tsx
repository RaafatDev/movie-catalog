import React, { ReactElement } from "react";
import styled from "styled-components";
import Burger from "./Burger";

interface Props {}

const Nav = styled.nav`
  color: white;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

function Navbar({}: Props): ReactElement {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger />
    </Nav>
  );
}

export default Navbar;

// // import React from 'react';
// import Burger from './Burger';
// const Navbar = () => {
//   return (
//     <Nav>
//         Nav Bar
//       </div>
//     </Nav>
//   )
// }

// export default Navbar
