import React from "react";
import styled from "styled-components";

const AgreeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    .all-agree-box{
        display: flex;
        align-items: center;
        height: 60px;
        background: #7F7F7F;
        padding-left: 15px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 33px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
    }
    .sobok-btn{
        height: 60px;
        background: #FF9F74;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
        border: none;
    }
`

const AgreeForm = () => {
    return (
        <AgreeContainer>
            <div className="all-agree-box">
                <input type="checkbox" id="checkbox" />
                <label for="remember-me">모두 동의(선택 정보 포함)</label>
            </div>
            <div className="agree-box1">
                <input type="checkbox" id="checkbox" />
                <label for="remember-me">[필수] 홈페이지 이용약관의 내용에 동의합니다.</label>
            </div>
            <textarea className="use-term" rows="6"></textarea>
            <div className="agree-box2">
                <input type="checkbox" id="checkbox" />
                <label for="remember-me">[선택] 광고성 정보 수신 및 마케팅 활용 동의</label>
            </div>
            <textarea className="use-term" rows="6"></textarea>
        </AgreeContainer>
    )

}

export default AgreeForm;