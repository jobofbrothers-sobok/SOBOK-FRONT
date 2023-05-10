import React from "react";
import styled from "styled-components";
import backImg from "../../asset/images/arrow.svg";

const BackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    color: #222222;
    > img{
        margin-left: 10px;
    }
`

const BackButton = () => {

    return (
        <BackContainer>
            <img src={backImg} width="10px" alt="뒤로가기 버튼" />
            <p>뒤로가기</p>
        </BackContainer>
    )

}

export default BackButton;