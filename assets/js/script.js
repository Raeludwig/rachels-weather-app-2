var APIKey = "f4cc82078e0999601d888c5956e645ef";
var city = document.querySelector("#city-input");
var submitBtn = document.querySelector('button');

function getApi(event) {
    event.preventDefault()
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        });

}

submitBtn.addEventListener('click', getApi);