import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import detailImg from "../../asset/images/detailImg.svg";
import CafeInfo from "../../components/CafeInfo";

const CafeDetail = () => {

    const [tabMenu, setTabMenu] = useState("정보");

    useEffect(() => {
        const { naver } = window;

        const location = new naver.maps.LatLng(37.5456497, 126.967141);

        const mapOptions = {
            center: location,
            zoom: 17,
        };

        const map = new naver.maps.Map('map', mapOptions);
        new naver.maps.Marker({
            map,
            position: location,
        });
    }, [])



    return (
        <>
            <NavBar />
            <Container>
                {/* <div className="hero_main"> */}
                <img src={detailImg} className="hero_img" alt="메인이미지" />
                {/* </div> */}
                <div className="intro-box">
                    <p className="cafe-title">청파맨션</p>
                    <p className="cafe-intro">2009년  오픈한 카페청파맨션은<br />스페셜티커피 전문 카페입니다.</p>
                </div>


                {/* menu container */}
                <div className="menu-container">
                    <div className="menu-item-active">
                        정보
                    </div>
                    <div className="menu-item">
                        소식
                    </div>
                    <div className="menu-item">
                        메뉴
                    </div>
                    <div className="menu-item">
                        리뷰
                    </div>
                </div>
                <CafeInfo />
            </Container >
            <Footer />
        </>
    )
}

export default CafeDetail;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .hero_img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .intro-box{
        width: 100%;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 20px;
        background-color: #F9F9F9;
        gap: 4px;
    }
    .cafe-title{
        font-size: 18px;
        font-weight: 600;
    }
    .cafe-intro{
        font-size: 16px;
        color: #7F7F7F;
    }
    .menu-container{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border-top: 1px solid #CCCCCC;
        border-bottom: 1px solid #CCCCCC;
        padding: 0px 10px;
    }
    .menu-item{
        // flex: auto;
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 16px;
        text-align: center;
        // border-bottom: 3px solid #FF9F74;
        &:active{
            color: #FF9F74;
        }
    }
    .menu-item-active{
        // flex: auto;
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 16px;
        text-align: center;
        border-bottom: 3px solid #FF9F74;
    }
`