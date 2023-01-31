var APIKey = "f4cc82078e0999601d888c5956e645ef";
var city = document.querySelector("#city-selector");
var submitBtn = document.querySelector('button');
var fiveDayEl = document.querySelector('.five-day')
var unitIsFarenheit=true;

// fetch(queryURL);

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

// TODO: is the following link what I need to put in for the option to search for more than just a city?
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

function weatherSearch() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + APIKey;

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(city.value)
            renderFiveDay(data)
        })
    saveHistory()

}

function saveHistory() {
    var cityHistory = JSON.parse(localStorage.getItem('history')) || []
    cityHistory.push(city.value)
    console.log(cityHistory)


    localStorage.setItem('history', JSON.stringify(cityHistory))

}

//converts temp
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("temp").innerHTML=((valNum-273.15)*1.8)+32;
  }

function renderFiveDay(weather) {
    console.log(weather)
    for (var i = 0; i < weather.list.length; i = i + 8) {
        console.log(weather.list[i])
        var card = document.createElement('div')
        //shows the temp
        var cityTemp = document.createElement('h3')
         cityTemp.textContent = `temp: ${weather.list[i].main.temp}`
         //shows the windspeed
var cityWindSpeed = document.createElement('h3')
cityWindSpeed.textContent= `wind speed: ${weather.list[i].wind.speed}`
//shows the humidity
var cityHumidity = document.createElement('h3')
cityHumidity.textContent= `humidity: ${weather.list[i].main.humidity}%`
//shows condition
// var cityCondition = document.createElement('h3')
// cityCondition.textContent= `conditions: ${weather.list[i].weather.[0].main}`
//shows icon




card.setAttribute("class", "card")
        fiveDayEl.appendChild(card)
        card.append(cityTemp)
        card.append(cityHumidity)
        card.append(cityWindSpeed)
        // card.append(cityCondition)






        // .then(function (response) {
        //     console.log(response)
        //     //to avoid repeating city information on button click 
        //     $(".cityList").empty()
        //     $("#days").empty()
           
        //     var cityMain1 = $("<div col-12>").append($("<p><h2>" + response.name + ' (' + currentDate + ')' + "</h2><p>"));
        //     var image = $('<img class="imgsize">').attr('src', 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png');        
        //     var degreeMain = $('<p>').text('Temperature : ' + response.main.temp + ' °F ');
        //     var humidityMain = $('<p>').text('Humidity : ' + response.main.humidity + '%');
        //     var windMain = $('<p>').text('Wind Speed : ' + response.wind.speed + 'MPH');       
        //     var uvIndexcoord = '&lat=' + response.coord.lat + '&lon=' + response.coord.lon;
        //     var cityId = response.id;
    
        //     displayUVindex(uvIndexcoord);
        //     displayForecast(cityId);
    
        //     cityMain1.append(image).append(degreeMain).append(humidityMain).append(windMain);
        //     $('#cityList').empty();
        //     $('#cityList').append(cityMain1);
        // });
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
