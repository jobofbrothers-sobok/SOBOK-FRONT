import React, { useEffect, useState } from "react";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";
import MoreButton from "../../../components/common/MoreButton";
import Footer from "../../../components/common/Footer";
import ReviewItem from "../../../components/ReviewItem";
import { getCookie } from "../../../lib/cookie";
import { useNavigate } from "react-router-dom";
import { getCustomerActivity } from "../../../lib/api/mypage";

const MyReviewList = () => {

    const [reviews, setReviews] = useState([]);

    const name = getCookie('name');
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
        setReviews(json.data.data.allStoreReview);
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
                    <p className="title">내가 작성한 리뷰</p>
                    <br /><br />
                    <div className="review-list">
                        {reviews.map((item, index) =>
                            <ReviewItem
                                key={item.id}
                                nickname={name}
                                content={item.content}
                                date={item.timestamp.substr(0, 10)}
                                image={`https://b.sobok.co.kr/${item.image}`}
                            />
                        )}
                    </div>
                </div>
                <MoreButton />
            </Container>
            <Footer />
        </>
    )
}

export default MyReviewList;

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
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`