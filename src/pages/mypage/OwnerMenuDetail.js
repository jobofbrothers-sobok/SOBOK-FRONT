import React from "react";
import { useParams } from "react-router-dom";
import OwnerEditInfo from "./OwnerEditInfo";
import OwnerEditStoreInfo from "./OwnerEditStoreInfo";
import OwnerAddMenu from "./OwnerAddMenu";
import OwnerAddNews from "./OwnerAddNews";
import OwnerManager from "./OwnerManager";
import OwnerAddStore from "./OwnerAddStore";

const OwnerMenuDetail = () => {

    const { id } = useParams();
    console.log(id)


    return (
        <>
            {id === '0' ? <OwnerEditInfo /> :
                id === '1' ? <OwnerEditStoreInfo /> :
                    id === '2' ? <OwnerAddNews /> :
                        id === '3' ? <OwnerAddMenu /> :
                            id === '4' ? <OwnerAddStore /> :
                                id === '5' ? <OwnerManager /> :
                                    <>no menu</>}
        </>
    )
}

export default OwnerMenuDetail;
