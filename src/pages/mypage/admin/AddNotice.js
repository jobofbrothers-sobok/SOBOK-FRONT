import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../../../components/common/InputBox";
import Button from "../../../components/common/Button";
import { postNotice } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";

const AddNotice = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');

    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }
    const postNoticeForm = async () => {
        await postNotice(title, content, file, config)
            .then((res) => { console.log(res); alert('공지글을 성공적으로 등록하였습니다.') })
            .catch((err) => { console.log(err); alert('공지글을 등록에 실패하였습니다.') })
    }

    return (
        <>
            <Container>
                <p className="title">공지사항 작성하기</p>
                <br />
                <div className="info-div">
                    <p>제목</p>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="8" onChange={(e) => setContent(e.target.value)} />
                    <p>이미지 첨부<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <Button text="작성완료" onClick={postNoticeForm} />
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