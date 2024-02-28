function onGeoOk(position){
    const API_KEY = '44ecf81e60f7f3c3c3b905375b92723a';
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  
}
function onGeoError(){
    alert("can't find you. No weather for you.");
}
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
})