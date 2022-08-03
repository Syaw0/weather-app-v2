import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import MainSectionBottom from "./mainSectionBottom";
import MainSectionTop from "./mainSectionTop";

const MainSection = () => {
  return (
    <Flex
      data-testid="main"
      data-test="main"
      dir={"column"}
      justify='center'
      align='center'
      css={{
        width: "100%",
        height: "100%",
        backgroundColor:'rgba(255,255,255,0.15)',
        border:"2px solid rgba(255,255,255,0.18)",
        backdropFilter:"blur(3px)",
        boxShadow:" 0 4px 30px rgba(0, 0, 0, 0.1)",
        borderRadius:'16px',
        "&>div": {
          height:"100%",
        },

      }}
    >
        <MainSectionTop/>
        <MainSectionBottom/>


    </Flex>
  );
};

export default MainSection;
