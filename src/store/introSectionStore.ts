import {StateCreator} from "zustand"
import { fadeIn } from "../Styles/keyframes"
import { fadeOutInput } from "../utils/animation/animations"


interface IntroSTORE {
    status:string 
    setStatus:(status:string)=>void
}

const introSectionStore :StateCreator<IntroSTORE>  = (set) =>({
    status:"searching" ,
    setStatus(status:string) {

        if(status === "pending"){
            fadeOutInput()
        }
        setTimeout(()=>{
            set(state=>{return{...state , status:status}})        
        },1000)
    },
})


export {IntroSTORE , introSectionStore}