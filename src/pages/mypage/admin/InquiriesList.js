import React from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';
import ListItem from '../../../components/common/ListItem';
import MoreButton from '../../../components/common/MoreButton';

const InquiriesList = () => {

    // const [inquiry, setInquiry] = useState([]);

    // // 스토어 상품 정보 가져오기
    // const getInquiryList = async () => {
    //     const json = await getInquiry();
    //     console.log(json);
    //     setInquiry(json.data.data);
    // };

    // useEffect(() => {
    //     getInquiryList();
    // }, []);

    return (
        <>
            <Container>
                <p className="title">문의 사항 리스트</p>
                <br />
                <div className='apply-list'>
                    <br />
                    <hr />
                    {dummy.inquiries.map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            category={item.member + " / " + item.nickname + " / " + item.tel}
                            date={item.date}
                        />
                    ))}
                </div>
                <MoreButton />
            </Container>
        </>
    )
}

export default InquiriesList;

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
    .title{
        text-align: center;
        font-weight: 600;
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