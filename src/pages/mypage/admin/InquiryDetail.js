import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../../../components/common/BackButton";
import Footer from "../../../components/common/Footer";
import Button from "../../../components/common/Button";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import { getInquiry } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";

const InquiryDetail = () => {

    const { id } = useParams();
    console.log(id);

    const navigation = useNavigate();

    const [inquiry, setInquiry] = useState([]);

    const { title, content, timestamp, who, name, phone } = inquiry;

    const getInquiryDetail = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        }
        const json = await getInquiry(config);
        console.log(json);
        setInquiry(json.data.data.find((x) => x.id == id));
    };

    useEffect(() => {
        getInquiryDetail();
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">{title}</p>
                <br />
                <div className="info-item">
                    <p className="info-value">{who} / {name} / {phone}</p>
                </div>
                <br />
                <div className="content">
                    {content}
                </div>
                <div className="date">
                    {timestamp?.substr(0, 10)}
                </div>
                <br />
                <Button text="목록으로" onClick={() => navigation('/admin/menu/5')} />
            </Container>
            <Footer />
        </>
    )
}

export default InquiryDetail;

const Container = styled.div`
    width: 100%;
    padding: 0px 20px 20px;
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
    }
    .info-item{
        border-bottom: 1px solid #E0E0E0;
        line-height: 20px;
    }
    .info-value{
        font-weight: 500;
        color: #222222;
    }
    .date{
        width: 100%;
        font-size: 13px;
        margin-top: 10px;
        color: #7F7F7F;
    }
`