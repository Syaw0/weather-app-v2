import { keyframes } from "./@stitches.config";

const flip = keyframes({
    "50%":{
        transform:"rotateY(180deg)"
    },
    "100%":{
        transform:"rotateY(180deg) rotateX(180deg)"
    }
})

const fadeToDown = keyframes({
    "0%":{
        transform:"translateY(0)",
        opacity:"1"
    },
    "100%":{
        transform:"translateY(30px)",
        opacity:"0"
    }
})

export {flip ,fadeToDown }