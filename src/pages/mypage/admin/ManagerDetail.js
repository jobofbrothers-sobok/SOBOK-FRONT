import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../../../components/common/InputBox";
import Button from "../../../components/common/Button";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import Footer from "../../../components/common/Footer";
import { useParams } from "react-router-dom";
import dummy from "../../../data/data.json";
import { getCookie } from "../../../lib/cookie";
import { getManagerDetail } from "../../../lib/api/admin";

const ManagerDetail = () => {

    const [isSend, setSend] = useState(false);
    const [manager, setManager] = useState('');
    const [contents, setContents] = useState('');

    const { id } = useParams();
    console.log(id);

    const { category, content, isMessage } = manager;
    console.log(content)

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }

    // 매니저 상세 조회
    const getManagerInfo = async () => {
        const json = await getManagerDetail(id, config);
        setManager(json.data.data);
    };

    useEffect(() => {
        getManagerInfo()
        setContents(content)
    }, []);

    const goSendPage = () => {
        setSend(!isSend);
    }


    const editContent = (e) => {
        setContents(e.target.value);
    }

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">{isMessage ? '문자' : '카톡'}서비스 신청</p>
                <br /><br />
                <div className="detail-box">
                    <p className="info-text">요청 정보</p>
                    <hr />
                    <p className="detail-text">카테고리</p>
                    {category}
                    <hr />
                    <p className="detail-text">내용</p>
                    {isSend ?
                        <>
                            <p>{contents}</p>
                            <br />
                            <div className="button-box">
                                <Button text="문자 일괄전송" color="#FF9F74" /><Button text="카톡 일괄전송" color="#FEE500" textColor="#3D1B1A" />
                            </div>
                        </>
                        :
                        <>
                            <InputBox rows="10" value={contents} onChange={editContent} />
                            <br />
                        </>
                    }
                    <Button text={isSend ? "일괄전송" : "전송페이지로"} color="#FF9F74" onClick={goSendPage} />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default ManagerDetail;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
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
    }
    .detail-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .info-text{
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;         
    }
    .detail-text{
        color: #7F7F7F;
    }
    .button-box{
        width: 100%;
        display: flex;
        gap: 5px;
    }
`
