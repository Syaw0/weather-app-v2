import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Loader from "./loader";
import InputSearch from "./input-search";
import mainStore from "../store/mainStore";

const IntroSection = () =>{

    const status = mainStore(state=>state.status)

    return(
        <Flex justify={'center'} align='center' css={{
            width:"100%",
        }}>
            {status === "searching" && <InputSearch/>}
            {status === "pending" && <Loader/>}
        </Flex>
    )
}

export default IntroSection