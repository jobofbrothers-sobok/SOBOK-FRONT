import React from "react";
// import Header from "../../components/Header";
// import Header_Main from "../../components/HeaderMain";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    .upper_box{
        display: flex;
        justify-content: space-between;
        padding: 20px 10px 10px;
    }

    .hero_img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }   
`

const MainPage = () => {
    return (
        <Container>
            {/* <Header title="이문동" /> */}
            {/* <Header_Main /> */}
            <div className="Header">
                <div className="upper_box">
                    <div className="location">위치</div>
                    <div className="right-box">
                        <div className="map">지도</div>
                        <div className="search">검색</div>
                    </div>
                </div>
                <div className="uppper_menu"></div>
            </div>
            {/* <div className="hero_main"> */}
            {/* <img src={heroImg} className="hero_img" alt="히어로이미지" /> */}
            {/* </div> */}
        </Container>
    )
}

export default MainPage;