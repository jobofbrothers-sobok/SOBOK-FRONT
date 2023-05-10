import React from "react";
import styled from "styled-components";
import logo2 from "../../asset/images/sobok_logo_rect_jua.png";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-right: 50px;
    padding-left: 50px;
    .sobok-info-text{
        font-family: 'AppleSDGothicNeoR00';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        text-align: center;
        letter-spacing: -0.08em;
        color: #7F7F7F;
    }
    .license-text{
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        letter-spacing: -0.08em;
        color: #222222;
        opacity: 0.4;            
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <img src={logo2} alt="소복 로고 이미지" width="150px" height="40px" />
            <p className="sobok-info-text">소복  |  주소 : 서울시 경희대로 26 ㅣ 대표 : 기현우<br />
                개인정보처리책임자 :  ㅣ  사업자 등록번호 :<br />
                고객센터 : 010-0000-000  ㅣ  rhqjq123@naver.com<br /><br />
                <span className="license-text">© SOBOK Inc. All rights reserved.</span>
            </p>
        </FooterContainer>
    )

}

export default Footer;