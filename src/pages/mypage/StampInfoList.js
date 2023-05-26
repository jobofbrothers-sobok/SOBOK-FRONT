import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import SearchBox from "../../components/common/SearchBox";
import dummy from "../../data/data.json";
import ListItem from "../../components/common/ListItem";

const StampInfoList = () => {
    return (
        <>
            <Container>
                <p className="title">스탬프 정보 리스트</p>
                <br />
                <Button text="생성하기" color="#FF9F74" />
                <br />
                <SearchBox />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.stamp.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={item.reward}
                            isActive={true}
                            onClick={() => navigator(`/admin/menu/3/detail/${item.id}`)}
                        />
                    ))}
                </div>
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