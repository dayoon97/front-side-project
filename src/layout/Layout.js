import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../pages/Main";
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 60px; /* 헤더 높이 */
`;

const Layout = () => {
    return (
        <div>
            <Header/>
                <Main/>
            <Footer/>
        </div>
    )
}

export default Layout;