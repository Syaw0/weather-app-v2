import React from "react";
import { render , screen , fireEvent , waitFor , cleanup} from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "../App";
import getCityData from "../utils/fetching/getCityData"
import mainStore from "../store/mainStore"
import {fakeData} from "../utils/global/fakeData"

jest.mock("../utils/fetching/getCityData.ts")
const mocked:any = jest.mocked(getCityData , true)
const initialStore = mainStore.getState()

beforeEach(()=>{
    cleanup()    
    mainStore.setState(initialStore , true)
    //set fake data and arrange for test
    mainStore.setState(state=>{return{...state , weatherData:fakeData , currentComponent:"mainSection"}})
})



describe('mainSection',()=> {

    it('data set correctly on their positions',async () => {
    render(<App/>)
    expect(screen.getByTestId("main-name").innerHTML).toEqual("Teran - Mexico")
    expect(screen.getByTestId("main-date").innerHTML).toEqual("2022-08-03")
    expect(screen.getByTestId("main-temp").innerHTML).toEqual("14°")
    
     
    });


    it('when click on the search again , search input render again', async() => {
        render(<App/>)
        fireEvent.click(screen.getByTestId("main-section-top-button")) 
        waitFor(()=>expect(screen.getByTestId('intro-search-input')).toBeInTheDocument())
        
    });


})
