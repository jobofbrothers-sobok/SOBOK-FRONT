import React from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import BackButton from "../../components/common/BackButton";
import ListItem from "../../components/common/ListItem";
import dummy from "../../data/data.json";
import MoreButton from "../../components/common/MoreButton";
import { useNavigate } from "react-router-dom";

const NoticePage = () => {

    const navigator = useNavigate();

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <br /><br />
                <p className="title">공지사항</p>
                <br />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.notices.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={item.date}
                            onClick={() => navigator(`/notice/item/${item.id}`)}
                        />
                    ))}
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default NoticePage;

const Container = styled.div`
    width: 100%;
    padding: 0px 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .title{
        text-align: center;
        font-weight: 700;
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