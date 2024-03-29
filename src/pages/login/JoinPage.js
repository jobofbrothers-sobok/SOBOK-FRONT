import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Footer from "../../components/common/Footer";
import JoinInputForm from "../../components/JoinInputForm";
import { useNavigate } from "react-router-dom";


const JoinPage = () => {

    return (
        <>
            <NavBar />
            <JoinContainer>
                <BackButton />
                <div className="join-form">
                    <br />
                    <p className="join-title">회원가입</p>
                    <JoinInputForm />
                </div>
            </JoinContainer>
            <Footer />
        </>
    )
}

export default JoinPage;

const JoinContainer = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .join-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .join-title{
        text-align: center;
        font-weight: 700;
        font-size: 25px;
        line-height: 20px;
        letter-spacing: -0.04em;
        color: #222222;            
    }
    > hr {
        color: #E0E0E0; 
        opacity: 0.5;
    }
`