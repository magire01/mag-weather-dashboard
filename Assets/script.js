$(document).ready(function() {

    console.log("test");

    var searchBarText = $("#search-bar")
    var searchBtn = $("#search-button");
    var previousSearch = $("#previous-search");
    
    function buildQueryURL(town) {
        // var town = [];
        // cityName.push(searchBarText.val());
        console.log(town);
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&units=imperial&appid=3e1d9b21516255772cfd52b6d808ff3c`;
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

        // 5 day forecast
            //title
        var titleForecast = $("<h3>");
        titleForecast.attr("class", "row");
        titleForecast.text("5-Day Forecast");
        $("#search-results-future").append(titleForecast);

            //body
        var cardDiv1 = $("<card>");
        cardDiv1.attr("class", "forecast-card");
        cardDiv1.attr("id", "day-forecast-future");
        $("#search-results-future").append(cardDiv1);
    
            //First day
        var date1Div = $("<h6>");
        date1Div.text(response.list[8].dt_txt);
        $("#day-forecast-future").append(date1Div);

        var temp1Div = $("<ul>");
        temp1Div.attr("class", "row");
        temp1Div.text("Temp: " + response.list[8].main.temp);
        $("#day-forecast-future").append(temp1Div);

        var humidity1Div = $("<ul>");
        humidity1Div.attr("class", "row");
        humidity1Div.text("Humidity: " + response.list[8].main.humidity);
        $("#day-forecast-future").append(humidity1Div);

        //body 2
        var cardDiv2 = $("<card>");
        cardDiv2.attr("class", "forecast-card");
        cardDiv2.attr("id", "day2-forecast-future");
        $("#search-results-future").append(cardDiv2);
    
            //Second day
        var date2Div = $("<h6>");
        date2Div.text(response.list[16].dt_txt);
        $("#day2-forecast-future").append(date2Div);

        var temp2Div = $("<ul>");
        temp2Div.attr("class", "row");
        temp2Div.text("Temp: " + response.list[16].main.temp);
        $("#day2-forecast-future").append(temp2Div);

        var humidity2Div = $("<ul>");
        humidity2Div.attr("class", "row");
        humidity2Div.text("Humidity: " + response.list[16].main.humidity);
        $("#day2-forecast-future").append(humidity2Div);

        //body 3
        var cardDiv3 = $("<card>");
        cardDiv3.attr("class", "forecast-card");
        cardDiv3.attr("id", "day3-forecast-future");
        $("#search-results-future").append(cardDiv3);
    
            //Third day
        var date3Div = $("<h6>");
        date3Div.text(response.list[24].dt_txt);
        $("#day3-forecast-future").append(date3Div);

        var temp3Div = $("<ul>");
        temp3Div.attr("class", "row");
        temp3Div.text("Temp: " + response.list[24].main.temp);
        $("#day3-forecast-future").append(temp3Div);

        var humidity3Div = $("<ul>");
        humidity3Div.attr("class", "row");
        humidity3Div.text("Humidity: " + response.list[24].main.humidity);
        $("#day3-forecast-future").append(humidity3Div);

        //body 4
        var cardDiv4 = $("<card>");
        cardDiv4.attr("class", "forecast-card");
        cardDiv4.attr("id", "day4-forecast-future");
        $("#search-results-future").append(cardDiv4);
    
            //Third day
        var date4Div = $("<h6>");
        date4Div.text(response.list[32].dt_txt);
        $("#day4-forecast-future").append(date4Div);

        var temp4Div = $("<ul>");
        temp4Div.attr("class", "row");
        temp4Div.text("Temp: " + response.list[32].main.temp);
        $("#day4-forecast-future").append(temp4Div);

        var humidity4Div = $("<ul>");
        humidity4Div.attr("class", "row");
        humidity4Div.text("Humidity: " + response.list[32].main.humidity);
        $("#day4-forecast-future").append(humidity4Div);

        //body 5
        var cardDiv5 = $("<card>");
        cardDiv5.attr("class", "forecast-card");
        cardDiv5.attr("id", "day5-forecast-future");
        $("#search-results-future").append(cardDiv5);
    
            //Fifth day
        var date5Div = $("<h6>");
        date5Div.text(response.list[39].dt_txt);
        $("#day5-forecast-future").append(date5Div);

        var temp5Div = $("<ul>");
        temp5Div.attr("class", "row");
        temp5Div.text("Temp: " + response.list[39].main.temp);
        $("#day5-forecast-future").append(temp5Div);

        var humidity5Div = $("<ul>");
        humidity5Div.attr("class", "row");
        humidity5Div.text("Humidity: " + response.list[39].main.humidity);
        $("#day5-forecast-future").append(humidity5Div);

        
    }
    
    function clear() {
        $("#search-results").empty();
        $("#search-results-future").empty();
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