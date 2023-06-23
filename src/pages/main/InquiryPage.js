import React, { useState } from "react";
import BackButton from "../../components/common/BackButton";
import NavBar from "../../components/common/NavBar";
import styled from "styled-components";
import InputBox from "../../components/common/InputBox";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";
import Modal from "../../components/common/Modal";
import logo from "../../asset/images/sobok_logo_square_jua.png";

const InquiryPage = () => {

    // 로그인 여부
    const [notlogin, setLogin] = useState(true);

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(notlogin);

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
                <p className="title">문의사항</p>
                <br />
                <div className="edit-form">
                    <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="10" />
                </div>
                <br />
                <Button text="문의하기" />
                <br />
                <div className='info'>최고관리자 확인 후 등록된 번호로<br />개별 연락드리겠습니다.</div>
            </Container>
            <Footer />
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">로그인이 필요한 서비스입니다.</p><br /><br /><br />
                    <Button text="다시입력" onClick={() => navigator('/')} />
                </ContentBox>
            </Modal>
        </>
    )
}

export default InquiryPage;

const Container = styled.div`
    width: 100%;
    padding: 0px 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .edit-form > p {
        font-weight: 600;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
    .info{
        text-align: center;
        color: #7F7F7F;
        font-size: 15px;
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
`