import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "../../../components/common/BackButton";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import Button from "../../../components/common/Button";
import rewardImg from "../../../asset/images/rewardImg.svg";
import { useNavigate } from "react-router-dom";

const StampReward = () => {

    const [tag, setTag] = useState('회기역');

    const navigator = useNavigate();

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <div className="info-title">스탬프 사용 신청</div>
                <TagList>
                    <TagButton className={tag === '회기역' ? 'active' : ''} onClick={() => setTag('회기역')}>
                        회기역
                    </TagButton>
                    <TagButton className={tag === '할로윈 특집' ? 'active' : ''} onClick={() => setTag('할로윈 특집')}>
                        할로윈 특집
                    </TagButton>
                    <TagButton className={tag === '숙대입구파티' ? 'active' : ''} onClick={() => setTag('숙대입구파티')}>
                        숙대입구파티
                    </TagButton>
                    <TagButton className={tag === '일상' ? 'active' : ''} onClick={() => setTag('일상')}>
                        일상
                    </TagButton>
                </TagList>
                <br /><br />
                <div className="cafe-info-box">
                    <div className="location">경희대학교 카페 투어 스탬프</div>
                    <div className="stamp-manual">리워드 : 경희대학교 한정판 선물세트</div>
                </div>
                <br />
                <img src={rewardImg} alt="리워드이미지" />
                <br />
                <Button text='리워드 신청하기' color='#7F7F7F' onClick={() => navigator('/stamp/customer/reward/form')} />
            </Container>
            <Footer />
        </>
    )
}

export default StampReward;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 70px;
    .info-title{
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #222222;
    }
    .cafe-info-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
    .location{
        font-weight: 600;
        font-size: 21px;
        text-align: center;
        color: #222222;
    }
    .stamp-manual{
        font-weight: 500;
        font-size: 15px;
        text-align: center;
        color: #FF9F74;
    }
    >img {
        border-box: box-sizing;
    }
`

const TagList = styled.div`
    width: 100%;
    padding: 20px 0px;
    box-sizing: border-box;
    white-space: nowrap;
    display: flex;
    gap: 5px;
    overflow-x: auto;
`

const TagButton = styled.button`
    display: inline-block;
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: #7F7F7F;
    border: 1px solid #CCCCCC;
    &:active,
    &:focus,
    &.active {
        background: #FF9F74;
        color: #FFFFFF;
        border: none;
  }
`