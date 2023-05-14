import React from "react";
import styled from "styled-components";
import logo2 from "../../asset/images/sobok_logo_rect_jua.png";
import menuImg from "../../asset/images/hamburger.svg";

const NavContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
`
const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    align-items: center;
    > button {
        border: none;
        background-color: transparent;
    }
`
const NavBar = () => {
    return (
        <NavContainer>
            <NavWrapper>
                <img className="logo2Img" src={logo2} width="150px" height="auto" alt="소복 로고 이미지" />
                <button><img className="menuImg" src={menuImg} width="30px" alt="메뉴 버튼" /></button>
            </NavWrapper>
        </NavContainer >
    )
}

export default NavBar;