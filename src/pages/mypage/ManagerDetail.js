import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../../components/common/InputBox";
import Button from "../../components/common/Button";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Footer from "../../components/common/Footer";
import { useParams } from "react-router-dom";
import dummy from "../../data/data.json";

const ManagerDetail = () => {

    const [isSend, setSend] = useState(false);

    const { id } = useParams();
    console.log(id);

    const { title, category, value } = dummy.manager.find((x) => x.id == id)


    const goSendPage = () => {
        setSend(!isSend);
    }

    const [content, setContent] = useState(value);
    const editContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">{title}</p>
                <br /><br />
                <div className="detail-box">
                    <p className="info-text">요청 정보</p>
                    <hr />
                    <p className="detail-text">카테고리</p>
                    {category}
                    <hr />
                    <p className="detail-text">내용</p>
                    {isSend ?
                        <>
                            <p>{content}</p>
                            <br />
                            <div className="button-box">
                                <Button text="문자 일괄전송" color="#FF9F74" /><Button text="카톡 일괄전송" color="#FEE500" textColor="#3D1B1A" />
                            </div>
                        </>
                        :
                        <>
                            <InputBox rows="10" value={content} onChange={editContent} />
                            <br />
                        </>
                    }
                    <Button text={isSend ? "일괄전송" : "전송페이지로"} color="#FF9F74" onClick={goSendPage} />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default ManagerDetail;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .title{
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .detail-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .info-text{
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;         
    }
    .detail-text{
        color: #7F7F7F;
    }
    .button-box{
        width: 100%;
        display: flex;
        gap: 5px;
    }
`
