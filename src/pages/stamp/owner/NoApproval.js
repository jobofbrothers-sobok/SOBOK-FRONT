import React from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import { useNavigate } from "react-router";
import logo from "../../../asset/images/sobok_logo_square_jua.png";
import Button from "../../../components/common/Button";
import Footer from "../../../components/common/Footer";


const NoApproval = () => {

    const navigator = useNavigate();

    return (
        <>
            <NavBar />
            <Container>
                <div className="info-box">
                    <br /><br />
                    <img src={logo} alt="소복 로고 이미지" width={"40%"} />
                    <div className="info-title">소복 무료 스탬프 서비스</div>
                    <div className="info-detail">지역별 소상공인 무료 스탬프 서비스입니다.</div>
                    <div className="info-detail2">스템프 서비스를 이용하고 싶으시면<br />하단의 신청 버튼을 선택해주세요.<br />(지역 확인 후 별도의 승인 절차 후 진행됩니다.)</div>
                </div>
                <Button text="신청하기" color="#FF9F74" onClick={() => navigator('/stamp/customer')} />
                <br />
            </Container>
            <Footer />
        </>
    )
}

export default NoApproval;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 70px;
    .info-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 70px;
    }
    .info-title{
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .info-detail{
        font-size: 19px;
        font-weight: 500;
        color: #FF9F74;
    }
    .info-detail2{
        text-align: center;
        color: #7F7F7F;
    }
`