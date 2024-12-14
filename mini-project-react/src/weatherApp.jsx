import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]= useState({
        city:"Delhi",
        feelsLike : 16.56,
        temp:17.05,
        tempMin:17.05,
        tempMax:17.05,
        humidity:67,
        weather:"haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style = {{textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}