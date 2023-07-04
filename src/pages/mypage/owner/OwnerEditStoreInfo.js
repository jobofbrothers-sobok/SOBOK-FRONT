import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
// 카테고리 이미지
import all from "../../../asset/images/category/all.svg";
import all2 from "../../../asset/images/category/all2.svg";
import concent from "../../../asset/images/category/concent.svg";
import concent2 from "../../../asset/images/category/concent2.svg";
import table from "../../../asset/images/category/table.svg";
import table2 from "../../../asset/images/category/table2.svg";
import park from "../../../asset/images/category/park.svg";
import park2 from "../../../asset/images/category/park2.svg";
import dog from "../../../asset/images/category/dog.svg";
import dog2 from "../../../asset/images/category/dog2.svg";
import window from "../../../asset/images/category/window.svg";
import window2 from "../../../asset/images/category/window2.svg";
import ciagrette from "../../../asset/images/category/cigarette.svg";
import ciagrette2 from "../../../asset/images/category/cigarette2.svg";
import nokids from "../../../asset/images/category/nokids.svg";
import nokids2 from "../../../asset/images/category/nokids2.svg";
import sofa from "../../../asset/images/category/sofa.svg";
import sofa2 from "../../../asset/images/category/sofa2.svg";
import rooftop from "../../../asset/images/category/rooftop.svg";
import rooftop2 from "../../../asset/images/category/rooftop2.svg";
import { ownerAddStore } from "../../../lib/api/mypage";
import { getCookie, setCookie } from "../../../lib/cookie";


