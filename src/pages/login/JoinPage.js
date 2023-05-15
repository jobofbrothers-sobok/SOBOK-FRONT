import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import AgreeForm from "../../components/AgreeForm";
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";
import JoinInputForm from "../../components/JoinInputForm";
import { useNavigate } from "react-router-dom";


const JoinPage = () => {

    const navigator = useNavigate();
    // 약관동의: false, 입력폼: true
    const [isNext, setNext] = useState(false);

    const handleNextButton = () => {
        setNext(!isNext);
    }


    return (
        <>
            <NavBar />
            <JoinContainer>
                <BackButton />
                <div className="join-form">
                    <br />
                    <p className="join-title">회원가입</p>
                    {isNext ?
                        <>
                            <JoinInputForm />
                            <Button text="가입 완료" color="#FF9F74" onClick={() => navigator('/join-success')} />
                        </> :
                        <>
                            <AgreeForm />
                            <Button text="다음으로" color="#FF9F74" onClick={handleNextButton} />
                        </>
                    }
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
        font-weight: 1000;
        font-size: 25px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    > hr {
        color: #E0E0E0; 
        opacity: 0.5;
    }
`