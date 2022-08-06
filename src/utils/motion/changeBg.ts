import mainStore from "../../store/mainStore"
import { scaleDown, scaleUp } from "../../Styles/keyframes"
import { dynamicBg } from "./dynamicBg"

let currentBg = 1
export const startChangingBg = () =>{
setInterval(()=>{
    animated()
},10000  )
}

const animated = () =>{
    let bg1:any = document.getElementById("bg-1")
    let bg2:any = document.getElementById("bg-2")   
    //just use two switch div to change bg with role and 
    //active and de active one after one
    if(bg1.attributes['role'].value === "active"){
        bg2.style.opacity = "1"
        bg2.style.animation = `${scaleUp} 4s ease`
        bg1.style.opacity = '0'
        bg1.style.animation = `${scaleDown} 4s ease`   
        bg1.setAttribute('role' , 'deActive')
        bg2.setAttribute('role' , 'active')
        setTimeout(()=>{
            if(currentBg>=Object.keys(dynamicBg).length){
               currentBg = 0
            }
            bg1.style.backgroundImage = `url(${dynamicBg[currentBg+1]})`
        },4000)
        
    }else{
        bg2.setAttribute('role' , 'deActive')
        bg1.setAttribute('role' , 'active')
        bg2.style.animation = `${scaleDown} 4s ease`
        bg2.style.opacity = "0"
        bg1.style.animation = `${scaleUp} 4s ease`        
        bg1.style.opacity = '1'
        setTimeout(()=>{
            if(currentBg>=Object.keys(dynamicBg).length){
                currentBg = 0
            }
            bg2.style.backgroundImage = `url(${dynamicBg[currentBg+1]})`
        },4000)
    }
    currentBg += 1
}




