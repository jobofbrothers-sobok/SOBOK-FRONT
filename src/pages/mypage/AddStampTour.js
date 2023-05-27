import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import SearchBox from "../../components/common/SearchBox";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";

const AddStampTour = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <p className="title">스템프 투어 추가</p>
                <div className="info-div">
                    <p>투어 키워드<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>투어 제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>리워드<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>이미지 첨부<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" />
                    <p>카페 등록<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <SearchBox />
                    <Button text="추가하기" />
                </div>
            </Container>
            <Footer />
        </>

    )
}

export default AddStampTour;

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
        margin-top: 40px;
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;
        margin-bottom: 10px;            
    }
    .info-div{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .info-div > p {
        font-weight: 600;
    }
    .info-div > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`