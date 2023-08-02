import React, { useState } from "react";
import HeartButton from "./common/HeartButton";
import styled from "styled-components";
import cafeImg from "../asset/images/cafeImg.svg";
import locMark from "../asset/images/locMark.svg";
import { deleteLike, postLike } from "../lib/api/main";
import { getCookie } from "../lib/cookie";


const CafeItem = (props) => {

    const { id, title, distance, intro, tag, onClick, image, isLiked } = props;


    const who = getCookie('who');

    // 좋아요 버튼
    console.log(isLiked);
    const [like, setLike] = useState(isLiked);

    // 대체 이미지 설정
    const handleImgError = (e) => {
        e.target.src = cafeImg
    }

    // 찜 버튼 클릭시 DB 저장
    const handleHeartButton = () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        };
        // 찜 True일 때, 찜 해제
        if (like) {
            console.log('찜해제', id);
            setLike(!like);
            deleteLike(parseInt(id), config)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
        // 찜 False일 때, 찜 등록
        else {
            setLike(!like);
            postLike(parseInt(id), config)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    }

    return (
        <ItemBox onClick={onClick}>
            <div className="imgBox">
                <img className='cafe-img' src={image ? image : cafeImg} alt='카페대표이미지' onError={handleImgError} />
                {who === 'customer' ? <HeartButton like={like} onClick={(event) => { event.stopPropagation(); handleHeartButton() }} /> : <></>
                }
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
                {tag.slice(0, 3).map((item, index) => <div className="tag-wrap" key={index}>{item}</div>)}
            </div>
        </ItemBox>
    )
}

export default CafeItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .imgBox{
        width: 100%;
        position: relative;
    }
    .cafe-img{
        width: 100%;
        height: 160px;
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


