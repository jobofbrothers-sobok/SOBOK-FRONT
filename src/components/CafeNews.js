import React, { useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const CafeNews = () => {

    const [tag, setTag] = useState('전체');

    // 임시 배열
    const dummy = [1, 2, 3];
    console.log(dummy);

    return (
        <>
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