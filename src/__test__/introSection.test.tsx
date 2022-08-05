import React from "react";
import { render , screen , fireEvent , waitFor , cleanup} from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "../App";
import getCityData from "../utils/fetching/getCityData"
import mainStore from "../store/mainStore"
import { fakeData } from "../utils/global/fakeData";

jest.mock("../utils/fetching/getCityData.ts")
const mocked:any = jest.mocked(getCityData , true)
const initialStore = mainStore.getState()


afterEach(()=>{
    cleanup()    
    mainStore.setState(initialStore , true)
})

describe('introSection', () => {

    it("when fetching data success show main section" , async()=>{
        mocked.mockImplementation(()=>{
            return Promise.resolve(fakeData)
        })

        render(<App/>)
        let input:any = screen.getByTestId("intro-search-input")
        fireEvent.change(input , {target:{value:"Tehran"}})
        fireEvent.keyDown(input , {key:"Enter"})
        await waitFor(()=>expect(getCityData).toHaveBeenCalled())
        expect(screen.getByTestId("main")).toBeInTheDocument()
    })

    it("when user enter the wrong city input with error showup" , async()=>{
        mocked.mockImplementation(()=>{
            return Promise.resolve({
                error:{}
            })
        })
        render(<App/>)
        let input:any = screen.getByTestId("intro-search-input")
        fireEvent.change(input , {target:{value:"bela bela"}})
        fireEvent.keyDown(input , {key:"Enter"})
        await waitFor(()=>expect(getCityData).toHaveBeenCalled())
        expect(screen.getByTestId("intro-search-input")).toBeInTheDocument()
        expect(screen.getByTestId("intro-error")).toBeInTheDocument()
        expect(screen.getByTestId("intro-error").innerHTML).toContain("city is`n exist")
    
    })

    it("when api or network not work correctly or timeout a request" , async()=>{
        mocked.mockImplementation(()=>{
            return Promise.reject(new Error("network error"))
        })
        render(<App/>)
        let input:any = screen.getByTestId("intro-search-input")
        fireEvent.change(input , {target:{value:"Tehran"}})
        fireEvent.keyDown(input , {key:"Enter"})
        await waitFor(()=>expect(getCityData).toHaveBeenCalled())
        expect(screen.getByTestId("intro-search-input")).toBeInTheDocument()
        expect(screen.getByTestId("intro-error")).toBeInTheDocument()
        expect(screen.getByTestId("intro-error").innerHTML).toContain("network error")
    
    })

})


