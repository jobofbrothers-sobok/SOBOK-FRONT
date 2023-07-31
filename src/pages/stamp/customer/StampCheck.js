import React, { useEffect, useState } from "react";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import styled from "styled-components";
import BackButton from "../../../components/common/BackButton";
import completeImg from "../../../asset/images/complete-stamp.svg";
import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";
import sobokFace from "../../../asset/images/sobok-face.svg";
import StampItem from "../../../components/StampItem";
import { checkStamp, checkStampStore } from "../../../lib/api/stamp";
import { getCookie } from "../../../lib/cookie";

const StampCheck = () => {

    const [tag, setTag] = useState('hoegi');

    const [stampList, setStamp] = useState([]);
    const [stampCafe, setStampCafe] = useState([]);

    const noStampNum = 9 - stampList.length;

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

    const getTourCafeList = async () => {
        const json = await checkStampStore(tag, config);
        setStampCafe(json.data.data);
    }
    useEffect(() => {
        getStampList();
        getTourCafeList();
    }, [tag])

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <div className="info-title">스탬프 적립 내역</div>
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
                <div className="cafe-info-box">
                    <div className="location">경희대학교 카페 투어 스탬프</div>
                    <div className="stamp-manual">리워드 : 9장 모으면, 경희대학교 한정판 선물세트</div>
                    <button className="check-cafe-btn" onClick={openModal}>참여 매장 확인</button>
                </div>
                <br />
                <StampGridBox>
                    {stampList.map((item, index) =>

                        <StampItem
                            id={item.id}
                            checked={true}
                            cafe={item.store}
                            date={item.timestamp.substr(0, 10)}
                            time={item.timestamp.substr(11, 5)}
                        />
                    )}
                    {Array(noStampNum)
                        .fill(0)
                        .map((_, i) =>
                            (<StampItem checked={false} />)
                        )}
                </StampGridBox >
                {stampList.length === 9 ? <div className="complete-box">
                    <img src={completeImg} alt='10개스탬프' width="40%" />
                    <div className="complete-text">경희대학교 카페 퉈 스탬프 완료!!<br />리워드를 신청해주세요!</div>
                </div> : <></>}

            </Container>
            <Footer />
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <StampCafeList>
                        {stampCafe.map((item, index) =>
                            <div className="stamp-cafe-item" key={index}>
                                <img src={sobokFace} alt='소복얼굴' />
                                <p>{item.storeName}</p>
                            </div>
                        )}
                    </StampCafeList>
                    <br />
                    <Button text="확인완료" onClick={closeModal} />
                </ContentBox>
            </Modal>
        </>
    )
}

export default StampCheck;

const StampCafeList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .stamp-cafe-item{
        display: flex;
        box-sizing: border-box;
        padding: 15px 0px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        border-bottom: solid 1px #E4E4E4;
    }
    .stamp-cafe-item > img {
        width: 20%;
    }
    .stamp-cafe-item > p {
        font-size: 16px;
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
    .complete-box{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .complete-text{
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        color: #E2764E;
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

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        font-size: 18px;
        font-weight: 600;
    }
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .edit-form > p {
        font-weight: 600;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`