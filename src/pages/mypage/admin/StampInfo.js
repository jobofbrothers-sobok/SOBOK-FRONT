import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import SearchBox from "../../../components/common/SearchBox";
import ListItem from "../../../components/common/ListItem";
import MoreButton from "../../../components/common/MoreButton";
import { useNavigate } from "react-router-dom";
import { getAllStampTour } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";

const StampInfoList = () => {

    const navigator = useNavigate();

    const [tourList, setTourList] = useState([]);

    const [searchName, setSearchName] = useState('');
    const [keyword, setKeyword] = useState('');

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }

    const showTourList = async () => {
        const json = await getAllStampTour(keyword, config);
        setTourList(json.data.data);
    };

    useEffect(() => {
        showTourList();
        console.log(tourList);
    }, [keyword]);

    return (
        <>
            <Container>
                <p className="title">스탬프 정보 리스트</p>
                <br />
                <Button text="생성하기" color="#FF9F74" radius="5px" height="50px" onClick={() => navigator('/admin/menu/1/add-stamp-tour')} />
                <br />
                <SearchBox onChange={(e) => setSearchName(e.target.value)} onClick={() => setKeyword(searchName)} />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {tourList.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={item.reward}
                            isActive={true}
                        />
                    ))}
                </div>
                <MoreButton />
            </Container>
        </>
    )
}

export default StampInfoList;

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