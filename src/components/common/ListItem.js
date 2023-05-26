import React from "react";
import styled from "styled-components";
import active from '../../asset/images/active.svg';

const ListItem = (props) => {

    const { id, title, category, date, isActive, onClick } = props

    return (
        <ListBox onClick={onClick}>
            <div className='apply-item'>
                <div className='item-title'>{isActive ? <img src={active} alt='확인요청' width="10px" /> : null}{title}</div>
                <div className='item-detail'>
                    <div className='item-category'>{category}</div>
                    <div className='item-date'>{date}</div>
                </div>
            </div>
        </ListBox>
    )
}

export default ListItem;

const ListBox = styled.div`
    .title{
        text-align: center;
        font-weight: 1000;
        font-size: 25px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
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