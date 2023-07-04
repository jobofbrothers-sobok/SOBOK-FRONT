import React from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import sobokFace from "../../../asset/images/sobok-face.svg";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../lib/cookie";

const OwnerPage = () => {

    const navigator = useNavigate();

    const menuList = ['담당자 정보 수정', '매장 정보 등록/수정', '매장 소식 등록', '매장 메뉴 등록', '스토어 상품 등록', '소복 매니저'];

    const name = getCookie('name');
    const store = getCookie('store');

    return (
        <>
            <NavBar />
            <OwnerContainer>
                <div className="mypage-topsection">
                    <img src={sobokFace} alt="소복 얼굴 이미지" width="60px" />
                    <p><span>{store}<br />{name}</span> 점주님 마이페이지</p>
                </div>
                <div className="menu-list">
                    {menuList.map((menu, index) => (
                        <div className='menu-item' onClick={() => {
                            navigator(`/owner/menu/${index}`)
                            console.log(index)
                        }}>
                            <p>{menu}</p>
                        </div>
                    ))}
                </div>
                <p>로그아웃</p>
            </OwnerContainer>
            <br />
            <Footer />
        </>
    )
}

export default OwnerPage;

const OwnerContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .mypage-topsection{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: #F9F9F9;
        padding: 25px 25px;
        gap: 10px;
    }
    .mypage-topsection > p > span {
        font-size: 19px;
        font-weight: 700;
        color: #FF9F74;
    }
    .mypage-topsection > p {
        font-size: 19px;
        font-weight: 700;
    }
    .menu-list {
        width: 100%;
        padding: 0 20px 20px;
        box-sizing: border-box;
    }
    .menu-item {
        border-bottom: 1px solid #E0E0E0;
        padding: 20px 2px;
    }
    .menu-item > p {
        font-size: 19px;
        font-weight: 400;
    }
    > p {
        font-size: 15px;
        color: #7F7F7F;
        text-decoration: underline;
        text-decoration-color: #7F7F7F;
    }
`