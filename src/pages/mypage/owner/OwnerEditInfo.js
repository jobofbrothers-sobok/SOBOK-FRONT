import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import { getCookie, setCookie } from "../../../lib/cookie";
import { ownerEdit } from "../../../lib/api/mypage";
import DaumPostcodeEmbed from "react-daum-postcode";
import Modal from "../../../components/common/Modal";

const OwnerEditInfo = () => {

    const id = getCookie('loginId');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [detail, setDetail] = useState('');
    const [code, setCode] = useState('');
    const [licenseImg, setLicenseImg] = useState();
    const [profile, setProfile] = useState();

    // 주소 검색 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    const onCompletePost = (data) => {
        console.log(data.address);
        setAddress(data.address);
        closeModal();
    }

    const onEditInfo = async () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        await ownerEdit(pw, name, email, phone, address, detail, code, licenseImg, profile, config)
            .then((res) => { console.log(res); alert('회원정보가 성공적으로 수정되었습니다.'); setCookie('name', name) })
            .catch((err) => { alert(err, '회원가입 실패'); })
    }

    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">담당자 정보수정</p>
                    <br /><br />
                    <p>프로필 이미지 등록하기<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
                    <hr /><br />
                    <p>아이디<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <p>{id}</p><br />
                    <p>비밀번호<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <input type="password" onChange={(e) => setPw(e.target.value)} />
                    <p>비밀번호 확인<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="password" onChange={(e) => setPw(e.target.value)} />
                    <p>담당자명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <p>담당자 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="tel" onChange={(e) => setPhone(e.target.value)} />
                    <p>담당자 이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>가게 주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <div className="store-loc-box">
                        <input type="text" value={address} onClick={openModal} onChange={openModal} /><button className="store-search" onClick={openModal}>검색</button>
                    </div>
                    <p>상세 주소</p>
                    <input type="text" onChange={(e) => setDetail(e.target.value)} />
                    <p>사업자 등록 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setCode(e.target.value)} />
                    <p>사업자 등록증<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setLicenseImg(e.target.files[0])} />
                    <br />
                    <Button text="수정완료" color="#FF9F74" onClick={onEditInfo} />
                </div>
            </Container>
            <Modal open={modalOpen} close={closeModal}>
                <DaumPostcodeEmbed
                    onComplete={onCompletePost}
                />
            </Modal>
        </>
    )
}

export default OwnerEditInfo;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
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
    .store-loc-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .store-loc-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .store-search {
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 13px;
    }
`