var APIKey = "f4cc82078e0999601d888c5956e645ef";
var city = document.querySelector("#city-selector");
var submitBtn = document.querySelector('button');
var fiveDayEl = document.querySelector('.five-day')

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



function renderFiveDay(weather) {
    console.log(weather)
    for (var i = 0; i < weather.list.length; i = i + 8) {
        console.log(weather.list[i])
        var card = document.createElement('div')
        var cityTemp = document.createElement('h3')
        card.setAttribute("class", "card")
        cityTemp.textContent = `temp: ${weather.list[i].main.temp}`
        fiveDayEl.appendChild(card)
        card.append(cityTemp)

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
