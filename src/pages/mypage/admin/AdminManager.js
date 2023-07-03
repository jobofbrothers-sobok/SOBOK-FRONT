import React from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import SearchBox from '../../../components/common/SearchBox';
import MoreButton from '../../../components/common/MoreButton';
import { useNavigate } from 'react-router-dom';
import ListItem from '../../../components/common/ListItem';

const AdminManager = () => {

    const navigator = useNavigate();


    return (
        <>
            <Container>
                <p className="title">소복 매니저</p>
                <br />
                <SearchBox />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.manager.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            date={item.date}
                            isActive={true}
                            onClick={() => navigator(`/admin/menu/3/detail/${item.id}`)}
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