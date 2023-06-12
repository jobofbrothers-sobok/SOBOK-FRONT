import React from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import heroImg from "../../../asset/images/stamp_main.svg"
import menu1 from "../../../asset/images/stamp_menu1.svg";
import menu2 from "../../../asset/images/stamp_menu2.svg";
import menu3 from "../../../asset/images/stamp_menu3.svg";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router-dom";

const StampMain = () => {

    const navigator = useNavigate();
    return (
        <>
            <NavBar />
            <Container>
                <div className="hero_main">
                    <img src={heroImg} className="hero_img" alt="메인이미지" />
                </div>
                <MenuDiv>
                    <div className="menu-item" style={{ backgroundColor: '#FF9F74' }} onClick={() => navigator('/stamp/customer/code')}>
                        <img src={menu1} alt='메뉴1' />
                        <div className="menu-text">스탬프 적립</div>
                    </div>
                    <div className="menu-item" style={{ backgroundColor: '#7F7F7F' }}>
                        <img src={menu2} alt='메뉴1' />
                        <div className="menu-text">적립 내역</div>
                    </div>
                    <div className="menu-item" style={{ backgroundColor: '#E77E50' }}>
                        <img src={menu3} alt='메뉴1' />
                        <div className="menu-text">스탬프 사용 신청</div>
                    </div>
                </MenuDiv>
            </Container>
            <Footer />
        </>
    )
}

export default StampMain;

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
    .hero_img{
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
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

const MenuDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 80px;
`

