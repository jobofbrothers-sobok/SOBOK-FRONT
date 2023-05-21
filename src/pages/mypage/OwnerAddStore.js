import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import filterbtn from "../../asset/images/filter-arrow.svg";
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";

const OwnerAddStore = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">스토어 상품 등록</p>
                    <br /><br />
                    <p>카테고리<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <FilterBox name="category">
                        <option value="new-menu">커피원두</option>
                        <option value="event">디저트</option>
                    </FilterBox>
                    <br />
                    <p>상품명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>가격<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>할인가<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>판매중인 상품 URL<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>상품 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" />
                    <br />
                    <Button text="등록하기" color="#FF9F74" />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default OwnerAddStore;

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
        font-weight: 1000;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .edit-form > p {
        font-weight: 900;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`

const FilterBox = styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 15px;
    gap: 8px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    appearance: none;
    background:url(${filterbtn}) no-repeat right 24px center;
    background-size: 12px;
`