import React from 'react';
import styled from 'styled-components';
import HeartImg from '../../asset/images/heartImg.svg';
import EmptyHeartImg from '../../asset/images/emptyHeartImg.svg';

const HeartButton = ({ like, onClick }) => {
    return (
        <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />
    );
};

export default HeartButton;

const Heart = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 10px;
`