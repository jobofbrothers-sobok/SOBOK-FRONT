import React from "react";
import { useParams } from "react-router-dom";
import OwnerEditInfo from "./OwnerEditInfo";
import OwnerEditStoreInfo from "./OwnerEditStoreInfo";
import OwnerAddMenu from "./OwnerAddMenu";
import OwnerAddNews from "./OwnerAddNews";
import OwnerManager from "./OwnerManager";
import OwnerAddStore from "./OwnerAddStore";
import Footer from "../../../components/common/Footer";
import NavBar from "../../../components/common/NavBar";
import BackButton from "../../../components/common/BackButton";
import styled from "styled-components";

const OwnerMenuDetail = () => {

    const { id } = useParams();
    console.log(id)


    return (
        <>
            <NavBar />
            <Container>
                <BackButton />
                {id === '0' ? <OwnerEditInfo /> :
                    id === '1' ? <OwnerEditStoreInfo /> :
                        id === '2' ? <OwnerAddNews /> :
                            id === '3' ? <OwnerAddMenu /> :
                                id === '4' ? <OwnerAddStore /> :
                                    id === '5' ? <OwnerManager /> :
                                        <>no menu</>}
            </Container>
            <Footer />
        </>
    )
}

export default OwnerMenuDetail;

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
