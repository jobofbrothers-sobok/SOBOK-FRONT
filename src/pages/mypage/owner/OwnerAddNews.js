import React, { useState } from "react";
import styled from "styled-components";
import filterbtn from "../../../asset/images/filter-arrow.svg";
import Button from "../../../components/common/Button";
import { ownerAddMenu, ownerAddNews } from "../../../lib/api/mypage";
import { getCookie } from "../../../lib/cookie";

const OwnerAddNews = () => {

    const id = getCookie('id');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState();

    const onAddNews = () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        ownerAddNews(id, category, title, content, image, config)
            .then((res) => { console.log(res); alert('소식이 성공적으로 추가되었습니다.') })
            .catch((err) => { console.log(err); alert('소식 추가에 실패하였습니다.') })
    }

    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">매장 소식 등록</p>
                    <br /><br />
                    <p className="input-name">카테고리<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <FilterBox name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="new-menu">신메뉴 홍보</option>
                        <option value="event-notice">이벤트 공지</option>
                    </FilterBox>
                    <br />
                    <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="15" onChange={(e) => setContent(e.target.value)} />
                    <br />
                    <p>홍보 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <br />
                    <Button text="등록하기" color="#FF9F74" onClick={onAddNews} />
                </div>
            </Container >
        </>
    )
}

export default OwnerAddNews;

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

const InputBox = styled.textarea`
    border: 1px solid #D9D9D9;
`