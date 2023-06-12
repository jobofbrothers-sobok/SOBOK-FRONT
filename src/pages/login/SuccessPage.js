import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../asset/images/sobok_logo_square_jua.png"
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {

    const navigator = useNavigate();

    // 점주: true, 고객: false
    const [isOwner, setOwner] = useState(true);

    return (
        <Container>
            <div className="info-box">
                <img src={logo} alt="소복 로고 이미지" width={"40%"} />
                <div className="info-title">회원가입이 완료되었습니다.</div>
                {isOwner ?
                    <>
                        <div className="info-detail">가입 정보 확인 후 메일 안내 드리겠습니다.</div>
                        <div className="info-detail2">회원가입 신청일 기준 2 ~ 3일정도 시간이<br />소요됩니다. 가입을 진심으로 환영합니다.</div>
                    </>
                    :
                    <>
                        <div className="info-title">회원가입이 완료되었습니다.</div>
                        <div className="info-detail">내 주변의 카페 맛집을 확인해보세요!</div>
                        <div className="info-detail2">자주가는 카페를 저장해보시고,<br />피드를 남겨주세요 ~</div>
                    </>
                }

            </div>
            <Button text="메인페이지로" color="#FF9F74" onClick={() => navigator('/join')} />
        </Container>
    )
}

export default SuccessPage;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    .info-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 170px;
        margin-bottom: 80px;
    }
    .info-title{
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #222222;
    }
    .info-detail{
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #FF9F74;
;
    }
    .info-detail2{
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: center;
        color: #7F7F7F;
    }
`