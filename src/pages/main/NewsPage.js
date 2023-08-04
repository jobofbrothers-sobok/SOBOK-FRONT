import React, { useEffect, useState } from "react";
import mainImg from '../../asset/images/news-main.png';
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import NewsItem from "../../components/NewsItem";
import MoreButton from "../../components/common/MoreButton";
import { getAllCafeNews, getLikedCafeNews } from "../../lib/api/main";
import { getCookie } from "../../lib/cookie";

const NewsPage = () => {

    const [isall, setAll] = useState(true);
    const [tag, setTag] = useState('all');


    const [news, setNews] = useState([]);

    // 매장 소식 가져오기
    const getCafeNews = async (isall) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        }
        if (isall) {
            const json = await getAllCafeNews(tag, config);
            console.log(json);
            setNews(json.data.data);
        }
        else {
            console.log(config);
            const json = await getLikedCafeNews(tag, config)
                .catch((err) => { alert('로그인 후 이용 가능합니다.'); setAll(true); });
            if (json) {
                console.log(json);
                setNews(json.data.data);
            }
        }
    };

    useEffect(() => {
        getCafeNews(isall);
    }, [tag, isall]);

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
                    <TagButton className={tag === 'all' ? 'active' : ''} onClick={() => setTag('all')}>
                        전체
                    </TagButton>
                    <TagButton className={tag === 'menu' ? 'active' : ''} onClick={() => setTag('menu')}>
                        신메뉴 소식
                    </TagButton>
                    <TagButton className={tag === 'sale' ? 'active' : ''} onClick={() => setTag('sale')}>
                        할인/이벤트
                    </TagButton>
                </TagList>
                <NewsList>
                    {news.map((item) =>
                        <NewsItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            tag={item.category}
                            date={item.createdTime.substr(0, 10)}
                            image={`https://b.sobok.co.kr/${item.image}`}
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