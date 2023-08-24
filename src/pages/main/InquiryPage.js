import React, { useEffect, useState } from "react";
import BackButton from "../../components/common/BackButton";
import NavBar from "../../components/common/NavBar";
import styled from "styled-components";
import InputBox from "../../components/common/InputBox";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";
import { postInquiry } from "../../lib/api/main";
import { getCookie } from "../../lib/cookie";
import { useNavigate } from "react-router-dom";

const InquiryPage = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const user = getCookie('who');
    console.log(user);

    const navigation = useNavigate();

    // 문의사항 등록 함수
    const postInquiryForm = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        }
        await postInquiry(user, title, content, config)
            .then((res) => { console.log(res); alert('문의사항 등록에 성공했습니다.'); navigation('/') })
            .catch((err) => { console.log(err); alert('문의사항 등록에 실패했습니다.'); })
    };

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
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="10" onChange={(e) => setContent(e.target.value)} />
                </div>
                <br />
                <Button text="문의하기" onClick={postInquiryForm} />
                <br />
                <div className='info'>최고관리자 확인 후 등록된 번호로<br />개별 연락드리겠습니다.</div>
            </Container>
            <Footer />
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