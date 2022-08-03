import {StateCreator} from "zustand"


interface IntroSTORE {
    status:string 
    setStatus:(status:string)=>void
}

const introSectionStore :StateCreator<IntroSTORE>  = (set) =>({
    status:"searching" ,
    setStatus(status:string) {
        set(state=>{return{...state , status:status}})        
    },
})


export {IntroSTORE , introSectionStore}