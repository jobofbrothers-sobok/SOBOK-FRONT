import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import dummy from "../../../data/data.json";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import Button from "../../../components/common/Button";
import Footer from "../../../components/common/Footer";
import { getDeliveryInfo } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";

const DeliveryDetail = () => {

    const { id } = useParams();
    console.log(id);

    const [deliveryInfo, setDeliveryInfo] = useState('');

    const { reward, customer, phone, address, detailAddress, message } = deliveryInfo;

    const navigation = useNavigate();


    // 고객 상세 정보 조회
    const showDeliveryInfo = async (id) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        const json = await getDeliveryInfo(id, config);
        setDeliveryInfo(json.data.data);
    };

    useEffect(() => {
        showDeliveryInfo(id);
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-form">
                    <br />
                    <p className="title">{customer}</p>
                    <div className="info-div">
                        <p className="info-title">배송 신청 정보</p>
                        <hr />
                        <div className="info-item">
                            <p className="info-name">리워드 명</p>
                            <p className="info-value">{reward}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">주문자 이름</p>
                            <p className="info-value">{customer}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">핸드폰 번호</p>
                            <p className="info-value">{phone}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">주소</p>
                            <p className="info-value">{address}<br />{detailAddress}</p>
                        </div>
                        <div className="info-item">
                            <p className="info-name">배송시 남기실 말씀</p>
                            <p className="info-value">{message}</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="button-box">
                    <Button text="목록으로" color="#7F7F7F" onClick={() => navigation('/admin/menu/3')} />
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