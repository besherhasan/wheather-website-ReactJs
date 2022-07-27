import './index.css';
import axios from 'axios';
import React ,{useState}from 'react';
function App() {

const [data,setData]=useState({})
const [location,setLocation]=useState('')

const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6b2d4c55c34c0c714217cebe6763ad43`;

const searchLoaction =(event) =>{

if(event.key==='Enter'){  axios.get(url).then((response) =>{
setData(response.data)
console.log(response.data)

  })



}


}


  return (
    
    <div className="app">
     
      <div className="search">
        <input 
        
        value={location}

        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLoaction}
        placeholder=' Enter Location'
        
        type="text" />
      </div>
      <div className="container">
        <div className="top">
<div className="location">
  <p>Location : {data.name}</p>
</div>
<div className="temp">
  {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : <h1>00°C</h1>}


</div>
<div >
  {data.weather ? <p className="description" >Weather stutus : {data.weather[0].main} </p> :<p className="description">Weather stutus :</p>}
  {data.main ? <p className="description">Min Temperature  : {data.main.temp_min} °C </p> :<p className="description">Min Temperature  :</p>}
  {data.main ? <p className="description">Max Temperature Max : {data.main.temp_max} °C </p> :<p className="description">Max Temperature Max :</p> }
</div>
        </div>
        <div className="bottom">
<div className="feels">

  {data.main ? <p className='bold'>{data.main.feels_like} °C</p> : <p className='bold'>00.00°C</p>}

<p>Feels Like</p>


</div>
<div className="humidity">
{data.main ? <p className='bold'>{data.main.humidity} %</p> : <p className='bold'>00%</p>}

<p>Humidity</p>
</div>

<div className="humidity">
{data.visibility ? <p className='bold'>{data.visibility}m</p> : <p className='bold'>0000m</p>}

<p>visibility</p>
</div>

<div className="wind">

  {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : <p className='bold'>000MPH</p> }

  <p>Wind Speed</p>
</div>

        </div>
      </div>
    </div>
  );
}

export default App;
