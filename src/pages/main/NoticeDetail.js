import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";
import dummy from "../../data/data.json";
import { useNavigate, useParams } from "react-router-dom";
import noImg from "../../asset/images/noImg.svg";

const NoticeDetail = () => {

    const { id } = useParams();
    console.log(id);

    const { title, content, date } = dummy.notices.find((x) => x.id == id)

    const navigator = useNavigate();

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">{title}</p>
                <br />
                <img src={noImg} alt="이미지없음" />
                <br />
                <div className="content">
                    {content}
                </div>
                <div className="date">
                    {date}
                </div>
                <br />
                <Button text="목록으로" onClick={() => navigator('/notice')} />
            </Container>
            <Footer />
        </>
    )
}

export default NoticeDetail;

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
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .apply-list{
        width: 100%;
        box-sizing: border-box;
    }
    .apply-list > hr {
        border: 1px solid #E0E0E0;
    }
    >img {
        width: 100%;
    }
    .date{
        width: 100%;
        font-size: 13px;
        margin-top: 10px;
        color: #7F7F7F;
    }
`