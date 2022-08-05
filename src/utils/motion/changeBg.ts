import mainStore from "../../store/mainStore"
import { scaleDown, scaleUp } from "../../Styles/keyframes"
import { dynamicBg } from "./dynamicBg"

let n = 1
export const startChangingBg = () =>{
setInterval(()=>{
    animated()
    

},5000  )
}


const animated = () =>{
    let bg1:any =  document.getElementById("bg-1")
    let bg2:any = document.getElementById("bg-2")   
    if(bg1.attributes['role'].value === "active"){
        bg2.style.opacity = "1"
        bg2.style.animation = `${scaleUp} 4s ease`
        bg1.style.opacity = '0'
        bg1.style.animation = `${scaleDown} 4s ease`   
        bg1.setAttribute('role' , 'deActive')
        bg2.setAttribute('role' , 'active')
        setTimeout(()=>{
            if(n>=Object.keys(dynamicBg).length){
                n=0
            }
            bg1.style.backgroundImage = `url(${dynamicBg[n+1]})`
        },4000)
        
    }else{
        bg2.setAttribute('role' , 'deActive')
        bg1.setAttribute('role' , 'active')
        bg2.style.animation = `${scaleDown} 4s ease`
        bg2.style.opacity = "0"
        bg1.style.animation = `${scaleUp} 4s ease`        
        bg1.style.opacity = '1'
        setTimeout(()=>{
            if(n>=Object.keys(dynamicBg).length){
                n=0
            }
            bg2.style.backgroundImage = `url(${dynamicBg[n+1]})`
        },4000)
    }
    n+=1
}




