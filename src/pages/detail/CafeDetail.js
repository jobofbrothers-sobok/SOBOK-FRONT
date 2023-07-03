import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import detailImg from "../../asset/images/detailImg.png";
import CafeInfo from "../../components/CafeInfo";
import CafeNews from "../../components/CafeNews";
import CafeMenu from "../../components/CafeMenu";
import CafeReview from "../../components/CafeReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const CafeDetail = () => {

    const [tabMenu, setTabMenu] = useState("정보");


    return (
        <>
            <NavBar />
            <Container>
                <Swiper
                    className="swiper"
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="slide" stlye={{ width: '100%' }}><img src={detailImg} className="hero_img" alt="메인이미지" /></SwiperSlide>
                    <SwiperSlide className="slide" stlye={{ width: '100%' }}><img src={detailImg} className="hero_img" alt="메인이미지" /></SwiperSlide>
                    <SwiperSlide className="slide" stlye={{ width: '100%' }}><img src={detailImg} className="hero_img" alt="메인이미지" /></SwiperSlide>
                </Swiper>
                {/* <img src={detailImg} className="hero_img" alt="메인이미지" /> */}
                <div className="intro-box">
                    <p className="cafe-title">청파맨션</p>
                    <p className="cafe-intro">2009년  오픈한 카페청파맨션은<br />스페셜티커피 전문 카페입니다.</p>
                </div>

                {/* menu container */}
                <div className="menu-container">
                    <TabMenuItem className={tabMenu === '정보' ? 'active' : ''} onClick={() => setTabMenu('정보')}>
                        정보
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '소식' ? 'active' : ''} onClick={() => setTabMenu('소식')}>
                        소식
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '메뉴' ? 'active' : ''} onClick={() => setTabMenu('메뉴')}>
                        메뉴
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '리뷰' ? 'active' : ''} onClick={() => setTabMenu('리뷰')}>
                        리뷰
                    </TabMenuItem>
                </div>
                {tabMenu === '정보' ? <CafeInfo /> : <></>}
                {tabMenu === '소식' ? <CafeNews /> : <></>}
                {tabMenu === '메뉴' ? <CafeMenu /> : <></>}
                {tabMenu === '리뷰' ? <CafeReview /> : <></>}
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
    .swiper{
        width: 100%;
    }
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
        font - size: 18px;
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
`

const TabMenuItem = styled.div`
    // flex: auto;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    text-align: center;
    // border-bottom: 3px solid #FF9F74;
    &:active,
    &:focus,
    &.active {
        color: #FF9F74;
        border-bottom: 3px solid #FF9F74;
    }
`