Link to deployed: 

https://kcshire211.github.io/weatherdashbord/


### HTML FILE

My HTML file is fairly simple, utilizing two distint sections: 1 for the input box and city buttons and 1 for the displayed results. I have at the moment hard coded in the city buttons into the HTML File. In my HTML I have also linked to the Bootstrap stylesheet and js functionality. 

### CSS

My CSS is also very minimal as I have utilized the Bootstrap library for styling to give me a simple, yet effective display for my search bar, buttons, and separate cards and columns. 

### JavaScript

Admittedly still a work in progress, I wanted to turn in what I have done so far. I have used the Openweather API in two different sections. The first fetch request is for the current weather, in which the request displays current temp, wind speed, and humitidy level when a city name is searched. The second OpenWeather fetch, triggered by the same search button click or enter key pulls data for the next five days, always starting with the day after current day. This displays as a 5 day forecast also showing temp, wind speed, and humidity. Due to time constraints, I was not able to completely finish this assignment by the due date, but believe I have the tools to come back to it. I plan to remove the city buttons from the html file in order to create them dynamically in the js file. When searching for a city, the results will be stored to local storage, then that data will be pulled and create a button for that city. This will serve as a way to quickly fetch data for a given city and well as display a search history. I will also fine-tune the styling to make the display UI more readable. 
