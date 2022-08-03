import { StateCreator } from "zustand";

interface MainSectionSTORE{
    whichHead:string
    setWhichHead:(Head:string)=>void
}


const mainSectionStore:StateCreator<MainSectionSTORE>  = (set)=>({
    whichHead:"hourly",
    setWhichHead:(Head:string)=>{
        set(state=>{return{...state , whichHead:Head}})
    },
})

export {MainSectionSTORE , mainSectionStore}