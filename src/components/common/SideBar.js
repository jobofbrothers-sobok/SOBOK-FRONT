import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router";
import CafeItem from "../CafeItem";
import isLogin from "../../lib/router/isLogin";
import Modal from "./Modal";
import logo from '../../asset/images/sobok_logo_square_jua.png';
import Button from "./Button";
import { removeCookie } from "../../lib/cookie";

const SideBar = (props) => {

  const { open, close } = props;

  const navigator = useNavigate();

  // 로그인 유무
  const auth = isLogin();


  // 로그인 모달 관련
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }


  // 카페 리스트 임시
  const array = [0, 1, 2, 3, 4];

  return (
    <>
      <SideBarContainer className={open ? 'open' : ''}>
        {open ?
          <SideBarWrap>
            <div className="menu-header">
              <p className="top-text" onClick={() => navigator('/login')}><span style={{ color: '#FF9F74', fontSize: '20px', fontWeight: '600' }}>{auth ? '사용자' : '로그인'}</span>{auth ? '님 반갑습니다.' : '을 해주세요'}</p>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
            {auth ? <div className="logout-btn" onClick={() => { removeCookie('token'); window.location.replace(`/`); }}>로그아웃</div> : null}
            <SearchBox />
            <br />
            <SearchList>
              <p className="list-title">최근 검색어</p>
              <div className="search-list">
                <div className="search-item">숙대 카페<p className='delete'>&times;</p></div>
                <div className="search-item">숙대 카페<p className='delete'>&times;</p></div>
                <div className="search-item">숙대 카페<p className='delete'>&times;</p></div>
                <div className="search-item">숙대 카페<p className='delete'>&times;</p></div>
                <div className="search-item">숙대 카페<p className='delete'>&times;</p></div>
              </div>
            </SearchList>
            <br />
            <MenuList>
              <div className="menu-item" onClick={() => navigator('/news')}>
                카페 소식 모아보기
              </div>
              <div className="menu-item" onClick={auth ? () => { console.log('auth', auth); navigator('/stamp/customer') } : openModal}>
                스탬프 서비스
              </div>
              <div className="menu-item" onClick={() => navigator('/store')}>
                소복 스토어
              </div>
              <div className="menu-item" onClick={() => navigator('/notice')}>
                공지사항
              </div>
              <div className="menu-item" onClick={() => navigator('/inquiry')}>
                문의사항
              </div>
              <div className="menu-item" onClick={() => navigator('/customer')}>
                마이페이지
              </div>
            </MenuList>
            <br />
            {/* <ResultWrapper>
              <p className="list-title">검색결과<span className="list-title2"> 10개의 카페</span></p>
              <br /><hr /><br />
              <div className="cafe-list">
                {array.map((item, index) => <>
                  <CafeItem
                    key={item}
                    title="페이브 베이커리"
                    distance='55m'
                    intro='흑석역 카페 뚜스뚜스 브런치도 파는 베이커리 카페'
                    tag={['큰 테이블', '콘센트']}
                  />
                </>)}
              </div>
            </ResultWrapper> */}
          </SideBarWrap>
          : null
        }
        {/* 로그인 모달 */}
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <ContentBox>
            <img src={logo} alt="소복로고이미지" width="50%" />
            <p className="title">로그인이 필요한 서비스입니다.</p><br /><br /><br />
            <Button text="로그인" />
          </ContentBox>
        </Modal>
      </SideBarContainer >
    </>
  )
}

export default SideBar;

const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .cafe-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
  }
  .list-title{
      font-size: 20px;
      font-weight: 600;
  }
  .list-title2{
      font-size: 20px;
      font-weight: 500;
      color: #7F7F7F;
  }
  >hr{
    color: #D9D9D9
  }
`

const SideBarContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  z-index: 5;
  padding: 12px;
  background-color: #FFFFFF;
  height: 100%;
  width: 100%;
  right: -100%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
  overflow-y: auto;
`

const SideBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 20px;
  .menu-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .top-text{
    font-size: 20px;
  }
  .close{
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    color: #FF9F74;
    background-color: transparent;
    border: none;
  }
  .logout-btn{
    width: 100%;
    margin-bottom: 10px;
  }
`
const SearchList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .list-title{
    color: #7F7F7F;
    font-size: 17px;
  }
  .search-list{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    display: flex;
    gap: 5px;
    overflow-x: auto;
  }
  .search-item{
    display: flex;
    box-sizing: border-box;
    padding: 5px 10px;
    border: 1px solid #EBEBEB;
    border-radius: 40px;
    gap: 5px;
    align-items: center;
  }
  .delete{
    // font-size: 20px;
    color: #FF9F74
  }
`
const MenuList = styled.div`
  width: 100%;
  .menu-item{
    border-bottom: 1px solid #E0E0E0;
    padding: 20px 2px;
    font-size: 19px;
    font-weight: 400;
  }
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        font-size: 18px;
        font-weight: 600;
    }
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .edit-form > p {
        font-weight: 600;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`