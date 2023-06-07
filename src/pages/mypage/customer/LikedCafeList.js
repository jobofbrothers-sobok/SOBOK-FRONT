import React from "react";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";
import Footer from "../../../components/common/Footer";

const LikedCafeList = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">내가 찜한 카페</p>
                    <br /><br />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default LikedCafeList;

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
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
`



