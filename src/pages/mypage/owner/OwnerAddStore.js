import React, { useState } from "react";
import styled from "styled-components";
import filterbtn from "../../../asset/images/filter-arrow.svg";
import Button from "../../../components/common/Button";
import { ownerAddProduct } from "../../../lib/api/mypage";

const OwnerAddStore = () => {

    const [category, setStore] = useState('');
    const [name, setSummary] = useState('');
    const [price, setTime] = useState('');
    const [discountPrice, setDayoff] = useState('');
    const [url, setLink] = useState('');
    const [file, setImage] = useState('');

    const onAddProduct = () => {
        ownerAddProduct(category, name, price, discountPrice, url, file)
        .then((res) => console.log(res))
    }

    return (
        <>
            <Container>
                <div className="edit-form">
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
        </>
    )
}

export default OwnerAddStore;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
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
    .edit-form > p {
        font-weight: 600;
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