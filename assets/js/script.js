var APIKey = "f4cc82078e0999601d888c5956e645ef";
var city;
var submitBtn = document.querySelector('button');


var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

// TODO: is the following link what I need to put in for the option to search for more than just a city?
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

// submitBtn.addEventListener('click', function (){
//     fetch(queryURL)
// .then(response => Response.json())
// .then(data => console.log(data))

// .catch (err => alert ("wrong city name"))
// })

fetch(queryURL)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
//making a change
