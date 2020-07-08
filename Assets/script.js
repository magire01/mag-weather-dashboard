console.log("test");

var cityName = "Louisville";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=3e1d9b21516255772cfd52b6d808ff3c";

function displayWeather() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        var nameCity = response.city.name;
        var nameDate = response.list[0].dt_txt;
        var nameTemp = response.list[0].main.temp;
        var nameHumidity = response.list[0].main.humidity;
        var nameWindSpeed = response.list[0].wind.speed;
        var nameUVIndex = response.list[0].clouds.all;

        var cityDiv = $("<h3>");
        cityDiv.text(nameCity + " (" + nameDate + ")");
        $("#search-results").append(cityDiv);
        
        var tempDiv = $("<h6>");
        tempDiv.text("Temperature: " + nameTemp);
        $("#search-results").append(tempDiv);

        var humidityDiv = $("<h6>");
        humidityDiv.text("Humidity: " + nameHumidity);
        $("#search-results").append(humidityDiv);

        var windSpeedDiv = $("<h6>");
        windSpeedDiv.text("Wind Speed: " + nameWindSpeed);
        $("#search-results").append(windSpeedDiv);

        var UVIndexDiv = $("<h6>");
        UVIndexDiv.text("UV Index: " + nameUVIndex);
        $("#search-results").append(UVIndexDiv);

    })
}

displayWeather();