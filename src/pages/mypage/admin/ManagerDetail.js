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
import { getManagerDetail, postKakao, postMessage } from "../../../lib/api/admin";


const ManagerDetail = () => {

    const [isSend, setSend] = useState(false);
    const [manager, setManager] = useState('');
    const [content, setContent] = useState('');


    const { id } = useParams();

    const { title, category, isMessage, writerId } = manager;

    console.log(manager);

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
        setContent(json.data.data.content);
    };

    useEffect(() => {
        getManagerInfo();
    }, []);

    // 전송 페이지 이동
    const goSendPage = () => {
        setSend(!isSend);
    }

    // 내용 수정
    const editContent = (e) => {
        setContent(e.target.value);
    }

    // 문자 전송
    const sendMessage = async () => {
        await postMessage(writerId, content, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    // 카톡 전송
    const sendKaKao = async () => {
        await postKakao(writerId, content, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">{title}</p>
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
                            <p>{content}</p>
                            <br />
                            {/* <div className="button-box"> */}
                            <Button text="문자 일괄전송" color="#FF9F74" onClick={sendMessage} /><Button text="카톡 일괄전송" color="#FEE500" textColor="#3D1B1A" onClick={sendKaKao} />
                            {/* </div> */}
                        </>
                        :
                        <>
                            <InputBox rows="10" value={content} onChange={editContent} />
                            <br />
                        </>
                    }
                    {isSend ? null : <Button text="전송페이지로" color="#FF9F74" onClick={goSendPage} />}
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
