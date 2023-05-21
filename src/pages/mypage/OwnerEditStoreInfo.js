import React from "react";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import styled from "styled-components";
import Footer from "../../components/common/Footer";
import all from "../../asset/images/category/all.svg";
import Button from "../../components/common/Button";

const OwnerEditStoreInfo = () => {


    const onHandleCategory = (event) => {
        const { name, value, checked } = event.target;

        console.log(name, value, checked);
        // console.log(checked)
    }

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">매장 정보 등록/수정</p>
                    <br /><br />
                    <p>매장명<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <input type="text" />
                    <p>매장설명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>영업시간<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>휴무일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>홈페이지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" />
                    <p>매장 썸네일 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" />
                    <div className="category-container">
                        <p className="category-title">카테고리 설정</p>
                        <hr />
                        <div className="category-list">
                            <input
                                type="checkbox"
                                id="icon1"
                                name="category"
                                value="all"
                                onClick={onHandleCategory}
                            />
                            <label htmlFor="icon1">
                                <img src={all} alt="all" />
                                <p>all</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon2"
                                name="category"
                                value="dog"
                                onClick={onHandleCategory}
                            />
                            <label htmlFor="icon2">
                                <img src={all} alt="dog" />
                                <p>애견동반</p>
                            </label>
                        </div>
                    </div>
                    <br />
                    <Button text="신청하기" color="#FF9F74" />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default OwnerEditStoreInfo;

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
    .store-loc-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .store-loc-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .store-search {
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 13px;
    }
    .category-list > input {
        display: none;
    }
`