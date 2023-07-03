import React from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";

const OwnerAddMenu = () => {
    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">매장 메뉴 등록</p>
                    <br /><br />
                    <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="15">
                    </InputBox>
                    <br />
                    <p>메뉴 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" />
                    <Button text="등록하기" color="#FF9F74" />
                </div>
            </Container>
        </>
    )
}

export default OwnerAddMenu;

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
`
const InputBox = styled.textarea`
    border: 1px solid #D9D9D9;
`