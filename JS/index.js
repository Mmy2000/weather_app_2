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
}

function todayData(){
    document.getElementById('city').innerHTML = weatherData.location.name
    document.getElementById('degree').innerHTML = weatherData.current.temp_c +'°C'
    document.getElementById('todayImg').innerHTML = weatherData.current.condition.icon 
    document.getElementById('weatherCondition').innerHTML = weatherData.current.condition.icon 
}




searchInput.addEventListener('input', ()=>{
    startApp(searchInput.value)
})