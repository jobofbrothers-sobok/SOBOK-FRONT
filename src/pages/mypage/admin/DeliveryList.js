import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBox from "../../../components/common/SearchBox";
import ListItem from "../../../components/common/ListItem";
import dummy from "../../../data/data.json";
import MoreButton from "../../../components/common/MoreButton";
import { useNavigate } from "react-router-dom";
import { getDeliveryList } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";

const DeliveryList = () => {
    const navigator = useNavigate();

    const [deliveryList, setDeliveryList] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [keyword, setKeyword] = useState('');

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }

    const showDeliveryList = async () => {
        const json = await getDeliveryList(keyword, config);
        setDeliveryList(json.data.data);
    };

    useEffect(() => {
        showDeliveryList();
        console.log(deliveryList);
    }, [keyword]);

    return (
        <>
            <Container>
                <p className="title">배송 신청 리스트</p>
                <br />
                <SearchBox onChange={(e) => setSearchName(e.target.value)} onClick={() => setKeyword(searchName)} />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {deliveryList.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.customer}
                            category={item.reward}
                            onClick={() => navigator(`/admin/menu/3/detail/${item.id}`)}
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