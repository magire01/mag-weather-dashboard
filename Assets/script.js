$(document).ready(function() {

    console.log("test");

    var searchBarText = $("#search-bar")
    var searchBtn = $("#search-button");
    var previousSearch = $("#previous-search");
    
    function buildQueryURL(town) {
        // var town = [];
        // cityName.push(searchBarText.val());
        console.log(town);
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=3e1d9b21516255772cfd52b6d808ff3c`;
        console.log(queryURL);
        return queryURL;
    } 
    

    function saveSearch() {
        localStorage.setItem("Search", searchBarText.val());
    }

    function makeBtn(input) {
        var btn = $("<button>").text(input);
        btn.attr("class", "row");    
        previousSearch.prepend(btn);
        console.log(input);
    }

    previousSearch.on("click", "button", function() {
        clear();
        weatherForecast($(this).text());
    })
    
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
        cityDiv.attr("class", "row");
        $("#search-results").append(cityDiv);
        
        var tempDiv = $("<h6>");
        tempDiv.text("Temperature: " + nameTemp);
        tempDiv.attr("class", "row");
        $("#search-results").append(tempDiv);

        var humidityDiv = $("<h6>");
        humidityDiv.text("Humidity: " + nameHumidity);
        humidityDiv.attr("class", "row");
        $("#search-results").append(humidityDiv);

        var windSpeedDiv = $("<h6>");
        windSpeedDiv.text("Wind Speed: " + nameWindSpeed);
        windSpeedDiv.attr("class", "row");
        $("#search-results").append(windSpeedDiv);

        var UVIndexDiv = $("<h6>");
        UVIndexDiv.text("UV Index: " + nameUVIndex);
        UVIndexDiv.attr("class", "row");
        $("#search-results").append(UVIndexDiv);
    }
    
    function clear() {
        $("#search-results").empty();
      }

    
    function weatherForecast(town) {
        var queryURL = buildQueryURL(town);
        console.log(queryURL);
        // console.log(town);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(updatePage);
    }

    searchBtn.on("click", function(event) {
        // searches.push(searchBarText.val());
        saveSearch();
        clear();
        var town = searchBarText.val();
        event.preventDefault();
        console.log("button test");
        
        
        weatherForecast(town);
        // makeBtn(nameCity);
        makeBtn(town);
            
    });

});