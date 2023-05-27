import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Footer from "../../components/common/Footer";

const MemberDetail = () => {

    const [isowner, setOwner] = useState(true)

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-form">
                    <br />
                    <p className="title">고법짱짱123</p>
                    {isowner ? <Button text="권한 승인" color="#7F7F7F" /> : <></>}
                    <div className="info-div">
                        <p className="info-title">회원 정보</p>
                        <hr />
                        {isowner ?
                            <>
                                <div className="info-item">
                                    <p className="info-name">매장명</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자명</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자 번호</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자 이메일</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">가게 주소</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">사업자 등록 번호</p>
                                    <p className="info-value">메가커피</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">사업자 등록증</p>
                                    <input type="file" />
                                </div>
                            </>
                            :
                            <>
                                <div className="info-item">
                                    <p className="info-name">이름</p>
                                    <p className="info-value">고법</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">이메일</p>
                                    <p className="info-value">rhqjq@naver.com</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">핸드폰 번호</p>
                                    <p className="info-value">010-6270-1143</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">스템프 정보</p>
                                    <p className="info-value">34 스템프 적립</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">쿠폰 사용</p>
                                    <p className="info-value">3장 사용</p>
                                </div>
                            </>
                        }

                    </div>
                    <Button text="목록으로" color="#FF9F74" />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default MemberDetail;

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
    .title{
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;
        margin-bottom: 10px;            
    }
    .info-title{
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222; 
        margin-bottom: 10px;
    }
    .info-item{
        border-bottom: 1px solid #E0E0E0;
        padding: 15px 2px;
        line-height: 20px;
    }
    .info-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .info-name{
        font-size: 13px;
        color: #7F7F7F;
    }
    .info-value{
        font-weight: 500;
        color: #222222;
    }
`