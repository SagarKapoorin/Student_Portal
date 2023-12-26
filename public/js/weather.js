// getting location
let temp;
let humidity;
let weather;
let max_min;
let city;
let wind;
let image;
let min;
document.addEventListener('DOMContentLoaded',()=>{
     temp=document.getElementById("celsius");
     weather=document.getElementById("weather");
     humidity=document.getElementById("Humidity");
     max_min=document.getElementById("max_min");
     city=document.getElementById("city");
    wind=document.getElementById("wind");
    image=document.getElementById("image");
    min=document.getElementById("min");
    getLocation();
   
})
//getting permision of live location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition);
    }
}

const showposition=async(position)=> {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(window.key);
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${window.key}&units=metric`);
        let result=await response.json();
        weather.innerHTML=result.weather[0].main;
        humidity.innerHTML=`<i class="ri-water-percent-line"></i> Humidity : ${result.main.humidity}`;
        temp.innerHTML=`${result.main.temp} °C`;
        max_min.innerHTML=`<i class="ri-temp-hot-line"></i> Max : ${result.main.temp_max} °C  `;
        min.innerHTML=`<i class="ri-temp-cold-line"></i>  Min : ${result.main.temp_min} °C`;
        city.innerHTML=`<i class="ri-map-pin-line"></i> Location : ${result.name}`;
        wind.innerHTML=`<i class="ri-windy-line"></i> Wind-Speed : ${result.wind.speed}m/s`;
        if(result.main.humidity>80){
            image.src="src/Rainy.svg";
            weather.innerHTML=`<i class="ri-rainy-line"></i> ${weather.innerHTML}`;
        }else{
            if(result.main.temp>27){
                image.src="src/Sunny.svg";
                weather.innerHTML=`<i class="ri-sun-line"></i> ${weather.innerHTML}`;
            }else{
                if(result.main.temp<5){
                    image.src="src/Snow.svg";
                    weather.innerHTML=`<i class="ri-snowy-line"></i> ${weather.innerHTML}`;
                }else{
                    image.src="src/Cloud.svg";
                    weather.innerHTML=`<i class="ri-cloud-line"></i> ${weather.innerHTML}`;
                }
            }
        }
        // console.log(result);
}   