import React from "react";
import { useParams } from "react-router-dom";
import AdminManager from "./AdminManager";
import styled from "styled-components";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import Footer from "../../../components/common/Footer";
import MemberInfo from "./MemberInfo";
import StampInfo from "./StampInfo";
import DeliveryList from "./DeliveryList";
import AddNotice from "./AddNotice";
import InquiriesList from "./InquiriesList";
import StampMemberInfo from "./StampMemberInfo";

const AdminMenuDetail = () => {

    const { id } = useParams();
    console.log(id)


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                {id === '0' ? <MemberInfo /> :
                    id === '1' ? <StampInfo /> :
                        id === '2' ? <AdminManager /> :
                            id === '3' ? <DeliveryList /> :
                                id === '4' ? <AddNotice /> :
                                    id === '5' ? <InquiriesList /> :
                                        id === '6' ? <StampMemberInfo /> :
                                            <>no menu</>}
            </Container>
            <Footer />
        </>
    )
}

export default AdminMenuDetail;

const Container = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`