import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import IntroSection from './components/introSection';
import MainSection from './components/mainSection';
import mainStore from './store/mainStore';
import { setWidth } from './utils/setWindowWidth';
setWidth()

function App() {
  globalStyle()

  const currentComponent = mainStore(state=>state.currentComponent)

  return (
    <Flex id='wrapper' justify={'center'} align='center' css={{}} >

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
