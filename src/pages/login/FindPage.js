import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../asset/images/sobok_logo_square_jua.png"
import Button from "../../components/common/Button";
import { customerFindpw, ownerFindpw } from "../../lib/api/auth";
import NavBar from "../../components/common/NavBar";
import { getCookie } from "../../lib/cookie";

const FindPage = () => {

    const [email, setEmail] = useState('');

    const isOwner = getCookie('isOwner') === 'true' ? true : false;

    const onHandleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    return (
        <>
            <NavBar />
            <Container>
                <div className="info-box">
                    <img src={logo} alt="소복 로고 이미지" width={"40%"} />
                    <div className="info-title">회원정보 찾기</div>
                    <div className="info-detail">회원가입 시 등록하신 이메일 주소를 입력해 주세요.<br />해당 이메일로 아이디와 비밀번호 정보를 보내드립니다.</div>
                </div>
                <p>E-mail 주소<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                <input type="text" placeholder="Email" onChange={onHandleEmail} />
                <Button text="인증메일 보내기" color="#FF9F74" onClick={isOwner ?
                    () => ownerFindpw(email)
                        .then((res) => { console.log(res); alert('전송된 이메일을 확인해주세요.'); })
                        .catch((err) => { console.log(err); alert('이메일 전송에 실패했습니다.'); }) :
                    () => customerFindpw(email)
                        .then((res) => { console.log(res); alert('전송된 이메일을 확인해주세요.'); })
                        .catch((err) => { console.log(err); alert('이메일 전송에 실패했습니다.'); })} />
            </Container>
        </>
    )
}

export default FindPage;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    .info-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
        margin-bottom: 30px;
    }
    .info-title{
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.1em;
        text-align: center;
        color: #222222;
    }
    .info-detail{
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #7F7F7F;
    }
    > p {
        font-size: 17px;
        letter-spacing: -0.04em;
        margin-bottom: 8px;
    }
    > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 10%;
    }
`