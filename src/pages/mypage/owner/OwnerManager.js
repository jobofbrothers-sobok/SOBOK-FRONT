import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import kakao from "../../../asset/images/kakaoIcon.svg";
import message from "../../../asset/images/messageIcon.svg";
import filterbtn from "../../../asset/images/filter-arrow.svg";
import { postManagerForm } from "../../../lib/api/mypage";
import { getCookie } from "../../../lib/cookie";
import { useNavigate } from "react-router-dom";

const OwnerManager = () => {

    const [category, setCategory] = useState('신메뉴 홍보');
    const [isMessage, setMessage] = useState(false);
    const [isKakao, setKakao] = useState(false);
    const [content, setContent] = useState('');

    const navigation = useNavigate();

    const postManager = async () => {
        let config = {
            headers: {
                'Content-Type': `application/json`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        await postManagerForm(category, content, isMessage, isKakao, config)
            .then((res) => { console.log(res); alert('소복매니저 신청 완료되었습니다.'); navigation('/owner'); })
            .catch((err) => { console.log(err); alert('소복매니저 신청 실패하였습니다.') })
    }

    return (
        <>
            <Container>
                <div className="manager-form">
                    <p className="title">소복 매니저</p>
                    <div className="button-box">
                        <SendButton onClick={() => setMessage(!isMessage)} background={isMessage ? '#FF9F74' : '#7F7F7F'} color='#FFFFFF'>
                            <img src={message} alt="메시지아이콘" width="25px" />
                            <p>문자 메시지</p>
                        </SendButton>
                        <SendButton onClick={() => setKakao(!isKakao)} background={isKakao ? '#FEE500' : '#7F7F7F'} color={isKakao ? '#3D1B1A' : '#FFFFFF'}>
                            <img src={kakao} alt="메시지아이콘" width="25px" />
                            <p>카카오톡</p>
                        </SendButton>
                    </div>
                    <p className="input-name">카테고리</p>
                    <FilterBox name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="신메뉴 홍보">신메뉴 홍보</option>
                        <option value="이벤트 공지">이벤트 공지</option>
                    </FilterBox>
                    <p className="input-name">내용</p>
                    <InputBox rows="15" onChange={(e) => setContent(e.target.value)}>
                    </InputBox>
                    <Button text="신청하기" color="#FF9F74" onClick={postManager} />
                </div>
                <p className="bottom-text">*안내*<br />
                    담당자 확인 후 오전 11시, 오후 3시 중 희망하시는<br /> 시간에 전송됩니다. 발송 희망일시를 내용에 포함해주세요!<br /><br />
                    *문자 메세지*<br />
                    카페 방문 및 소복 스탬프 적립 이력이 있는 고객에게 요청하신<br />내용으로 일괄 전송됩니다.<br />
                    *카카오톡*<br />
                    카페 방문 및 소복 스탬프 적립 이력, 소복 카카오톡 채널 추가 고객에게 요청하신 내용으로 일괄 전송되며
                    발송 실패 시<br />문자 메시지로 전송됩니다.</p>
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
    background: ${(props) => props.background};
    border-radius: 5px;
    border: none;
    color: ${(props) => props.color};
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