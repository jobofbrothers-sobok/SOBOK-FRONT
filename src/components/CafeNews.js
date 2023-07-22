import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { getCafeNews } from "../lib/api/main";

const CafeNews = (props) => {

    const [tag, setTag] = useState('all');

    const [news, setNews] = useState([]);

    const id = props.id;
    
    // 카페 상세 정보 가져오기
    const getNews = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true,
            }
        }
        const json = await getCafeNews(id, tag, config);
        console.log(json);
        setNews(json.data.data);
    };

    useEffect(() => {
        getNews();
    }, [tag]);

    return (
        <>
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
                {/* <TagButton className={tag === '일상' ? 'active' : ''} onClick={() => setTag('일상')}>
                    일상
                </TagButton> */}
            </TagList>
            <NewsList>
                {news.map((item) =>
                    <NewsItem
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        tag={item.category}
                        date={item.createdTime.substr(0, 10)}
                    />
                )}
            </NewsList>
        </>
    )
}

export default CafeNews;

const TagList = styled.div`
    width: 100%;
    padding: 20px;
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