import React from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import menu1 from "../../../asset/images/stamp_menu1.svg";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router";

const StampOwner = () => {

    const navigator = useNavigate();
    return (
        <>
            <NavBar />
            <Container>
                <div className="hero-section">
                    <div className="intro-text">소복 무료 광고 신청하세요!</div>
                    <div className="info-text">소상공인 대상 1개월 무료 배너 광고 서비스</div>
                </div>
                <MenuDiv>
                    <div className="menu-item" style={{ backgroundColor: '#FF9F74' }} onClick={() => navigator('/stamp/owner/code')}>
                        <img src={menu1} alt='메뉴1' />
                        <div className="menu-text">스탬프 발급하기</div>
                    </div>
                </MenuDiv>
            </Container>
            <Footer />
        </>
    )
}

export default StampOwner;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    gap: 30px;
    .hero-section{
        width: 100%;
        dispay: flex;
        box-sizing: border-box;
        background-color: #FF9F74;
        padding: 35px 20px;
    }
    .intro-text{
        margin-top: 50px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 500;
    }
    .info-text{
        color: #FFFFFF;
        font-size: 13px;
        font-weight: 300;
    }
`
const MenuDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 270px;
    .menu-item{
        width: 100%;
        box-sizing: border-box;
        height: 85px;
        display: flex;
        flex-direciton: row;
        background: #FF9F74;
        border-radius: 7px;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        padding-left: 20px;
    }
    .menu-item > img {
        width: 45px;
    }
    .menu-text{
        color: white;
        font-size: 20px;
    }
`