import React from "react";
import styled from "styled-components";
import newsImg from "../asset/images/news-item.png";
import profileImg from "../asset/images/sobok-face.svg";

const ReviewItem = (props) => {

    const { image, nickname, date, content } = props;

    return (
        <ItemBox>
            <img src={image ? image : newsImg} alt="리뷰 이미지" />
            <p className="review-content">{content}</p>
            <div className="user-box">
                <div className="profile">
                    <img src={profileImg} alt="프로필 이미지" />
                    <p className="user-name">{nickname}</p>
                </div>
                <div className="date">{date}</div>
            </div>
        </ItemBox>
    )
}

export default ReviewItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .review-item > img {
        width: 100%;
    }
    .review-content{
        color: #7F7F7F;
    }
    .user-box{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .profile{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }
    .profile > img {
        width: 30px;
    }
    .profile > p {
        font-size: 17px;
        font-weight: 500;
    }
    .date{
        color: #7F7F7F;
    }
`