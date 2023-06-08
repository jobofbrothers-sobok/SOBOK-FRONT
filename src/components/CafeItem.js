import React, { useState } from "react";
import HeartButton from "./common/HeartButton";
import styled from "styled-components";
import cafeImg from "../asset/images/cafeImg.svg";
import locMark from "../asset/images/locMark.svg";


const CafeItem = (props) => {

    const { title, distance, intro, tag } = props;

    // 좋아요 버튼
    const [like, setLike] = useState(false);


    return (
        <ItemBox>
            <div className="imgBox" style={{ backgroundImage: `url(${cafeImg})` }}>
                <HeartButton like={like} onClick={(event) => { event.stopPropagation(); setLike(!like); }} />
            </div>
            <div className="cafe-summary">
                <div className="cafe-title">{title}</div>
                <div className="cafe-loc">
                    <img src={locMark} alt="위치아이콘" width="13px" />
                    {distance}
                </div>
            </div>
            <div className="cafe-desc">{intro}</div>
            <div className="tag-list">
                {tag.map((item, index) => <div className="tag-wrap" key={index}>{item}</div>)}
            </div>
        </ItemBox>
    )
}

export default CafeItem;

const ItemBox = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    gap: 5px;
    // max-width: 50%;
    >img {
        width: 100%;
    }
    .imgBox{
        width: 100%;
        height: 180px;
        position: relative;
        background-image: url(${cafeImg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 5px;
    }
    .cafe-summary{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cafe-title{
        font-size: 18px;
        font-weight: 600;
    }
    .cafe-loc{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
    }
    .cafe-desc{
        display: flex;
        flex-wrap: wrap;
        color: #7F7F7F;
        font-size: 16px;
    }
    .tag-list{
        display: flex;
        gap: 5px;
    }
    .tag-wrap{
        background: #FF9F74;
        border-radius: 18px;
        color: #FFFFFF;
        padding: 5px 10px;
        font-size: 13px;
    }
`


