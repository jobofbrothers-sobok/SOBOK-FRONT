import React from "react";
import styled from "styled-components";
import noImg from "../asset/images/noImg.svg";

const StoreItem = (props) => {

    const { image, name, info, discount, price, original, url } = props;

    // 대체 이미지 설정
    const handleImgError = (e) => {
        e.target.src = noImg
    }

    return (
        <ItemBox onClick={() => window.open(url, '_blank')}>
            <img className="item-img" src={image ? image : noImg} alt="아이템이미지" onError={handleImgError} />
            <div className="name">{name}</div>
            <div className="info">{info}</div>
            <div className="price-wrap">
                <div className="discount">{discount}%</div>
                <div className="price">{price}원</div>
                <div className="original">{original}원</div>
            </div>
        </ItemBox>
    )
}

export default StoreItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .item-img{
        width: 100%;
        height: 140px;
        object-fit: cover;
    }
    .name{
        font-size: 16px;
        font-weight: 600;
    }
    .info{
        font-size: 13px;
        color: #7F7F7F;
    }
    .price-wrap{
        margin-top: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .discount{
        font-size: 13px;
        color: #FF9F74;
        margin-right: 8px;
    }
    .price{
        font-size: 15px;
        font-weight: 600;
        margin-right: 5px;
    }
    .original{
        font-size: 13px;
        color: #E4E4E4;
        text-decoration: line-through;
    }
`