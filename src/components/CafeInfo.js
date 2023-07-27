import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nokids2 from "../asset/images/category/nokids2.svg";
import { getCafeInfo } from "../lib/api/main";

const CafeInfo = (props) => {

    const { id, address, homepage, officeHour, dayOff, category, x, y } = props;

    useEffect(() => {
        const { naver } = window;

        const location = new naver.maps.LatLng(y, x);

        const mapOptions = {
            center: location,
            zoom: 17,
        };

        const map = new naver.maps.Map('map', mapOptions);
        new naver.maps.Marker({
            map,
            position: location,
        });
    }, [x, y])

    return (
        <>
            <Container>
                {/* category container */}
                <div className="category-container">
                    {category?.map((item) =>
                        <div className="category-item">
                            <img src={nokids2} alt="카테고리이미지" />
                            <p>{item}</p>
                        </div>
                    )}
                </div>

                {/* map conainer */}
                <div id='map' className="map-container" />

                <div className="list-container">
                    <div className="list-item">
                        <p className="list-title" >주소</p>
                        <p className="list-value">{address}</p>
                    </div>
                    <hr />
                    <div className="list-item">
                        <p className="list-title">영업 시간</p>
                        <p className="list-value">{officeHour} / 휴무: {dayOff}</p>
                    </div>
                    <hr />
                    <div className="list-item">
                        <p className="list-title">매장 소개</p>
                        <p className="list-value">{homepage}</p>
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
        z-index: 0;
        width: 100%;
        height: 250px;
        border-top: 1px solid #CCCCCC;
        border-bottom: 1px solid #CCCCCC;
    }
`