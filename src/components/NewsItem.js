import React from "react";
import styled from "styled-components";
import newsImg from '../asset/images/news-item.png';

const NewsItem = (props) => {

    const { itemImg, title, content, tag, date } = props;

    console.log(itemImg)
    return (
        <ItemBox>
            <img src={newsImg} alt="소식이미지" />
            <p className="title">{title}</p>
            <p className="content">{content}</p>
            <div className="bottom-wrapper">
                <div className="tag">{tag}</div>
                <div className="date">{date}</div>
            </div>
        </ItemBox>
    )
}

export default NewsItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 10px;
    > img {
        width: 100%;
    }
    .title {
        font-size: 16px;
        font-weight: 600;
    }
    .content {
        color: #7F7F7F;
    }
    .bottom-wrapper {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .tag {
        color: #FF9F74;
    }
    .date{
        color: #7F7F7F;
    }
`