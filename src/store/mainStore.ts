// import create from "zustand/react";
import create from "zustand"
import {introSectionStore , IntroSTORE }from "./introSectionStore"
import { WeatherSTORE , weatherStore } from "./weatherDataStorage"
import {MainSectionSTORE , mainSectionStore} from "./mainSection"
import { fadeOutMain } from "../utils/animations"
interface MainStore{
    currentComponent : string
    setCurrentComponent : (component:string)=>void
}

const mainStore = create<IntroSTORE & WeatherSTORE & MainStore & MainSectionSTORE >()((set,get ,...a)=>({
    ...introSectionStore(set,get ,...a) ,
    ...weatherStore(set,get ,...a),
    ...mainSectionStore(set,get,...a),
    currentComponent:"introSection" ,
    setCurrentComponent(component) {
        if(component === 'introSection'){
            fadeOutMain()
        }
       setTimeout(()=>{
        set(state=>{return{...state , currentComponent:component}}) 
       },1000)
    },
}))



export default mainStore
