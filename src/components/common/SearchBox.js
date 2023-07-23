import React from "react";
import styled from "styled-components";
import search from "../../asset/images/search.svg";

const SearchBox = (props) => {

    const { onChange, onClick } = props;

    return (
        <Container>
            <input type='text' placeholder='검색' onChange={onChange}/>
            <button onClick={onClick}><img src={search} alt='검색 버튼 이미지' /></button>
        </Container>
    )
}

export default SearchBox;

const Container = styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    background: #EBEBEB;
    opacity: 0.6;
    border-radius: 5px;
    // gap: 20px;
    > input {
        flex: auto;
        border: none;
        background: none;
        outline: none;
    }
    > button {
        // flex: auto;
        border: none;
        background: none;
    }
    > button > img {
        width: 18px;
    }
`