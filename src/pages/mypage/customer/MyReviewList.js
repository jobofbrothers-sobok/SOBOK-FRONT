import React from "react";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";
import MoreButton from "../../../components/common/MoreButton";
import Footer from "../../../components/common/Footer";
import ReviewItem from "../../../components/ReviewItem";

const MyReviewList = () => {


    // 카페 리스트 임시
    const array = [0, 1, 2, 3, 4];



    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">내가 작성한 리뷰</p>
                    <br /><br />
                    <div className="review-list">
                        {array.map((item, index) =>
                            <ReviewItem
                                key={index}
                                nickname='고법123'
                                content='분위기가 좋고 앙버터를 좋아하시는 분들 추천드립니다. 딸기 시즌이라서 딸기 제품이 나왔는대 정말 맜있었고 만약에 다시 방문한다면 유기농이라서 몸이 덜 해로워서 건강하지 않고 오늘 따라 라면이'
                                date='2023-01-01'
                            />
                        )}
                    </div>
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default MyReviewList;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`