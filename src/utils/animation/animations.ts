import { fadeOut } from "../../Styles/keyframes"

const fadeOutInput = () =>{
    let input:any = document.getElementById("intro-input-holder")
    input.style.animation = `${fadeOut} 0.5s both ease`

}


const fadeOutMain = () =>{

    let main:any = document.getElementById("main")
    main.style.animation = `${fadeOut} 0.5s both ease`

}


export {fadeOutInput , fadeOutMain}