import React from "react";
import styled from "styled-components";
import backImg from "../../asset/images/arrow.svg";

const BackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #222222;
    > p {
        font-size: 15px;
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