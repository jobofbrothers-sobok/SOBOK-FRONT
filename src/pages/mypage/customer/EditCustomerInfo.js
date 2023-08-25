import React, { useState } from "react";
import Button from "../../../components/common/Button";
import BackButton from "../../../components/common/BackButton";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import styled from "styled-components";
import { customerEdit, customerWithdraw } from "../../../lib/api/mypage";
import { getCookie, removeCookie, setCookie } from "../../../lib/cookie";
import { useNavigate } from "react-router";

const EditCustomerInfo = () => {
    let config = {
        headers: {
            'Content-Type': `multipart/form-data`,
            'Authorization': `Bearer ${getCookie('token')}`,
        }
    }

    const id = getCookie('loginId');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');


    const onEditInfo = async () => {
        await customerEdit(pw, name, email, phone, file, config)
            .then((res) => { console.log(res); alert('회원정보가 성공적으로 수정되었습니다.'); setCookie('name', name); navigation(`/customer`); })
            .catch((err) => { alert(err, '회원정보 수정 실패'); })
    }

    const navigation = useNavigate();


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">회원 정보수정</p>
                    <br /><br />
                    <p>프로필 이미지 등록하기<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <br />
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <hr /><br />
                    <p>아이디<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <p>{id}</p><br />
                    <p>비밀번호<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <input type="password" onChange={(e) => setPw(e.target.value)} />
                    <p>비밀번호 확인<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="password" />
                    <p>이름<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <p>이메일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>핸드폰 번호<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="tel" onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <Button text="수정완료" color="#FF9F74" onClick={onEditInfo} />
                </div>
                <br />
                <p onClick={() => customerWithdraw(config)
                    .then((res) => { console.log(res); alert('회원탈퇴가 성공적으로 완료되었습니다.'); removeCookie('token'); navigation('/') })
                    .catch((err) => console.log(err))}>회원탈퇴</p>
            </Container >
            <Footer />
        </>
    )
}

export default EditCustomerInfo;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
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
    .store-loc-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .store-loc-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .store-search {
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 13px;
    }
    > p {
        font-size: 15px;
        color: #7F7F7F;
        text-decoration: underline;
        text-decoration-color: #7F7F7F;
    }
`