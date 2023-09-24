import React, { useEffect, useState } from "react";
import styled from "styled-components";
import newsImg from "../asset/images/news-item.png";
import { getCafeMenu } from "../lib/api/main";


const CafeMenu = (props) => {

    const [menus, setMenus] = useState([]);

    const id = props.id;

    const getMenus = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true,
            }
        }
        const json = await getCafeMenu(id, config);
        console.log(json);
        setMenus(json.data.data);
    };

    useEffect(() => {
        getMenus();
    }, []);


    return (
        <Container>
            {menus[0] ? <img src={`https://b.sobok.co.kr/${menus[0]?.image}`} alt="메뉴 이미지" /> : null}
            <p className="menu-intro">메뉴 안내</p>
            <div className="menu-list">
                {menus.map((item) => <div key={item.id} className="menu-item">{item.content}</div>)}
            </div>
        </Container>
    )
}

export default CafeMenu;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    > img {
        width: 100%;
    }
    .menu-intro{
        margin-top: 20px;
        margin-bottom: 5px;
        color: #FF9F74;
    }
    .menu-list{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .menu-item{
        font-weight: 600;
    }
`

