import React from 'react';
import NavBar from '../../components/common/NavBar';
import BackButton from '../../components/common/BackButton';
import styled from 'styled-components';
import Footer from '../../components/common/Footer';
import active from '../../asset/images/active.svg';
import dummy from '../../data/data.json';
import SearchBox from '../../components/common/SearchBox';
import MoreButton from '../../components/common/MoreButton';
import { useNavigate } from 'react-router-dom';

const AdminManager = () => {

    const navigator = useNavigate();
    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">소복 매니저</p>
                <br />
                <SearchBox />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.manager.map(item => (
                        <div className='apply-item' onClick={() => navigator(`/admin/3/detail/${item.id}`)}>
                            <div className='item-title'><img src={active} alt='확인요청' width="10px" />{item.title}</div>
                            <div className='item-detail'>
                                <div className='item-category'>{item.category}</div>
                                <div className='item-date'>{item.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default AdminManager;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .title{
        text-align: center;
        font-weight: 1000;
        font-size: 25px;
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
    .apply-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #E0E0E0;
        padding: 20px 2px;
        gap: 5px;
    }
    .item-title{
        display: flex;
        gap: 5px;
        font-size: 16px;
    }
    .item-detail{
        display: flex;
        color: #7F7F7F;

    }
    .item-category{
        flex: auto;
    }
`