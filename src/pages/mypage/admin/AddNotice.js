import React from "react";
import styled from "styled-components";
import InputBox from "../../../components/common/InputBox";
import Button from "../../../components/common/Button";

const AddNotice = () => {
    return (
        <>
            <Container>
                <p className="title">공지사항 작성하기</p>
                <br />
                <div className="info-div">
                    <p>제목</p>
                    <input type="text" />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="8" />
                    <p>이미지 첨부<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" />
                </div>
                <Button text="작성완료" />
            </Container>
        </>
    )
}

export default AddNotice;

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
    .title{
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;         
    }
    .info-div{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .info-div > p {
        font-weight: 600;
    }
    .info-div > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`