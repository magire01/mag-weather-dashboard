console.log("test");

var cityName = "Denver";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=3e1d9b21516255772cfd52b6d808ff3c";

function displayWeather() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

displayWeather();