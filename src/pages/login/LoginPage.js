import React from "react";
import styled from "styled-components";
import logo from "../../asset/images/sobok_logo_square_jua.png";
import "../../asset/fonts/font.css";
import Button from "../../components/common/Button";

const LoginPage = () => {

    return (
        <LoginContainer>
            <div className="logo">
                <img src={logo} alt="소복 로고 이미지" width="120px" />
            </div>
            <div className="description">디저트 속 소소한 행복</div>
            <br /><br />
            <div className="login-form">
                아이디<br />
                <input type="text" placeholder="010-0000-0000" />
                비밀번호<br />
                <input type="text" placeholder="Password" />
                <div className="check">
                    <input type="checkbox" id="checkbox" />
                    <label for="remember-me">자동 로그인</label>
                </div>
                <br />
                <Button text="로그인" color="#FF9F74" />
                <Button text="회원가입" color="#7F7F7F" />
                <p>아이디/비밀번호 찾기</p>
            </div>
            <br />
            <hr width="320px" />
            <p className="is-owner">점주님이신가요?</p>
            <button className="is-owner-btn">점주 로그인</button>
            <br />
        </LoginContainer>
    )
}

export default LoginPage;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
    max-height: 800px;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .description{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Jalnan';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 42px;
        letter-spacing: 0.02em;   
        color: #C0C0C0;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 31px;
        letter-spacing: -0.04em;
        color: #222222;
        gap: 2px;
    }
    .login-form > input {
        padding: 5px 10px;
        width: 300px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px
    }
    .login-form > p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #7F7F7F;
    }
    .login-form > hr {
        background: #D9D9D9;
    }
    .is-owner{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 29px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #7F7F7F;
    }
    .is-owner-btn{
        width: 130px;
        height: 40px;
        background: #FF9F74;
        border-radius: 10px; 
        border: none;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 29px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #FFFFFF;
    }
    .check input[type="checkbox"] {
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        width: 15px;
        height: 15px;
        cursor: pointer;
        outline: none !important;
        border: 1px solid #9999;
        vertical-align: middle;
    }
    .check input[type="checkbox"]::before {
        content: "✔";
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        transform: scale(0) translate(-50%, -50%);
    }
    .check input[type="checkbox"]:checked {
        background-color: #FF9F74;
        border-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
    .check input[type="checkbox"]:checked::before {
        border-radius: 4px;
        transform: scale(1) translate(-50%, -50%)
    }
    > hr {
        color: #E4E4E4; 
        opacity: 0.5;
    }
`
