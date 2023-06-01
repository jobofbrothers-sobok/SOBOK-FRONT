import React from "react";
import styled from "styled-components";
import newsImg from '../asset/images/news-item.svg';

const NewsItem = (props) => {

    const { itemImg, title, content, tag, date } = props;

    console.log(itemImg)
    return (
        <NewsContainer>
            <div className="news-item">
                <img src={newsImg} alt="소식이미지" />
                <p className="title">{title}</p>
                <p className="content">{content}</p>
                <div className="bottom-wrapper">
                    <div className="tag">{tag}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </NewsContainer>
    )
}

export default NewsItem;

const NewsContainer = styled.div`
    .news-item {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        gap: 10px;
    }
    .news-item > img {
        width: 100%;
    }
    .news-item > .title {
        font-size: 16px;
        font-weight: 600;
    }
    .news-item > .content {
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