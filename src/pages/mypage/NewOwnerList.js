import React, { useState } from "react";
import SearchBox from "../../components/common/SearchBox";
import styled from "styled-components";
import dummy from "../../data/data.json";
import active from '../../asset/images/active.svg';
import { useNavigate } from "react-router-dom";
import MoreButton from "../../components/common/MoreButton";


const NewOwnerList = () => {

    const [isowner, setOwner] = useState(true);

    const navigator = useNavigate();

    return (
        <>
            <Container>
                <p className="title">회원 정보</p>
                <br />
                <div className="button-box">
                    <SendButton onClick={() => setOwner(true)}>
                        <p>점주</p>
                    </SendButton>
                    <SendButton onClick={() => setOwner(false)}>
                        <p>일반회원</p>
                    </SendButton>
                </div>
                <br />
                <SearchBox />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {
                        isowner ?
                            dummy.owner.map((item, index) => (
                                <div className='apply-item' key={item.id} onClick={() => navigator(`/admin/menu/0/member/${item.id}`)}>
                                    <div>
                                        <div className='item-title'>{item.active ? <img src={active} alt='확인요청' width="10px" /> : null}{item.name}</div>
                                        <div className='item-category'>{item.store} / {item.tel}</div>
                                    </div>
                                </div>
                            ))
                            :
                            dummy.customer.map((item, index) => (
                                <div className='apply-item' key={item.id}>
                                    <div>
                                        <div className='item-title'>{item.active ? <img src={active} alt='확인요청' width="10px" /> : null}{item.nickname}</div>
                                        {/* <div className='item-detail'> */}
                                        <div className='item-category'>{item.name} / {item.email} / {item.tel}</div>
                                        {/* </div> */}
                                    </div>
                                    <div className="cupon-stamp">
                                        보유쿠폰 {item.cupon}개<br />
                                        스탬프 {item.stamp}개
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <MoreButton />
            </Container>
        </>
    )
}

export default NewOwnerList;

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
    .title{
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .button-box{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 10px;    
    }
    .apply-list{
        width: 100%;
        box-sizing: border-box;
    }
    .apply-list > hr {
        border: 1px solid #E0E0E0;
    }
    .apply-item {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #E0E0E0;
        padding: 20px 2px;
        gap: 5px;
    }
    .item-title{
        display: flex;
        gap: 5px;
        font-size: 16px;
        line-height: 20px;
    }
    // .item-detail{
    //     display: flex;
    //     color: #7F7F7F;
    // }
    .item-category{
        // flex: auto;
        font-size: 12px;
        color: #7F7F7F;
    }
    .cupon-stamp{
        display: flex;
        flex: auto;
        flex-direction: column;
        font-size: 12px;
        color: #FF9F74;
        justify-content: flex-end;
        align-items: right;
        font-sizd: 12px;
        text-align: right;
    }
`

const SendButton = styled.button`
    display: flex;
    width: 50%;
    height: 45px;
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

