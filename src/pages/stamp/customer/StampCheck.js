import React, { useState } from "react";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import styled from "styled-components";
import BackButton from "../../../components/common/BackButton";
import stamp from "../../../asset/images/stamp.svg";
import nostamp from "../../../asset/images/nostamp.svg";

const StampCheck = () => {

    const [tag, setTag] = useState('회기역');

    const [stampList, setStamp] = useState([0, 1, 2, 3]);

    const noStampNum = 9 - stampList.length;
    console.log(noStampNum)

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <div className="info-title">스탬프 적립 내역</div>
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
                <div className="cafe-info-box">
                    <div className="location">경희대학교 카페 투어 스탬프</div>
                    <div className="stamp-manual">리워드 : 9장 모으면, 경희대학교 한정판 선물세트</div>
                    <button className="check-cafe-btn">참여 매장 확인</button>
                </div>
                <br />
                <StampGridBox>
                    {stampList.map((item, index) =>
                        <StampItem key={index}>
                            <img src={stamp} alt="소복스탬프" />
                            <p className="cafe">카페 비반트</p>
                            <p className="date">2023.01.01</p>
                            <p className="time">12:00</p>
                        </StampItem>
                    )}
                    {Array(noStampNum)
                        .fill(0)
                        .map((_, i) =>
                        (<StampItem>
                            <img src={nostamp} alt="nostamp" className="nostamp" />
                        </StampItem>)
                        )}
                </StampGridBox >
            </Container>
            <Footer />
        </>
    )
}

export default StampCheck;

const StampItem = styled.div`
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #E4E4E4;
    >img {
        width: 60%;
        margin-bottom: 10%;
    }
    >p{
        font-weight: 700;
        color: #FF9F74;
    }
    .time{
        color: #49637A;
    }    
`

const StampGridBox = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(3, 1fr);
`

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
    .check-cafe-btn{
        width: 130px;
        height: 40px;
        background: #FF9F74;
        border-radius: 6px; 
        border: none;
        line-height: 29px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #FFFFFF;
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