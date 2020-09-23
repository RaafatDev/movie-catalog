import React from "react";
import MainNav from "../navbar/MainNav";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import styles from "./navbar.module.scss";

interface Props {}

const Navbar = (props: Props) => {
  return (
    // <div style={styles}>
    // <nav className="navbar">
    <nav className={styles.navbar}>
      {/* <div className="nav-center"> */}
      <div className={styles.navCenter}>
        {/* <div className="nav-header"> */}
        <div className={styles.navHeader}>
          {/* <img src={logo} alt="logo" style={{ width: "50px" }} /> */}
          <div>Movie Catalog</div>
          {/* <img src={logo} alt="logo" /> */}
          <button type="button" className={styles.toggleBtn}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass={styles.navLinks} />
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
