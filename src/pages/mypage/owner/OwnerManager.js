import React from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import kakao from "../../../asset/images/kakaoIcon.svg";
import message from "../../../asset/images/messageIcon.svg";
import filterbtn from "../../../asset/images/filter-arrow.svg";

const OwnerManager = () => {

    return (
        <>
            <Container>
                <div className="manager-form">
                    <p className="title">소복 매니저</p>
                    <div className="button-box">
                        <SendButton>
                            <img src={message} alt="메시지아이콘" width="25px" />
                            <p>문자 메시지</p>
                        </SendButton>
                        <SendButton>
                            <img src={kakao} alt="메시지아이콘" width="25px" />
                            <p>카카오톡</p>
                        </SendButton>
                    </div>
                    <p className="input-name">카테고리</p>
                    <FilterBox name="category">
                        <option value="new-menu">신메뉴 홍보</option>
                        <option value="event">이벤트 공지</option>
                    </FilterBox>
                    <p className="input-name">내용</p>
                    <InputBox rows="15">
                    </InputBox>
                    <Button text="신청하기" color="#FF9F74" />
                </div>
                <p className="bottom-text">최고관리자 확인 후 스탬프 이용고객에게<br />
                    일괄 전송 됩니다.</p>
            </Container>
        </>
    )
}

export default OwnerManager;

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
    .manager-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .button-box{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 10px;    
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .input-name {
        font-size: 16px;
        margin-bottom: -10px;
    }
    .bottom-text{
        margin-top: 20px;
        text-align: center;
        font-size: 15px;
        letter-spacing: -0.08em;
        color: #7F7F7F;

    }
`

const SendButton = styled.button`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 8px;
    background: #7F7F7F;
    border-radius: 5px;
    border: none;
    color: white;
    > p {
        font-size: 15px;
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