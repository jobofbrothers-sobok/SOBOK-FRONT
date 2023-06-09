import React from "react";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";
import Footer from "../../../components/common/Footer";
import CafeItem from "../../../components/CafeItem";
import MoreButton from "../../../components/common/MoreButton";

const LikedCafeList = () => {

    // 카페 리스트 임시
    const array = [0, 1, 2, 3, 4];

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">내가 찜한 카페</p>
                    <br /><br />
                    <div className="cafe-list">
                        {array.map((item, index) => <>
                            <CafeItem
                                key={item}
                                title="페이브 베이커리"
                                distance='55m'
                                intro='흑석역 카페 뚜스뚜스 브런치도 파는 베이커리 카페'
                                tag={['큰 테이블', '콘센트']}
                            />
                        </>)}
                    </div>
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default LikedCafeList;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .cafe-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
`



