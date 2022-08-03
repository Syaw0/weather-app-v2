import { StateCreator } from "zustand";
import getCityData from "../utils/getCityData"


interface WeatherSTORE{
    weatherData:{[index:string]:any} 
    setWeatherData:(name:string)=>void 
    fetchingError:{status:boolean , msg:string}
    setFetchingError:(obj:{status:boolean , msg:string})=>void
}

const weatherStore :StateCreator<WeatherSTORE> = (set)=>({
    weatherData:{},
    fetchingError:{status:false , msg:""} ,
    setFetchingError(obj:{status:boolean , msg:string}) {
      set(state=>{return{...state,fetchingError:obj}})  
    },
    setWeatherData:async(name)=>{
        try{
        let data = await getCityData(name)
        if(data['error'] !== undefined){
            throw new Error("city is`n exist",)
        }else{
            set(state=>{return{...state , weatherData:data , currentComponent:"mainSection" , status:"searching"}})
        }

        }catch(err:any){
            set(state=>{return{...state,fetchingError:{status:true , msg:err.message} , status:"searching"}})
        }
    },
})

export {weatherStore , WeatherSTORE}