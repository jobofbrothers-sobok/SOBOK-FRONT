import React from "react";
import { useParams } from "react-router-dom";
import dummy from "../../data/data.json";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";

const DeliveryDetail = () => {

    const { id } = useParams();
    console.log(id);

    const { nickname, reward, name, tel, address, ps } = dummy.delivery.find((x) => x.id == id)

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-form">
                    <br />
                    <p className="title">고법짱짱123</p>
                    <div className="info-div">
                        <p className="info-title">배송 신청 정보</p>
                        <hr />
                        <div className="info-item">
                            <p className="info-name">리워드 명</p>
                            <p className="info-value">{reward}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">주문자 이름</p>
                            <p className="info-value">{name}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">핸드폰 번호</p>
                            <p className="info-value">{tel}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">주소</p>
                            <p className="info-value">{address}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">배송시 남기실 말씀</p>
                            <p className="info-value">{ps}</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="button-box">
                    <Button text="목록으로" color="#7F7F7F" />
                    <Button text="완료" />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default DeliveryDetail;

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
    .button-box{
        width: 100%;
        display: flex;
        gap: 8px;
    }
`