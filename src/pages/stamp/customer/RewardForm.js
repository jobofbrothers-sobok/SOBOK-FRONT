import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import Button from "../../../components/common/Button";
import Footer from "../../../components/common/Footer";
import InputBox from "../../../components/common/InputBox";
import Modal from "../../../components/common/Modal";
import logo from "../../../asset/images/sobok_logo_square_jua.png";
import { useNavigate, useParams } from "react-router-dom";
import { postDelivery } from "../../../lib/api/stamp";
import { getCookie } from "../../../lib/cookie";
import DaumPostcodeEmbed from "react-daum-postcode";

const RewardForm = () => {

    const { tag } = useParams();
    console.log(tag);

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    const navigator = useNavigate();


    const reward = `${tag} 카페 투어 스탬프`
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');
    const [detail, setDetail] = useState('');
    const [message, setMessage] = useState('');

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }


    const [addressModal, setAddressModal] = useState(false);

    const openAddress = () => {
        setAddressModal(true);
    };
    const closeAddress = () => {
        setAddressModal(false);
    }

    const onCompletePost = (data) => {
        console.log(data.address);
        setAddress(data.address);
        closeAddress();
    }

    const postRewardForm = () => {
        postDelivery(reward, name, tel, address, detail, message, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <div className="info-title">스탬프 사용 신청</div>
                <br /><br />
                <div className="edit-form">
                    <p>리워드명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <p className="reward-name">{tag} 카페 투어 스탬프</p>
                    <hr /><br />
                    <p>주문자 이름<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <input type='text' onChange={(e) => setName(e.target.value)} />
                    <p>전화번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="tel" placeholder="010-0000-0000" onChange={(e) => setTel(e.target.value)} />
                    <p>주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <div className="address-box">
                        <input type="text" value={address} onChange={openAddress} /><button className="address-search-btn" onClick={openAddress}>주소검색</button>
                    </div>
                    <p>상세주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setDetail(e.target.value)} />
                    <p>배송시 남기실 말씀<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="7" onChange={(e) => setMessage(e.target.value)} />
                    <br />
                    <Button text="신청완료" color="#FF9F74" onClick={postRewardForm} />
                </div>
            </Container>
            <Footer />
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">배송 신청이 완료되었습니다.</p><br /><br /><br />
                    <Button text="메인으로" onClick={() => navigator('/stamp/customer')} />
                </ContentBox>
            </Modal>
            <Modal open={addressModal} close={closeAddress}>
                <DaumPostcodeEmbed
                    onComplete={onCompletePost}
                />
            </Modal>
        </>
    )
}

export default RewardForm;

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
    .reward-name{
        font-size: 17px;
    }
    .address-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .address-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .address-search-btn {
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
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