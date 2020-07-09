$(document).ready(function() {

    console.log("test");

    var searchBarText = $("#search-bar")
    var searchBtn = $("#search-button");
    


    function buildQueryURL() {
        var cityName = [];
        cityName.push(searchBarText.val());
        console.log(cityName);
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3e1d9b21516255772cfd52b6d808ff3c`;
        console.log(queryURL);
        return queryURL;
    } 
    
    function updatePage(response) {
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
        // event.preventDefault();
    }
    
    function clear() {
        $("#search-results").empty();
      }

    searchBtn.on("click", function(event) {
        clear();

        event.preventDefault();
        console.log("button test");
        var queryURL = buildQueryURL();
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(updatePage);
            
    });

    // searchBtn.on("click", function() {
    //     
    
    // });

    // searchBtn.on("click", function () {
    //     weather();
    // });

});