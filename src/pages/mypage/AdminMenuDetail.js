import React from "react";
import { useParams } from "react-router-dom";
import AdminManager from "./AdminManager";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import BackButton from "../../components/common/BackButton";
import Footer from "../../components/common/Footer";
import NewOwnerList from "./NewOwnerList";
import StampInfoList from "./StampInfoList";

const AdminMenuDetail = () => {

    const { id } = useParams();
    console.log(id)


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                {id === '0' ? <NewOwnerList /> :
                    id === '1' ? <StampInfoList /> :
                        id === '2' ? <AdminManager /> :
                            id === '3' ? <AdminManager /> :
                                id === '4' ? <AdminManager /> :
                                    id === '5' ? <AdminManager /> :
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