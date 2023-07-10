import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import logo from "../../../asset/images/sobok_logo_square_jua.png";
import Button from "../../../components/common/Button";
import BackButton from "../../../components/common/BackButton";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router";
import { getCode } from "../../../lib/api/stamp";
import { getCookie } from "../../../lib/cookie";

const StampCode = () => {

    const navigator = useNavigate();

    const [code, setCode] = useState('');

    const getStampCode = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        const json = await getCode(config);
        setCode(json.data.data.randNum);
    };

    useEffect(() => {
        getStampCode();
    }, [])

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="info-box">
                    <div className="info-title">스탬프 적립</div>
                    <br />
                    <img src={logo} alt="소복 로고 이미지" width={"40%"} style={{ marginBottom: "15px" }} />
                    <div className="info-code">{code}</div>
                    <div className="info-detail2">카페 직원분에게 해당 번호를 알려주세요.</div>
                </div>
                <Button text="요청완료" color="#FF9F74" onClick={() => navigator('/stamp/customer')} />
            </Container>
            <br /><br />
            <Footer />
        </>
    )
}

export default StampCode;

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
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #222222;
    }
    .info-code{
        font-weight: 700;
        font-size: 38px;
        text-align: center;
        color: #FF9F74;
;
    }
    .info-detail2{
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #7F7F7F;
    }
`

