import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import IntroSection from './components/introSection';
import MainSection from './components/mainSection';
import mainStore from './store/mainStore';
import { setWidth } from './utils/setWindowWidth';
import {startChangingBg} from "./utils/motion/changeBg"
import { dynamicBg } from './utils/motion/dynamicBg';

startChangingBg()
setWidth()

function App() {
  globalStyle()
  const currentComponent = mainStore(state=>state.currentComponent)

  return (
    <Flex id='wrapper' justify={'center'} align='center' css={{
      
      position:"relative",



      "&>div:not(last-child)":{
        width:"100%",
        height:"100%",
        position:"absolute",
        transition:"opacity 4s",
        backgroundClip:"content-box",
        backgroundOrigin:"content-box",
        backgroundPosition:"center",
        backgroundSize:"cover",
      }
    }} >

      <Flex id="bg-1" role='deActive' css={{
      backgroundImage:`url(${dynamicBg['1']})`,
      }}></Flex>

      <Flex id='bg-2' role='active' css={{
        backgroundImage:`url(${dynamicBg['2']})`,  
      }}></Flex>

      <Flex css={{
        width:"100%",
        height:"100%",
        padding:"$1 $4",
        
        
      }}>
      {currentComponent === "introSection"  && <IntroSection/>}
      {currentComponent === "mainSection"  && <MainSection/>}
      </Flex>

    </Flex>
  );
}

export default App;
