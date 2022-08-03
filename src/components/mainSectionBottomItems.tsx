import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

interface MainSectionItemsProps{
    testId:string 
    firstOption:string
    secondOption:any
    lastOption:string
}


const MainSectionBottomItems = 
({testId , firstOption , secondOption , lastOption}:MainSectionItemsProps) => {

    return(
    <Flex data-test={testId} data-testid={testId} role={testId} dir={'column'} justify='center' align={'center'} css={{
        "&>*:not(svg)":{
            padding:"$1"
        },
        "@bp2-1":{
            "&>p":{
                headline5:"700"
            }
        },
        "@bp4":{
            "&>p":{
                headline6:"700"
            }
        }
    }}>

        <Text css={{
            headline4:"700",
            color:"rgba(255,255,255,0.9)",
        }}>{firstOption}</Text>

        {secondOption}

        <Text css={{
            headline4:"700",
            color:"rgba(255,255,255,0.9)",
        }}>{`${lastOption}`}</Text>

    </Flex>   
    )

}
export default MainSectionBottomItems