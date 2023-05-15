import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import sobokFace from "../../asset/images/sobok-face.svg";
import Footer from "../../components/common/Footer";

const AdminPage = () => {

    const menuList = ['점주/스템프 신규 신청 리스트', '스템프 정보', '소복 회원 정보', '소복 매니저 신청 리스트', '배송 신청 리스트', '공지글 작성하기', '문의사항 등록 리스트']
    return (
        <>
            <NavBar />
            <AdminContainer>
                <div className="mypage-topsection">
                    <img src={sobokFace} alt="소복 얼굴 이미지" width="60px" />
                    <p><span>최고관리자</span> 마이페이지</p>
                </div>
                <div className="menu-list">
                    {menuList.map(menu => (
                        <div className='menu-item'>
                            <p>{menu}</p>
                        </div>
                    ))}
                </div>
                <p>로그아웃</p>
            </AdminContainer>
            <br />
            <Footer />
        </>
    )
}

export default AdminPage;

const AdminContainer = styled.div`
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
        font-weight: 900;
        color: #FF9F74;
    }
    .mypage-topsection > p {
        font-size: 19px;
        font-weight: 900;
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
        font-weight: 500;
    }
    > p {
        font-size: 15px;
        color: #7F7F7F;
        text-decoration: underline;
        text-decoration-color: #7F7F7F;
    }


`