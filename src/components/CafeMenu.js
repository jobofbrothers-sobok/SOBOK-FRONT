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
            <img src={newsImg} alt="메뉴 이미지" />
            <p className="menu-intro">메뉴 안내</p>
            <div className="menu-list">
                {menus.map((item) => <div key={item.id} className="menu-item">{item.content}</div>)}
                {/* <div className="menu-item">Espresso Croccantino (에소티노)</div>
                <div className="menu-item">Espresso Crontino (에소프레소 크로칸티노)</div>
                <div className="menu-item">Espresso Croccantino (에레소 칸티노)</div>
                <div className="menu-item">Espresso Crontino (에노)</div>
                <div className="menu-item">Espresso Crcantino (에레소 크로칸티노)</div>
                <div className="menu-item">Espresso Croccantino (에 크로칸티노)</div> */}
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

