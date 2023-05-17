import React from "react";
import styled from "styled-components";
import backImg from "../../asset/images/arrow.svg";
import { useNavigate } from "react-router-dom";

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

const BackButton = (props) => {

    const navigator = useNavigate();

    return (
        <BackContainer onClick={() => navigator(-1)}>
            <img src={backImg} width="10px" alt="뒤로가기 버튼" />
            <p>뒤로가기</p>
        </BackContainer>
    )

}

export default BackButton;