import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import SearchBox from '../../../components/common/SearchBox';
import MoreButton from '../../../components/common/MoreButton';
import { useNavigate } from 'react-router-dom';
import ListItem from '../../../components/common/ListItem';
import { getAllManager } from '../../../lib/api/admin';
import { getCookie } from '../../../lib/cookie';

const AdminManager = () => {

    const navigator = useNavigate();

    const [managers, setManagers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [keyword, setKeyword] = useState('');

    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
            'withCredentials': true,
        }
    }

    const getManagerList = async () => {
        const json = await getAllManager(keyword, config);
        setManagers(json.data.data);
        console.log(json.data.data);
    };

    useEffect(() => {
        getManagerList();
    }, [keyword]);

    return (
        <>
            <Container>
                <p className="title">소복 매니저</p>
                <br />
                <SearchBox onChange={(e) => setSearchName(e.target.value)} onClick={() => setKeyword(searchName)} />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {managers.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={(item.isMessage ? '문자' : '카톡') + ' / ' + item.category}
                            date={item.timestamp.substr(0, 10)}
                            isActive={true}
                            onClick={() => navigator(`/admin/menu/2/detail/${item.id}`)}
                        />
                    ))}
                </div>
                <MoreButton />
            </Container>
        </>
    )
}

export default AdminManager;

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