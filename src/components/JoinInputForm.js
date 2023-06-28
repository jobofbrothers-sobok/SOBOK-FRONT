import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { useNavigate } from "react-router";
import { getCookie, setCookie } from "../lib/cookie";
import { customerJoin, ownerJoin, ownerLicense } from "../lib/api/auth";
import axios from "axios";


const JoinInputForm = () => {

    // 점주: true, 고객: false
    const isOwner = getCookie('isOwner');
    console.log('isOwner', isOwner);

    const navigator = useNavigate();

    const isSelect = getCookie('select');
    console.log(isSelect);


    // 공통 정보
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [cpw, setCpw] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    // 점주 정보
    const [store, setStore] = useState('');
    const [address, setAddress] = useState('');
    const [detail, setDetail] = useState('');
    const [code, setCode] = useState('');
    const [image, setImage] = useState('');


    const onHandleId = (e) => {
        setId(e.target.value);
    };
    const onHandlePw = (e) => {
        setPw(e.target.value);
    };
    const onHandleCpw = (e) => {
        setCpw(e.target.value);
    };
    const onHandleName = (e) => {
        setName(e.target.value);
    };
    const onHandleTel = (e) => {
        setTel(e.target.value);
    };
    const onHandleEmail = (e) => {
        setEmail(e.target.value);
    };
    const onHandleStore = (e) => {
        setStore(e.target.value);
    };
    const onHandleAddress = (e) => {
        setAddress(e.target.value);
    };
    const onHandleDetail = (e) => {
        setDetail(e.target.value);
    };
    const onHandleCode = (e) => {
        setCode(e.target.value);
    };
    const onHandleImage = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <InputContainer>
            <p>아이디<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <div className="new-id-box">
                <input type="text" onChange={onHandleId} /><button className="id-check-btn">중복확인</button>
            </div>
            <p>비밀번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="text" placeholder="Password" onChange={onHandlePw} />
            <p>비밀번호 확인<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="text" placeholder="Password" onChange={onHandleCpw} />


            {isOwner === 'true' ?
                <>
                    <p>매장명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={onHandleStore} />
                    <p>담당자명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={onHandleName} />
                    <p>담당자 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={onHandleTel} />
                    <p>담당자 이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={onHandleEmail} />
                    <p>가게 주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <div className="store-loc-box">
                        <input type="text" onChange={onHandleAddress} /><button className="store-search">검색</button>
                    </div>
                    <p>상세 주소</p>
                    <input type="text" onChange={onHandleDetail} />
                    <p>사업자 등록 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={onHandleCode} />
                    <p>사업자 등록증<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" className="file-box" onChange={onHandleImage} />
                </>
                :
                <>
                    <p>이름</p>
                    <input type="text" onChange={onHandleName} />
                    <p>이메일<span style={{ color: "#EB5757", fontWeight: "900" }} >*</span></p>
                    <input type="text" placeholder="Email" onChange={onHandleEmail} />
                    <p>핸드폰 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" placeholder="010-0000-0000" onChange={onHandleTel} />
                </>
            }
            <Button text="가입 완료" color="#FF9F74" onClick={isOwner ? () => {
                ownerJoin({ id, pw, name, email, tel, store, address, detail, code, isSelect });
                ownerLicense({ id, isSelect });
            } : () => customerJoin({ id, pw, cpw, name, tel, email, isSelect })} />
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
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 15px;
    }
`