const OwnerEditStoreInfo = () => {

    const [store, setStore] = useState('');
    const [summary, setSummary] = useState('');
    const [time, setTime] = useState('');
    const [dayOff, setDayoff] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');


    const [checkList, setCheckList] = useState([]);

    const checkAll = (e) => {
        console.log(e.target.checked);
        e.target.checked
            ? setCheckList(['concent', 'table', 'park', 'dog', 'rooftop', 'sofa', 'nokids', 'window', 'ciagrette'])
            : setCheckList([]);
    }

    const check = (e) => {
        console.log(e.target.checked);
        e.target.checked
            ? setCheckList([...checkList, e.target.value])
            : setCheckList(checkList.filter((choice) => choice !== e.target.value))
    }


    const onAddStore = () => {
        let config = {
            headers: {
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${getCookie('token')}`,
                'withCredentials': true,
            }
        }
        let checkString = checkList.join();
        console.log(checkString);
        ownerAddStore(store, summary, time, dayOff, link, image, checkString, config)
            .then((res) => { console.log(res); alert('매장이 성공적으로 등록되었습니다.'); })
            .catch((err) => { console.log(err); alert('매장 등록에 실패하였습니다.') })
    }

    return (
        <>
            <Container>
                <div className="edit-form">
                    <p className="title">매장 정보 등록/수정</p>
                    <br /><br />
                    <p>매장명<span style={{ color: "#EB5757", fontWeight: "900" }}></span></p>
                    <input type="text" onChange={(e) => setStore(e.target.value)} />
                    <p>매장설명<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setSummary(e.target.value)} />
                    <p>영업시간<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setTime(e.target.value)} />
                    <p>휴무일<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setDayoff(e.target.value)} />
                    <p>홈페이지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="text" onChange={(e) => setLink(e.target.value)} />
                    <p>매장 썸네일 이미지<span style={{ color: "#EB5757", fontWeight: "900" }}>*</span></p>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <div className="category-container">
                        <p className="category-title">카테고리 <span className="category-title2">설정</span></p>
                        <hr />
                        <div className="category-list">
                            <input
                                type="checkbox"
                                id="icon1"
                                name="category"
                                value="all"
                                onChange={checkAll}
                                checked={checkList.length === 9 ? true : false}
                            />
                            <label htmlFor="icon1">
                                <img src={all} alt="all" className="icon" />
                                <img src={all2} alt="all2" className="icon_active" />
                                <p>전체</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon2"
                                name="category"
                                value="concent"
                                onChange={check}
                                checked={checkList.includes('concent') ? true : false}
                            />
                            <label htmlFor="icon2">
                                <img src={concent} alt="concent" className="icon" />
                                <img src={concent2} alt="concent2" className="icon_active" />
                                <p>콘센트</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon3"
                                name="category"
                                value="table"
                                onChange={check}
                                checked={checkList.includes('table') ? true : false}
                            />
                            <label htmlFor="icon3">
                                <img src={table} alt="table" className="icon" />
                                <img src={table2} alt="table2" className="icon_active" />
                                <p>큰 테이블</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon4"
                                name="category"
                                value="park"
                                onChange={check}
                                checked={checkList.includes('park') ? true : false}
                            />
                            <label htmlFor="icon4">
                                <img src={park} alt="park" className="icon" />
                                <img src={park2} alt="park2" className="icon_active" />
                                <p>주차장</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon5"
                                name="category"
                                value="dog"
                                onChange={check}
                                checked={checkList.includes('dog') ? true : false}
                            />
                            <label htmlFor="icon5">
                                <img src={dog} alt="dog" className="icon" />
                                <img src={dog2} alt="dog2" className="icon_active" />
                                <p>애견동반</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon6"
                                name="category"
                                value="window"
                                onChange={check}
                                checked={checkList.includes('window') ? true : false}
                            />
                            <label htmlFor="icon6">
                                <img src={window} alt="window" className="icon" />
                                <img src={window2} alt="window2" className="icon_active" />
                                <p>통유리</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon7"
                                name="category"
                                value="ciagrette"
                                onChange={check}
                                checked={checkList.includes('ciagrette') ? true : false}
                            />
                            <label htmlFor="icon7">
                                <img src={ciagrette} alt="ciagrette" className="icon" />
                                <img src={ciagrette2} alt="ciagrette2" className="icon_active" />
                                <p>흡연실</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon8"
                                name="category"
                                value="nokids"
                                onChange={check}
                                checked={checkList.includes('nokids') ? true : false}
                            />
                            <label htmlFor="icon8">
                                <img src={nokids} alt="nokids" className="icon" />
                                <img src={nokids2} alt="nokids2" className="icon_active" />
                                <p>노키즈</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon9"
                                name="category"
                                value="sofa"
                                onChange={check}
                                checked={checkList.includes('sofa') ? true : false}
                            />
                            <label htmlFor="icon9">
                                <img src={sofa} alt="sofa" className="icon" />
                                <img src={sofa2} alt="sofa2" className="icon_active" />
                                <p>쇼파</p>
                            </label>
                            <input
                                type="checkbox"
                                id="icon10"
                                name="category"
                                value="rooftop"
                                onChange={check}
                                checked={checkList.includes('rooftop') ? true : false}
                            />
                            <label htmlFor="icon10">
                                <img src={rooftop} alt="rooftop" className="icon" />
                                <img src={rooftop2} alt="rooftop2" className="icon_active" />
                                <p>루프탑</p>
                            </label>
                        </div>
                    </div>
                    <br />
                    <Button text="신청하기" color="#FF9F74" onClick={onAddStore} />
                </div>
            </Container>
        </>
    )
}

export default OwnerEditStoreInfo;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
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
    .edit-form > p {
        font-weight: 600;
    }
    .edit-form > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
    }
    .store-loc-box {        
        width: 100%;
        display: flex;
        gap: 5px;
    }
    .store-loc-box > input {
        padding: 5px 10px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        margin-bottom: 13px;
        flex: auto;
    }
    .store-search {
        width: 25%;
        height: 50px;
        background: #7F7F7F;
        border: none;
        padding: 0px 10px;
        color: #FFFFFF;
        font-size: 13px;
    }
    .category-container {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }
    .category-title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    .category-title2{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #7F7F7F;
    }
    .category-list{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        flex-wrap: wrap;
        margin: 20px 0px;
    }

    // 카테고리 선택 여부에 따라 이미지 변화
    .category-list > input {
        display: none;
    }
    .category-list > input[type="checkbox"] + label .icon_active{display: none}
    .category-list > input[type="checkbox"] + label .icon{display: block; cursor: pointer}
    .category-list > input[type="checkbox"]:checked + label .icon_active{display: block; cursor: pointer;}
    .category-list > input[type="checkbox"]:checked + label .icon{display: none}

    .category-list > label > img {
        width: 50px;
    }
    .category-list > label > p {
        margin-top: 8px;
        font-weight: 600;   
    }
`