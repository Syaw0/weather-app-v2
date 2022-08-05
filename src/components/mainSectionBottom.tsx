import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import MainSectionBottomItems from "./mainSectionBottomItems";
import mainStore from "../store/mainStore";
import { weatherDetail } from "../utils/global/weatherDetail";
import { airQuality } from "../utils/global/airQuality";
import { weatherIcons } from "../utils/global/weatherIcons";


const MainSectionBottom = () =>{

    const weatherData = mainStore(state=>state.weatherData)
    const whichHead = mainStore(state=>state.whichHead)
    const setWhichHead = mainStore(state=>state.setWhichHead)

    const deActiveHead ={
        color:"rgba(255,255,255,0.6)"
    }
    
    const activeHead = {
        color:"rgba(255,255,255,1)",
        backgroundColor:"rgba(255,255,255,0.1)",
        borderRadius:"16px",
    }

    return(

      <Flex dir={'column'} justify='center' align={'center'} css={{
        paddingBottom:"$2",
        width:"60%",
        overflow:"hidden",
        "@bp2-1":{
            width:"100%",
            paddingLeft:"$2",        
        },
        "&>div":{
            width:"100%",
            paddingLeft:"$1"

        }
      }}>
        
        <Flex css={{
            borderBottom:"1px solid rgba(255,255,255,0.2)",
            padding:"$1",
            "&>p":{
                headline4:"700",
                padding:"$1 $2",
                cursor:"pointer",   
                borderRadius:"16px",
                "@bp2-1":{
                    headline5:"700",
                },
                "@bp4":{
                  headline6:"700"  
                }
            }
        }}>
            <Text onClick={()=>{setWhichHead("hourly")}}
            data-test='main-bottom-head1'
            data-testid='main-bottom-head1'
            css={whichHead==="hourly" ? activeHead : deActiveHead} 
            >Hourly</Text>

            <Text onClick={()=>{setWhichHead("daily")}}
             data-test='main-bottom-head2' 
             data-testid='main-bottom-head2'
             css={whichHead==="daily" ? activeHead : deActiveHead} 
             >Daily</Text>

            <Text onClick={()=>{setWhichHead("detail")}} 
            data-test='main-bottom-head3' 
            data-testid='main-bottom-head3'
            css={whichHead==="detail" ? activeHead : deActiveHead} 
            >Detail</Text>

        </Flex>

        <Flex css={{
            overflowY:"hidden",
            overflowX:"auto",
            scrollbarWidth:"1px",
            "& svg":{
                width:"45px",
                height:"45px"
            },
            "& > div ":{
                marginRight:"$3"
            }
        }}>


            {whichHead === "hourly" && 
            weatherData['forecast']['forecastday'][0]['hour'].map((hour:any , index:any)=>{
                let currentHour = new Date().getHours()
                let hourSplited = hour['time'].split(" ")[1].split(":")[0]
                if(Number(hourSplited) >= currentHour){
                    let isDay = hour['is_day']
                    let icon = weatherIcons[hour['condition']['code']][isDay===1?"day":"night"]['icon']
                    return (
                        <MainSectionBottomItems
                        key={`uniq${index}`}
                        testId="hourly" 
                        firstOption={hourSplited} 
                        secondOption={icon} 
                        lastOption={hour['temp_c']}
                        />
                    )
                }
            }) }


            {whichHead === "daily" &&
            weatherData['forecast']['forecastday'].map((day:any , index:any)=>{
                let returnedDay = new Date(day['date'])
                let icon = weatherIcons[day['day']['condition']['code']]['day']['icon']
                return(
                    <MainSectionBottomItems
                    key={`uniq${index}`}
                    testId="daily" 
                    firstOption={returnedDay.toUTCString().split(",")[0]} 
                    secondOption={icon} 
                    lastOption={day['day']['avgtemp_c']}
                    />
                )
            })}

            
            {whichHead === "detail" && 
            weatherDetail.map((detail:any , index:any)=>{
                let firstOption
                let secondOption
                let icon = detail['icon']
                if(detail['name']==='daily_chance_of_rain'){
                    firstOption = "rainy?"
                    secondOption = weatherData['forecast']['forecastday'][0]['day']['daily_chance_of_rain']

                }else if(detail['name']==='sunrise' || detail['name']==='sunset'){
                    firstOption = detail['name']
                    secondOption = weatherData['forecast']['forecastday'][0]['astro'][detail['name']].split(" ")[0]

                }else if(detail['name']==="air_quality"){
                    firstOption = 'quality'
                    secondOption = airQuality[weatherData['current']['air_quality']['us-epa-index']]

                }else{
                    firstOption = detail['name']
                    secondOption = weatherData['current'][detail['name']]
                }

                return(
                    <MainSectionBottomItems
                    key={`uniq${index}`}
                    testId="detail" 
                    firstOption={firstOption} 
                    secondOption={icon} //detail['icon] 
                    lastOption={secondOption}
                    /> 
                )

            })}


        </Flex>

      </Flex>
    )

}


export default MainSectionBottom