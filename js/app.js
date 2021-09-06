const APY_KEY= `f5b57ee03a031f7dd9febbc53d920b7c`;

const searchTemperature = () => {

    const city = document.getElementById('city-name').value;
    
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APY_KEY}&units=metric`;

    fetch(url)
    .then(res =>res.json())
    .then(data => displayTemperature(data))
} 

const setInnertext = (id,text) =>{
    document.getElementById(id).innerText = text;

}

const displayTemperature = temperature =>{
   setInnertext('city',temperature.name);
   setInnertext('temperature',temperature.main.temp);
   setInnertext('condition',temperature.weather[0].main);
   console.log(temperature);

   const url= `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
   const Imgicon = document.getElementById('icon');
   Imgicon.setAttribute('src',url);
}




