import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import logo from "../../../asset/images/sobok_logo_square_jua.png";
import Button from "../../../components/common/Button";
import Footer from "../../../components/common/Footer";
import BackButton from "../../../components/common/BackButton";
import Modal from "../../../components/common/Modal";
import { getCookie } from "../../../lib/cookie";
import { postCodeApproval } from "../../../lib/api/stamp";



const InputCode = () => {

    // 모달 관련
    const [modalOpen, setModalOpen] = useState('');

    const openModal = (value) => {
        setModalOpen(value);
    };
    const closeModal = () => {
        setModalOpen(false);
    }


    const [code, setCode] = useState('');

    console.log(code);



    const approveStamp = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        };
        await postCodeApproval(code, config)
            .then((res) => { console.log(res); openModal('yes'); })
            .catch((err) => { console.log(err); openModal('no'); })
    }

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-box">
                    <br /><br />
                    <img src={logo} alt="소복 로고 이미지" width={"40%"} />
                    <div className="info-title">소복 무료 스탬프 서비스</div>

                </div>
                <div className="edit-form">
                    <p>고객 생성 번호 입력<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type='text' onChange={(e) => setCode(e.target.value)} />
                </div>
                <Button text="적립완료" color="#FF9F74" onClick={approveStamp} />
                <br />
            </Container>
            <Footer />
            <Modal open={modalOpen === 'yes'} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">스탬프 적립이 완료되었습니다.</p><br /><br /><br />
                    <Button text="뒤로가기" onClick={closeModal} />
                </ContentBox>
            </Modal>
            <Modal open={modalOpen === 'no'} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">다른 번호를 입력해주셨습니다.</p><br /><br /><br />
                    <Button text="다시입력" onClick={() => navigator('/stamp/customer')} />
                </ContentBox>
            </Modal>
        </>
    )
}

export default InputCode;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 70px;
    gap: 20px;
    .info-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .info-title{
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .edit-form > p {
        font-weight: 600;
        margin-bottom: 8px;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
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