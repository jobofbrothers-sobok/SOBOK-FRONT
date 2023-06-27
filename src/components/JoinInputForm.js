import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { useNavigate } from "react-router";


const JoinInputForm = () => {

    // 점주: true, 고객: false
    const [isOwner, setOwner] = useState(true);

    const navigator = useNavigate();

    return (
        <InputContainer>
            <p>아이디<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <div className="new-id-box">
                <input type="text" /><button className="id-check-btn">중복확인</button>
            </div>
            <p>비밀번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="text" placeholder="Password" />
            <p>비밀번호 확인<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
            <input type="text" placeholder="Password" />


            {isOwner ?
                <>
                    <p>담당자명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>담당자 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>담당자 이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>가게 주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <div className="store-loc-box">
                        <input type="text" /><button className="store-search">검색</button>
                    </div>
                    <p>상세 주소</p>
                    <input type="text" />
                    <p>사업자 등록 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>사업자 등록 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" className="file-box" />
                </>
                :
                <>
                    <p>이름</p>
                    <input type="text" />
                    <p>이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" placeholder="Email" />
                    <p>핸드폰 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" placeholder="010-0000-0000" />
                </>
            }
            <Button text="가입 완료" color="#FF9F74" onClick={() => navigator('/join-success')} />
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