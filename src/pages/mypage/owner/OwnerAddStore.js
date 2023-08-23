import React, { useState } from "react";
import styled from "styled-components";
import filterbtn from "../../../asset/images/filter-arrow.svg";
import Button from "../../../components/common/Button";
import { ownerAddProduct } from "../../../lib/api/mypage";
import { getCookie, setCookie } from "../../../lib/cookie";

const OwnerAddStore = () => {


    const id = getCookie('storeId');
    const [category, setCategory] = useState('커피원두');
    const [name, setName] = useState('');
    const [original, setOriginal] = useState('');
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscount] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState('');

    const onAddProduct = () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        };
        ownerAddProduct(id, category, name, price, discountPrice, url, file, config)
            .then((res) => { console.log(res); alert('스토어 상품을 성공적으로 등록하였습니다.') })
            .catch((err) => { console.log(err); alert('스토어 상품 등록에 실패하였습니다.') })
    }

    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">스토어 상품 등록</p>
                    <br /><br />
                    <p>카테고리<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <FilterBox name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="커피원두">커피원두</option>
                        <option value="디저트">디저트</option>
                    </FilterBox>
                    <br />
                    <p>상품명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <p>원가<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setOriginal(e.target.value)} />
                    <p>할인율<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setDiscount(e.target.value)} />
                    <p>할인가<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} />
                    <p>판매중인 상품 URL<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setUrl(e.target.value)} />
                    <p>상품 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <br />
                    <Button text="등록하기" color="#FF9F74" onClick={onAddProduct} />
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