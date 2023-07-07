import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import Footer from "../../../components/common/Footer";
import { postOwnerApproval, readDetailClient, readDetailOwner } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";
import { useNavigate, useParams } from "react-router-dom";

const MemberDetail = () => {

    const isowner = getCookie('isowner') === 'true' ? true : false;
    console.log(isowner);

    const navigator = useNavigate();

    // 점주, 고객 id
    const { id } = useParams();

    const [ownerInfo, setOwnerInfo] = useState('');
    const [clientInfo, setClientInfo] = useState('');

    // 점주 상세 정보
    const { store, director, phone, email, address, licenseNumber, licenseImage, authorized } = ownerInfo;

    // 고객 상세 정보
    const { name, stampCount, couponCount } = clientInfo;

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }
    // 점주 상세 정보 조회
    const getDetailOwner = async (id) => {
        console.log('id', id);
        const json = await readDetailOwner(id, config);
        setOwnerInfo(json.data.data);
    };

    // 고객 상세 정보 조회
    const getDetailClient = async (id) => {
        const json = await readDetailClient(id, config);
        setClientInfo(json.data.data);
    };

    // 점주 회원가입 승인
    const OwnerApproval = async (id) => {
        await postOwnerApproval(id, config)
            .then((res) => { console.log(res); alert('점주 회원가입 승인 완료되었습니다.'); navigator('/admin/menu/0'); })
            .catch((err) => { console.log(err); alert('점주 회원가입 승인 실패하였습니다.'); })
    }

    useEffect(() => {
        if (isowner) {
            getDetailOwner(id);
        }
        else {
            getDetailClient(id);
        }
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-form">
                    <br />
                    <p className="title">{isowner ? director : name}</p>
                    {isowner && !authorized ? <Button text="권한 승인" color="#7F7F7F" onClick={() => OwnerApproval(id)} /> : <></>}
                    <div className="info-div">
                        <p className="info-title">회원 정보</p>
                        <hr />
                        {isowner ?
                            <>
                                <div className="info-item">
                                    <p className="info-name">매장명</p>
                                    <p className="info-value">{store}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자명</p>
                                    <p className="info-value">{director}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자 번호</p>
                                    <p className="info-value">{phone}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">담당자 이메일</p>
                                    <p className="info-value">{email}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">가게 주소</p>
                                    <p className="info-value">{address}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">사업자 등록 번호</p>
                                    <p className="info-value">{licenseNumber}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">사업자 등록증</p>
                                </div>
                            </>
                            :
                            <>
                                <div className="info-item">
                                    <p className="info-name">이름</p>
                                    <p className="info-value">{name}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">이메일</p>
                                    <p className="info-value">{clientInfo?.email}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">핸드폰 번호</p>
                                    <p className="info-value">{clientInfo?.phone}</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">스템프 정보</p>
                                    <p className="info-value">{stampCount} 스템프 적립</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-name">쿠폰 사용</p>
                                    <p className="info-value">{couponCount}장 사용</p>
                                </div>
                            </>
                        }

                    </div>
                    <Button text="목록으로" color="#FF9F74" onClick={() => navigator('/admin/menu/0')} />
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