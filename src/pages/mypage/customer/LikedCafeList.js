import React, { useEffect, useState } from "react";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";
import Footer from "../../../components/common/Footer";
import CafeItem from "../../../components/CafeItem";
import MoreButton from "../../../components/common/MoreButton";
import { getCookie } from "../../../lib/cookie";
import { getCustomerActivity } from "../../../lib/api/mypage";
import { useNavigate } from "react-router-dom";

const LikedCafeList = () => {

    const navigation = useNavigate();

    const [likedCafe, setLikedCafe] = useState([]);

    console.log(likedCafe);

    const lat = getCookie('lat');
    const lon = getCookie('lon');

    const getActivity = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        const json = await getCustomerActivity(lon, lat, config);
        console.log(json);
        setLikedCafe(json.data.data.allLikeCafe);
    };

    useEffect(() => {
        getActivity();
    }, []);


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <div className="edit-form">
                    <br /><br />
                    <p className="title">내가 찜한 카페</p>
                    <br /><br />
                    <div className="cafe-list">
                        {likedCafe.map((item, index) => <>
                            <CafeItem
                                id={item.id}
                                key={item.id}
                                image={`https:/b.sobok.co.kr/${item.image}`}
                                title={item.storeName}
                                distance={item.distance >= 1000 ? Math.round(item.distance / 1000) + 'km' : Math.round(item.distance) + 'm'}
                                intro={item.description}
                                tag={item.category}
                                isLiked={item.isLiked}
                                onClick={() => navigation(`/detail/${item.id}`)}
                            />
                        </>)}
                    </div>
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default LikedCafeList;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .title{
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;            
    }
    .cafe-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
`



