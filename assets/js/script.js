var APIKey = "f4cc82078e0999601d888c5956e645ef";
var city = document.querySelector("#city-selector");
var submitBtn = document.querySelector('button');
var fiveDayEl = document.querySelector('.five-day')
var current=document.querySelector(".current")
var unitIsFarenheit = true;

// fetch(queryURL);

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

// TODO: is the following link what I need to put in for the option to search for more than just a city?
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}



// fetch(currentQueryURL) = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey + "&units=imperial";

var currentQueryURL= document.querySelector(".current")




function weatherSearch() {
    //forecast
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + APIKey + "&units=imperial";

   
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(city.value)
            renderFiveDay(data)
            
        })
    saveHistory()

}



//save to local storage
function saveHistory() {
    var cityHistory = JSON.parse(localStorage.getItem('history')) || []
    cityHistory.push(city.value)
    console.log(cityHistory)


    localStorage.setItem('history', JSON.stringify(cityHistory))

}


//render the 5 day forecast
function renderFiveDay(weather) {
    console.log(weather)
    for (var i = 0; i < weather.list.length; i = i + 8) {
        console.log(weather.list[i])
        var card = document.createElement('div')
        //shows the temp
        var cityTemp = document.createElement('h3')
        cityTemp.textContent = `Temp: ${weather.list[i].main.temp} °F`
        //shows the windspeed
        var cityWindSpeed = document.createElement('h3')
        cityWindSpeed.textContent = `Wind speed: ${weather.list[i].wind.speed} mph`
        //shows the humidity
        var cityHumidity = document.createElement('h3')
        cityHumidity.textContent = `Humidity: ${weather.list[i].main.humidity}%`
        //shows condition-still not working
        var cityCondition = document.createElement('h3')
        cityCondition.textContent= `conditions: ${weather.list[i].weather[0].description}`
        // shows the icon
        var icon = document.createElement('h3')
        cityCondition.textContent= `icon: ${weather.list[i].weather[0].icon}`



      

        // $(document).ready(function(){
        //     $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + APIKey + "&units=imperial";
        //     function(result){
        //         alert("Weather: "+ result.list[0].weather[0].description);
        //         });
        //     });

 
        //shows icon

        //shows date
        // var cityDate=document.createElement('h3')
        // cityDate.textContent=`Date: $('#currentDay').text(today.format('dddd, MMMM D')); `
        // const dayjs = require('dayjs')
        // //import dayjs from 'dayjs' // ES 2015
        // dayjs().format()



        card.setAttribute("class", "card")
        fiveDayEl.appendChild(card)
        card.append(cityTemp)
        card.append(cityHumidity)
        card.append(cityWindSpeed)
        card.append(cityCondition)
      card.append(icon)


    }

}







submitBtn.addEventListener('click', weatherSearch);







// fetch(queryURL)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
//     console.log(city)
// })
//making a change
