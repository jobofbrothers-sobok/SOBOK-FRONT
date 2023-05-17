import React from "react";
import styled from "styled-components";

const InputBox = (props) => {

    const { rows, value, onChange } = props;

    return (
        <Container rows={rows} value={value} onChange={onChange} />
    )
}

export default InputBox;

const Container = styled.textarea`
   border: 1px solid #D9D9D9;
   padding: 15px 10px;
   line-height: 20px;
`