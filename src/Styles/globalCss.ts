import { globalCss } from "./@stitches.config";
import { flip } from "./keyframes";
const globalStyle = globalCss({
    "*":{
        padding:"0",
        margin:"0",
        boxSizing:"border-box",
        transition:"$coAndBg",
    },
    "::selection":{
        backgroundColor:"$onBg100"
    },

    "::-webkit-scrollbar":{
        // width:"10px",
        height:"4px",
        backgroundColor:"rgba(255,255,255,0.1)",
        borderRadius:"16px"
    },


    "::-webkit-scrollbar-thumb":{
        backgroundColor:"rgba(255,255,255,0.7)",
        borderRadius:"16px"
    },

    body:{
        minHeight:"100vh",
        backgroundColor:"$bg"
    },
    "@import":'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oleo+Script+Swash+Caps:wght@400;700&display=swap',
    "#root":{
        height:"100%"
    },
    "#wrapper":{
        width:"100%",
        backgroundColor:"black",
        minHeight:"100vh",
        position:"relative",
        backgroundImage:"url('https://user-images.githubusercontent.com/78824988/182130876-282737f7-0112-4a91-8d35-73925d4f61a1.jpg')",
        backgroundClip:"content-box",
        backgroundOrigin:"content-box",
        backgroundPosition:"center",
        backgroundSize:"cover",

    },
    ".box": { perspective: "120px" },
  ".plane": {
    width: "2em",
    height: "2em",
    backgroundColor: "white",
    boxShadow:"$1dp",
    transform: "rotate(0)",
    animation: `${flip} 1s infinite`
  }
    
})

export default globalStyle