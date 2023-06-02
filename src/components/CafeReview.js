import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import ReviewItem from "./ReviewItem";
import MoreButton from './common/MoreButton';

const CafeReview = () => {

    // 임시 배열
    const array1 = [0, 0, 0];

    return (
        <>
            <Container>
                <Button text="리뷰 작성하기" />
                <br /><br />
                <div className="review-list">
                    {array1.map((item) =>
                        <ReviewItem
                            nickname='고법123'
                            content='분위기가 좋고 앙버터를 좋아하시는 분들 추천드립니다. 딸기 시즌이라서 딸기 제품이 나왔는대 정말 맜있었고 만약에 다시 방문한다면 유기농이라서 몸이 덜 해로워서 건강하지 않고 오늘 따라 라면이'
                            date='2023-01-01'
                        />
                    )}
                </div>
            </Container>
            <MoreButton />
        </>
    )
}

export default CafeReview;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
