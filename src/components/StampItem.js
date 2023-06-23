import React from "react";
import styled from "styled-components";
import stamp from "../asset/images/stamp.svg";
import nostamp from "../asset/images/nostamp.svg";

const StampItem = (props) => {

    const { id, checked, cafe, date, time } = props;
    return (
        <ItemBox key={id}>
            <img src={checked ? stamp : nostamp} alt="소복스탬프" />
            <p className="cafe">{cafe}</p>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
        </ItemBox>
    )
}

export default StampItem;

const ItemBox = styled.div`
    width: 100%;
    height: 180px;
    padding: 20px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #E4E4E4;
    >img {
        width: 100px;
        margin-bottom: 10px;
    }
    >p{
        font-weight: 700;
        color: #FF9F74;
    }
    .time{
        color: #49637A;
    }    
`