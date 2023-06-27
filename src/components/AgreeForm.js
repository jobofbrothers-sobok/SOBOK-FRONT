import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import { setCookie } from "../lib/cookie";

const AgreeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .all-agree-box{
        display: flex;
        align-items: center;
        height: 60px;
        background: #7F7F7F;
        padding-left: 15px;
        line-height: 33px;
        letter-spacing: -0.04em;
        color: #FFFFFF;
    }
    > input {
        border: 1px solid #D9D9D9;
        border-radius: 4px;
    }
    input[type="checkbox"] {
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        width: 15px;
        height: 15px;
        cursor: pointer;
        outline: none !important;
        border: 1px solid #9999;
        vertical-align: middle;
        margin-right: 5px;
    }
    input[type="checkbox"]::before {
        content: "✔";
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        transform: scale(0) translate(-50%, -50%);
        font-size: 12px;
        line-height: 14px;
    }
    input[type="checkbox"]:checked {
        background-color: #FF9F74;
        border-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
    input[type="checkbox"]:checked::before {
        border-radius: 4px;
        transform: scale(1) translate(-50%, -50%)
    }
`

const InputBox = styled.textarea`
    border: 1px solid #D9D9D9;
`

const AgreeForm = () => {

    const navigator = useNavigate();

    const [checkList, setCheckList] = useState([]);

    const checkAll = (e) => {
        console.log(e.target.checked);
        e.target.checked
            ? setCheckList(['essential', 'select'])
            : setCheckList([]);
    }

    const check = (e) => {
        console.log(e.target.checked);
        e.target.checked
            ? setCheckList([...checkList, e.target.name])
            : setCheckList(checkList.filter((choice) => choice !== e.target.name))
    }

    return (
        <AgreeContainer>
            <div className="all-agree-box">
                <input type="checkbox" id="checkbox" name="all" onChange={checkAll} checked={checkList.length === 2 ? true : false} />
                <label className="remember-me" >모두 동의(선택 정보 포함)</label>
            </div>
            <div className="agree-box1">
                <input type="checkbox" id="checkbox" name="essential" onChange={check} checked={checkList.includes('essential') ? true : false} />
                <label className="remember-me" >[필수] 홈페이지 이용약관의 내용에 동의합니다.</label>
            </div>
            <InputBox rows="6"></InputBox>
            <div className="agree-box2">
                <input type="checkbox" id="checkbox" name="select" onChange={check} checked={checkList.includes('select') ? true : false} />
                <label className="remember-me" >[선택] 광고성 정보 수신 및 마케팅 활용 동의</label>
            </div>
            <InputBox rows="6"></InputBox>
            <Button text="다음으로" color="#FF9F74" onClick={checkList.includes('essential') ? () => { navigator('/join'); setCookie('select', checkList.includes('select')) }  : console.log('필수 정보 선택 필요')} />
        </AgreeContainer>
    )

}

export default AgreeForm;