import { StrictMode, useState } from 'react';
import CityInput from './components/CityInput/index'
import CityWeather from './components/CityWeather/index'
const App = ()=>{
    let [city,setcity] = useState("");
    let [cityWeather,setcityweather] = useState("");
    const fetchcityweather = ()=>{
        let promise = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=799ffbdcf83fcaa5d1130c7e1fcfa04c`);
        promise.then(res => {
            let temp = res.json();
            temp.then(res=>{
                if(res.cod == 200){
                    setcityweather(res);
                }
            }).catch(rej=>{
                console.log("error in json",rej);
            })
        }).catch(err => {
            console.log("some error ",err);
        })
    }
    return(
    <StrictMode>
        <CityInput fetchcityweather={fetchcityweather} city={city} setcity={setcity}></CityInput>
        <CityWeather weatherinfo={cityWeather}></CityWeather>
    </StrictMode>)
    
}
export default App;