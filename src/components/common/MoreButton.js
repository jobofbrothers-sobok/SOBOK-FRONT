import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
    padding: 10px 60px;
    background: none;
    border: 3px solid #FF9F74;
    border-radius: 80px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #FF9F74;
    margin-top: 30px;
    margin-bottom: 40px;
`

const MoreButton = () => {
    return (
        <ButtonBox>
            더보기+
        </ButtonBox>
    )
}

export default MoreButton;

