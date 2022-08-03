import Ico_clear from "../asesst/Ico_clear";
import Ico_cloud from "../asesst/Ico_cloud";
import Ico_hail from "../asesst/ico_hail";
import Ico_heavyRain from "../asesst/Ico_heavyRain";
import Ico_heavySnow from "../asesst/Ico_heavySnow";
import Ico_heavyThunder from "../asesst/Ico_heavyThunder";
import Ico_lightRainDay from "../asesst/Ico_lightRain_day";
import Ico_lightRain_night from "../asesst/Ico_lightRain_night";
import Ico_lightSnowDay from "../asesst/Ico_lightSnow_day";
import Ico_lightSnow_night from "../asesst/Ico_lightSnow_night";
import Ico_lowCloud_day from "../asesst/Ico_lowCloud_day";
import Ico_lowCloud_night from "../asesst/Ico_lowCloud_night";
import Ico_lwoThunder_day from "../asesst/Ico_lowThunder_day";
import Ico_lwoThunder_night from "../asesst/Ico_lowThunder_night";
import Ico_sunny from "../asesst/Ico_sunny";

export const weatherIcons:{[index:string]:any} = {

    
  '1000': {
    day: { name: 'Sunny', icon: <Ico_sunny/> },
    night: { name: 'Clear', icon: <Ico_clear/> }
  },
  '1003': {
    day: { name: 'Partly Cloudy', icon: <Ico_lowCloud_day/> },
    night: { name: 'Partly Cloudy', icon: <Ico_lowCloud_night/> }
  },
  '1006': {
    day: { name: 'Cloudy', icon: <Ico_cloud/> },
    night: { name: 'Cloudy', icon: <Ico_cloud/> }
  },
  '1009': {
    day: { name: 'Overcast', icon: <Ico_cloud/>},
    night: { name: 'Overcast', icon: <Ico_cloud/> }
  },
  '1030': {
    day: { name: 'Mist', icon: <Ico_cloud/> },
    night: { name: 'Mist', icon: <Ico_cloud/> }
  },
  '1063': {
    day: { name: 'Patchy rain nearby', icon: <Ico_lightRainDay/>},
    night: { name: 'Patchy rain nearby', icon: <Ico_lightRain_night/> }
  },
  '1066': {
    day: { name: 'Patchy snow nearby', icon: <Ico_lightSnowDay/> },
    night: { name: 'Patchy snow nearby', icon: <Ico_lightSnow_night />}
  },
  '1069': {
    day: { name: 'Patchy sleet nearby', icon: <Ico_lightRainDay/> },
    night: { name: 'Patchy sleet nearby', icon: <Ico_lightRain_night/> }
  },
  '1072': {
    day: { name: 'Patchy freezing drizzle nearby', icon: <Ico_hail/> },
    night: { name: 'Patchy freezing drizzle nearby', icon: <Ico_hail/> }
  },
  '1087': {
    day: { name: 'Thundery outbreaks in nearby', icon: <Ico_lwoThunder_day/> },
    night: { name: 'Thundery outbreaks in nearby', icon: <Ico_lwoThunder_night/> }
  },
  '1114': {
    day: { name: 'Blowing snow', icon: <Ico_heavySnow/> },
    night: { name: 'Blowing snow', icon: <Ico_heavySnow/> }
  },
  '1117': {
    day: { name: 'Blizzard', icon: <Ico_heavySnow/> },
    night: { name: 'Blizzard', icon: <Ico_heavySnow/> }
  },
  '1135': { day: { name: 'Fog', icon: <Ico_cloud/> }, night: { name: 'Fog', icon: <Ico_cloud/> } },
  '1147': {
    day: { name: 'Freezing fog', icon: <Ico_cloud/> },
    night: { name: 'Freezing fog', icon: <Ico_cloud/> }
  },
  '1150': {
    day: { name: 'Patchy light drizzle', icon: <Ico_hail/> },
    night: { name: 'Patchy light drizzle', icon: <Ico_hail/>  }
  },
  '1153': {
    day: { name: 'Light drizzle', icon: <Ico_hail/>  },
    night: { name: 'Light drizzle', icon: <Ico_hail/>  }
  },
  '1168': {
    day: { name: 'Freezing drizzle', icon: <Ico_hail/>  },
    night: { name: 'Freezing drizzle', icon: <Ico_hail/>  }
  },
  '1171': {
    day: { name: 'Heavy freezing drizzle', icon: <Ico_hail/>  },
    night: { name: 'Heavy freezing drizzle', icon: <Ico_hail/>  }
  },
  '1180': {
    day: { name: 'Patchy light rain', icon: <Ico_lightRainDay/> },
    night: { name: 'Patchy light rain', icon: <Ico_lightRain_night/> }
  },
  '1183': {
    day: { name: 'Light rain', icon: <Ico_lightRainDay/> },
    night: { name: 'Light rain', icon: <Ico_lightRain_night/> }
  },
  '1186': {
    day: { name: 'Moderate rain at times', icon: <Ico_heavyRain/> },
    night: { name: 'Moderate rain at times', icon: <Ico_heavyRain/> }
  },
  '1189': {
    day: { name: 'Moderate rain', icon: <Ico_heavyRain/> },
    night: { name: 'Moderate rain', icon: <Ico_heavyRain/> }
  },
  '1192': {
    day: { name: 'Heavy rain at times', icon: <Ico_heavyRain/> },
    night: { name: 'Heavy rain at times', icon: <Ico_heavyRain/> }
  },
  '1195': {
    day: { name: 'Heavy rain', icon: <Ico_heavyRain/> },
    night: { name: 'Heavy rain', icon: <Ico_heavyRain/> }
  },
  '1198': {
    day: { name: 'Light freezing rain', icon: <Ico_lightSnowDay/> },
    night: { name: 'Light freezing rain', icon: <Ico_lightSnow_night/> }
  },
  '1201': {
    day: { name: 'Moderate or heavy freezing rain', icon: <Ico_heavySnow/> },
    night: { name: 'Moderate or heavy freezing rain', icon: <Ico_heavySnow/> }
  },
  '1204': {
    day: { name: 'Light sleet', icon: <Ico_lightSnowDay/> },
    night: { name: 'Light sleet', icon: <Ico_lightSnow_night/> }
  },
  '1207': {
    day: { name: 'Moderate or heavy sleet', icon: <Ico_heavySnow/> },
    night: { name: 'Moderate or heavy sleet', icon: <Ico_heavySnow/> }
  },
  '1210': {
    day: { name: 'Patchy light snow', icon: <Ico_lightSnowDay/> },
    night: { name: 'Patchy light snow', icon: <Ico_lightSnow_night/> }
  },
  '1213': {
    day: { name: 'Light snow', icon: <Ico_lightSnowDay/> },
    night: { name: 'Light snow', icon: <Ico_lightSnow_night/> }
  },
  '1216': {
    day: { name: 'Patchy moderate snow', icon: <Ico_heavySnow/> },
    night: { name: 'Patchy moderate snow', icon: <Ico_heavySnow/>}
  },
  '1219': {
    day: { name: 'Moderate snow', icon: <Ico_heavySnow/> },
    night: { name: 'Moderate snow', icon: <Ico_heavySnow/> }
  },
  '1222': {
    day: { name: 'Patchy heavy snow', icon: <Ico_heavySnow/> },
    night: { name: 'Patchy heavy snow', icon: <Ico_heavySnow/> }
  },
  '1225': {
    day: { name: 'Heavy snow', icon: <Ico_heavySnow/> },
    night: { name: 'Heavy snow', icon: <Ico_heavySnow/> }
  },
  '1237': {
    day: { name: 'Ice pellets', icon: <Ico_heavySnow/> },
    night: { name: 'Ice pellets', icon: <Ico_heavySnow/> }
  },
  '1240': {
    day: { name: 'Light rain shower', icon: <Ico_heavyRain/> },
    night: { name: 'Light rain shower', icon: <Ico_heavyRain/> }
  },
  '1243': {
    day: { name: 'Moderate or heavy rain shower', icon: <Ico_heavyRain/> },
    night: { name: 'Moderate or heavy rain shower', icon: <Ico_heavyRain/> }
  },
  '1246': {
    day: { name: 'Torrential rain shower', icon: <Ico_heavyRain/> },
    night: { name: 'Torrential rain shower', icon: <Ico_heavyRain/> }
  },
  '1249': {
    day: { name: 'Light sleet showers', icon: <Ico_heavyRain/> },
    night: { name: 'Light sleet showers', icon: <Ico_heavyRain/> }
  },
  '1252': {
    day: { name: 'Moderate or heavy sleet showers', icon: <Ico_heavyRain/>},
    night: { name: 'Moderate or heavy sleet showers', icon: <Ico_heavyRain/> }
  },
  '1255': {
    day: { name: 'Light snow showers', icon: <Ico_heavySnow/> },
    night: { name: 'Light snow showers', icon: <Ico_heavySnow/> }
  },
  '1258': {
    day: { name: 'Moderate or heavy snow showers', icon: <Ico_heavySnow/> },
    night: { name: 'Moderate or heavy snow showers', icon: <Ico_heavySnow/> }
  },
  '1261': {
    day: { name: 'Light showers of ice pellets', icon: <Ico_heavySnow/> },
    night: { name: 'Light showers of ice pellets', icon: <Ico_heavySnow/> }
  },
  '1264': {
    day: { name: 'Moderate or heavy showers of ice pellets', icon: <Ico_heavySnow/> },
    night: { name: 'Moderate or heavy showers of ice pellets', icon: <Ico_heavySnow/> }
  },
  '1273': {
    day: { name: 'Patchy light rain in area with thunder', icon: <Ico_lwoThunder_day/> },
    night: { name: 'Patchy light rain in area with thunder', icon: <Ico_lwoThunder_night/> }
  },
  '1276': {
    day: { name: 'Moderate or heavy rain in area with thunder', icon: <Ico_heavyThunder/>},
    night: { name: 'Moderate or heavy rain in area with thunder', icon: <Ico_heavyThunder/> }
  },
  '1279': {
    day: { name: 'Patchy light snow in area with thunder', icon: <Ico_heavyThunder/> },
    night: { name: 'Patchy light snow in area with thunder', icon: <Ico_heavyThunder/> }
  },
  '1282': {
    day: { name: 'Moderate or heavy snow in area with thunder', icon: <Ico_heavyThunder/> },
    night: { name: 'Moderate or heavy snow in area with thunder', icon: <Ico_heavyThunder/> }
  }



}


