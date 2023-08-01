import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router";
import CafeItem from "../CafeItem";
import isLogin from "../../lib/router/isLogin";
import Modal from "./Modal";
import logo from '../../asset/images/sobok_logo_square_jua.png';
import Button from "./Button";
import { getCookie, removeCookie } from "../../lib/cookie";
import { postSidebarSearch } from "../../lib/api/main";

const SideBar = (props) => {

  const { open, close } = props;

  const navigator = useNavigate();

  // 로그인 유무
  const auth = isLogin();
  const who = getCookie('who');
  const name = getCookie('name');
  const x = getCookie('lat');
  const y = getCookie('lon');
  const joinAuth = getCookie('joinauth') === 'true' ? true : false;
  const stampAuth = getCookie('stampauth') === 'true' ? true : false;
  const pending = getCookie('pending') === 'true' ? true : false;


  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);
  const [searchedCafe, setSearchedCafe] = useState([]);
  const [search, setSearch] = useState(false);


  // 로그인 모달 관련
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getCookie('token')}`,
    }
  };

  const searchCafe = async () => {
    console.log(config);
    console.log(x, y);
    const json = await postSidebarSearch(x, y, keyword, config);
    console.log('키워드 검색', json);
    setSearchedCafe(json.data.data);
    console.log(keyword);
    if (keyword) {
      setKeywordList([keyword, ...keywordList]);
    }
    setSearch(true);
  }

  const deleteKeyword = (item) => {
    setKeywordList(keywordList.filter((choice) => choice !== item))
  }


  console.log(who);


  // 카페 리스트 임시
  const array = [0, 1, 2, 3];

  return (
    <>
      <SideBarContainer className={open ? 'open' : ''}>
        {open ?
          <SideBarWrap>
            <div className="menu-header">
              <p className="top-text" onClick={auth ? null : () => navigator('/login')}><span style={{ color: '#FF9F74', fontSize: '20px', fontWeight: '600' }}>{auth ? name : '로그인'}</span>{auth ? '님 반갑습니다.' : '을 해주세요'}</p>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
            {auth ? <div className="logout-btn" onClick={() => { removeCookie('token'); removeCookie('pending'); window.location.replace(`/`); }}>로그아웃</div> : null}
            <SearchBox value={keyword} onChange={(e) => setKeyword(e.target.value)} onClick={searchCafe} />
            <br />
            <SearchList>
              <p className="list-title">최근 검색어</p>
              <div className="search-list">
                {keywordList.map((item) =>
                  <div className="search-item" onClick={() => { setKeyword(item); console.log('키워드', keyword); searchCafe(); console.log('검색'); }}>{item}<p className='delete' onClick={(e) => { e.stopPropagation(); deleteKeyword(item); }}>&times;</p></div>
                )}
              </div>
            </SearchList>
            <br />
            <ResultWrapper>
              {search ? <><p className="list-title">검색결과<span className="list-title2"> {searchedCafe?.length}개의 카페</span></p>
                <br /><hr /><br />
                <div className="cafe-list">
                  {searchedCafe?.map((item, index) => <>
                    <CafeItem
                      key={item.id}
                      image={`https://b.sobok.co.kr/${item.image}`}
                      title={item.storeName}
                      distance='55m'
                      intro={item.description}
                      tag={item.category}
                    />
                  </>)}
                </div></> : <></>}
            </ResultWrapper>
            <MenuList>
              <div className="menu-item" onClick={() => navigator('/news')}>
                카페 소식 모아보기
              </div>
              {
                who !== 'manager' ? <div className="menu-item" onClick={auth ?
                  (who === 'customer' ? () => navigator('/stamp/customer') : (pending ? openModal : (stampAuth ? () => navigator('/stamp/owner') : () => navigator('/stamp/owner/no-approval')))) : openModal}>
                  스탬프 서비스
                </div> : <></>
              }
              <div className="menu-item" onClick={() => navigator('/store')}>
                소복 스토어
              </div>
              <div className="menu-item" onClick={() => navigator('/notice')}>
                공지사항
              </div>
              <div className="menu-item" onClick={auth ? () => navigator('/inquiry') : openModal}>
                문의사항
              </div>
              {auth ? <div className="menu-item" onClick={who === 'manager' ? () => navigator('/admin') : who === 'owner' ? (joinAuth ? () => navigator('/owner') : openModal) : () => navigator('/customer')}>
                마이페이지
              </div> : null}
            </MenuList>
            <br />

          </SideBarWrap>
          : null
        }
        {/* 로그인 모달 */}
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <ContentBox>
            <img src={logo} alt="소복로고이미지" width="50%" />
            {
              // 점주 회원가입 미승인시
              who === 'owner' && !joinAuth ?
                <>
                  <p className="title">회원가입 승인 검토중입니다.</p><br />
                  <p className="info-detail2">회원가입 신청일 기준 2~3일 정도 시간이 소요됩니다.</p><br /><br />
                  <Button text="확인완료" onClick={closeModal} />
                </>
                :
                // 점주 스탬프 승인 검토중
                who === 'owner' && pending ?
                  <>
                    <p className="title">스탬프 승인 검토중입니다.</p><br />
                    <p className="info-detail2">스탬프 신청일 기준 2~3일 정도<br />시간이 소요됩니다.</p><br /><br />
                    <Button text="확인완료" onClick={closeModal} />
                  </>
                  :
                  // 로그인 안했을 때
                  <>
                    <p className="title">로그인이 필요한 서비스입니다.</p><br /><br /><br />
                    <Button text="로그인" onClick={() => navigator('/login')} />
                  </>
            }
          </ContentBox>

        </Modal>
      </SideBarContainer >
    </>
  )
}

export default SideBar;

const ResultWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
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
  z-index: 10;
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
  overflow-y: hidden;
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
  overflow-y: auto;
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
    .info-detail2{
        text-align: center;
        color: #7F7F7F;
    }
`