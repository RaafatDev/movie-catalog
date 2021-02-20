import React from "react";
import Footer from "./Footer";
import GlobalStyle from "../../styled-components/globalStyles";
import Navbar from "./nav/Navbar";

interface Props {
    children: React.ReactNode;
}

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
