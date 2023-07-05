import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import { getCookie } from "../../../lib/cookie";
import { ownerAddMenu } from "../../../lib/api/mypage";

const OwnerAddMenu = () => {

    const id = getCookie('storeId');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState();
    console.log(id);


    const onAddMenu = () => {
        console.log('클릭');
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        };
        console.log('클릭2');
        ownerAddMenu(id, title, content, file, config)
            .then((res) => { console.log(res); alert('메뉴를 성공적으로 등록하였습니다.') })
            .catch((err) => { console.log(err); alert('메뉴 등록에 실패하였습니다.') })
        console.log('클릭3');
    }

    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">매장 메뉴 등록</p>
                    <br /><br />
                    <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => { setTitle(e.target.value); console.log(title) }} />
                    <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <InputBox rows="15" onChange={(e) => { setContent(e.target.value); console.log(content) }} />
                    <br />
                    <p>메뉴 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => { setFile(e.target); console.log(file); }} />
                    <Button text="등록하기" color="#FF9F74" onClick={onAddMenu} />
                </div>
            </Container>
        </>
    )
}

export default OwnerAddMenu;

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
const InputBox = styled.textarea`
    border: 1px solid #D9D9D9;
`