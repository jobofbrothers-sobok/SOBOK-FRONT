import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router";
import CafeItem from "../CafeItem";

const SideBar = (props) => {

  const { open, close } = props;

  const { islogin, setLogin } = useState(false);
  const { isAdmit, setAdmit } = useState(false);

  const navigator = useNavigate();

  // 카페 리스트 임시
  const array = [0, 1, 2, 3, 4];

  return (
    <>
      <SideBarContainer className={open ? 'open' : ''}>
        {open ?
          <SideBarWrap>
            <div className="menu-header">
              <p className="top-text"><span style={{ color: '#FF9F74', fontSize: '20px', fontWeight: '600' }}>로그인</span>을 해주세요</p>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
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
              <div className="menu-item" onClick={() => navigator('/stamp/customer')}>
                스탬프 서비스
              </div>
              <div className="menu-item" onClick={() => navigator('/store')}>
                소복 스토어
              </div>
              <div className="menu-item" onClick={() => navigator('/stamp/customer')}>
                공지사항
              </div>
              <div className="menu-item" onClick={() => navigator('/stamp/customer')}>
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