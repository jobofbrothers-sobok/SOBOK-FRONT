import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import SearchBox from "../../../components/common/SearchBox";
import Button from "../../../components/common/Button";
import Footer from "../../../components/common/Footer";
import sobokFace from "../../../asset/images/sobok-face.svg";
import Modal from "../../../components/common/Modal";
import { postStampTour, searchStore } from "../../../lib/api/admin";
import { getCookie } from "../../../lib/cookie";
import dummy from "../../../data/data.json";
import { useNavigate } from "react-router-dom";

const AddStampTour = () => {

    const [keyword, setKeyword] = useState('');
    const [title, setTitle] = useState('');
    const [reward, setReward] = useState('');
    const [file, setFile] = useState('');
    const [searchedCafe, setSearchedCafe] = useState([]);

    // 검색 키워드
    const [searchKey, setSearchKey] = useState('');

    // 선택한 카페 리스트
    const [checkList, setCheckList] = useState([]);

    console.log(checkList);

    const check = (e) => {
        console.log(e.target.checked);
        console.log(e.target.value);
        e.target.checked
            ? setCheckList([...checkList, e.target.value])
            : setCheckList(checkList.filter((choice) => choice !== e.target.value))
    };

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    // 검색된 카페 리스트
    const showSearched = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        }
        await searchStore(searchKey, config)
            .then((res) => { console.log(res); setSearchedCafe(res.data.data); })
            .catch((err) => { console.log(err); });
        openModal();
    };


    // 선택한 카페 삭제
    const deleteSelected = async (item) => {
        setCheckList(checkList.filter((choice) => choice !== item));
    };

    const navigation = useNavigate();

    const postStampTourForm = async () => {
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        };
        await postStampTour(keyword, title, reward, checkList, file, config)
            .then((res) => { console.log(res); alert('스탬프 투어가 성공적으로 등록되었습니다.'); navigation('/admin/menu/1'); })
            .catch((err) => { console.log(err); alert('스탬프 투어 등록에 실패하였습니다.') });
    };

    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                <p className="title">스탬프 투어 추가</p>
                <div className="info-div">
                    <p>투어 키워드<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setKeyword(e.target.value)} />
                    <p>투어 제목<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <p>리워드<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setReward(e.target.value)} />
                    <p>이미지 첨부<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <p>카페 등록<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <SearchBox onClick={showSearched} onChange={(e) => setSearchKey(e.target.value)} />
                    <StampCafeList>
                        {checkList.map((item, index) =>
                            <div className="stamp-cafe-wrapper">
                                <div className="stamp-cafe-item" key={index}>
                                    <img src={sobokFace} alt='소복얼굴' />
                                    <p>{item}</p>
                                </div>
                                <p className='delete' onClick={(e) => { e.stopPropagation(); deleteSelected(item); }}>&times;</p>
                            </div>
                        )}
                    </StampCafeList>
                    <Button text="추가하기" onClick={postStampTourForm} />
                </div>
            </Container>
            <Footer />
            {/* 검색된 카페 리스트 모달 */}
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <p className="title">검색된 카페 리스트</p>
                    <br />
                    <StampCafeList>
                        {searchedCafe?.map((item) =>
                            <>
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    name="category"
                                    value={item.storeName}
                                    onChange={check}
                                    checked={checkList.includes(item.storeName) ? true : false}
                                />
                                <label htmlFor={item.id} className="stamp-cafe-item">
                                    <p>{item?.storeName}</p>
                                </label>
                            </>
                        )}
                    </StampCafeList>
                    <br />
                    <Button text="선택 완료" onClick={closeModal} />
                </ContentBox>
            </Modal >
        </>

    )
}

export default AddStampTour;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        font-size: 18px;
        font-weight: 600;
    }
 
`

const StampCafeList = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0px 10px;
    flex-direction: column;
    .stamp-cafe-wrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #E4E4E4;
    }
    .delete{
        font-size: 30px;
        color: #7E7E7E;
    }
    >input{
        display: none;
    }
    >input[type="checkbox"] + label{background: none; cursor: pointer;}
    >input[type="checkbox"]:checked + label{background: #EEEEEE; cursor: pointer;}

    .stamp-cafe-item{
        display: flex;
        box-sizing: border-box;
        padding: 15px 0px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;  
    }
    .stamp-cafe-item > img {
        width: 60px;
    }
    .stamp-cafe-item > p {
        font-size: 16px;
    }
`
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
    .title{
        margin-top: 40px;
        text-align: center;
        font-weight: 600;
        font-size: 23px;
        line-height: 20px;
        letter-spacing: -0.08em;
        color: #222222;
        margin-bottom: 10px;            
    }
    .info-div{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .info-div > p {
        font-weight: 600;
    }
    .info-div > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
`