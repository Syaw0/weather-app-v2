import Ico_airQuality from "../../asesst/Ico_air_quality"
import Ico_humidity from "../../asesst/Ico_humidity"
import Ico_pressure from "../../asesst/Ico_pressure"
import Ico_rain from "../../asesst/Ico_rain"
import Ico_sunrise from "../../asesst/Ico_sunrise"
import Ico_sunset from "../../asesst/Ico_sunset"
import Ico_wind from "../../asesst/Ico_wind"

let iconW = {width:'45px', heigth:"45px"}

export const weatherDetail = [
    {name:'pressure_mb' , icon:<Ico_pressure width={iconW['width']} height={iconW['heigth']} /> } ,

    {name:'humidity' , icon:<Ico_humidity width={iconW['width']} height={iconW['heigth']}/>},

    {name:'air_quality' , icon:<Ico_airQuality width={iconW['width']} height={iconW['heigth']}/>},

    {name:'wind_kph' , icon:<Ico_wind width={iconW['width']} height={iconW['heigth']}/>},

    {name:'daily_chance_of_rain' , icon:<Ico_rain width={iconW['width']} height={iconW['heigth']}/>},

    {name:'sunrise' , icon:<Ico_sunrise width={iconW['width']} height={iconW['heigth']}/>},
    
    {name:'sunset' , icon:<Ico_sunset width={iconW['width']} height={iconW['heigth']}/>},

]