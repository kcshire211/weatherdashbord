

var searchButton = document.querySelector("#search-button");
var searchBox = document.querySelector(".search");
var display = document.querySelector(".display");

var APIKey = "773dced8affd268869c0e0ef42bbcd87";

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}  --> input below to pull forecast data, am I thinking of this right?

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    var city = searchBox.value 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    var forecastQuearyURL ="https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5" + "&appid=" + APIKey + "&units=imperial";
    
    console.log(queryURL);
    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var cityValue = data.city;
        var tempValue = data.main.temp;
        
        var citySearch = document.querySelector("#current-city");
        var cityName = document.createElement("h2");
            cityName.textContent = data.name
        var currentDate = document.createElement("h2");
            currentDate.textContent = new Date(data.dt*1000).toLocaleDateString();
        var icon = document.createElement("img");
            icon.setAttribute("src","http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        var temp = document.createElement("p");
            temp.textContent = data.main.temp
        var wind = document.createElement("p");
            wind.textContent = data.wind.speed
        var humidity = document.createElement("p");
            humidity.textContent = data.main.humidity

        citySearch.appendChild(cityName);
        citySearch.appendChild(currentDate);
        citySearch.appendChild(icon);
        citySearch.appendChild(temp);
        citySearch.appendChild(wind);
        citySearch.appendChild(humidity);
    //this is where I'm trying to fetch the forecast data
        console.log(forecastQuearyURL);
            fetch(forecastQuearyURL)
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    var forecast = data.city; 
            var tempValue = data.main.temp;

            var tomorrow = document.querySelector("#forecast");
            var tomorrowTemp = document.createElement("p");
                tomorrowTemp.textContent = data.daily.temp

            tomorrow.appendChild(tomorrowTemp);

            })
        
    })

        

    

.catch(err => console.log(err));
})









