import React from "react";
import styled from "styled-components";
import newsImg from "../asset/images/news-item.svg";


const CafeMenu = () => {
    return (
        <Container>
            <img src={newsImg} alt="메뉴 이미지" />
            <p className="menu-intro">메뉴 안내</p>
            <div className="menu-list">
                <div className="menu-item">Espresso Croccantino (에소티노)</div>
                <div className="menu-item">Espresso Crontino (에소프레소 크로칸티노)</div>
                <div className="menu-item">Espresso Croccantino (에레소 칸티노)</div>
                <div className="menu-item">Espresso Crontino (에노)</div>
                <div className="menu-item">Espresso Crcantino (에레소 크로칸티노)</div>
                <div className="menu-item">Espresso Croccantino (에 크로칸티노)</div>
            </div>
        </Container>
    )
}

export default CafeMenu;

const Container = styled.div`
    padding: 20px;
    > img {
        width: 100%;
    }
    .menu-intro{
        margin-top: 20px;
        margin-bottom: 5px;
        color: #FF9F74;
    }
    .menu-list{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .menu-item{
        font-weight: 600;
    }
`

