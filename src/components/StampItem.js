import React from "react";
import styled from "styled-components";
import stamp from "../../../asset/images/stamp.svg";

const StampItem = (props) => {

    const { id, cafe, date, time } = props;
    return (
        <ItemBox>
            <img src={stamp} alt="소복스탬프" />
            <p className="cafe">{cafe}</p>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
        </ItemBox>
    )
}

export default StampItem;

const ItemBox = styled.div`
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #E4E4E4;
    >img {
        width: 60%;
        margin-bottom: 10%;
    }
    >p{
        font-weight: 700;
        color: #FF9F74;
    }
    .time{
        color: #49637A;
    }    
`