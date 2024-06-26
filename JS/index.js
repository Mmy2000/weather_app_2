let searchInput = document.getElementById('searchInput')
let weatherData;
// https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=london&days=3

async function getData(q){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=${q}&days=3`)
    let finalData = await response.json()
    return finalData;
}

async function startApp(q){
    weatherData = await getData(q)
    todayData()
    tommorowData()
    afterTommorowData()
}

function todayData(){
    let date = new Date(weatherData.location.localtime)
    document.getElementById('day').innerHTML = date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('date').innerHTML = date.toLocaleDateString('en-US',{day:'2-digit'})
    document.getElementById('Month').innerHTML = date.toLocaleDateString('en-US',{month:'long'})
    document.getElementById('city').innerHTML = weatherData.location.name
    document.getElementById('degree').innerHTML = weatherData.current.temp_c +'°C'
    document.getElementById('todayImg').setAttribute('src','https:'+weatherData.current.condition.icon )
    document.getElementById('weatherCondition').innerHTML = weatherData.current.condition.text 
    document.getElementById('humidity').innerHTML = weatherData.current.humidity +'%'
    document.getElementById('winds').innerHTML = weatherData.current.wind_kph
    document.getElementById('weatherTrend').innerHTML = weatherData.current.wind_dir
}
function tommorowData(){
    let date = new Date(weatherData.forecast.forecastday[1].date)
    document.getElementById('tommorowday').innerHTML = date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('maxTemperature').innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c +'°C'
    document.getElementById('minTemperature').innerHTML = weatherData.forecast.forecastday[1].day.mintemp_c +'°C'
    document.querySelector('.forecast-body .weatherCondition').innerHTML = weatherData.forecast.forecastday[1].day.condition.text
    document.querySelector('.degree .forecast-icon img').setAttribute('src','https:'+weatherData.forecast.forecastday[1].day.condition.icon)
}
function afterTommorowData(){
    let date = new Date(weatherData.forecast.forecastday[2].date)
    document.getElementById('Aftertomorrowday').innerHTML = date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('AftertomorrowmaxTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c +'°C'
    document.getElementById('AftertomorrowminTemperature').innerHTML = weatherData.forecast.forecastday[2].day.mintemp_c +'°C'
    document.querySelector('.after-tomorrow .weatherCondition').innerHTML = weatherData.forecast.forecastday[2].day.condition.text
    document.querySelector('.after-tomorrow .forecast-icon img').setAttribute('src','https:'+weatherData.forecast.forecastday[2].day.condition.icon)
}



searchInput.addEventListener('input', ()=>{
    startApp(searchInput.value)
})