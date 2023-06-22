import React, { useState } from "react";
import styled from "styled-components";
import mainImg from '../../asset/images/news-main.svg';
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import itemImg from "../../asset/images/store-item.svg";
import MoreButton from "../../components/common/MoreButton";
import StoreItem from "../../components/StoreItem";

const StorePage = () => {

    const [tag, setTag] = useState('전체');

    const items = [0, 0, 0, 0, 0];

    return (
        <>
            <NavBar />
            <Container>
                <div className="hero_main">
                    <img src={mainImg} className="hero_img" alt="메인이미지" />
                </div>
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
                <div className="tag-title">
                    <p>소복 스토어 전체 상품</p>
                    <hr />
                </div>
                <StoreList>
                    {items.map((item, index) =>
                        <StoreItem
                            img={itemImg}
                            name="*한정수량* 수제 뚜스 쿠기"
                            info="뚜스뚜스에서 매일 아침 직접 구운 세상에서 가장 맛있는 쿠키..."
                            discount="60"
                            price="6,400"
                            original="20,000" />)
                    }
                </StoreList>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default StorePage;

const StoreList = styled.div`
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
`

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
    .tag-title{
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 5px;
        >p{
            font-size: 22px;
            font-weight: 600;
        }
        >hr{
            color: #CCCCCC;
            opacity: 50%;
        }
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