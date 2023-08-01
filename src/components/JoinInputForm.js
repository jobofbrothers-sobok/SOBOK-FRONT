import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { useNavigate } from "react-router";
import { getCookie, setCookie } from "../lib/cookie";
import { checkOverlapId, customerJoin, ownerJoin, ownerLicense } from "../lib/api/auth";
import axios from "axios";
import DaumPostcodeEmbed from "react-daum-postcode";
import Modal from "./common/Modal";

const JoinInputForm = () => {

    // 점주: true, 고객: false
    const isOwner = getCookie('isOwner') === 'true' ? true : false;
    console.log('isOwner', isOwner);

    const navigator = useNavigate();

    const isSelect = getCookie('select') === 'true' ? true : false;
    console.log(isSelect);
    console.log(typeof (isSelect));

    const who = isOwner ? 'owner' : 'customer';


    // 공통 정보
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [cpw, setCpw] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const termsAgree = true;
    // 점주 정보
    const [store, setStore] = useState('');
    const [address, setAddress] = useState('');
    const [detail, setDetail] = useState('');
    const [code, setCode] = useState('');
    const [image, setImage] = useState();


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

    // 중복된 ID 검사
    const isOverlapId = async () => {
        await checkOverlapId(id, who)
            .then((res) => {
                console.log('결과', res); res.data.data.idAlreadyExist
                    ? alert('중복된 아이디입니다.') : alert('사용가능한 아이디입니다.')
            })
            .catch((err) => console.log(err));
    }

    return (
        <InputContainer>
            <p>아이디<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <div className="new-id-box">
                <input type="text" onChange={(e) => setId(e.target.value)} /><button className="id-check-btn" onClick={isOverlapId}>중복확인</button>
            </div>
            <p>비밀번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)} />
            <p>비밀번호 확인<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="password" placeholder="Password" onChange={(e) => setCpw(e.target.value)} />


            {isOwner ?
                <>
                    <p>매장명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setStore(e.target.value)} />
                    <p>담당자명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <p>담당자 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setTel(e.target.value)} />
                    <p>담당자 이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <p>가게 주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <div className="store-loc-box">
                        <input type="text" value={address} onChange={openModal} onClick={openModal} /><button className="store-search" onClick={openModal}>주소검색</button>
                    </div>
                    <p>상세 주소</p>
                    <input type="text" onChange={(e) => setDetail(e.target.value)} />
                    <p>사업자 등록 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setCode(e.target.value)} />
                    <p>사업자 등록증<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" className="file-box" onChange={(e) => setImage(e.target.files[0])} />
                </>
                :
                <>
                    <p>이름</p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <p>이메일<span style={{ color: "#EB5757", fontWeight: "900" }} >*</span></p>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <p>핸드폰 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" placeholder="010-0000-0000" onChange={(e) => setTel(e.target.value)} />
                </>
            }
            <Button text="가입 완료" color="#FF9F74" onClick={isOwner ? () => {
                ownerLicense(id, image)
                    .then((res) => {
                        console.log('등록증 성공', res);
                        ownerJoin({ id, pw, name, email, tel, store, address, detail, code, termsAgree, isSelect })
                            .then((res) => { console.log('회원가입 성공', res); alert('회원가입 성공'); navigator('/login'); })
                            .catch((err) => { console.log('회원가입 실패', err); alert('회원가입 실패'); });
                    })
                    .catch((err) => { console.log('등록증 실패', err); alert('회원가입 실패'); })

            } : () => {
                customerJoin({ id, pw, cpw, name, tel, email, termsAgree, isSelect })
                    .then((res) => { console.log('회원가입 성공', res); alert('회원가입 성공'); navigator('/login'); })
                    .catch((err) => { console.log('회원가입 실패', err); alert('회원가입 실패'); });
            }} />
            <Modal open={modalOpen} close={closeModal}>
                <DaumPostcodeEmbed
                    onComplete={onCompletePost}
                />
            </Modal>
        </InputContainer >
    )
}

export default JoinInputForm;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    > p {
        font-weight: 600;
    }
    > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
    .new-id-box, .store-loc-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .new-id-box > input, .store-loc-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .id-check-btn, .store-search {
        // width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 15px;
    }
`