import React, { useState } from "react";
import mainImg from '../../asset/images/news-main.svg';
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import NewsItem from "../../components/NewsItem";
import MoreButton from "../../components/common/MoreButton";

const NewsPage = () => {

    const [isall, setAll] = useState(true);
    const [tag, setTag] = useState('전체');

    const dummy = [1, 2, 3];

    return (
        <>
            <NavBar />
            <Container>
                <div className="hero_main">
                    <img src={mainImg} className="hero_img" alt="메인이미지" />
                </div>
                <div className="button-box">
                    <SendButton color={isall ? '#FF9F74' : '#7F7F7F'} onClick={() => setAll(true)}>
                        <p>전체 매장</p>
                    </SendButton>
                    <SendButton color={isall ? '#7F7F7F' : '#FF9F74'} onClick={() => setAll(false)}>
                        <p>찜한 매장</p>
                    </SendButton>
                </div>
                <TagList>
                    <TagButton className={tag === '전체' ? 'active' : ''} onClick={() => setTag('전체')}>
                        전체
                    </TagButton>
                    <TagButton className={tag === '신메뉴' ? 'active' : ''} onClick={() => setTag('신메뉴')}>
                        신메뉴 소식
                    </TagButton>
                    <TagButton className={tag === '할인' ? 'active' : ''} onClick={() => setTag('할인')}>
                        할인/이벤트
                    </TagButton>
                    <TagButton className={tag === '일상' ? 'active' : ''} onClick={() => setTag('일상')}>
                        일상
                    </TagButton>
                </TagList>
                <NewsList>
                    {dummy.map((i) =>
                        <NewsItem
                            key={i}
                            title="3년만에 신메뉴가 나왔습니다 !"
                            content="3년동안 개발한 스페셜티가 드디어 론칭하였습니다. 1일 100잔 한정판매이니, 늦게와서 못드시는 일이 없도록 합시다."
                            tag="신메뉴 소식"
                            date="2023-01-01"
                        />
                    )}
                </NewsList>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default NewsPage;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    gap: 20px;
    .hero_img{
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .button-box{
        width: 100%;
        box-sizing: border-box;
        padding: 0px 20px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

const SendButton = styled.button`
    display: flex;
    width: 50%;
    height: 45px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 8px;
    background: ${(props) => props.color};
    border-radius: 5px;
    border: none;
    color: white;
    > p {
        font-size: 15px;
    }
`
const TagList = styled.div`
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    white-space: nowrap;
    display: flex;
    gap: 5px;
    overflow-x: auto;
`

const TagButton = styled.button`
    display: inline-block;
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: #7F7F7F;
    border: 1px solid #CCCCCC;
    &:active,
    &:focus,
    &.active {
        background: #FF9F74;
        color: #FFFFFF;
        border: none;
  }
`
const NewsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`