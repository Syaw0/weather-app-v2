const getCityData = async(cityName:string) => {
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=082140be64aa4d8f983211532220404&q=${cityName}&aqi=yes&days=10`)
        const data = await response.json()
    
        return data

    }catch(err:any){
        if(err.message.search("city") !== -1){
            throw new Error(err)
        }else{
            throw new Error("Network Error")
        }
    }
}

export default getCityData
