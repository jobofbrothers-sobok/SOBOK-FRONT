import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { getCafeInfo } from "../../lib/api/main";
import noImg from '../../asset/images/noImg.svg';
import { getCookie, setCookie } from "../../lib/cookie";

const CafeDetail = () => {

    const history = getCookie('detailtag');
    console.log(history);

    const [tabMenu, setTabMenu] = useState(history ? history : '정보');

    const { id } = useParams();
    const storeId = id;

    const [cafeInfo, setCafeInfo] = useState('');

    const { image, storeName, description, address, homepage, officeHour, dayOff, category, x, y } = cafeInfo;

    const realImg = `https://b.sobok.co.kr/${image}`

    // 카페 상세 정보 가져오기
    const getInfo = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true,
            }
        }
        const json = await getCafeInfo(id, config);
        console.log(json);
        setCafeInfo(json.data.data);
    };

    useEffect(() => {
        getInfo();
    }, []);

    // 대체 이미지 설정
    const handleImgError = (e) => {
        e.target.src = noImg
    }


    return (
        <>
            <NavBar />
            <Container>
                <Swiper
                    style={{ height: '200px', objectFit: 'cover' }}
                    className="swiper"
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }}><img src={realImg ? realImg : noImg} className="hero_img" alt="카페상세이미지" onError={handleImgError} /></SwiperSlide>
                </Swiper>
                {/* <img src={detailImg} className="hero_img" alt="메인이미지" /> */}
                <div className="intro-box">
                    <p className="cafe-title">{storeName}</p>
                    <p className="cafe-intro">{description}</p>
                </div>

                {/* menu container */}
                <div className="menu-container">
                    <TabMenuItem className={tabMenu === '정보' ? 'active' : ''} onClick={() => { setCookie('detailtag', '정보'); setTabMenu('정보'); }}>
                        정보
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '소식' ? 'active' : ''} onClick={() => { setCookie('detailtag', '소식'); setTabMenu('소식'); }}>
                        소식
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '메뉴' ? 'active' : ''} onClick={() => { setCookie('detailtag', '메뉴'); setTabMenu('메뉴'); }}>
                        메뉴
                    </TabMenuItem>
                    <TabMenuItem className={tabMenu === '리뷰' ? 'active' : ''} onClick={() => { setCookie('detailtag', '리뷰'); setTabMenu('리뷰'); }}>
                        리뷰
                    </TabMenuItem>
                </div>
                {tabMenu === '정보' ? <CafeInfo id={storeId} address={address} homepage={homepage} officeHour={officeHour} dayOff={dayOff} x={x} y={y} category={category} /> : <></>}
                {tabMenu === '소식' ? <CafeNews id={storeId} /> : <></>}
                {tabMenu === '메뉴' ? <CafeMenu id={storeId} /> : <></>}
                {tabMenu === '리뷰' ? <CafeReview id={storeId} /> : <></>}
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
        z-index: 0;
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