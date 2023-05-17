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
    color: ${props => props.textColor};
    border: none;
    flex: auto;
`

const Button = (props) => {
    const { text, color, onClick, textColor } = props;
    return (
        <ButtonContainer color={color} onClick={onClick} textColor={textColor ? textColor : "#FFFFFF"}>
            {text}
        </ButtonContainer>
    )
}

export default Button;