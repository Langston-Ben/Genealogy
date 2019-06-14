// JavaScript Document

var weatherObject = new XMLHttpRequest();
weatherObject.open('Get',
                   'http://api.wunderground.com/api/d13e6fcaa4e75755/conditions/q/MS/southaven.json', true);

weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;

} //end of onload
