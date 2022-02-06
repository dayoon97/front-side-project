import React from "react";
import styled from 'styled-components';
import oc from 'open-color';
import logo from '../img/logo.png';
import "../style/header.css";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
            {/*<Wrapper>*/}
                <div className="logo-container">
                    <a href="" className="logo-wrapper">
                        <img alt="logo" src={logo} className="logo"/>
                    </a>
                </div>
                    <div className="right-box">
                        <a href="" className="login-button">
                            <span class="login-label">로그인</span>
                        </a>
                    </div>
            {/*</Wrapper>*/}
            </div>
        </div>
    );
}

export default Header;
