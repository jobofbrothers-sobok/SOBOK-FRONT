import React, { useEffect, useState } from "react";
// import Header from "../../components/Header";
// import Header_Main from "../../components/HeaderMain";
import styled from "styled-components";
import heroImg from '../../asset/images/heroImg.svg';
import NavBar from "../../components/common/NavBar";
// 카테고리 이미지
import all from "../../asset/images/category/all.svg";
import all2 from "../../asset/images/category/all2.svg";
import concent from "../../asset/images/category/concent.svg";
import concent2 from "../../asset/images/category/concent2.svg";
import table from "../../asset/images/category/table.svg";
import table2 from "../../asset/images/category/table2.svg";
import park from "../../asset/images/category/park.svg";
import park2 from "../../asset/images/category/park2.svg";
import dog from "../../asset/images/category/dog.svg";
import dog2 from "../../asset/images/category/dog2.svg";
import window from "../../asset/images/category/window.svg";
import window2 from "../../asset/images/category/window2.svg";
import ciagrette from "../../asset/images/category/cigarette.svg";
import ciagrette2 from "../../asset/images/category/cigarette2.svg";
import nokids from "../../asset/images/category/nokids.svg";
import nokids2 from "../../asset/images/category/nokids2.svg";
import sofa from "../../asset/images/category/sofa.svg";
import sofa2 from "../../asset/images/category/sofa2.svg";
import rooftop from "../../asset/images/category/rooftop.svg";
import rooftop2 from "../../asset/images/category/rooftop2.svg";
import Footer from "../../components/common/Footer";
import MoreButton from "../../components/common/MoreButton";
// 드롭박스 내림 화살표 이미지
import filterbtn from "../../asset/images/filter-arrow.svg";
// 카페 예시 대표 이미지
import CafeItem from "../../components/CafeItem";
import { useNavigate } from "react-router-dom";



const MainPage = () => {


    // 현재 위치 위도, 경도 가져오기
    const [lat, setLatitude] = useState(null);
    const [long, setLongitude] = useState(null);


    console.log({ lat, long });

    const getLocation = () => {
        // 위치 권한 허용시
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (err) => {
                    console.log(err);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                },
            );
        }
        // 위치 권한 차단시
        else {
            alert('위치 설정 권한을 허용해주세요.');
            return;
        }
    }

    const navigation = useNavigate();

    useEffect(() => {
        getLocation();
    }, []);


    const onHandleCategory = (event) => {
        const { name, value, checked } = event.target;

        console.log(name, value, checked);
        // console.log(checked)
    }


    // 카페 리스트 임시
    const array = [0, 1, 2, 3, 4];


    return (
        <>
            <NavBar />
            <Container>
                <div className="hero_main">
                    <img src={heroImg} className="hero_img" alt="메인이미지" />
                </div>

                {/* Category list */}
                <div className="category-container">
                    <p className="category-title">원하시는 카테고리<span className="category-title2">를 선택해주세요.</span></p>
                    <div className="category-list">
                        <input
                            type="checkbox"
                            id="icon1"
                            name="category"
                            value="all"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon1">
                            <img src={all} alt="all" className="icon" />
                            <img src={all2} alt="all2" className="icon_active" />
                            <p>all</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon2"
                            name="category"
                            value="concent"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon2">
                            <img src={concent} alt="concent" className="icon" />
                            <img src={concent2} alt="concent2" className="icon_active" />
                            <p>콘센트</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon3"
                            name="category"
                            value="table"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon3">
                            <img src={table} alt="table" className="icon" />
                            <img src={table2} alt="table2" className="icon_active" />
                            <p>큰 테이블</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon4"
                            name="category"
                            value="park"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon4">
                            <img src={park} alt="park" className="icon" />
                            <img src={park2} alt="park2" className="icon_active" />
                            <p>주차장</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon5"
                            name="category"
                            value="dog"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon5">
                            <img src={dog} alt="dog" className="icon" />
                            <img src={dog2} alt="dog2" className="icon_active" />
                            <p>애견동반</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon6"
                            name="category"
                            value="window"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon6">
                            <img src={window} alt="window" className="icon" />
                            <img src={window2} alt="window2" className="icon_active" />
                            <p>통유리</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon7"
                            name="category"
                            value="ciagrette"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon7">
                            <img src={ciagrette} alt="ciagrette" className="icon" />
                            <img src={ciagrette2} alt="ciagrette2" className="icon_active" />
                            <p>흡연실</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon8"
                            name="category"
                            value="nokids"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon8">
                            <img src={nokids} alt="nokids" className="icon" />
                            <img src={nokids2} alt="nokids2" className="icon_active" />
                            <p>노키즈</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon9"
                            name="category"
                            value="sofa"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon9">
                            <img src={sofa} alt="sofa" className="icon" />
                            <img src={sofa2} alt="sofa2" className="icon_active" />
                            <p>쇼파</p>
                        </label>
                        <input
                            type="checkbox"
                            id="icon10"
                            name="category"
                            value="rooftop"
                            onClick={onHandleCategory}
                        />
                        <label htmlFor="icon10">
                            <img src={rooftop} alt="rooftop" className="icon" />
                            <img src={rooftop2} alt="rooftop2" className="icon_active" />
                            <p>루프탑</p>
                        </label>
                    </div>
                </div>

                {/* Cafe list */}
                <div className="category-container">
                    <div className="list-top-box">
                        <p className="category-title">내 근처 카페<span className="category-title2"> 찾기</span></p>
                        <FilterBox name="category">
                            <option value="event">숙명여대</option>
                            <option value="new-menu">경희대</option>
                        </FilterBox>
                    </div>
                    <hr /><br />
                    <div className="cafe-list">
                        {array.map((item, index) => <>
                            <CafeItem
                                key={item}
                                title="페이브 베이커리"
                                distance='55m'
                                intro='흑석역 카페 뚜스뚜스 브런치도 파는 베이커리 카페'
                                tag={['큰 테이블', '콘센트']}
                                onClick={() => navigation(`/detail/${item}`)}
                            />
                        </>)}
                    </div>
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>

    )
}

export default MainPage;

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
    .category-container {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px 0px;
        display: flex;
        flex-direction: column;
        // margin-top: 30px;
    }
    .category-title{
        font-size: 20px;
        font-weight: 600;
    }
    .category-title2{
        font-size: 20px;
        font-weight: 500;
        color: #7F7F7F;
    }
    .category-list{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        flex-wrap: wrap;
        margin: 20px 0px;
    }

    // 카테고리 선택 여부에 따라 이미지 변화
    .category-list > input {
        display: none;
    }
    .category-list > input[type="checkbox"] + label .icon_active{display: none}
    .category-list > input[type="checkbox"] + label .icon{display: block; cursor: pointer}
    .category-list > input[type="checkbox"]:checked + label .icon_active{display: block; cursor: pointer;}
    .category-list > input[type="checkbox"]:checked + label .icon{display: none}

    .category-list > label > img {
        width: 50px;
    }
    .category-list > label > p {
        margin-top: 8px;
        font-weight: 600;   
    }
    .list-top-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .cafe-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
`
const FilterBox = styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 8px;
    width: 100px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    appearance: none;
    background:url(${filterbtn}) no-repeat right 10px center;
    background-size: 10px;
    font-weight: 200;
    font-size: 13px;
`