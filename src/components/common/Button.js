import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    height: 60px;
    background: ${props => props.color};
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    border: none;
`

const Button = (props) => {
    const { text, color, onClick } = props;
    return (
        <ButtonContainer color={color} onClick={onClick}>
            {text}
        </ButtonContainer>
    )
}

export default Button;