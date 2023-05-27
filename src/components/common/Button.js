import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 100%;
    height: ${props => props.height};
    background: ${props => props.color};
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    letter-spacing: -0.04em;
    color: ${props => props.textColor};
    border: none;
    border-radius: ${props => props.radius};
    flex: auto;
`

const Button = (props) => {
    const { text, color, onClick, textColor, radius, height } = props;
    return (
        <ButtonContainer color={color ? color : "#FF9F74"} onClick={onClick} textColor={textColor ? textColor : "#FFFFFF"} radius={radius ? radius : "0"} height={height ? height : "60px"}>
            {text}
        </ButtonContainer>
    )
}

export default Button;