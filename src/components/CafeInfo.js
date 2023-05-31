import React, { useEffect } from "react";
import styled from "styled-components";
import nokids2 from "../asset/images/category/nokids2.svg";

const CafeInfo = () => {

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
            <Container>
                {/* category container */}
                <div className="category-container">
                    <div className="category-item">
                        <img src={nokids2} alt="카테고리이미지" />
                        <p>노키즈</p>
                    </div>
                    <div className="category-item">
                        <img src={nokids2} alt="카테고리이미지" />
                        <p>노키즈</p>
                    </div>
                    <div className="category-item">
                        <img src={nokids2} alt="카테고리이미지" />
                        <p>노키즈</p>
                    </div>
                </div>

                {/* map conainer */}
                <div id='map' className="map-container" />

                <div className="list-container">
                    <div className="list-item">
                        <p className="list-title" >주소</p>
                        <p className="list-value">서울특별시 용산구 녹사평대로40길 47 2F</p>
                    </div>
                    <hr />
                    <div className="list-item">
                        <p className="list-title">영업 시간</p>
                        <p className="list-value">월 ~ 일  09 : 00 ~ 23 : 00 영업 / 매주 일요일 휴무</p>
                    </div>
                    <hr />
                    <div className="list-item">
                        <p className="list-title">매장 소개</p>
                        <p className="list-value">www.mansean.co.kr</p>
                    </div>
                </div>
            </Container>
        </>
    )
}


export default CafeInfo;

const Container = styled.div`
    width: 100%;
    .category-container{
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        // display: grid;
        // grid-template-columns: repeat(5, 1fr);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .category-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
    }
    .category-item > img {
        width: 50px;
    }
    .category-item > p {
        font-weight: 600;
    }
    .list-container{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    .list-container > hr{
        border-width: 1px 0px 0px 0px;
        border-style: solid;
        height: 1px;
        color: #E0E0E0;
    }
    .list-item{
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
    }
    .list-title{
        font-weight: 600;
    }
    .list-value{
        color: #7F7F7F;
    }
    .map-container{
        width: 100%;
        height: 250px;
        border-top: 1px solid #CCCCCC;
        border-bottom: 1px solid #CCCCCC;
    }
`