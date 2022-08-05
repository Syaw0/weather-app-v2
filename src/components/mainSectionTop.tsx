import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import mainStore from "../store/mainStore";
import Ico_minTemp from "../asesst/Ico_minTemp";
import Ico_maxTemp from "../asesst/Ico_maxTemp";
import { weatherIcons } from "../utils/global/weatherIcons";

const MainSectionTop = () =>{

  const weatherData = mainStore(state=>state.weatherData)  
  const setCurrentComponent = mainStore(state=>state.setCurrentComponent)
  let isDay = weatherData['current']['is_day']
    return(
        <Flex justify={'between'} css={{
            padding:"$2 $6",
            width:"100%",
            position:"relative",
            "@bp2-1":{
                flex_c:"",
                width:"100%",
                "& > div ":{
                    width:"100%",
                    jc_ac:""
                }
            }

        }}>



        <Flex dir={"column"} css={{
            paddingTop:"$3",
            "& svg":{
              width:"170px",
              height:"170px"
            },
            "&>*":{marginBottom:"$1"},
            "@bp2-1":{
                "& svg":{
                    width:"100px",
                    height:"100px"
                }
            }
        }}>
          <Text
          data-testid='main-name'
            css={{
              headline2_i: "800",
              color:"rgba(255,255,255,1)",   
            }}
          >
            {`${weatherData['location']['name']} - ${weatherData['location']['country']}`}
          </Text>

          <Text
          data-testid='main-date'
            css={{
              headline6: "500",
              color:"rgba(255,255,255,0.5)",

            }}
          >
            {weatherData['location']['localtime'].split(' ')[0]}
          </Text>

        {weatherIcons[weatherData['current']['condition']['code']][isDay===1?'day':'night']['icon']}

          <Text
          data-testid='main-status'
            css={{
              headline3_i: "700",
              color:"rgba(255,255,255,0.8)",
              "@bp2-1":{
                headline5_i:"900"
              }              
            }}
          >
            {weatherData['current']['condition']['text']}
          </Text>
        </Flex>

        <Flex dir={"column"} >
          <Text
          data-testid='main-temp'
            css={{
              fontSize: "140px",
              fontFamily:"$barlow",
              fontWeight:"900",
              color:"rgba(255,255,255,1)",
              "@bp2-1":{
                headline1:"900"
              }
            }}
          >
            {`${weatherData['current']['temp_c']}°`}
          </Text>

          <Flex
            css={{
              "& p": {
                headline6: "500",
                color:"rgba(255,255,255,0.7)",
                "@bp2-1":{
                    paddingTop:"$1"
                }
              },
            }}
          >
            <Text>
              <Ico_minTemp width='24' height='24' /> {`${weatherData['forecast']['forecastday'][0]['day']['mintemp_c']}°`}
            </Text>
            <Text>
              <Ico_maxTemp  width='24' height='24'/> {`${weatherData['forecast']['forecastday'][0]['day']['maxtemp_c']}°`}
            </Text>
            
          </Flex>
                    <Text data-testid="main-section-top-button" data-test="main-section-top-button" onClick={()=>{setCurrentComponent("introSection")}} cursor={"click"} css={{
                      headline7_i:"700",
                      color:"rgba(255,255,255,0.6)",
                      border:'1px solid rgba(255,255,255,0.6)',
                      textAlign:"center",
                      borderRadius:"8px",
                      marginTop:"$2",
                      width:"fit-content",
                      padding:"2px $2",
                      
                      "&:hover":{
                        backgroundColor:"rgba(255,255,255,0.2)",
                        color:"white"
                      }


          }}>Search Again ?</Text>
        </Flex>
      </Flex>
    )

}


export default MainSectionTop