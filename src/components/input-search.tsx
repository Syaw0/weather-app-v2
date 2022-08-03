import React, {useState } from "react";
import Ico_search from "../asesst/Ico_search";
import mainStore from "../store/mainStore";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


const InputSearch = () =>{
    const setStatus = mainStore(state=>state.setStatus)
    const [qvalue , setQvalue] = useState("")
    const setWeatherData = mainStore(state=>state.setWeatherData)
    const fetchingError = mainStore(state=>state.fetchingError)
    const setFetchingError = mainStore(state=>state.setFetchingError)


    const handleChange = (e:any) =>{
        setQvalue(e.target.value)
    }

    const validator = () =>{
        setFetchingError({status:false , msg:""})
        return qvalue.trim() === "" ? setFetchingError({status:true , msg:"input must have value"}) : true
    }

    const handleKeyDown = (e:any) => {

        if(e.key === "Enter" && validator()){
            setStatus("pending")
            setWeatherData(qvalue)
            setQvalue("")
        }
    }

    const handleClick = () => {
        if(validator()){
            setStatus('pending')
            setWeatherData(qvalue)
            setQvalue("")
        }
    }

    

    return(
        <>
            <Flex justify={'between'} css={{
                width:"fit-content",
                backgroundColor:"rgba(255,255,255,0.1)",
                padding:"12px 24px 12px 32px ",
                borderRadius:"32px",
                border:"1px solid rgba(255,255,255,0.2)",
                boxShadow:"$1dp",
                position:"relative",
                zIndex:"2",

                "& svg":{
                    stroke:"rgba(255,255,255,0.5)",
                    cursor:"pointer",
                    transition:"stroke 0.7s",
                    "&:hover":{
                        stroke:"rgba(255,255,255,1) ",
                        transition:"stroke 0.7s",
                    }
                },
                "& input":{
                    border:'none',
                    backgroundColor:"transparent",
                    color:"rgba(255,255,255,0.7)",
                    headline5:"600",
                    letterSpacing:"1px",
                    backdropFilter:"blur(5px)",
                    "@bp4":{
                        headline6:"600",
                    },
                    "&:focus":{
                        outline:'none'
                    },
                    "&::placeholder":{
                        headline5:"400",
                        opacity:'1',
                        color:"rgba(255,255,255,0.5)"
                    }
                }
                
            }}>
                <input data-testid='intro-search-input' data-test="intro-search-input" value={qvalue} onKeyDown={(e)=>{handleKeyDown(e)}} onChange={(e)=>{handleChange(e)}} placeholder="search your city..." type={'search'}/>

                <Ico_search data-test='intro-search-icon' width='30' height='30' event={()=>{handleClick()}} />
                
                <Text data-testid='intro-error' data-test='intro-error' css={{
                    flex_c:"",
                    display:`${fetchingError['status']  ? 'flex' : "none"}`,
                    position:"absolute",
                    subhead1:"500",
                    top:"115%",
                    left:"0",
                    width:"fit-content",
                    height:"fit-content",
                    backgroundColor:"rgba(186,26,26,0.5)",
                    color:"rgba(255,218,214,1)",
                    border:"1px solid rgba(255,255,255,0,6)",
                    borderRadius:"16px",
                    padding:"5px 32px",                        
                    }}>
                    {fetchingError['msg']}
                </Text>
            </Flex>
        </>
    )
}

export default InputSearch