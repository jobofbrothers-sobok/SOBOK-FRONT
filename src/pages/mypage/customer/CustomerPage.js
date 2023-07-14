import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import Footer from "../../../components/common/Footer";
import sobokFace from "../../../asset/images/sobok-face.svg";
import ReviewItem from "../../../components/ReviewItem";
import { useNavigate } from "react-router-dom";
import CafeItem from "../../../components/CafeItem";
import { getCookie } from "../../../lib/cookie";
import { getCustomerActivity } from "../../../lib/api/mypage";

const CustomerPage = () => {

    const [likedCafe, setLikedCafe] = useState([]);
    const [reviews, setReviews] = useState([]);

    // 카페 리스트 임시
    const array = [0, 1, 2, 3, 4];

    // 임시 배열
    const array1 = [0, 0, 0];

    const navigator = useNavigate();

    const name = getCookie('name');

    const getActivity = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        const json = await getCustomerActivity(config);
        console.log(json);
        setLikedCafe(json.data.data.allLikeCafe);
        setReviews(json.data.data.allStoreReview);
    };

    useEffect(() => {
        getActivity();
    }, []);



    return (
        <>
            <NavBar />
            <Container>
                <div className="mypage-topsection">
                    <img src={sobokFace} alt="소복 얼굴 이미지" width="60px" />
                    <div className="text-div">
                        <p className="name-text"><span>{name}</span>님 마이페이지</p>
                        <p className="edit-text" onClick={() => navigator('/customer/edit')}>회원정보 수정하기</p>
                    </div>
                </div>
                <br />
                <div className="category-container">
                    <div className="list-top-box">
                        <p className="category-title">내가 찜한<span className="category-title2"> 카페</span></p>
                        <p className="show-all" onClick={() => navigator('/customer/liked')}>전체보기+</p>
                    </div>
                    <hr /><br />
                    <div className="cafe-list">
                        {likedCafe.map((item) => <>
                            <CafeItem
                                id={item.id}
                                key={item.id}
                                image={`http://58.225.75.202:5000/${item.image}`}
                                title={item.storeName}
                                distance='55m'
                                intro={item.description}
                                tag={item.category}
                            />
                        </>)}
                    </div>
                </div>
                <br /><br />
                <div className="category-container">
                    <div className="list-top-box">
                        <p className="category-title">내가 작성한<span className="category-title2"> 리뷰</span></p>
                        <p className="show-all" onClick={() => navigator('/customer/reviews')}>전체보기+</p>
                    </div>
                    <hr /><br />
                    <div className="review-list">
                        {reviews.map((item, index) =>
                            <ReviewItem
                                key={item.id}
                                nickname={name}
                                content={item.content}
                                date={item.timestamp.substr(0, 10)}
                            />
                        )}
                    </div>
                </div>
                <br />
                <p className="logout-text">로그아웃</p>
            </Container>
            <br />
            <Footer />
        </>
    )
}

export default CustomerPage;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .mypage-topsection{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: #F9F9F9;
        padding: 25px 25px;
        gap: 10px;
    }
    .text-div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .name-text > span {
        font-size: 19px;
        font-weight: 700;
        color: #FF9F74;
    }
    .name-text {
        font-size: 19px;
        font-weight: 700;
    }
    .edit-text{
        color: #7F7F7F;
        text-decoration-line: underline;
    }

    > p {
        font-size: 15px;
        color: #7F7F7F;
        text-decoration: underline;
        text-decoration-color: #7F7F7F;
    }

    .category-container {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px 0px;
        display: flex;
        flex-direction: column;
        // margin-top: 30px;
    }
    .category-title{
        font-size: 20px;
        font-weight: 600;
    }
    .category-title2{
        font-size: 20px;
        font-weight: 500;
        color: #7F7F7F;
    }

    .list-top-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .cafe-list{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

    }
    .show-all{
        color: #FF9F74;
    }
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
