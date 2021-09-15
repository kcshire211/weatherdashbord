

var searchButton = document.querySelector("#search-button");
var searchBox = document.querySelector(".search");
var display = document.querySelector(".display");

var APIKey = "773dced8affd268869c0e0ef42bbcd87";

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}  --> input below to pull forecast data, am I thinking of this right?

//function so button click returns data for input city
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    var city = searchBox.value 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    
    //var forecastQuearyURL ="https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5" + "&appid=" + APIKey + "&units=imperial";
    
    console.log(queryURL);
    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
     //this is where city name saved to local storage   
    showCity(data)
        
    })

        

    

.catch(err => console.log(err));
})

function showCity(data) {
    //fetches current weather data
    var citySearch = document.querySelector("#current-city");
    citySearch.innerHTML=""
    var currentDiv = document.createElement("div");
        
    var cityName = document.createElement("h2");
        cityName.textContent = data.name
    var currentDate = document.createElement("h2");
        currentDate.textContent = new Date(data.dt*1000).toLocaleDateString();
    var icon = document.createElement("img");
        icon.setAttribute("src","http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
    var temp = document.createElement("p");
        temp.textContent ="Temp: " + data.main.temp +"*F"
    var wind = document.createElement("p");
        wind.textContent ="Wind: " + data.wind.speed +"MPH"
    var humidity = document.createElement("p");
        humidity.textContent ="Humidity: " + data.main.humidity


    citySearch.appendChild(cityName);
    citySearch.appendChild(currentDate);
    citySearch.appendChild(icon);
    citySearch.appendChild(temp);
    citySearch.appendChild(wind);
    citySearch.appendChild(humidity);

    var forecastDisplay = document.querySelector("#forecast");
    var oneCallURL ="https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + APIKey + "&units=imperial";
        fetch(oneCallURL)
        .then(response => response.json())
        .then(data => {
                console.log(data);
            for( var i=1; i<6; i++){
                //var forecast = data.daily[i]
                var forecastDiv = document.createElement("div")
                    forecastDiv.classList.add("card", "col-2"); //bootstrap column
                var forecastTemp = document.createElement("p");
                    forecastTemp.classList.add("card-text")
                    forecastTemp.textContent ="Temp: " +  data.daily[i].temp.day + "*F"   //added text here
                var forecastWind = document.createElement("p");
                    forecastWind.classList.add("card-text")
                    forecastWind.textContent ="Wind: " + data.daily[i].wind_speed + "MPH"
                var forecastHumidity = document.createElement("p");
                    forecastHumidity.classList.add("card-text")
                    forecastHumidity.textContent ="Humidity: " + data.daily[i].humidity

                forecastDiv.appendChild(forecastTemp);
                forecastDiv.appendChild(forecastWind);
                forecastDiv.appendChild(forecastHumidity);
                console.log(forecastDiv);
                forecastDisplay.appendChild(forecastDiv);
            }
        
        })

}
//city buttons here. make all of the city buttons, loop through local storage. These buttons are basically the search history. remove them from 
//the html
//store at local storage, then get from local storage. array from local storage!. 






