
// https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=london&days=3

async function getData(){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=london&days=3`)
    let finalData = await response.json()
    return finalData;
}

async function startApp(){
    let weatherData = await getData()
    console.log(weatherData.location.name);
}






let searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', ()=>{
    startApp()
})