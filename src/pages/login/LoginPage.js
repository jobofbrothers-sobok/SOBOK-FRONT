import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../asset/images/sobok_logo_square_jua.png";
// import logo from "../../asset/images/sobok_new_logo.png"
import "../../asset/fonts/font.css";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { customerLogin, ownerLogin } from "../../lib/api/auth";
import { setCookie } from "../../lib/cookie";
import NavBar from "../../components/common/NavBar";

const LoginPage = () => {

    const navigator = useNavigate();

    // 점주: true, 고객: false
    const [isOwner, setOwner] = useState(false);

    // 점주<->고객 로그인 전환
    const handleButton = () => {
        setOwner(!isOwner);
    }


    const [id, setId] = useState('');
    const [pw, setPasswd] = useState('');


    const onHandleId = (e) => {
        setId(e.target.value);
    }

    const onHandlePasswd = (e) => {
        setPasswd(e.target.value);
    }

    return (
        <>
            <NavBar />
            <LoginContainer>
                <br />
                <div className="logo">
                    <img src={logo} alt="소복 로고 이미지" style={{ width: "35vw", maxWidth: "200px" }} />
                </div>
                <div className="description"><span className="point">소</span>{isOwner ? '상공인의 행' : '소한 행'}<span className="point">복</span>이 될 카페를 찾아드려요!</div>
                <br /><br />
                <div className="login-form">
                    <p>아이디</p>
                    <input type="text" placeholder="Id" onChange={onHandleId} />
                    <p>비밀번호</p>
                    <input type="password" placeholder="Password" onChange={onHandlePasswd} />
                    <div className="check">
                        <input type="checkbox" id="checkbox" />
                        <label className="remember-me">자동 로그인</label>
                    </div>
                    <br />
                    <Button text="로그인" color="#FF9F74" onClick={isOwner ?
                        () => ownerLogin(id, pw)
                            .then((res) => {
                                console.log('성공', res);
                                setCookie('token', res.data.data.accessToken);
                                setCookie('who', res.data.data.who);
                                setCookie('id', res.data.data.id);
                                setCookie('storeId', res.data.data.storeId);
                                setCookie('loginId', res.data.data.loginId);
                                setCookie('store', res.data.data.store);
                                setCookie('name', res.data.data.director);
                                setCookie('joinauth', res.data.data.authorized);
                                setCookie('stampauth', res.data.data.stampAuthorized);
                                setCookie('pending', res.data.data.pending);
                                navigator('/');
                            })
                            .catch((err) => { console.log('실패', err); alert('로그인 실패'); })
                        :
                        () => customerLogin(id, pw)
                            .then((res) => {
                                console.log('성공', res); setCookie('token', res.data.data.accessToken);
                                setCookie('who', res.data.data.who);
                                setCookie('loginId', res.data.data.loginId);
                                setCookie('name', res.data.data.name); navigator('/');
                            })
                            .catch((err) => { console.log('실패', err); alert('로그인 실패'); })} />
                    <Button text="회원가입" color="#7F7F7F" onClick={() => { navigator('/agree'); setCookie('isOwner', isOwner); }} />
                </div>
                <p onClick={() => navigator('/forgot')}>아이디/비밀번호 찾기</p>
                <br />
                <hr width="100%" />
                <p className="is-owner">{isOwner ? '고객님이신가요?' : '점주님이신가요?'}</p>
                <button className="is-owner-btn" onClick={handleButton}>{isOwner ? "고객" : "점주"} 로그인</button>
                <br />
            </LoginContainer>
        </>
    )
}

export default LoginPage;

const LoginContainer = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .description{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'GmarketSans';
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.04em;   
        color: #3D5A73;
    }
    .point{
       font-family: 'GmarketSans';
       font-style: normal;
       font-weight: 900;
       font-size: 18px;
       line-height: 40px;
       letter-spacing: 0.04em;   
       color: #EC7649; 
    }
    .login-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        line-height: 31px;
        letter-spacing: -0.04em;
        color: #222222;
        gap: 2px;
    }
    .login-form > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .login-form > p {
        font-weight: 600;
    }
    > p {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #7F7F7F;
    }
    .is-owner{
        margin-top: 20px;
        margin-bottom: 10px;
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
        margin-right: 5px;
    }
    .check input[type="checkbox"]::before {
        content: "✔";
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        transform: scale(0) translate(-50%, -50%);
        font-size: 12px;
        line-height: 14px;
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
        width: 100%;
        color: #E0E0E0; 
        opacity: 0.5;
    }
`
