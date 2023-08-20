import React from "react";
import styled from "styled-components";
import newsImg from '../asset/images/news-item.png';
import noImg from "../asset/images/noImg.svg";

const NewsItem = (props) => {

    const { image, title, content, tag, date } = props;

    // 대체 이미지 설정
    const handleImgError = (e) => {
        e.target.src = noImg
    }

    return (
        <ItemBox>
            <img src={image ? image : newsImg} alt="소식이미지" onError={handleImgError} />
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
        height: 200px;
        object-fit: cover;
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