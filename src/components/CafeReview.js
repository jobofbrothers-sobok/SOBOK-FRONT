import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import ReviewItem from "./ReviewItem";
import MoreButton from './common/MoreButton';
import Modal from "./common/Modal";
import logo from '../asset/images/sobok_logo_square_jua.png';
import InputBox from "./common/InputBox";
import isLogin from "../lib/router/isLogin";
import { getCafeReviews, postReview } from "../lib/api/main";
import { getCookie } from "../lib/cookie";

const CafeReview = (props) => {


    const id = props.id;

    const [reviews, setReviews] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');

    // 로그인 유무
    const auth = isLogin();

    // 임시 배열
    const array1 = [0, 0, 0];

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    const getReviews = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true,
            }
        }
        const json = await getCafeReviews(id, config);
        console.log(json);
        setReviews(json.data.data);
    };

    useEffect(() => {
        getReviews();
    }, []);

    const postReviewForm = async () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        };
        await postReview(id, title, content, file, config)
            .then((res) => { console.log(res); alert('리뷰가 성공적으로 등록되었습니다.') })
            .catch((err) => { console.log(err); alert('리뷰 등록에 실패하였습니다.') });
    }

    return (
        <>
            <Container>
                <Button text="리뷰 작성하기" onClick={openModal} />
                <br /><br />
                <div className="review-list">
                    {reviews.map((item, index) =>
                        <ReviewItem
                            key={item.id}
                            nickname='고법123'
                            content={item.content}
                            date={item.timestamp.substr(0, 10)}
                        />
                    )}
                </div>
            </Container>
            <MoreButton />
            {/* 리뷰 작성 모달 */}
            {/* 로그인 모달 */}
            {auth ? <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <p className="title">리뷰 작성하기</p>
                    <br />
                    <div className="edit-form">
                        <p>제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} />
                        <p>내용<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <InputBox rows="10" onChange={(e) => setContent(e.target.value)}>
                        </InputBox>
                        <br />
                        <p>메뉴 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <Button text="작성완료" onClick={postReviewForm} />
                </ContentBox>
            </Modal> : <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <img src={logo} alt="소복로고이미지" width="50%" />
                    <p className="title">로그인이 필요한 서비스입니다.</p><br /><br /><br />
                    <Button text="로그인" />
                </ContentBox>
            </Modal>}
        </>
    )
}

export default CafeReview;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .review-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        font-size: 18px;
        font-weight: 600;
    }
    .edit-form{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .edit-form > p {
        font-weight: 600;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`
