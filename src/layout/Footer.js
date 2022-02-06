import React from "react";
import '../style/footer.css';
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    /* 레이아웃 */
    padding: 0;
    -webkit-box-sizig: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 5;
    background-color: white;
    display: block;

    /* 색상 */
    background: ${oc.violet[9]};
    color: white;
    border-bottom: 1px solid ${oc.violet[9]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
    
    font-family: 'Noto Sans KR', cursive;
`;

const Footer = () => {
    return (
        <Wrapper>
            <div className="footerBar-container">
                <div className="footer-info-wrapper">
                    <span className="info">다봉이네 | 고객센터:웅앵 | 이메일:dabong@naver.com | 주소:서울특별시 송파구 |</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default Footer;
