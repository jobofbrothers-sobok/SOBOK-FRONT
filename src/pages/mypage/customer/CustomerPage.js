import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import sobokFace from "../../../asset/images/sobok-face.svg";

import cafeImg from "../../../asset/images/cafeImg.svg";
import locMark from "../../../asset/images/locMark.svg";
import HeartButton from "../../../components/common/HeartButton";
import ReviewItem from "../../../components/ReviewItem";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {

    // 카페 리스트 임시
    const array = [0, 0, 0, 0, 0];

    // 임시 배열
    const array1 = [0, 0, 0];

    // 좋아요 버튼
    const [like, setLike] = useState(false);

    const navigator = useNavigate();

    return (
        <>
            <NavBar />
            <Container>
                <div className="mypage-topsection">
                    <img src={sobokFace} alt="소복 얼굴 이미지" width="60px" />
                    <div className="text-div">
                        <p className="name-text"><span>고법</span>님 마이페이지</p>
                        <p className="edit-text" onClick={() => navigator('/customer/edit')}>회원정보 수정하기</p>
                    </div>
                </div>
                <br />
                <div className="category-container">
                    <div className="list-top-box">
                        <p className="category-title">내가 찜한<span className="category-title2"> 카페</span></p>
                        <p className="show-all">전체보기+</p>
                    </div>
                    <hr /><br />
                    <div className="cafe-list">
                        {array.map((item) => <>
                            <CafeItem>
                                <div className="imgBox" style={{ backgroundImage: `url(${cafeImg})` }}>
                                    <HeartButton like={like} onClick={(event) => { event.stopPropagation(); setLike(!like); }} />
                                </div>
                                <div className="cafe-summary">
                                    <div className="cafe-title">페이브 베이커리</div>
                                    <div className="cafe-loc">
                                        <img src={locMark} alt="위치아이콘" width="13px" />
                                        55m
                                    </div>
                                </div>
                                <div className="cafe-desc">흑석역 카페 뚜스뚜스 브런치도 파는 베...</div>
                                <div className="tag-list">
                                    <div className="tag-wrap">
                                        큰 테이블
                                    </div>
                                    <div className="tag-wrap">
                                        콘센트
                                    </div>
                                </div>
                            </CafeItem>
                        </>)}
                    </div>
                </div>
                <br /><br />
                <div className="category-container">
                    <div className="list-top-box">
                        <p className="category-title">내가 작성한<span className="category-title2"> 리뷰</span></p>
                        <p className="show-all" onClick={() => navigator('/customer/liked')}>전체보기+</p>
                    </div>
                    <hr /><br />
                    <div className="review-list">
                        {array1.map((item, index) =>
                            <ReviewItem
                                key={index}
                                nickname='고법123'
                                content='분위기가 좋고 앙버터를 좋아하시는 분들 추천드립니다. 딸기 시즌이라서 딸기 제품이 나왔는대 정말 맜있었고 만약에 다시 방문한다면 유기농이라서 몸이 덜 해로워서 건강하지 않고 오늘 따라 라면이'
                                date='2023-01-01'
                            />
                        )}
                    </div>
                </div>
                <br />
                <p className="logout-text">로그아웃</p>
            </Container>
            <br />
            <Footer />
        </>
    )
}

export default CustomerPage;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .mypage-topsection{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: #F9F9F9;
        padding: 25px 25px;
        gap: 10px;
    }
    .text-div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .name-text > span {
        font-size: 19px;
        font-weight: 700;
        color: #FF9F74;
    }
    .name-text {
        font-size: 19px;
        font-weight: 700;
    }
    .edit-text{
        color: #7F7F7F;
        text-decoration-line: underline;
    }

    > p {
        font-size: 15px;
        color: #7F7F7F;
        text-decoration: underline;
        text-decoration-color: #7F7F7F;
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

    .list-top-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .cafe-list{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

    }
    .show-all{
        color: #FF9F74;
    }
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const CafeItem = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    gap: 5px;
    // max-width: 50%;
    >img {
        width: 100%;
    }
    .imgBox{
        width: 100%;
        height: 180px;
        position: relative;
        background-image: url(${cafeImg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 5px;
    }
    .cafe-summary{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cafe-title{
        font-size: 18px;
        font-weight: 600;
    }
    .cafe-loc{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
    }
    .cafe-desc{
        display: flex;
        flex-wrap: wrap;
        color: #7F7F7F;
        font-size: 16px;
    }
    .tag-list{
        display: flex;
        gap: 5px;
    }
    .tag-wrap{
        background: #FF9F74;
        border-radius: 18px;
        color: #FFFFFF;
        padding: 5px 10px;
        font-size: 13px;
    }
`