$(document).ready(function() {

    console.log("test");

    var searchBarText = $("#search-bar")
    var searchBtn = $("#search-button");
    var previousSearch = $("#previous-search");
    var searches = [];
    var cityName = [];
    
    function buildQueryURL() {
        var cityName = [];
        cityName.push(searchBarText.val());
        console.log(cityName);
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3e1d9b21516255772cfd52b6d808ff3c`;
        console.log(queryURL);
        return queryURL;
    } 
    

    function saveSearch() {
        // previousSearch.empty();
        // var storedSearchItem = localStorage.getItem("Search");
        localStorage.setItem("Search", searchBarText.val());

    //     var storedSearchBtn = $("<button>");
    //     storedSearchBtn.attr("class", "row");
    //     storedSearchBtn.attr("id", searchBarText);
    //     storedSearchBtn.text(storedSearchItem);
    //     previousSearch.append(storedSearchBtn);
      
    }

    function makeBtn(input) {
        var btn = $("<button>").text(input);

        previousSearch.append(btn);
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
    }
    
    function clear() {
        $("#search-results").empty();
      }

    
    function weatherForecast(town) {
        console.log(town);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=3e1d9b21516255772cfd52b6d808ff3c`,
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
        var queryURL = buildQueryURL();
        console.log(queryURL);
        weatherForecast();
        // makeBtn(nameCity);
        makeBtn(town);
            
    });




    //searchBtn.on("click", makeBtn(searchBarText.val()));

    // searchBtn.on("click", function() {
    //     
    
    // });

    // searchBtn.on("click", function () {
    //     weather();
    // });

      // for(var i = 0; i < searches.length; i++) {
        //     localStorage.setItem("Search" + i, searches[i]);
        //     var storedSearchItem = localStorage.getItem("Search" + i);
        //     var storedSearchBtn = $("<button>");
        //     storedSearchBtn.attr("class", "row");
        //     storedSearchBtn.attr("id", "button" + i)
        //     storedSearchBtn.text(storedSearchItem);
        //     previousSearch.prepend(storedSearchBtn);
        //     $(document).on("click", "#button" + i, function() {
        //         console.log("Button" + i + " test: Complete")
        //     });


        //     //     // var cityName = [];
        //     //     // cityName.push(searches[i]);
        //     //     // console.log("cityName test: " + cityName);
        //     //     })
        //     // }

        // }

});