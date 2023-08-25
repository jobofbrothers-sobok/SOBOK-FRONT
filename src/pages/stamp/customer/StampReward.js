import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../../../components/common/BackButton";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import Button from "../../../components/common/Button";
import rewardImg from "../../../asset/images/rewardImg.svg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../lib/cookie";
import { checkStamp } from "../../../lib/api/stamp";

const StampReward = () => {


    const [tag, setTag] = useState('hoegi');

    const [stampList, setStamp] = useState([]);

    const inquiryCount = stampList[0]?.inquiryCount;
    console.log(stampList);
    console.log(stampList[0]?.inquiryCount);

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }

    const getStampList = async () => {
        const json = await checkStamp(tag, config);
        setStamp(json.data.data);
    };

    const navigator = useNavigate();

    useEffect(() => {
        getStampList();
    }, [tag]);

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <div className="info-title">스탬프 사용 신청</div>
                <TagList>
                    <TagButton className={tag === 'hoegi' ? 'active' : ''} onClick={() => setTag('hoegi')}>
                        회기역
                    </TagButton>
                    <TagButton className={tag === 'halloween' ? 'active' : ''} onClick={() => setTag('halloween')}>
                        할로윈 특집
                    </TagButton>
                    <TagButton className={tag === 'sookmyung' ? 'active' : ''} onClick={() => setTag('sookmyung')}>
                        숙대입구파티
                    </TagButton>
                    <TagButton className={tag === 'xmas' ? 'active' : ''} onClick={() => setTag('xmas')}>
                        일상
                    </TagButton>
                </TagList>
                <br />
                <div className="cafe-info-box">
                    <div className="location">{tag} 카페 투어 스탬프</div>
                    <div className="stamp-manual">리워드 : {tag} 한정판 선물세트</div>
                </div>
                <br />
                <img src={rewardImg} alt="리워드이미지" />
                <br />
                <Button text='리워드 신청하기' color={stampList.length === 9 && inquiryCount === 0 ? '#FF9F74' : '#7F7F7F'} onClick={stampList.length === 9 && inquiryCount === 0 ? () => navigator(`/stamp/customer/reward/form/${tag}`) : stampList.length === 9 && inquiryCount !== 0 ? () => alert('이미 배송 신청이 완료된 투어 상품입니다.') : () => alert('스탬프 9개를 모은 후, 리워드 신청이 가능합니다.')} />
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