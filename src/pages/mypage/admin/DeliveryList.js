import React from "react";
import styled from "styled-components";
import SearchBox from "../../../components/common/SearchBox";
import ListItem from "../../../components/common/ListItem";
import dummy from "../../../data/data.json";
import MoreButton from "../../../components/common/MoreButton";
import { useNavigate } from "react-router-dom";

const DeliveryList = () => {
    const navigator = useNavigate();

    return (
        <>
            <Container>
                <p className="title">배송 신청 리스트</p>
                <br />
                <SearchBox />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.delivery.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.nickname}
                            category={item.date}
                            isActive={false}
                            onClick={() => navigator(`/admin/menu/4/detail/${item.id}`)}
                        />
                    ))}
                </div>
                <MoreButton />
            </Container>
        </>
    )
}

export default DeliveryList;

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
    .apply-list{
        width: 100%;
        box-sizing: border-box;
    }
    .apply-list > hr {
        border: 1px solid #E0E0E0;
    }
`