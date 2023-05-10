import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import AgreeForm from "../../components/AgreeForm";
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";

const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
    max-height: 800px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    .join-form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .join-title{
        text-align: center;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 20px;
        letter-spacing: -0.04em;
        color: #222222;            
    }
    .sobok-btn{
        height: 60px;
        background: #FF9F74;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
        border: none;
    }
    > hr {
        color: #E4E4E4; 
        opacity: 0.5;
    }
`
const JoinPage = () => {

    return (
        <JoinContainer>
            <NavBar />
            <BackButton />
            <div className="join-form">
                <p className="join-title">회원가입</p>
                <AgreeForm />
                <Button text="다음으로" color="#FF9F74" />
                <br />
            </div>
            <hr width="400px" />
            <Footer />
        </JoinContainer>
    )
}

export default JoinPage;