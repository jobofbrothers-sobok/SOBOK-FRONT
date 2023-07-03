import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import ReviewItem from "./ReviewItem";
import MoreButton from './common/MoreButton';
import Modal from "./common/Modal";
import logo from '../asset/images/sobok_logo_square_jua.png';
import InputBox from "./common/InputBox";
import Footer from "./common/Footer";
import isLogin from "../lib/router/isLogin";

const CafeReview = () => {

    // 로그인 유무
    const auth = isLogin();

    // 임시 배열
    const array1 = [0, 0, 0];

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
            <Container>
                <Button text="리뷰 작성하기" onClick={openModal} />
                <br /><br />
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
            </Container>
            <MoreButton />
            {/* 리뷰 작성 모달 */}
            {/* 로그인 모달 */}
            {auth ? <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <p className="title">리뷰 작성하기</p>
                    <br />
                    <div className="edit-form">
                        <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <input type="text" />
                        <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <InputBox rows="10">
                        </InputBox>
                        <br />
                        <p>메뉴 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <input type="file" />
                    </div>
                    <Button text="작성완료" />
                </ContentBox>
            </Modal> : <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">로그인이 필요한 서비스입니다.</p><br /><br /><br />
                    <Button text="로그인" />
                </ContentBox>
            </Modal>}
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
