import React from "react";
import Footer from "./Footer";
// import Navbar from "./navbar/Navbar";
// import Navbar from "../nav/Navbar";
// import Navbar from "../nav/Navbar";

// import GlobalStyle from "../../styled-components/globalStyles";
import GlobalStyle from "../../styled-components/globalStyles";
import Navbar from "./nav/Navbar";

interface Props {
    children: React.ReactNode;
}

// const Layout = (props: Props) => {
const Layout = ({ children }: Props) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
